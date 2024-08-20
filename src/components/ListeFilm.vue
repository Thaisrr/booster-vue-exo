<script setup>
import {ref} from "vue";

const movies = ref([
  {
    title: 'Pulp Fiction',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Pulp_Fiction_Logo.svg/1200px-Pulp_Fiction_Logo.svg.png',
    isWatched: true
  },
]);

function toggleWatched(movie) {
  movie.isWatched = !movie.isWatched;
}

</script>

<template>
<h1>Mes Films</h1>

  <div class="grid">
    <article v-for="movie in movies" v-bind:key="movie.title">
      <img v-bind:src="movie.image" v-bind:alt="movie.title">
      <h2>{{movie.title}}</h2>
      <p v-show="movie.isWatched">Vu !</p>
      <button @click="toggleWatched(movie)">
        {{movie.isWatched ? 'Marquer comme pas vu' : 'Marquer comme vu'}}
      </button>
    </article>
  </div>

</template>

<style scoped>

</style>