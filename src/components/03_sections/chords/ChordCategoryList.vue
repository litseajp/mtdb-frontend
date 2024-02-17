<script setup lang="ts">
  import ChordList from '@/components/04_parts/chords/ChordList.vue'
  import type { ChordCategory }  from '@/types/interfaces'

  defineProps<{ chordCategories: ChordCategory[] }>()
</script>

<template>
  <section id="chord-category-list">
    <template v-for="chordCategory in chordCategories" :key="chordCategory.category">
      <ChordList :chord-category="chordCategory" class="chord-list" />
    </template>
  </section>
</template>

<style scoped>
  #chord-category-list {
    margin-top: 42px;
  }

  .chord-list:not(:first-child) {
    margin-top: 32px;
  }

  @media screen and (max-width: 767px) {
    #chord-category-list {
      margin-top: 24px;
    }

    .chord-list:not(:first-child) {
      margin-top: 18px;
    }
  }
</style>
