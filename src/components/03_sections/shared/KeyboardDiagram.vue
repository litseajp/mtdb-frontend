<script setup lang="ts">
  import KeyboardTable from '@/components/04_parts/shared/KeyboardTable.vue'
</script>

<template>
  <section id="keyboard-diagram">
    <h2>鍵盤図</h2>
    <KeyboardTable />
  </section>
</template>

<style scoped>
  #keyboard-diagram {
    margin-top: 42px;
  }

  @media screen and (max-width: 767px) {
    #keyboard-diagram {
      margin-top: 24px;
    }
  }
</style>
