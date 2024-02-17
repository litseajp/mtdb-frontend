<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import TonicSelector from '@/components/04_parts/shared/TonicSelector.vue'
  import type { ChordInfo } from '@/types/interfaces'

  defineProps<{ chordInfo: ChordInfo }>()

  const { mdAndUp } = useDisplay()
</script>

<template>
  <v-expansion-panel class="chord-list-item" elevation="0">
    <v-expansion-panel-title :hide-actions="!mdAndUp">
      <div v-if="mdAndUp" class="chord-summary">
        <h3>{{ chordInfo.quality }}（{{ chordInfo.name }}）</h3>
        <span>{{ chordInfo.description }}</span>
      </div>
      <div v-else class="chord-summary">
        <h3>{{ chordInfo.quality }}</h3>
        <span class="ml-3">{{ chordInfo.name }}</span>
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

  @media screen and (max-width: 767px) {
    .v-expansion-panel-title {
      padding: 8px 16px;
    }

    .chord-summary {
      display: flex;
      align-items: center;
    }

    .chord-summary h3 {
      width: 64px;
    }

    .chord-summary span {
      font-size: 0.875rem;
    }
  }
</style>
