<template>
  <section
    class="commercial"
    :style="{
      'background-image': 'url(' + getImage + ')',
    }"
  >
    <div class="commercial__inner">
      <slot></slot>
      <Button :value="btnText" />
    </div>
  </section>
</template>
<script>
import Button from "@/components/Button.vue";
export default {
  props: {
    btnText: {
      type: String,
      required: true,
    },
    styleObj: {
      type: Object,
      required: true,
      image: {
        type: String,
        required: true,
      },
    },
  },
  components: { Button },

  computed: {
    getImage() {
      return require(`@/assets/${this.styleObj.image}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.commercial {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
  &__inner {
    background-color: rgba($color: getColor("secondary"), $alpha: 0.7);
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    justify-content: center;
    button {
      padding: 2rem;
      border: 5px solid getColor("primary");
      background-color: getColor("secondaryElements");
      display: block;
      min-width: 25rem;
      align-self: center;
      color: getColor("primary");
    }
  }
}
</style>
