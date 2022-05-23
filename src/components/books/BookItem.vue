<template>
  <div class="book mx-auto mb-3">
      <h3 class="mb-3">{{ book.title }}</h3>
      <div class="mx-auto buttons-container">
        <button class="btn btn-primary me-2" @click="onEditClick">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
  </div>
</template>


<script>
  export default {
    props: {
      book: Object
    },
    methods: {
      onEditClick() {
        this.$router.push(`/books/${this.book.id}/edit`);
      }
    },
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
