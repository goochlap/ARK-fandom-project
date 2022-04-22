<template>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  color: $white;
  font-family: $body-font;
  margin: 0;
  padding: 0;
}

#app {
  background: $secondary;
  min-height: 100vh;
  position: relative;

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
