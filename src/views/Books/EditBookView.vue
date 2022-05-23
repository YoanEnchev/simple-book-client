<script>
  import data from '../../data/config.json';
  import BookForm from '../../components/books/BookForm.vue';

  export default {
    data: () => ({
      book: {
        id: 0,
        title: '',
        description: '',
        cover: ''
      }
    }),
    async created() {

      let response = await fetch(`${data.apiBaseURL}/books/${this.$route.params.bookID}`, {
          headers: data.jsonHeaderParam
      });

      let json = await response.json();
      this.book = json.data;
    },
    methods: {
      async onEdit(formData) {

        // TODO: add author_id to formData

        let response = await fetch(`${data.apiBaseURL}/books/${this.book.id}`, {
          headers: data.jsonHeaderParam,
          method: 'PATCH', //'POST',
        });
      }
    }
  }
</script>

<template>
  <div>
    <BookForm :title="book.title" 
      :description="book.description" 
      :isEdit=true 
      @book-form-submit="onEdit" />
  </div>
</template>