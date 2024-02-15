<script setup lang="ts">
  import { useDisplay } from 'vuetify'

  const { smAndDown } = useDisplay()

  const currentYear = new Date().getFullYear().toString()
</script>

<template>
  <v-footer :height="smAndDown ? 50 : 60">
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
