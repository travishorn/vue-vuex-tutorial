# vue-vuex-tutorial

Using vuex to store application state. The main `App` component **and** the `Hello` component (called through a route) both contain a button that toggles a boolean variable to show the contents of both components.

Adapted from [RAS Web Design's Vue 2 & Vuex Tutorial Version 2 video](https://www.youtube.com/watch?v=ARtSqjel6Ho).

To get to this point, we have...

1. used vue-cli to initialize a new app (`vue init webpack`),
2. installed vuex (`npm i -S vuex`),
3. created `store.js` (contents below),
4. imported it into `main.js` (`import store from './store';`), and
5. added it to the Vue app (`store` property in `new Vue()`).

**store.js**

    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);

    export default new Vuex.Store({
      state: {
        // TODO: Add state
      },
      getters: {
        // TODO: Add getters
      },
      mutations: {
        // TODO: Add mutations
      },
      actions: {
        // TODO: Add actions
      },
    });


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
