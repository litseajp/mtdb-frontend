<script setup lang="ts">
  import TonicSelector from '@/components/04_parts/shared/TonicSelector.vue'
  import type { ChordInfo } from '@/types/interfaces'

  defineProps<{ chordInfo: ChordInfo }>()
</script>

<template>
  <v-expansion-panel class="chord-list-item" elevation="0">
    <v-expansion-panel-title>
      <div class="chord-summary">
        <h3>{{ chordInfo.quality }}（{{ chordInfo.name }}）</h3>
        <span>{{ chordInfo.description }}</span>
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <TonicSelector :path="`/chords/${chordInfo.path}`" />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
  .v-expansion-panel-title {
    padding: 12px 24px;
    line-height: 1.5;
  }

  .chord-summary span {
    color: var(--text-secondary-color);
    font-size: 1rem;
  }
</style>
