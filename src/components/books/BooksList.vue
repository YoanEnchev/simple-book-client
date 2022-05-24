<template>
  <div class="books-list">

    <div v-for="book in books" :key="book.id">
      <BookItem :book="book" />
    </div>
  </div>
</template>


<script>
  import BookItem from './BookItem.vue';
  import data from '../../data/config.json';
  import authState from '../../data/authState.js';

  export default {
    data: () => ({
      books: []
    }),
    async created() {

      if (!authState.apiToken) return;

      let response = await fetch(`${data.apiBaseURL}/books?api_token=${authState.apiToken}`, {
          headers: data.jsonHeaderParam
      });

      let json = await response.json();
      this.books = json.data;
    },
  }
</script>

<style scoped>
  div {
      
  }
</style>
