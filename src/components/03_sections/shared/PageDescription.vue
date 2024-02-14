<script setup lang="ts">
  defineProps<{ text: string }>()
</script>

<template>
  <section id="page-description" class="mt-8">
    <h2>説明</h2>
    <p class="mt-1" v-html="text" />
  </section>
</template>

<style scoped>
  p {
    font-size: 1.125rem;
  }
</style>
