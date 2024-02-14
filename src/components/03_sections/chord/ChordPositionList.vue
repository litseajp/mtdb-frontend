<script setup lang="ts">
  import { inject, type Ref } from 'vue'
  import ChordPositionListItem from '@/components/04_parts/chord/ChordPositionListItem.vue'
  import type { ChordDetails } from '@/types/interfaces'
  import { chordKey } from '@/types/injectionKeys'

  const chord = inject(chordKey) as Ref<ChordDetails>
</script>

<template>
  <section id="chord-position-list" class="mt-8">
    <h2>フォーム一覧</h2>
    <v-row class="ma-0">
      <ChordPositionListItem v-for="(position, i) in chord.positions" :key="i" :position="position" />
    </v-row>
  </section>
</template>

<style scoped>
</style>
