<script setup lang="ts">
  interface Props {
    tool: {
      path: string
      name: string
      description: string
    }
  }

  defineProps<Props>()
</script>

<template>
  <div class="tool-list-item mx-4">
    <router-link :to="tool.path">
      <v-card width="280" height="360" variant="flat" class="px-5 py-8">
        <v-card-item class="pa-0">
          <v-card-title>
            <h2>{{ tool.name }}</h2>
          </v-card-title>
          <v-card-text class="mt-3 pa-0">
            <p v-html="tool.description" />
          </v-card-text>
        </v-card-item>
      </v-card>
    </router-link>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  .v-card {
    background-color: #fafafa;
  }

  .v-card:hover {
    background-color: #f0f0f0;
  }

  .v-card-title h2 {
    font-size: 1.25rem;
  }

  .v-card-text {
    color: var(--text-secondary-color);
    font-size: 1rem;
  }
</style>
