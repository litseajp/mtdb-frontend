<script setup lang="ts">
  import type { ScaleInfo } from '@/types/interfaces'

  defineProps<{ scaleInfo: ScaleInfo }>()
</script>

<template>
  <v-expansion-panel class="scale-list-item" elevation="0">
    <v-expansion-panel-title>
      <div class="scale-summary">
        <h3>{{ scaleInfo.name }}</h3>
        <span>{{ scaleInfo.description }}</span>
      </div>
    </v-expansion-panel-title>
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
</style>
