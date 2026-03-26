<script setup lang="ts">
/** GitHub Pages: base `/repo/` — object data must use BASE_URL, not `/0.svg` */
const svgUrl = `${import.meta.env.BASE_URL}0.svg`
</script>

<template>
  <div class="slide-zero-poster">
    <object
      class="slide-zero-poster__object"
      type="image/svg+xml"
      :data="svgUrl"
      aria-label=""
    />
  </div>
</template>
