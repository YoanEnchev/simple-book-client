import { createApp } from 'vue';
import App from './App.vue';
import Greetings from './components/Greetings.vue';
import BooksList from './components/books/BooksList.vue';
import BookItem from './components/books/BookItem.vue';
import BookForm from './components/books/BookForm.vue';
import UserForm from './components/UserForm.vue';
import router from './router';


const app = createApp(App)

app.use(router);

// Register Components:
app.component('Greetings', Greetings)
.component('BooksList', BooksList)
.component('BookItem', BookItem)
.component('BookForm', BookForm)
.component('UserForm', UserForm);

app.mount('#app')
