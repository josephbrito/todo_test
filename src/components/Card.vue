<script setup>
import SearchVue from "./Search.vue";
import DataVue from "./Data.vue";
</script>

<script generic>
export default {
  inject: ["items"],
  data() {
    return {
      datas: this.items,
    };
  },

  methods: {
    deleteData(index) {
      this.datas.splice(index, 1);
    },
  },
};
</script>
<template>
  <div class="card">
    <SearchVue />
    <DataVue v-for="(item, index) in datas">
      <template #data>{{ item.name }}</template>
      <template #delete
        ><button class="btn_del" @click="() => deleteData(index)">
          X
        </button></template
      >
    </DataVue>
  </div>
</template>

<style scoped>
.card {
  width: 25%;
  min-height: 80%;
  background: #444;
  border-radius: 2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn_del {
  background: rgba(255, 0, 0, 0.1);
  padding: 10px;
  color: #f5f5f5;
  cursor: pointer;
  border: none;
  transition: 0.3s ease-in;
}

.btn_del:hover {
  background: none;
  color: #ff0000;
  border: 1px solid #ff0000;
}

@media (max-width: 1024px) {
  .card {
    width: 70%;
  }
}

@media (max-width: 780px) {
  .card {
    width: 90%;
  }
}
</style>
