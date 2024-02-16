<script setup lang="ts">
  import ChordToneTable from '@/components/04_parts/chord/ChordToneTable.vue'
</script>

<template>
  <section id="chord-tone-list">
    <h2>構成音一覧</h2>
    <ChordToneTable />
  </section>
</template>

<style scoped>
  #chord-tone-list {
    margin-top: 42px;
  }

  @media screen and (max-width: 767px) {
    #chord-tone-list {
      margin-top: 24px;
    }
  }
</style>
