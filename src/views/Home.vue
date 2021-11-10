<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>This is Home Page</h1>

  <button @click="goToDaybook" class="btn btn-primary">Primary</button>
  <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
  <button @click="goToDaybook" class="btn btn-success">Success</button>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
button {
  padding: 5px;
  margin: 5px;
}
</style>
