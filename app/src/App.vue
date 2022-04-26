<template>
  <div id="wrapper">
    <NavBar />
    <main class="container">
      <HomeView />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HomeView from '@/views/HomeView.vue'

export default {
  components: {
    NavBar,
    HomeView
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
  height: 100vh;
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'main';

  & > header {
    grid-area: header;
  }

  & > main {
    grid-area: main;
    overflow: auto;
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
