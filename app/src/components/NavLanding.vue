<template>
  <nav>
    <div v-show="!mobile" class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/">Sign In</router-link>
    </div>
    <transition name="mobile-nav">
      <div v-show="mobileNav" class="dropdown-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/">Sign In</router-link>
      </div>
    </transition>
    <div class="icon">
      <i
        @click="toggleMobileNav"
        v-show="mobile"
        class="far fa-bars"
        :class="{ 'icon-active': mobileNav }"
      ></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavLanding',
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize)
    this.checkScreenSize
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    checkScreenSize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 768) return (this.mobile = true)
      else {
        this.mobile = false
        this.mobileNav = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  .navigation {
    display: flex;
  }

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

.icon {
  display: flex;
  align-items: center;
  i {
    cursor: pointer;
    font-size: 1.5rem;
    transition: 0.5s ease all;
  }
}

.icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  background: $white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  padding: 1rem;
  width: 200px;

  a {
    color: $black;
    flex: 1;
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>
