<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavLanding'
}
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: center;

  a {
    align-items: center;
    border-bottom: 1px solid transparent;
    color: $white;
    display: flex;
    padding: 0.5rem 1rem;
    text-decoration: none;

    &:hover {
      color: $secondary;
      border-color: $secondary;
      transition: 0.5s ease all;
    }
  }
}
</style>
