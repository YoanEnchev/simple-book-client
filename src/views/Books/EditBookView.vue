<script>
  import data from '../../data/config.json';
  import authState from '../../data/authState.js';
  import BookForm from '../../components/books/BookForm.vue';

  export default {
    data: () => ({
      book: {
        id: 0,
        title: '',
        description: '',
        cover: ''
      },
      loaded: false
    }),
    async mounted() {

      let response = await fetch(`${data.apiBaseURL}/books/${this.$route.params.bookID}?api_token=${authState.apiToken}`, {
          headers: data.jsonHeaderParam
      });

      let json = await response.json();
      
      this.book = json.data;
      this.loaded = true;
    },
    methods: {
      async onEdit(bookData) {

        bookData.api_token = authState.apiToken;

        let response = await fetch(`${data.apiBaseURL}/books/${this.book.id}`, {
          headers: data.jsonHeaderParam,
          method: 'PATCH', //'POST',
          body: JSON.stringify(bookData)
        });

        if(response.ok) {
          alert('Book update succeeded.');
          this.$router.push('/');
          return;
        }

        alert('Unknown error occured. Book update failed.');
      }
    }
  }
</script>

<template>
  <div>

    <BookForm 
      
      :initialTitle="book.title" 
      :initialDescription="book.description" 
      :isEdit=true 
      v-if="loaded"
      @book-form-submit="onEdit" />
  </div>
</template>