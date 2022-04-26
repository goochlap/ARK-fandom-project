<template>
  <header>
    <div>
      <router-link to="/"><img src="@/assets/images/ark-logo.png" alt="ark-logo" /></router-link>
      <h1>ARK Resources</h1>
    </div>

    <NavLanding />
  </header>
</template>

<script>
import NavLanding from './NavLanding.vue'

export default {
  name: 'NavBar',
  components: {
    NavLanding
  }
}
</script>

<style scoped lang="scss">
header {
  background-color: $black;
  box-shadow: $box-shadow-dark;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  transition: 0.5s ease all;
  width: 100%;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    flex: 1;
    text-align: center;

    h1 {
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      z-index: -1;
    }

    img {
      height: 4rem;
      width: 6rem;
    }
  }
}
</style>
