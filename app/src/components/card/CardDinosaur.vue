<template>
  <div class="card">
    <div class="card__dinausor-img">
      <img class="card__img" :src="require('@/assets/images/diplodocus.webp')" alt="dino-image" />
    </div>

    <div class="card__content">
      <h2 class="card__name">Diplodocus</h2>
      <p class="card__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quae fuga voluptatem nihil laborum
        suscipit odit nulla iusto reprehenderit consectetur, autem quidem assumenda deserunt quis aut possimus
        vero blanditiis officiis.
      </p>
    </div>

    <div class="card__footer">
      <p class="card__author">Created by: Allan Grant</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDinosaur'
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: $primary;
  border-radius: 1rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  color: $white;
  cursor: pointer;
  height: 446px;
  transition: 0.4s ease;
  width: 344px;

  &:hover {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    transform: scale(1.07);
  }
}

.card__dinausor-img {
  padding: 0.2rem;

  > img {
    height: 220px;
    width: 100%;
    object-fit: cover;
  }
}

.card__content {
  > * {
    padding: 0.5rem;
  }

  .card__name {
    text-align: center;
  }

  .card__description {
    font-size: 0.9rem;
  }
}

.card__footer {
  margin-left: 1rem;

  .card__author {
    font-style: italic;
  }
}
</style>
