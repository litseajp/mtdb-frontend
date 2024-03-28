<script setup lang="ts">
  import AvailableChordDegreeTable from './AvailableChordDegreeTable.vue'
  import type { AvailableChordCategory }  from '@/types/interfaces'

  defineProps<{ category: AvailableChordCategory }>()
</script>

<template>
  <div class="available-chord-degree-list">
    <h2>{{ category.name }}</h2>
    <AvailableChordDegreeTable :degrees="category.degrees" />
  </div>
</template>

<style scoped>
  @media screen and (max-width: 600px) {
    h2 {
      font-size: clamp(8px, 3.6vw, 20px);
    }
  }
</style>
