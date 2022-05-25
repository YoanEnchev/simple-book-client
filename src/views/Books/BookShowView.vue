<script>
  import data from '../../data/config.json';
  import authState from '../../data/authState.js';

  export default {
    data: () => ({
      book: {
        title: '',
        description: '',
        cover: ''
      }
    }),
    async mounted() {

      let response = await fetch(`${data.apiBaseURL}/books/${this.$route.params.bookID}?api_token=${authState.apiToken}`, {
          headers: data.jsonHeaderParam
      });

      let json = await response.json();
      
      this.book = json.data;
    }
  }
</script>

<template>
  <div>
    <p class="mb-3">Title: {{book.title}}</p>

    <p class="mb-3">Description: {{book.description}}</p>

    <p>Cover: </p>
    <img :src="book.cover" />
  </div>
</template>

<style scoped>
  img {
    max-width: 120px;
  }
</style>
