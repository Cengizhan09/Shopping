<template>
  <section class="admin">
    <router-view />
  </section>
</template>
<script>
export default {
  computed: {
    getUserRole() {
      return this.$store.getters["user/getUser"].role;
    },
  },

  mounted() {
    if (this.getUserRole !== "admin") {
      this.$router.push("/");
    }
  },
};
</script>
