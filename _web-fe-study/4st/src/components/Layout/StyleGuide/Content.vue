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
    margin-left: 25rem;
    padding-left: 1.5rem;
  }
</style>
