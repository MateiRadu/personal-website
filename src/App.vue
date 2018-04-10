<!--
  Copyright © 2016-2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
  Licensed under MIT
  (https://github.com/mateiradu/personal-website/blob/master/LICENSE)
-->
<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 992px;
}

a {
  color: #f78c25;
  text-decoration-line: none;
  text-decoration-style: none;
}
</style>
