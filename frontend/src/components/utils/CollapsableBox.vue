<template>
  <div class="collapsable">
    <div class="collapsable__header">
      <h2 class="collapsable__title">{{ title }}</h2>
      <navIcon
        @click.native="toggleCollapsed"
        :icon="icon"
        iconSize="icon--big"
      />
    </div>
    <section v-show="!isCollapsed">
      <slot></slot>
    </section>
  </div>
</template>
<script>
import NavIcon from "@/components/nav/NavIcon.vue";
export default {
  components: { NavIcon },
  props: {
    title: {
      type: String,
      required: true,
    },
    collapsedIcon: {
      type: String,
      required: true,
    },
    uncollapsedIcon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCollapsed: true,
      icon: this.collapsedIcon,
    };
  },
  methods: {
    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
      if (this.isCollapsed) {
        this.icon = this.collapsedIcon;
      } else {
        this.icon = this.uncollapsedIcon;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.collapsable {
  margin-bottom: 1rem;
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
  }
  i {
    color: getColor("secondaryElements");
  }
}
</style>
