<script>
  import data from '../../data/config.json';
  import authState from '../../data/authState.js';
  import BookForm from '../../components/books/BookForm.vue';

  export default {
    methods: {
      async onCreate(bookData) {

        bookData.api_token = authState.apiToken;
        bookData.author_id = authState.userID;

        let response = await fetch(`${data.apiBaseURL}/books`, {
          headers: data.jsonHeaderParam,
          method: 'POST',
          body: JSON.stringify(bookData)
        });

        if(response.ok) {
            alert('Book creation succeeded.');
            this.$router.push('/');
            return;
        }

        alert('Unknown error occured. Book creation failed.');
      }
    }
  }
</script>

<template>
  <div>
    <BookForm initialTitle="" 
      initialDescription="" 
      :isEdit=false 
      @book-form-submit="onCreate" />
  </div>
</template>