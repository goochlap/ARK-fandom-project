<template>
  <!-- Fixe label position if it will be necessary -->

  <div class="field">
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <i v-if="icon" :class="['fas', `fa-${icon} icon`]" />
    <input :id="id" :type="type" :value="modelValue" @input="updateInput" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    icon: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    modelValue: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  position: relative;
  width: 100%;

  i {
    color: $secondary;
    font-size: 1.5rem;
    bottom: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    position: absolute;
  }

  input {
    background: $gray-light;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    box-sizing: border-box;
    color: $black;
    font-size: 1.2rem;
    padding: 1rem 1rem 1rem 3.5rem;
    text-align: center;
    width: 100%;

    &:focus,
    &:hover,
    &:active {
      outline: none;
      border: 1px solid rgb(57, 98, 136);
      box-shadow: 0 0 6px $blue;
    }
  }
}
</style>
