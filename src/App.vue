<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  overflow-x: hidden;
  border: none;
  margin: 0;
  padding: 0;

  background: #f6f6f6;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  border: none;
  margin: 0;
  padding: 0;

  height: 100vh;

  align-items: center;
  justify-content: center;
  display: flex;

  margin-top: 5rem;

  zoom: 80%;
}
</style>
