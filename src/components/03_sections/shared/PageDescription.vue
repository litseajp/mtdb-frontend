<script setup lang="ts">
  defineProps<{ text: string }>()
</script>

<template>
  <section id="page-description">
    <h2>説明</h2>
    <p class="mt-1" v-html="text" />
  </section>
</template>

<style scoped>
  #page-description {
    margin-top: 32px;
  }

  p {
    font-size: 1.125rem;
  }

  @media screen and (max-width: 767px) {
    #page-description {
      margin-top: 20px;
    }

    p {
      font-size: 1rem;
    }
  }
</style>
