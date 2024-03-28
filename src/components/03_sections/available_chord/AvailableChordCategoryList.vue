<script setup lang="ts">
  import AvailableChordDegreeList from '@/components/04_parts/available_chord/AvailableChordDegreeList.vue'
  import type { AvailableChordCategory }  from '@/types/interfaces'

  defineProps<{ categories: AvailableChordCategory[] }>()
</script>

<template>
  <section id="available-chord-category-list">
    <template v-for="category in categories" :key="category.name">
      <AvailableChordDegreeList :category="category" class="available-chord-degree-list" />
    </template>
  </section>
</template>

<style scoped>
  #available-chord-category-list {
    margin-top: 42px;
  }

  .available-chord-degree-list:not(:first-child) {
    margin-top: 32px;
  }

  @media screen and (max-width: 767px) {
    #available-chord-category-list {
      margin-top: 24px;
    }

    .available-chord-degree-list:not(:first-child) {
      margin-top: 24px;
    }
  }
</style>
