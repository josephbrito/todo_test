<script setup>
import CardVue from "./Card.vue";
</script>

<template>
  <main class="main">
    <CardVue />
  </main>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 10vh);
  background: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 20px;
}
</style>
