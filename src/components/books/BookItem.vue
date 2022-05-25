<template>
  <div class="book mx-auto mb-3">
      <h3 class="mb-3">{{ book.title }}</h3>
      <div class="mx-auto buttons-container">

        <button class="btn btn-dark me-2" @click="onViewClick">View</button>

        <!-- Show buttons only if the authenticated user is the author of the book. -->
        <div class="d-inline-block" v-if="userID == book.author.id">
          <button class="btn btn-primary me-2" @click="onEditClick">Edit</button>
          <button class="btn btn-dark me-2" @click="onUpdateCoverClick">Update Cover</button>
          <button class="btn btn-danger" @click="onDeleteClick">Delete</button>
        </div>
      </div>
  </div>
</template>


<script>
  import authState from '../../data/authState.js';
  import data from '../../data/config.json';
  
  export default {
    props: {
      book: Object,
    },
    methods: {
      onViewClick() {
        this.$router.push(`/books/${this.book.id}/show`);
      },
      onEditClick() {
        this.$router.push(`/books/${this.book.id}/edit`);
      },
      onUpdateCoverClick() {
        this.$router.push(`/books/${this.book.id}/edit-cover`);
      },
      async onDeleteClick() {

        let response = await fetch(`${data.apiBaseURL}/books/${this.book.id}`, {
          headers: data.jsonHeaderParam,
          method: 'DELETE',
          body: JSON.stringify({
            api_token: authState.apiToken
          })
        });

        if(response.ok) {
          alert('Book has been deleted succeessfully.');
          this.$router.push('/');
          return;
        }

        alert('Something went wrong. Please try again later');
      }
    },
    computed: {
      userID: () => authState.userID
    }
  }
</script>

<style scoped>
    div.book {
        width: fit-content;
    }

    .buttons-container {
        width: fit-content;
    }
</style>
