<template lang="html">
  <strong>\{{ text }}</strong>
</template>

<script>
/**
 * Component documentation
 */
export default {
  name: '{{ name }}',
  props: {
    /**
     * The component text
     */
    text: {
      type: String,
      default: '',
      required: true
    },
  },
}
</script>

<style lang="css" scoped>
  /* place here your styles */
</style>
