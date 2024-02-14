<script setup lang="ts">
  import ChordList from '@/components/04_parts/chords/ChordList.vue'
  import type { ChordCategory }  from '@/types/interfaces'

  defineProps<{ chordCategories: ChordCategory[] }>()
</script>

<template>
  <section id="chord-category-list" class="mt-5">
    <template v-for="chordCategory in chordCategories" :key="chordCategory.category">
      <ChordList :chord-category="chordCategory" class="chord-list" />
    </template>
  </section>
</template>

<style scoped>
  .chord-list:not(:first-child) {
    margin-top: 18px;
  }
</style>
