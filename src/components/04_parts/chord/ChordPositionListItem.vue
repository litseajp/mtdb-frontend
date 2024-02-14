<script setup lang="ts">
  import { computed } from 'vue'
  import type { ChordPosition } from '@/types/interfaces'
  import { calculateFirstFretNumber } from '@/utils/handleNote'

  const props = defineProps<{ position: ChordPosition }>()

  const startFretNum = computed(() => calculateFirstFretNumber(props.position))
</script>

<template>
  <v-col cols="4" class="chord-position-list-item pa-0 pt-4">
    <table>
      <tr v-for="(fretNum, i) in Object.values(position).slice(1)" :key="fretNum">
        <td :class="{ 'zero-fret': startFretNum === 0 }">
          <template v-if="i === 0">
            <img v-if="position['string1'] === 0" src="/src/assets/images/position/open.png" class="hi-e" />
            <img v-else-if="position['string1'] === -1" src="/src/assets/images/position/mute.png" class="hi-e" />
          </template>
          <img v-if="fretNum === 0" src="/src/assets/images/position/open.png" />
          <img v-else-if="fretNum === -1" src="/src/assets/images/position/mute.png" />
        </td>
        <td v-for="j in 4" :key="j">
          <template v-if="i === 0">
            <div v-if="position['string1'] === j + startFretNum" class="marker hi-e" />
          </template>
          <div v-if="fretNum === j + startFretNum" class="marker" />
        </td>
      </tr>
      <tr class="fret-number">
        <td />
        <td v-for="i in 4" :key="i">
          {{ startFretNum + i }}
        </td>
      </tr>
    </table>
  </v-col>
</template>

<style scoped>
  table {
    border-collapse: collapse;
  }

  tr {
    height: 28px;
  }

  td {
    width: 60px;
    border: solid 2px #333;
    position: relative;
  }

  td:first-child {
    width: 50px;
    border: none;
  }

  td.zero-fret {
    border-right: solid 8px #333;
  }

  tr.fret-number {
    height: 42px;
  }
  
  tr.fret-number td {
    border: none;
    text-align: center;
    vertical-align: bottom;
    color: var(--text-primary-color);
    font-size: 1.25rem;
  }

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .marker {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: #444;
  }

  img.hi-e, .marker.hi-e {
    top: 0%;
  }
</style>
