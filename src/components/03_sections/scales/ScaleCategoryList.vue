<script setup lang="ts">
  import ScaleList from '@/components/04_parts/scales/ScaleList.vue'
  import type { ScaleCategory }  from '@/types/interfaces'

  defineProps<{ scaleCategories: ScaleCategory[] }>()
</script>

<template>
  <section id="scale-category-list" class="mt-5">
    <template v-for="scaleCategory in scaleCategories" :key="scaleCategory.category">
      <ScaleList :scale-category="scaleCategory" class="scale-list" />
    </template>
  </section>
</template>

<style scoped>
  .scale-list:not(:first-child) {
    margin-top: 18px;
  }
</style>
