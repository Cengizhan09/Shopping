<template>
  <section class="products">

    <FilterProducts class="filter" @filter="filterProducts" />

    <div class="product-list">
      <ProductCard 
        v-for="product in filteredProducts"
        :key="product._id"
        :product="product"
        @clicked="toggleModal"
      />
    </div>

    <Modal v-if="showModal" @close="toggleModal">
      <ProductModal :product="activeProduct" @close="toggleModal" />
    </Modal>
  </section>
</template>

<script>
import ProductCard from "@/components/shop/ProductCard.vue";
import Modal from '@/components/Modal.vue';
import ProductModal from '@/components/shop/ProductModal.vue';
import FilterProducts from '@/components/shop/FilterProducts.vue';

export default {
  components: { ProductCard, Modal, ProductModal, FilterProducts },
  data() {
    return {
      showModal: false,
      activeProduct: {},
      filteredProducts: [] 
    };
  },
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    }
  },
  methods: {
    toggleModal(product) {
      this.activeProduct = product;
      this.showModal = !this.showModal;
    },
    filterProducts(selectedCategories) {

      if (selectedCategories.length > 0) {
        this.filteredProducts = this.products.filter(product => 
          selectedCategories.includes(product.category)
        );
      } else {
        this.filteredProducts = this.products;
      }
    },
    async initProducts() {
      await this.$store.dispatch("products/getProducts");
      this.filteredProducts = this.products; 
    }
  },
  mounted() {
    this.initProducts();
  }
};
</script>

<style lang="scss" scoped>
.products {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .filter {
    margin: 1rem;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
