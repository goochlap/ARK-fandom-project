<template>
  <div class="home container">
    <BaseInput icon="search" placeholder="Looking for a Dino..." />
  </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'

export default {
  name: 'HomeView',
  components: {
    BaseInput
  }
}
</script>

<style scoped>
.home {
}
</style>
