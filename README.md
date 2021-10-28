# Test app with books list

Demo: https://leonteq-books-list.netlify.app/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

----------------------

## My comments

1. First of I'd like to say that It's hard to do something quickly from scratch, because usually don't have time to pay attention to some problems. Yes, the task is simple, but still I like to think about how to do it so as not to redo it later.
2. This is a simple task and does not require all the packages that I have installed. But since there was a time limit, I decided to install:
    - `vuetify` to go straight to the logic of not paying attention to the layout
    - `dayjs` to play with dates
3. If there were no time limits, then I would have connected `vite + vue3`, but decided to stay with `vue2 + vue-cli`, since this is a more familiar stack for me for fast tasks. Therefore, the application turned out a little more than we would like.
4. The API was limited, so a lot of unnecessary front-line work had to be done. Usually, the pagination and sorting logic is located on the backend, since in reality we have much more than 200 records in the table. Therefore, the resulting code does not look the best.
5. `Composition-api` would help me isolate some logic and decompose the application, but as I said, I chose `vue2` as a more familiar stack. I would gladly move the logic from the `BooksPage` component to `usePagination`, `useFilter`. The getter method would also return side information of type `isLoading`. But it would take a little longer, so I decided to do the task initially

For example, please, have a look how I used `vue3` here https://github.com/vladstarikov88/fractal-shiza
