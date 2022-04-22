<template>
  <header>
    <div>
      <router-link to="/"><img src="../assets/images/ark-logo.png" alt="ark-logo" /></router-link>
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
  position: fixed;
  transition: 0.5s ease all;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    flex: 1;
    text-align: center;

    h1 {
      margin: auto;
    }

    img {
      height: 4rem;
      width: 6rem;
    }
  }
}
</style>
