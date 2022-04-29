<template>
  <main class="home container">
    <BaseInput icon="search" placeholder="Looking for a Dino..." />

    <!-- Create BaseSubtitle -->
    <h1>Last Dinosaurs added</h1>

    <section>
      <CardDinosaur />
      <CardDinosaur />
      <CardDinosaur />
      <CardDinosaur />
      <CardDinosaur />
    </section>
  </main>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import CardDinosaur from '@/components/card/CardDinosaur.vue'

export default {
  name: 'HomeView',
  components: {
    BaseInput,
    CardDinosaur
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .field {
    margin: 2rem auto;
    width: 50%;
  }

  > h1 {
    color: $black;
    margin: 2rem 0;
    text-align: center;
  }
}

section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
