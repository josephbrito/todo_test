<template>
  <div class="data">
    <slot name="data"></slot>
    <slot name="delete"></slot>
  </div>
</template>

<style scoped>
.data {
  height: 50px;
  width: 100%;
  background: #555;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
}
</style>
