<template>
  <footer>
    <div class="footer__description">
      <h2 class="footer__header">Ark Resources</h2>
      <p>
        This website is a Game Community for all people who wants to be part of the resources references of
        the game.
      </p>
    </div>

    <section class="footer__section">
      <div class="footer__social">
        <div class="footer__header">
          <h2>Overview</h2>
        </div>
        <div class="footer__links">
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Ark official</a>
        </div>
      </div>

      <div class="footer__social">
        <div class="footer__header">
          <h2>Contact</h2>
        </div>
        <div class="footer__links">
          <a href="#">Github</a>
          <a href="#">Linkedin</a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
footer {
  background: $black;
  display: flex;
  padding: 4rem;
}

.footer__description {
  padding: 0 2rem;
  width: 33.33333%;
}

.footer__section {
  display: flex;
  justify-content: space-around;
  border-left: 1px solid $white;
  margin-left: 2rem;
  width: 66.666667%;
}

.footer__header {
  margin-bottom: 1rem;
}

.footer__links {
  display: flex;
  flex-direction: column;

  a {
    margin: 0.5rem 0;
    text-decoration: none;
  }
}
</style>
