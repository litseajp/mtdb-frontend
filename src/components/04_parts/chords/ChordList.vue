<script setup lang="ts">
  import ChordListItem from './ChordListItem.vue'
  import type { ChordCategory }  from '@/types/interfaces'

  defineProps<{ chordCategory: ChordCategory }>()
</script>

<template>
  <div>
    <h2>{{ chordCategory.category }}</h2>
    <v-expansion-panels variant="accordion">
      <template v-for="chordInfo in chordCategory.chords" :key="chordInfo.path">
        <ChordListItem :chord-info="chordInfo" />
      </template>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
</style>
