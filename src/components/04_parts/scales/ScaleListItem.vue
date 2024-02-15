<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import TonicSelector from '@/components/04_parts/shared/TonicSelector.vue'
  import type { ScaleInfo } from '@/types/interfaces'

  defineProps<{ scaleInfo: ScaleInfo }>()

  const { mdAndUp } = useDisplay()
</script>

<template>
  <v-expansion-panel class="scale-list-item" elevation="0">
    <v-expansion-panel-title :hide-actions="!mdAndUp">
      <div class="scale-summary">
        <h3>{{ scaleInfo.name }}</h3>
        <span v-if="mdAndUp">{{ scaleInfo.description }}</span>
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <TonicSelector :path="`/scales/${scaleInfo.path}`" />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
  .v-expansion-panel-title {
    padding: 12px 24px;
    line-height: 1.5;
  }

  .scale-summary span {
    color: var(--text-secondary-color);
    font-size: 1rem;
  }

  @media screen and (max-width: 767px) {
    .v-expansion-panel-title {
      padding: 8px 16px;
    }
  }
</style>
