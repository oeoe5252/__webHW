<template>
  <header class="hd">
    <RouteLink href="/">index</RouteLink>
    <RouteLink href="/about">about</RouteLink>
    <RouteLink href="/contact">contact</RouteLink>
    <RouteLink href="/service">service</RouteLink>
    <RouteLink href="/work">work</RouteLink>
  </header>
</template>

<script>
import RouteLink from "@/components/basic/RouteLink.vue";

export default {
  name: "TheHeader",
  components: {
    RouteLink
   },
};
</script>

<style lang="scss">

</style>
