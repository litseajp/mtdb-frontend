<script setup lang="ts">
  import FretboardTable from '@/components/04_parts/shared/FretboardTable.vue'
</script>

<template>
  <section id="fretboard-diagram">
    <h2>指板図</h2>
    <FretboardTable />
  </section>
</template>

<style scoped>
  #fretboard-diagram {
    margin-top: 42px;
  }

  @media screen and (max-width: 767px) {
    #fretboard-diagram {
      margin-top: 24px;
    }
  }
</style>
