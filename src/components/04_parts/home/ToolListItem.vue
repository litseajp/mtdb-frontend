<script setup lang="ts">
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'

  interface Props {
    tool: {
      path: string
      name: string
      description: string
    }
  }

  const props = defineProps<Props>()

  const { mdAndUp } = useDisplay()

  const plainDescription = computed(() => props.tool.description.replace(/<br>/g, '') )
</script>

<template>
  <div class="mx-4">
    <router-link :to="tool.path">
      <v-card variant="flat">
        <v-card-item class="pa-0">
          <v-card-title>
            <h2>{{ tool.name }}</h2>
          </v-card-title>
          <v-card-text class="pa-0">
            <p v-if="mdAndUp" v-html="tool.description" />
            <p v-else>{{ plainDescription }}</p>
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
    width: 280px;
    height: 360px;
    padding: 32px 24px;
    background-color: #f5f5f5;
  }

  .v-card:hover {
    background-color: #eee;
  }

  .v-card-title h2 {
    text-align: center;
    font-size: 1.25rem;
  }

  .v-card-text {
    margin-top: 12px;
    color: var(--text-secondary-color);
    font-size: 1rem;
  }

  @media screen and (max-width: 767px) {
    .v-card {
      width: 100%;
      height: 128px;
      padding: 12px 24px;
    }

    .v-card-title h2 {
      font-size: 1.125rem;
    }

    .v-card-text {
      margin-top: 4px;
      font-size: 0.875rem;
    }
  }
</style>
