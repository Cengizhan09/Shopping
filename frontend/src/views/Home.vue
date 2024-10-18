<template>
  <section class="home">
    <Commercial
      class="home__collection"
      btnText="SHOP COLLECTIONS"
      :styleObj="sale"
      @click.native="goToShop"
    >
      <div class="commercial__sale-container">
        <div class="commercial__sale-container__text-wrapper">
          <h2><span class="commercial__sale-text">LATEST COLLECTIONS 2024</span></h2>
        </div>
      </div>
    </Commercial>
    <Newsletter class="home__newsletter" />
    <Commercial
      class="home__new-stuff"
      btnText="DISCOVER BOARDS"
      :styleObj="newStuff"
      @click.native="goToShop"
    >
      <div class="commercial__sale-container">
        <div class="commercial__sale-container__text-wrapper">
          <h2><span class="commercial__sale-text">NEW ARRIVALS</span></h2>
        </div>
      </div>
    </Commercial>
    <Commercial
      btnText="GEAR UP NOW"
      :styleObj="match"
      class="home__match bg-darker"
      @click.native="goToShop"
    >
      <div class="commercial__sale-container">
        <div class="commercial__sale-container__text-wrapper">
          <h2><span class="commercial__sale-text">GEAR UP</span></h2>
          <h4>FIND YOUR PERFECT FIT</h4>
          <h2><span class="commercial__sale-text">UNLEASH YOUR POTENTIAL</span></h2>
        </div>
      </div>
    </Commercial>
  </section>
</template>





<script>
import Commercial from "@/components/products/Commercial.vue";
import Newsletter from "@/components/newsletter/Newsletter.vue";

export default {
  name: "Home",
  components: { Commercial, Newsletter },
  data() {
    return {
      sale: {
        image: "skateboard.jpg",
        saleText: "SPRING",
      },
      newStuff: {
        image: "news.jpg",
        saleText: "BOARDS",
      },
      match: {
        image: "sunshine.jpg",
      },
    };
  },
  methods: {
    goToShop() {
      this.$router.push("/shop"); 
    },
  },
};
</script>


<style lang="scss" scoped>
.home {
  background-color: #222;

  @include desktop {
    display: grid;
    grid-template-areas:
      "collection newStuff"
      "newsletter newsletter"
      "match match";
    grid-template-columns: 49.6vw 49.6vw;
    grid-template-rows: 70vh 45vh 85vh;
  }

  .commercial__sale-text {
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
    padding: 1rem 2rem;
    font-size: 1.5em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1.5em;
    border-radius: 5px;
    transition: transform 0.4s ease, background 0.4s ease;
    @include desktop {
      font-size: 1.8em;
    }

    &:hover {
      transform: scale(1.1);
      background: rgba(0, 0, 0, 0.9);
    }
  }

  .commercial__sale-container__text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 55vh;
    padding: 0 1rem;
    text-align: center;

    h4 {
      font-size: 1em;
      background-color: #333;
      color: #fff;
      max-width: fit-content;
      padding: 0.5rem 1.5rem;
      border-radius: 5px;
      margin-bottom: 1rem; 
      @include desktop {
        font-size: 1.2em;
      }
    }

    h2 {
      align-self: center;
      text-align: center;
      margin-bottom: 1rem; 
    }
  }

  .commercial__sale-container {
    @include desktop {
      min-width: fit-content;
      min-height: 68vh;
    }
    min-width: 100vw;
    min-height: 65vh;
  }

  &__new-stuff {
    filter: grayscale(75%);
    max-width: 100%;
    border-left: 5px solid rgba($color: getColor("primary"), $alpha: 0.5);
    .commercial__sale-container__text-wrapper {
      min-height: 47vh;
      margin-top: 10rem;
    }
    @include desktop {
      grid-area: newStuff;
      .commercial__sale-container {
        min-height: 53vh;
      }
      .commercial__sale-container__text-wrapper {
        margin-top: 0;
        min-height: 47vh;
      }
    }
  }

  &__match {
    .commercial__sale-container__text-wrapper {
      min-height: 47vh;
      margin-top: 10rem;
    }
    @include desktop {
      grid-area: match;
    }
  }

  &__newsletter {
    @include desktop {
      grid-area: newsletter;
    }
  }

  &__collection {
    @include tablet {
      background-position: center -25rem;
    }
    @include desktop {
      grid-area: collection;
    }
    .commercial__sale-container {
      min-height: 40vh;
      @include desktop {
        min-height: 53vh;
      }
    }
    .commercial__sale-container__text-wrapper {
      min-height: 47vh;
    }
  }
}
</style>



