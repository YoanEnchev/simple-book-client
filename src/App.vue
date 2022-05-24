<script>
  import { RouterLink, RouterView } from 'vue-router';
  import Greetings from './components/Greetings.vue';
  import authState from './data/authState.js';

  export default {
    data: () => ({
      isLoggedIn: false,
    }),
    methods: {
      onSuccessfulAuth(data) {
        authState.apiToken = data.api_token;
        authState.isAuthor = data.is_author;
        authState.userID = data.id;

        this.isLoggedIn = true;
      }
    },
    computed: {
      isAuthor: () => authState.isAuthor
    }
  }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Greetings msg="Books Client" />

      <nav class="mb-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login" v-if="!isLoggedIn">Login</RouterLink>
        <RouterLink to="/register" v-if="!isLoggedIn">Register</RouterLink>
        <RouterLink to="/books/create" v-if="isLoggedIn && isAuthor">Create Book</RouterLink>
        <RouterLink to="/books" v-if="isLoggedIn">Book List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView 
    @successful-auth="onSuccessfulAuth"
    />
</template>


<style>


@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
