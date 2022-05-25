<script>
  import authState from '../../data/authState.js';
  import data from '../../data/config.json';

  export default {
    data: () => ({
        cover: ''
    }),
    methods: {
      async onFormSubmit(e) {
        e.preventDefault();
        
        let reqData = {
            api_token: authState.apiToken,
            cover: this.cover
        };

        let response = await fetch(`${data.apiBaseURL}/books/${this.$route.params.bookID}/update-cover`, {
          headers: data.jsonHeaderParam,
          method: 'PATCH',
          body: JSON.stringify(reqData)
        });

        let message = await response.json();

        if(response.ok) {
          alert(message);
          this.$router.push('/');
          return;
        }

        alert(message);

      },
      onFileChange(e) {
        
        let file = (e.target.files || e.dataTransfer.files)[0];
        
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.cover = reader.result;
        };
      }
    },
  }
</script>

<template>
    <form @submit="onFormSubmit">
        <div class="mb-3">
          <label for="formFile" class="form-label">Cover image</label>
          <input class="form-control" required type="file" id="formFile" @change="onFileChange" />
        </div>
        <button class="btn btn-primary">Update cover</button>
    </form>
</template>