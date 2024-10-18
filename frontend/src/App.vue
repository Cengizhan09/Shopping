<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Nav />
  </div>
</template>
<script>
import Header from "@/components/header/Header.vue";
import Nav from "@/components/nav/Nav.vue";
export default {
  components: { Header, Nav },
  mounted() {
    const token = sessionStorage.userToken
    if(token){
      this.$store.dispatch('user/getUser', token)
    }
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body {
  font-size: 1.6em;
  line-height: 1.6em;
}

body {
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1,
h2,
h3,
h4,
a,
button,
label {
  font-family: "Fjalla One", sans-serif;
  text-decoration: none;
  color: #000;
}

p,
h6,
li,
input,
select {
  font-family: "Cantarell", sans-serif;
  color: #000;
}
@include desktop {
  button,
  a {
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }
}
</style>
