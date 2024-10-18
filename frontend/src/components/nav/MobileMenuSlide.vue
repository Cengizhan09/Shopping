<template>
  <Transition :transitionObj="{ name: 'slide-left', appear: true }">
    <div class="wrapper">
      <Modal v-if="showLoginModal" @close="showLoginModal = false">
        <Login @close="showLoginModal = false" />
      </Modal>
      <div class="apu">
        <router-link
          @click.native="$emit('close')"
          to="/profile"
          v-if="isLoggedIn"
        >
          <nav-icon :iconSize="icon.size" icon="manage_accounts" />
        </router-link>
        <div class="apu__login-register" v-if="!isLoggedIn">
          <Button value="Register" @click="showRegister" />
          <Button value="Login" @click="showLogin" />
        </div>
      </div>

      <ul class="navigation-list">
        <router-link @click.native="$emit('close')" to="/">
          <li class="navigation-list__item"><h2>HOME</h2></li>
        </router-link>
        <router-link @click.native="$emit('close')" to="/shop">
          <li class="navigation-list__item"><h2>SHOP</h2></li>
        </router-link>
        <router-link to="" @click.native="$emit('close')">
          <li class="navigation-list__item"><h2>ABOUT</h2></li>
        </router-link>
        <router-link to="" @click.native="$emit('close')">
          <li class="navigation-list__item"><h2>CONTACT</h2></li>
        </router-link>
        <router-link
          to="/admin/dashboard"
          v-if="isAdmin"
          @click.native="$emit('close')"
        >
          <li class="navigation-list__item"><h2>ADMIN</h2></li>
        </router-link>
      </ul>
      <div class="form-input">
        <label for="search"
          ><nav-icon :iconSize="icon.search" icon="search"
        /></label>
        <input type="search" name="search" />
      </div>
    </div>
  </Transition>
</template>
<script>
import Transition from "@/components/transition/Transition.vue";
import NavIcon from "./NavIcon";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import Login from "@/components/Login.vue";

export default {
  components: { Transition, NavIcon, Button, Modal, Login },
  computed: {
    isLoggedIn() {
      return this.$store.getters["user/getUserToken"];
    },
    isAdmin() {
      return this.$store.getters["user/getUser"].role === "admin";
    },
  },
  data() {
    return {
      icon: {
        size: "icon--big",
        search: "icon--medium",
      },
      showLoginModal: false,
      showRegisterModal: false,
    };
  },
  methods: {
    showRegister() {
      this.$router.push({ name: "Register" });
      this.$emit("close");
    },
    showLogin() {
      this.showLoginModal = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: getColor("primary");
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100%;
  min-width: 70vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  box-shadow: 5px 0 15px rgba($color: getColor("primary"), $alpha: 0.5);

  @include tablet {
    min-width: 40vw;
  }
  @include desktop {
    min-width: 20vw;
  }
  i {
    display: block;
    text-align: left;
    padding-top: 1rem;
    padding-left: 1rem;
    color: getColor("secondaryElements");
  }
  .apu {
    margin-top: 2rem;
    &__login-register {
      display: flex;
      justify-content: space-evenly;
      button {
        min-width: 10rem;
        max-width: 34rem;
        background-color: getcolor("primary");
        color: #222;
        font-size: 1em;
        cursor: pointer;
        &:last-child {
          background-color: lightenColor("secondaryElements", 20%);
          color: #fff;
        }
      }
    }
  }

  .navigation-list {
    list-style-type: none;
    text-align: center;
    &__item {
      margin: 2rem 0;
    }
  }
  .form-input {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 0rem 0 8rem 0;

    i {
      color: #222;
    }
    input {
      border: 3px solid #000;
      padding: 1rem 0rem 1rem 4rem;
      outline: none;
    }
    label {
      position: absolute;
      margin-top: 0.2rem;
    }
  }
}
</style>
