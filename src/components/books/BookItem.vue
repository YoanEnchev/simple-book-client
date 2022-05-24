<template>
  <div class="book mx-auto mb-3">
      <h3 class="mb-3">{{ book.title }}</h3>
      <div class="mx-auto buttons-container">

        <button class="btn btn-dark me-2" @click="onViewClick">View</button>

        <!-- Show buttons only if the authenticated user is the author of the book. -->
        <div class="d-inline-block" v-if="userID == book.author.id">
          <button class="btn btn-primary me-2" @click="onEditClick">Edit</button>
          <button class="btn btn-danger" @click="onDeleteClick">Delete</button>
        </div>
      </div>
  </div>
</template>


<script>
  import authState from '../../data/authState.js';
  
  export default {
    props: {
      book: Object,
    },
    methods: {
      onViewClick() {
        console.log('on view');
      },
      onEditClick() {
        this.$router.push(`/books/${this.book.id}/edit`);
      },
      onDeleteClick() {
        console.log('DELETE BOOK');
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
