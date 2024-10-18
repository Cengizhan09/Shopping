<template>
  <router-link to="/">
    <img src="@/assets/sinus-logo.svg" alt="sinus_logo" class="logo" />
  </router-link>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.logo {
  min-width: 15vw;
  min-height: 10vh;
  color: getColor("primary");
  background-color: #fff;
  border-radius: 30%;
}
</style>
