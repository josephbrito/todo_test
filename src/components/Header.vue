<template>
  <header class="header">
    <a href="https://vuejs.org/">
      <div class="logo">
        <img src="../assets/logo.svg" />
        <span>Vue.js</span>
      </div>
    </a>
  </header>
</template>

<style scoped>
.header {
  height: 10vh;
  background-color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header a {
  text-align: center;
  color: #f5f5f5;
  text-decoration: none;
}

.logo {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7em;
}

.logo img {
  height: 40px;
  width: 40px;
}

.logo:hover {
  opacity: 0.7;
}
</style>
