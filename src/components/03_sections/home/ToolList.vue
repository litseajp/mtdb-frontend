<script setup lang="ts">
  import ToolListItem from '@/components/04_parts/home/ToolListItem.vue'
  import toolList from '@/constants/toolList'
</script>

<template>
  <section id="tool-list">
    <div id="tool-list-container">
      <ToolListItem v-for="tool in toolList" :key="tool.path" :tool="tool" class="tool-list-item" />
    </div>
  </section>
</template>

<style scoped>
  #tool-list {
    margin-top: 48px;
  }

  #tool-list-container {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    #tool-list {
      margin-top: 24px;
    }

    #tool-list-container {
      display: block;
      width: 100%;
    }

    .tool-list-item:not(:first-child) {
      margin-top: 28px;
    }
  }
</style>
