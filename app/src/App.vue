<template>
  <div id="wrapper">
    <NavBar />
    <router-view> </router-view>
    <TheFooter />
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue'
import TheFooter from '@/components/footer/TheFooter.vue'

export default {
  components: {
    NavBar,
    TheFooter
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  color: $white;
  font-family: $body-font;
  margin: 0;
  padding: 0;
}

#wrapper {
  background: $secondary;
  min-height: 100vh;
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';

  & > header {
    grid-area: header;
  }

  & > main {
    grid-area: main;
    grid-row-start: 2;
    overflow: auto;
  }

  & footer {
    grid-area: footer;
  }

  $base-font-size: 14px;
  $heading-scale: 4;

  @for $i from 1 through 6 {
    h#{$i} {
      font-family: $headers-font;
      font-size: $base-font-size + $heading-scale * (6 - $i);
    }
  }
}
</style>
