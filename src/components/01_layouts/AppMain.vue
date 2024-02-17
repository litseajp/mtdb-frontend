<script setup lang="ts">
</script>

<template>
  <v-main>
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>

<style scoped>
  .v-container {
    max-width: 960px;
    padding: 32px 16px;
  }

  @media screen and (max-width: 767px) {
    .v-container {
      padding: 20px 12px;
    }
  }
</style>
