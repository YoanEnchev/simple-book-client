<script>

  import authState from '../data/authState.js';

  export default {
    computed: {
      isLoggedIn: () => authState.apiToken != '',
    }
  }
</script>

<template>
  <main>
      <h3 class="text-center">{{isLoggedIn ? 'Authenticated' : 'Login or register to access app features.'}}</h3>
  </main>
</template>
