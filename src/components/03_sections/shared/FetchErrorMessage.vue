<script setup lang="ts">
  import { onMounted } from 'vue'
  import { setMetaTitle } from '@/utils/handleTag'

  onMounted(() => setMetaTitle('通信エラー'))
</script>

<template>
  <section id="fetch-error-message" class="text-center">
    <h1>通信エラー</h1>
    <p>
      データの取得に失敗しました。
    </p>
  </section>
</template>

<style scoped>
  p {
    margin: 42px 0 72px 0;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 767px) {
    p {
      margin: 24px 0 48px 0;
      font-size: 1.125rem;
    }
  }
</style>
