<!--
  Copyright © 2016-2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
  Licensed under MIT
  (https://github.com/mateiradu/personal-website/blob/master/LICENSE)
-->
<template>
  <footer role='contentinfo'>
    <div class='container'>
      <div class='divider'/>
      <p class='website-source'>Source code available on <a v-bind:href='source'>GitHub</a>.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      source: 'https://github.com/mateiradu/personal-website',
    };
  },
};
</script>

<style scoped>
footer {
  flex: none;
}

.website-source {
  margin-top: 21px;
  margin-bottom: 21px;
  font-size: 18px;
  line-height: 22px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #707070;
}
</style>
