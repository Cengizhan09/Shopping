<template>
  <nav class="navigation">
    <NavIcon
      :class="`${rotate} hide-desktop`"
      :iconSize="icon.size"
      icon="segment"
      @click.native="toggleMenu"
    />
    <div class="form-input">
      <label for="search"
        ><nav-icon :iconSize="icon.search" icon="search"
      /></label>
      <input type="search" name="search" />
    </div>
    <NavIcon
      :class="`${popup}`"
      :iconSize="icon.size"
      icon="shopping_cart"
      @click.native="toggleCart"
    />
    <MobileMenuSlide v-if="showMenu" @close="showMenu = false" />
    <CartSlide v-if="showCart" @close="showCart = false" />
  </nav>
</template>
<script>
import MobileMenuSlide from "./MobileMenuSlide.vue";
import CartSlide from "./CartSlide";
import NavIcon from "./NavIcon.vue";
export default {
  components: { NavIcon, MobileMenuSlide, CartSlide },
  computed: {
    rotate() {
      return this.rotateIcon ? "rotate-icon" : "rotate-default";
    },
    popup() {
      return this.popoutIcon ? "popup-icon" : "popup-default";
    },

    isLoggedIn() {
      return this.$store.getters["user/getToken"];
    },
  },
  data() {
    return {
      icon: {
        size: "icon--big",
      },
      rotateIcon: false,
      showMenu: false,
      showCart: false,
      popoutIcon: false,
    };
  },
  methods: {
    toggleMenu() {
      if (this.showCart) {
        this.showCart = !this.showCart;
        this.popoutIcon = !this.popoutIcon;
      }
      this.showMenu = !this.showMenu;
      this.rotateIcon = !this.rotateIcon;
    },
    toggleCart() {
      if (this.showMenu) {
        this.showMenu = !this.showMenu;
        this.rotateIcon = !this.rotateIcon;
      }
      this.showCart = !this.showCart;
      this.popoutIcon = !this.popoutIcon;
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  position: sticky;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  bottom: 0;
  left: 0;
  max-height: 15vh;
  min-height: 15vh;
  background-color: getColor("secondary");
  margin-top: auto;
  border-top: 5px solid rgba($color: getColor("primary"), $alpha: 0.5);
  .hide-desktop {
    @include desktop {
      display: none;
    }
  }
  i {
    margin-top: 1rem;
    color: getColor("secondaryText");
    z-index: 99999;
    align-self: center;
    @include desktop {
      font-size: 3.5em;
      margin-top: 0;
      margin-right: 4rem;
    }
  }
  .rotate-icon {
    transform: rotate(180deg);
    text-shadow: 10px 0px getColor("primary");
    transition: all 0.5s ease;
  }
  .rotate-default {
    transition: all 0.5s ease;
  }
  .popup-icon {
    transform: scale(1.2);
    text-shadow: 1px 0px getColor("primary");
    transition: all 0.5s ease;
  }
  .popup-default {
    transition: all 0.5s ease;
  }
  &__list {
    list-style-type: none;
  }
  .form-input {
    display: none;
    flex-direction: column;
    margin: 1rem auto;
    max-width: 50rem;
    align-self: center;
    @include desktop {
      display: flex;
      flex-grow: 1;
    }
    i {
      color: #222;
      @include desktop {
        margin-top: 0.5rem;
        margin-left: 1rem;
        font-size: 3em;
      }
    }
    input {
      border: 3px solid #000;
      padding: 2rem 2rem 2rem 6rem;
      outline: none;
      color: getColor("secondaryElements");
      font-weight: bold;
    }
    label {
      position: absolute;
      margin-top: 0.2rem;
    }
  }
}
</style>
