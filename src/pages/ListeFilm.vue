<script setup>
import {computed, ref} from "vue";

const movies = ref([
  {
    title: 'Pulp Fiction',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Pulp_Fiction_Logo.svg/1200px-Pulp_Fiction_Logo.svg.png',
    isWatched: false
  },
  {
    title: 'The balad of the snake and songbird',
    image: "https://www.actusf.com/files/new_images/actualit%C3%A9s/hunger.jpeg",
    isWatched: true
  }
]);

const filter = ref(''); // seen || not seen

function changeFilter(newValue) {
  filter.value = newValue;
}

function toggleWatched(movie) {
  movie.isWatched = !movie.isWatched;
}

const filteredMovies = computed(() => {
  switch (filter.value) {
    case 'not-seen':
        return movies.value.filter(f => !f.isWatched);
    case 'seen':
      return movies.value.filter(f => f.isWatched)
    default:
        return movies.value;
  }
})

</script>

<template>
<h1>Mes Films</h1>

  <div class="grid">
    <div>
      <button @click="changeFilter('')">Tous</button>
      <button @click="changeFilter('seen')">Vus</button>
      <button @click="changeFilter('not-seen')">Pas Vus</button>
    </div>
    <article v-for="movie in filteredMovies" v-bind:key="movie.title">
      <img v-bind:src="movie.image" v-bind:alt="movie.title">
      <h3>{{movie.title}}</h3>
      <p v-show="movie.isWatched">Vu !</p>
      <button @click="toggleWatched(movie)">
        {{movie.isWatched ? 'Marquer comme pas vu' : 'Marquer comme vu'}}
      </button>
    </article>
  </div>

</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
}

article {
  overflow: hidden;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(128, 128, 128, 0.55);
}



article img {
  width: 100%;
  border-radius: 5px;
}
</style>