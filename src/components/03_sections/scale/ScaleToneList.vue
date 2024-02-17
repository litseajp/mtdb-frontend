<script setup lang="ts">
  import ScaleToneTable from '@/components/04_parts/scale/ScaleToneTable.vue'
</script>

<template>
  <section id="scale-tone-list">
    <h2>構成音一覧</h2>
    <ScaleToneTable />
  </section>
</template>

<style scoped>
  #scale-tone-list {
    margin-top: 42px;
  }

  @media screen and (max-width: 767px) {
    #scale-tone-list {
      margin-top: 24px;
    }
  }
</style>
