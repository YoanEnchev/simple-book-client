import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import BooksListingView from '../views/Books/BooksListingView.vue';
import BookShowView from '../views/Books/BookShowView.vue';
import CreateBookView from '../views/Books/CreateBookView.vue';
import EditBookView from '../views/Books/EditBookView.vue';
import UpdateBookCover from '../views/Books/UpdateBookCover.vue';

import RegisterView from '../views/Auth/RegisterView.vue';
import LoginView from '../views/Auth/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books/create',
      name: 'create-book',
      component: CreateBookView
    },
    {
      path: '/books',
      name: 'books-index',
      component: BooksListingView
    },
    {
      path: '/books/:bookID/show',
      name: 'books-show',
      component: BookShowView
    },
    {
      path: '/books/:bookID/edit',
      name: 'edit-books',
      component: EditBookView
    },
    {
      path: '/books/:bookID/edit-cover',
      name: 'edit-book-cover',
      component: UpdateBookCover
    }
  ]
})

export default router
