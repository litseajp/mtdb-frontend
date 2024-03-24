<script setup lang="ts">
  import type { AvailableChordDegree }  from '@/types/interfaces'
  import { formatNote, formatMajminQuality } from '@/utils/format'

  defineProps<{ degrees: AvailableChordDegree[] }>()
</script>

<template>
  <v-table class="available-chord-degree-table mt-3">
    <thead>
      <tr>
        <th class="col-degree">ディグリー</th>
        <th class="col-chord">コード</th>
        <th>機能</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(degree, i) in degrees" :key="degree.degree">
        <tr v-for="(chord, j) in degree.chords" :key="chord.path" :class="{ 'row-colored': i % 2 === 0 }">
          <td>{{ degree.degree + formatMajminQuality(chord.name) }}</td>
          <td>
            <router-link :to="`../chords/${chord.path}?root=${degree.root}`">
              {{ formatNote(degree.root) + formatMajminQuality(chord.name) }}
            </router-link>
          </td>
          <td v-if="j== 0" :rowspan="degree.chords.length">{{ degree.function }}</td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>

<style scoped>
  .v-table {
    width: 640px;
  }

  .col-degree, .col-chord {
    width: 25%;
  }

  .row-colored {
    background-color: #f5f5f5;
  }
</style>
