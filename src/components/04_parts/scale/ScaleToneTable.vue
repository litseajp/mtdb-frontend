<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import type { ScaleDetails } from '@/types/interfaces'
  import { scaleKey } from '@/types/injectionKeys'
  import { formatScaleToneTableItems } from '@/utils/format'

  const scale = inject(scaleKey) as Ref<ScaleDetails>

  const headers = [
    { title: '音程', key: 'interval', sortable: false, width: '25%' },
    { title: '音名', key: 'note', sortable: false, width: '25%' },
    { title: '種類', key: 'type', sortable: false, width: '50%' }
  ]

  const items = computed(() => formatScaleToneTableItems(scale.value.tones))
</script>

<template>
  <v-data-table :headers="headers" :items="items" density="comfortable">
    <template #bottom />
  </v-data-table>
</template>

<style scoped>
  .v-data-table {
    width: 480px;
  }
</style>
