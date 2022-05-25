<template>
  <div>
    <button class="btn-primary me-2" @click="goToPrevPage" v-if="page > 1">Prev Page</button>
    <button class="btn-primary" @click="goToNextPage" v-if="page < lastPage">Next Page</button>
  </div>
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
      books: [],
      page: 1,
      lastPage: 1, 
    }),
    async created() {

      if (!authState.apiToken) return;

      this.updateBooks();
    },
    methods: {
      goToPrevPage: function () {
        this.page -= 1;
        this.updateBooks();
      },
      goToNextPage: function () {
        this.page += 1;
        this.updateBooks();
      },
      updateBooks: async function() {
        let response = await fetch(`${data.apiBaseURL}/books?api_token=${authState.apiToken}&page=${this.page}`, {
            headers: data.jsonHeaderParam
        });

        let json = await response.json();

        this.books = json.data;
        this.lastPage = json.meta.last_page;
      }
    }
  }
</script>

<style scoped>
  div {
      
  }
</style>
