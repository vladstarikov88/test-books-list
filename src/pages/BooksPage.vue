<template>
  <v-container>
    <v-row>
      <v-col md="6" offset-md="3">
        <v-progress-linear
          v-if="isLoading"
          :active="isLoading"
          :indeterminate="isLoading"
        />
        <template v-else>
          <v-select
            label="Sort by"
            :items="filterByOptions"
            v-model="filterBy"
          />

          <v-pagination
            class="mb-4"
            v-model="currentPage"
            :length="books.length / perPage"
          />
          <book-card v-for="book in filteredBooks" :key="book.id" :book="book"/>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dayjs from 'dayjs';

import BookCard from "@/components/BookCard.vue";
import { getBooks } from './_queries';
import { filterByOptions } from './_data';

export default {
  components: {
    BookCard,
  },
  data() {
    return {
      isLoading: true,
      books: [],

      filterBy: '',
      filterByOptions,

      currentPage: 1,
      perPage: 10,
    };
  },
  computed: {
    filteredBooks() {
      let books = this.books;
      if (this.filterBy === 'date') {
        books = this.filterByDate();
      }
      if (this.filterBy === 'title') {
        books = this.filterByTitle();
      }
      const currentPosition = (this.currentPage - 1) * this.perPage;
      return books.slice(currentPosition, currentPosition + this.perPage);
    },
  },
  created() {
    this.onGetBooks();
  },
  methods: {
    async onGetBooks() {
      this.isLoading = true;
      this.books = await getBooks();
      this.isLoading = false;
    },
    filterByDate() {
      return [...this.books].sort((a, b) => {
        const date1 = dayjs(a.publishDate)
        const date2 = dayjs(b.publishDate)
        return date1 - date2;
      })
    },
    filterByTitle() {
      return [...this.books].sort((a, b) => {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      })
    }
  },
};
</script>

