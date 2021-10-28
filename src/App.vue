<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="title">Books list</div>
    </v-app-bar>

    <v-main>
      <books-page />
    </v-main>
  </v-app>
</template>

<script>
import BooksPage from './pages/BooksPage.vue';

export default {
  name: 'App',

  components: {
    BooksPage,
  },

  data: () => ({
    //
  }),
};
</script>
