<script setup lang="ts">
  import { computed } from 'vue'
  import type { ChordPosition } from '@/types/interfaces'
  import { calculateFirstFretNumber } from '@/utils/handleNote'

  const props = defineProps<{ position: ChordPosition }>()

  const startFretNum = computed(() => calculateFirstFretNumber(props.position))
</script>

<template>
  <v-col class="chord-position-list-item">
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
  .v-col {
    padding: 18px 1.5% 0 0;
    flex: calc(100% / 3);
    max-width: calc(100% / 3);
  }

  table {
    width: 100%;
    aspect-ratio: 1.45;
    border-collapse: collapse;
  }

  tr {
    height: calc(77.5% / 5);
  }

  tr.fret-number {
    height: 22.5%;
  }

  td {
    width: calc(84% / 4);
    border: solid 2px #333;
    position: relative;
  }

  td:first-child {
    width: 16%;
    border: none;
  }

  td.zero-fret {
    border-right: solid 8px #333;
  }
  
  tr.fret-number td {
    border: none;
    text-align: center;
    vertical-align: bottom;
    color: var(--text-primary-color);
    font-size: 1.25rem;
  }

  img {
    width: 50%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .marker {
    width: 37.5%;
    aspect-ratio: 1;
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

  @media screen and (max-width: 959px) {
    .v-col {
      padding-top: 1.75vw;
    }
  }

  @media screen and (max-width: 599px) {
    .v-col {
      flex: calc(100% / 2);
      max-width: calc(100% / 2);
    }

    table {
      aspect-ratio: 1.5;
    }

    td {
      border: solid 1px #333;
    }

    td.zero-fret {
      border-right: solid 1.5vw #333;
    }

    tr.fret-number td {
      font-size: 1rem;
    }
  }
</style>
