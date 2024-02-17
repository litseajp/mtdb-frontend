<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import type { ChordDetails } from '@/types/interfaces'
  import { chordKey } from '@/types/injectionKeys'
  import { formatChordToneTableItems } from '@/utils/format'

  const chord = inject(chordKey) as Ref<ChordDetails>

  const headers = [
    { title: '音程', key: 'interval', sortable: false, width: '50%' },
    { title: '音名', key: 'note', sortable: false, width: '50%' }
  ]

  const items = computed(() => formatChordToneTableItems(chord.value.tones))
</script>

<template>
  <v-data-table :headers="headers" :items="items">
    <template #bottom />
  </v-data-table>
</template>

<style scoped>
  .v-data-table {
    width: 360px;
  }

  @media screen and (max-width: 767px) {
    .v-data-table {
      width: 320px;
    }
  }
</style>
