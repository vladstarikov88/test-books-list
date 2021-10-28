<template>
  <v-card class="mb-10">
    <v-card-title>{{ book.title }}</v-card-title>
    <v-card-text>
      <div>{{ book.description }}</div>
      <small>{{book.publishDate}}</small>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default() {
        return {
          id: null,
          title: '',
          description: '',
          publishDate: '',
        };
      },
    },
  },
};
</script>

