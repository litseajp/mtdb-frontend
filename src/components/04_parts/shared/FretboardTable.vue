<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import { fretboardNoteList } from '@/constants/noteLists'
  import type { DiagramTone } from '@/types/interfaces'
  import { tonesKey } from '@/types/injectionKeys'
  import { mapNoteInterval } from '@/utils/map'
  import { loadIntervalImage } from '@/utils/load'

  const tones = inject(tonesKey) as Ref<DiagramTone[]>

  const noteIntervalMap = computed(() => mapNoteInterval(tones.value))

  const isTone = (note: string): boolean => {
    return Object.keys(noteIntervalMap.value).includes(note)
  }
</script>

<template>
  <div id="fretboard">
    <table>
      <tr>
        <td v-for="i in 13" :key="i">
          <div v-if="isTone(fretboardNoteList[0][i - 1])" class="marker hi-e">
            <img :src="loadIntervalImage(noteIntervalMap[fretboardNoteList[0][i - 1]], 'white')" />
          </div>
          <div v-if="isTone(fretboardNoteList[1][i - 1])" class="marker">
            <img :src="loadIntervalImage(noteIntervalMap[fretboardNoteList[1][i - 1]], 'white')" />
          </div>
        </td>
      </tr>
      <tr v-for="i in 4" :key="i">
        <td v-for="(note, j) in fretboardNoteList[i + 1]" :key="note">
          <div v-if="i == 1 && j === 12" class="inlay" />
          <div v-if="i == 2 && [3, 5, 7, 9].includes(j)" class="inlay" />
          <div v-if="i == 3 && j === 12" class="inlay" />
          <div v-if="isTone(note)" class="marker">
            <img :src="loadIntervalImage(noteIntervalMap[note], 'white')" />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  #fretboard {
    padding: 20px 0;
  }

  table {
    width: 928px;
    height: 186px;
    border-collapse: collapse;
  }

  tr {
    height: calc(100% / 6);
  }

  td {
    width: calc(94% / 12);
    border: solid 2px #333;
    position: relative;
  }

  td:first-child {
    width: 6%;
    border: none;
    border-right: solid 8px #333;
  }

  .marker {
    height: 87.5%;
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: #444;
  }

  td:first-child .marker {
    height: calc((100% - 2px) * 0.875);
  }

  img {
    width: 100%;
    aspect-ratio: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .marker.hi-e {
    top: 0%;
  }

  .inlay {
    height: 45%;
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #c5c5c5;
  }

  @media screen and (max-width: 959px) {
    #fretboard {
      padding: 1.875vw 0;
    }

    table {
      width: 100%;
      height: 20vw;
    }
  }

  @media screen and (max-width: 599px) {
    #fretboard {
      padding: 2.75vw 0;
    }

    table {
      height: 27.5vw;
    }

    td {
      border: solid 1px #333;
    }

    td:first-child {
      border-right: solid 1.25vw #333;
    }

    .marker {
      height: 85%;
    }
  }
</style>
