<script>
export default {
  inject: ["items"],
  data() {
    return {
      datas: this.items,
      message: "",
    };
  },

  methods: {
    addNew() {
      if (!this.message) {
        return;
      }
      this.datas.push({
        id: this.datas.length,
        name: this.message,
      });

      this.items = this.datas;

      this.message = "";
    },
  },
};
</script>

<template>
  <form class="search_container">
    <input
      type="text"
      class="search"
      placeholder="Digite sua tarefa"
      v-model="message"
    />
    <button
      class="btn"
      @click="
        (e) => {
          e.preventDefault();
          addNew();
        }
      "
    >
      Save
    </button>
  </form>
</template>

<style scoped>
.search_container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.search {
  background: #555;
  border: none;
  width: 100%;
  outline: none;
  padding: 2px 10px;
  transition: 0.3s ease-in;
  border-radius: 6px;
  color: #ffff;
  font-size: 1rem;

  letter-spacing: 1px;
}
.search:focus {
  background: #696969;
}
.btn {
  padding: 10px;
  background: #7fff00;
  border: none;
  color: black;
  border-radius: 2px;
  letter-spacing: 1px;
  flex: 1;
  cursor: pointer;
}
</style>
