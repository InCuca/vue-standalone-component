<template lang="html">
  <strong>{{ text }}</strong>
</template>

<script>
/**
 * {{description}}
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
