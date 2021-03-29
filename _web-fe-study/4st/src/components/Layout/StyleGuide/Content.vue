<template>
  <div class="guide-content">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'GuideContent',
  components: {

  }
}
</script>

<style lang="scss">
  .guide-content {
    position: relative;
    margin-left: 25rem;
    padding: 0 1.5rem;
  }
</style>
