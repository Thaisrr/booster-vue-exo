<script setup>

// import {Field, Form} from "vee-validate";

const emit = defineEmits(['add'])

const newMovie = {
  title: '',
  image: ''
}
 /*
function handleSubmit(value) {
  emit('add', value)
}
  */

function handleSubmit() {
  emit('add', newMovie);
}
</script>

<template>
 <!-- <Form @submit="handleSubmit">
    <p>
      <label>Titre</label>
      <Field name="title" />
    </p>
    <p>
      <label>Image</label>
      <Field name="image" />
    </p>
    <button>Save</button>
  </Form>
  -->

  <form @submit.prevent="handleSubmit()">
    <p>
      <label>Titre</label>
      <input v-model="newMovie.title" />
    </p>
    <p>
      <label>Image</label>
      <input v-model="newMovie.image" />
    </p>
    <button>Save</button>
  </form>
</template>

<style scoped>

</style>