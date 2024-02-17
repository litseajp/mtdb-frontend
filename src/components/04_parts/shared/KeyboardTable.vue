<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import { keyList } from '@/constants/keyList'
  import type { DiagramTone } from '@/types/interfaces'
  import { tonesKey } from '@/types/injectionKeys'
  import { mapKeyInterval } from '@/utils/map'
  import { loadIntervalImage } from '@/utils/load'

  const tones = inject(tonesKey) as Ref<DiagramTone[]>

  const keyIntervalMap = computed(() => mapKeyInterval(tones.value))

  const isTone = (index: number): boolean => {
    return Object.keys(keyIntervalMap.value).includes(keyList[index])
  }
</script>

<template>
  <div id="keyboard" class="py-2">
    <table>
      <tr class="upper">
        <td :class="{ 'tone': isTone(0) }" class="c1" />
        <td :class="{ 'tone': isTone(0) }" class="c1" />
        <td :class="{ 'tone': isTone(1) }" class="csharp1 black border-left">
          <img v-if="isTone(1)" :src="loadIntervalImage(keyIntervalMap[keyList[1]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(1) }" class="csharp1 black border-right" />
        <td :class="{ 'tone': isTone(2) }" class="d1" />
        <td :class="{ 'tone': isTone(3) }" class="dsharp1 black border-left">
          <img v-if="isTone(3)" :src="loadIntervalImage(keyIntervalMap[keyList[3]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(3) }" class="dsharp1 black border-right" />
        <td :class="{ 'tone': isTone(4) }" class="e1" />
        <td :class="{ 'tone': isTone(4) }" class="e1 border-right" />
        <td :class="{ 'tone': isTone(5) }" class="f1" />
        <td :class="{ 'tone': isTone(5) }" class="f1" />
        <td :class="{ 'tone': isTone(6) }" class="fsharp1 black border-left">
          <img v-if="isTone(6)" :src="loadIntervalImage(keyIntervalMap[keyList[6]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(6) }" class="fsharp1 black border-right" />
        <td :class="{ 'tone': isTone(7) }" class="g1" />
        <td :class="{ 'tone': isTone(8) }" class="gsharp1 black border-left">
          <img v-if="isTone(8)" :src="loadIntervalImage(keyIntervalMap[keyList[8]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(8) }" class="gsharp1 black border-right" />
        <td :class="{ 'tone': isTone(9) }" class="a1" />
        <td :class="{ 'tone': isTone(10) }" class="asharp1 black border-left">
          <img v-if="isTone(10)" :src="loadIntervalImage(keyIntervalMap[keyList[10]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(10) }" class="asharp1 black border-right" />
        <td :class="{ 'tone': isTone(11) }" class="b1" />
        <td :class="{ 'tone': isTone(11) }" class="b1 border-right" />
        <td :class="{ 'tone': isTone(12) }" class="c2" />
        <td :class="{ 'tone': isTone(12) }" class="c2" />
        <td :class="{ 'tone': isTone(13) }" class="csharp2 black border-left">
          <img v-if="isTone(13)" :src="loadIntervalImage(keyIntervalMap[keyList[13]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(13) }" class="csharp2 black border-right" />
        <td :class="{ 'tone': isTone(14) }" class="d2" />
        <td :class="{ 'tone': isTone(15) }" class="dsharp2 black border-left">
          <img v-if="isTone(15)" :src="loadIntervalImage(keyIntervalMap[keyList[15]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(15) }" class="dsharp2 black border-right" />
        <td :class="{ 'tone': isTone(16) }" class="e2" />
        <td :class="{ 'tone': isTone(16) }" class="e2 border-right" />
        <td :class="{ 'tone': isTone(17) }" class="f2" />
        <td :class="{ 'tone': isTone(17) }" class="f2" />
        <td :class="{ 'tone': isTone(18) }" class="fsharp2 black border-left">
          <img v-if="isTone(18)" :src="loadIntervalImage(keyIntervalMap[keyList[18]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(18) }" class="fsharp2 black border-right" />
        <td :class="{ 'tone': isTone(19) }" class="g2" />
        <td :class="{ 'tone': isTone(20) }" class="gsharp2 black border-left">
          <img v-if="isTone(20)" :src="loadIntervalImage(keyIntervalMap[keyList[20]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(20) }" class="gsharp2 black border-right" />
        <td :class="{ 'tone': isTone(21) }" class="a2" />
        <td :class="{ 'tone': isTone(22) }" class="asharp2 black border-left">
          <img v-if="isTone(22)" :src="loadIntervalImage(keyIntervalMap[keyList[22]], 'white')" />
        </td>
        <td :class="{ 'tone': isTone(22) }" class="asharp2 black border-right" />
        <td class="b2" />
        <td class="b2" />
      </tr>
      <tr class="lower">
        <td :class="{ 'tone': isTone(0) }" class="c1" />
        <td :class="{ 'tone': isTone(0) }" class="c1">
          <img v-if="isTone(0)" :src="loadIntervalImage(keyIntervalMap[keyList[0]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(0) }" class="c1 border-right" />
        <td :class="{ 'tone': isTone(2) }" class="d1" />
        <td :class="{ 'tone': isTone(2) }" class="d1">
          <img v-if="isTone(2)" :src="loadIntervalImage(keyIntervalMap[keyList[2]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(2) }" class="d1 border-right" />
        <td :class="{ 'tone': isTone(4) }" class="e1" />
        <td :class="{ 'tone': isTone(4) }" class="e1">
          <img v-if="isTone(4)" :src="loadIntervalImage(keyIntervalMap[keyList[4]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(4) }" class="e1 border-right" />
        <td :class="{ 'tone': isTone(5) }" class="f1" />
        <td :class="{ 'tone': isTone(5) }" class="f1">
          <img v-if="isTone(5)" :src="loadIntervalImage(keyIntervalMap[keyList[5]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(5) }" class="f1 border-right" />
        <td :class="{ 'tone': isTone(7) }" class="g1" />
        <td :class="{ 'tone': isTone(7) }" class="g1">
          <img v-if="isTone(7)" :src="loadIntervalImage(keyIntervalMap[keyList[7]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(7) }" class="g1 border-right" />
        <td :class="{ 'tone': isTone(9) }" class="a1" />
        <td :class="{ 'tone': isTone(9) }" class="a1">
          <img v-if="isTone(9)" :src="loadIntervalImage(keyIntervalMap[keyList[9]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(9) }" class="a1 border-right" />
        <td :class="{ 'tone': isTone(11) }" class="b1" />
        <td :class="{ 'tone': isTone(11) }" class="b1">
          <img v-if="isTone(11)" :src="loadIntervalImage(keyIntervalMap[keyList[11]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(11) }" class="b1 border-right" />
        <td :class="{ 'tone': isTone(12) }" class="c2" />
        <td :class="{ 'tone': isTone(12) }" class="c2">
          <img v-if="isTone(12)" :src="loadIntervalImage(keyIntervalMap[keyList[12]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(12) }" class="c2 border-right" />
        <td :class="{ 'tone': isTone(14) }" class="d2" />
        <td :class="{ 'tone': isTone(14) }" class="d2">
          <img v-if="isTone(14)" :src="loadIntervalImage(keyIntervalMap[keyList[14]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(14) }" class="d2 border-right" />
        <td :class="{ 'tone': isTone(16) }" class="e2" />
        <td :class="{ 'tone': isTone(16) }" class="e2">
          <img v-if="isTone(16)" :src="loadIntervalImage(keyIntervalMap[keyList[16]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(16) }" class="e2 border-right" />
        <td :class="{ 'tone': isTone(17) }" class="f2" />
        <td :class="{ 'tone': isTone(17) }" class="f2">
          <img v-if="isTone(17)" :src="loadIntervalImage(keyIntervalMap[keyList[17]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(17) }" class="f2 border-right" />
        <td :class="{ 'tone': isTone(19) }" class="g2" />
        <td :class="{ 'tone': isTone(19) }" class="g2">
          <img v-if="isTone(19)" :src="loadIntervalImage(keyIntervalMap[keyList[19]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(19) }" class="g2 border-right" />
        <td :class="{ 'tone': isTone(21) }" class="a2" />
        <td :class="{ 'tone': isTone(21) }" class="a2">
          <img v-if="isTone(21)" :src="loadIntervalImage(keyIntervalMap[keyList[21]], 'black')" />
        </td>
        <td :class="{ 'tone': isTone(21) }" class="a2 border-right" />
        <td class="b2" />
        <td class="b2" />
        <td class="b2" />
      </tr>
    </table>
  </div>
</template>

<style scoped>
  table {
    width: 70%;
    aspect-ratio: 3;
    border: solid 2px #333;
    border-collapse: collapse;
  }

  tr.upper {
    height: 66.6%;
  }

  tr.lower {
    height: 33.4%;
  }

  td {
    width: calc(100% / 42);
    position: relative;
    box-sizing: content-box;
    background-color: #aaa;
  }

  td.black {
    border-bottom: solid 2px #333;
  }

  td.border-left {
    border-left: solid 2px #333;
  }

  td.border-right {
    border-right: solid 2px #333;
  }

  td.tone {
    background-color: #fff;
  }

  td.tone.black {
    background-color: #333;
  }

  img {
    width: 200%;
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
  }

  .black img {
    top: 55%;
    left: 0%;
    transform: none;
  }

  @media screen and (max-width: 599px) {
    table {
      width: 100%;
      border: solid 1px #333;
    }

    td.black {
      border-bottom: solid 1px #333;
    }

    td.border-left {
      border-left: solid 1px #333;
    }

    td.border-right {
      border-right: solid 1px #333;
    }
  }
</style>
