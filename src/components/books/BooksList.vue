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

  export default {
    data: () => ({
      books: []
    }),
    async created() {

      let response = await fetch(`${data.apiBaseURL}/books`, {
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
