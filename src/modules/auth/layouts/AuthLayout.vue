<template>
  <div class="limiter">
    <div
      class="container-login100"
      style="background-image: url('./assets/bg-01.jpg')"
    >
      <div class="wrap-login100 p-t-30 p-b-50">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style lang="scss" scoped>
@import '../styles/auth.css';
@import '../styles/util.css';
</style>
