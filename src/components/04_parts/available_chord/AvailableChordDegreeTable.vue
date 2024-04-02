<script setup lang="ts">
  import type { AvailableChordDegree }  from '@/types/interfaces'
  import { formatNote, formatMajminQuality } from '@/utils/format'

  defineProps<{ degrees: AvailableChordDegree[] }>()
</script>

<template>
  <v-table class="available-chord-degree-table">
    <thead>
      <tr>
        <th class="th-degree">ディグリー</th>
        <th class="th-chord">コード</th>
        <th>機能</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(degree, i) in degrees" :key="degree.degree">
        <tr v-for="(chord, j) in degree.chords" :key="chord.path" :class="{ 'row-colored': i % 2 === 0 }">
          <td class="td-degree">
            {{ degree.degree + formatMajminQuality(chord.name) }}
          </td>
          <td class="td-chord">
            <router-link :to="`../chords/${chord.path}?root=${degree.root}`">
              {{ formatNote(degree.root) + formatMajminQuality(chord.name) }}
            </router-link>
          </td>
          <td v-if="j== 0" :rowspan="degree.chords.length" class="td-function">
            {{ degree.function }}
          </td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>

<style scoped>
  .v-table {
    width: 640px;
    margin-top: 12px;
  }

  .th-degree, .th-chord {
    width: 25%;
  }

  .row-colored {
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 767px) {
    .v-table {
      width: 100%;
      margin-top: 6px;
    }    
  }

  @media screen and (max-width: 599px) {
    th, td {
      font-size: 3vw;
    }

    .th-degree, .th-chord {
      width: 25%;
      padding: 0 8px !important;
    }

    .td-degree, .td-chord, .td-function {
      padding: 0 8px !important;
    }
  }
</style>
