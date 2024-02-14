<script setup lang="ts">
  import ToolListItem from '@/components/04_parts/home/ToolListItem.vue'
  import toolList from '@/constants/toolList'
</script>

<template>
  <section id="tool-list" class="mt-14">
    <div id="tool-list-container">
      <ToolListItem v-for="tool in toolList" :key="tool.path" :tool="tool" />
    </div>
  </section>
</template>

<style scoped>
  #tool-list-container {
    display: flex;
    justify-content: center;
  }
</style>
