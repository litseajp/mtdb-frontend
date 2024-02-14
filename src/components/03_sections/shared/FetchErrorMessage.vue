<script setup lang="ts">
  import { onMounted } from 'vue'
  import { setMetaTitle } from '@/utils/handleTag'

  onMounted(() => setMetaTitle('通信エラー'))
</script>

<template>
  <section id="fetch-error-message" class="text-center">
    <h1>通信エラー</h1>
    <p class="mt-8">
      データの取得に失敗しました。
    </p>
  </section>
</template>

<style scoped>
  p {
    font-size: 1.25rem;
  }
</style>
