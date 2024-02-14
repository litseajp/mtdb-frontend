<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import { keyList } from '@/constants/keyList'
  import type { DiagramTone } from '@/types/interfaces'
  import { tonesKey } from '@/types/injectionKeys'
  import { mapKeyInterval } from '@/utils/map'

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
          <img v-if="isTone(1)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[1]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(1) }" class="csharp1 black border-right" />
        <td :class="{ 'tone': isTone(2) }" class="d1" />
        <td :class="{ 'tone': isTone(3) }" class="dsharp1 black border-left">
          <img v-if="isTone(3)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[3]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(3) }" class="dsharp1 black border-right" />
        <td :class="{ 'tone': isTone(4) }" class="e1" />
        <td :class="{ 'tone': isTone(4) }" class="e1 border-right" />
        <td :class="{ 'tone': isTone(5) }" class="f1" />
        <td :class="{ 'tone': isTone(5) }" class="f1" />
        <td :class="{ 'tone': isTone(6) }" class="fsharp1 black border-left">
          <img v-if="isTone(6)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[6]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(6) }" class="fsharp1 black border-right" />
        <td :class="{ 'tone': isTone(7) }" class="g1" />
        <td :class="{ 'tone': isTone(8) }" class="gsharp1 black border-left">
          <img v-if="isTone(8)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[8]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(8) }" class="gsharp1 black border-right" />
        <td :class="{ 'tone': isTone(9) }" class="a1" />
        <td :class="{ 'tone': isTone(10) }" class="asharp1 black border-left">
          <img v-if="isTone(10)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[10]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(10) }" class="asharp1 black border-right" />
        <td :class="{ 'tone': isTone(11) }" class="b1" />
        <td :class="{ 'tone': isTone(11) }" class="b1 border-right" />
        <td :class="{ 'tone': isTone(12) }" class="c2" />
        <td :class="{ 'tone': isTone(12) }" class="c2" />
        <td :class="{ 'tone': isTone(13) }" class="csharp2 black border-left">
          <img v-if="isTone(13)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[13]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(13) }" class="csharp2 black border-right" />
        <td :class="{ 'tone': isTone(14) }" class="d2" />
        <td :class="{ 'tone': isTone(15) }" class="dsharp2 black border-left">
          <img v-if="isTone(15)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[15]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(15) }" class="dsharp2 black border-right" />
        <td :class="{ 'tone': isTone(16) }" class="e2" />
        <td :class="{ 'tone': isTone(16) }" class="e2 border-right" />
        <td :class="{ 'tone': isTone(17) }" class="f2" />
        <td :class="{ 'tone': isTone(17) }" class="f2" />
        <td :class="{ 'tone': isTone(18) }" class="fsharp2 black border-left">
          <img v-if="isTone(18)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[18]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(18) }" class="fsharp2 black border-right" />
        <td :class="{ 'tone': isTone(19) }" class="g2" />
        <td :class="{ 'tone': isTone(20) }" class="gsharp2 black border-left">
          <img v-if="isTone(20)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[20]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(20) }" class="gsharp2 black border-right" />
        <td :class="{ 'tone': isTone(21) }" class="a2" />
        <td :class="{ 'tone': isTone(22) }" class="asharp2 black border-left">
          <img v-if="isTone(22)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[22]]}_white.png`" />
        </td>
        <td :class="{ 'tone': isTone(22) }" class="asharp2 black border-right" />
        <td class="b2" />
        <td class="b2" />
      </tr>
      <tr class="lower">
        <td :class="{ 'tone': isTone(0) }" class="c1" />
        <td :class="{ 'tone': isTone(0) }" class="c1">
          <img v-if="isTone(0)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[0]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(0) }" class="c1 border-right" />
        <td :class="{ 'tone': isTone(2) }" class="d1" />
        <td :class="{ 'tone': isTone(2) }" class="d1">
          <img v-if="isTone(2)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[2]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(2) }" class="d1 border-right" />
        <td :class="{ 'tone': isTone(4) }" class="e1" />
        <td :class="{ 'tone': isTone(4) }" class="e1">
          <img v-if="isTone(4)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[4]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(4) }" class="e1 border-right" />
        <td :class="{ 'tone': isTone(5) }" class="f1" />
        <td :class="{ 'tone': isTone(5) }" class="f1">
          <img v-if="isTone(5)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[5]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(5) }" class="f1 border-right" />
        <td :class="{ 'tone': isTone(7) }" class="g1" />
        <td :class="{ 'tone': isTone(7) }" class="g1">
          <img v-if="isTone(7)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[7]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(7) }" class="g1 border-right" />
        <td :class="{ 'tone': isTone(9) }" class="a1" />
        <td :class="{ 'tone': isTone(9) }" class="a1">
          <img v-if="isTone(9)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[9]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(9) }" class="a1 border-right" />
        <td :class="{ 'tone': isTone(11) }" class="b1" />
        <td :class="{ 'tone': isTone(11) }" class="b1">
          <img v-if="isTone(11)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[11]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(11) }" class="b1 border-right" />
        <td :class="{ 'tone': isTone(12) }" class="c2" />
        <td :class="{ 'tone': isTone(12) }" class="c2">
          <img v-if="isTone(12)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[12]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(12) }" class="c2 border-right" />
        <td :class="{ 'tone': isTone(14) }" class="d2" />
        <td :class="{ 'tone': isTone(14) }" class="d2">
          <img v-if="isTone(14)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[14]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(14) }" class="d2 border-right" />
        <td :class="{ 'tone': isTone(16) }" class="e2" />
        <td :class="{ 'tone': isTone(16) }" class="e2">
          <img v-if="isTone(16)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[16]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(16) }" class="e2 border-right" />
        <td :class="{ 'tone': isTone(17) }" class="f2" />
        <td :class="{ 'tone': isTone(17) }" class="f2">
          <img v-if="isTone(17)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[17]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(17) }" class="f2 border-right" />
        <td :class="{ 'tone': isTone(19) }" class="g2" />
        <td :class="{ 'tone': isTone(19) }" class="g2">
          <img v-if="isTone(19)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[19]]}_black.png`" />
        </td>
        <td :class="{ 'tone': isTone(19) }" class="g2 border-right" />
        <td :class="{ 'tone': isTone(21) }" class="a2" />
        <td :class="{ 'tone': isTone(21) }" class="a2">
          <img v-if="isTone(21)" :src="`/src/assets/images/intervals/${keyIntervalMap[keyList[21]]}_black.png`" />
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
    border: solid 2px #333;
    border-collapse: collapse;
  }

  tr.upper {
    height: 140px;
  }

  tr.lower {
    height: 70px;
  }

  td {
    width: 14px;
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
    width: 30px;
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
</style>
