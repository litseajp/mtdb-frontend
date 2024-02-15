<script setup lang="ts">
  import ScaleList from '@/components/04_parts/scales/ScaleList.vue'
  import type { ScaleCategory }  from '@/types/interfaces'

  defineProps<{ scaleCategories: ScaleCategory[] }>()
</script>

<template>
  <section id="scale-category-list">
    <template v-for="scaleCategory in scaleCategories" :key="scaleCategory.category">
      <ScaleList :scale-category="scaleCategory" class="scale-list" />
    </template>
  </section>
</template>

<style scoped>
  #scale-category-list {
    margin-top: 42px;
  }

  .scale-list:not(:first-child) {
    margin-top: 32px;
  }

  @media screen and (max-width: 767px) {
    #scale-category-list {
      margin-top: 24px;
    }

    .scale-list:not(:first-child) {
      margin-top: 18px;
    }
  }
</style>
