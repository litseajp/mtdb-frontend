<script setup lang="ts">
  const currentYear = new Date().getFullYear().toString()
</script>

<template>
  <v-footer height="60">
    <address>
      © {{ currentYear }} - Litsea All rights reserved.
    </address>
  </v-footer>
</template>

<style scoped>
  .v-footer {
    flex: none;
    justify-content: center;
  }

  address {
    color: var(--text-primary-color);
    font-style: normal;
  }
</style>
