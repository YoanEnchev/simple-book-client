<script>

  export default {
      props: {
          initialTitle: String,
          initialDescription: String,
          isEdit: Boolean // true - edit book, false - create book.
      },
      // Arrow functions do not bind this. So the data function must be defined in a old-fashioned way.
      data: function() {
        return {
          title: this.initialTitle,
          description: this.initialDescription
        }
      },
      methods: {
        onFormSubmit(e) {
            e.preventDefault();

            this.$emit('book-form-submit', {
                title: this.title,
                description: this.description
            });
        }
      }
  }
</script>

<template>
  <div>
    <form method="POST" @submit="onFormSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input class="form-control" id="title" v-model="title">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input class="form-control" id="description" v-model="description">
        </div>
        <button type="submit" class="btn btn-primary">
            {{ isEdit ? 'Edit' : 'Create' }}
        </button>
    </form>
  </div>
</template>