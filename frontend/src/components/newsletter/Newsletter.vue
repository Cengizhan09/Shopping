<template lang="">
  <div class="newsletter">
    <div class="newsletter__text">
      <h2>Join Today For Insider Access</h2>
    </div>
    <div class="newsletter__input-controller">
      <input type="email" name="email" placeholder="Email" />
    </div>
    <Button value="SIGN UP" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
.newsletter {
  background-color: #222;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include desktop {
    min-height: 20vh;
    flex-direction: column; 
    align-items: center;  
  }

  h2 {
    color: #32c8cd;
    text-align: center;
    font-style: italic;
    text-shadow: 2px 10px #222;
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }

  &__input-controller {
    margin-top: 1.5rem;  
    align-self: center; 

    input {
      border: none;
      outline: none;
      padding: 1.5rem;
      min-width: 20rem;
    }
  }

  button {
    margin-top: 1.5rem;
    align-self: right;  
    color: getColor("primary");
    background-color: getColor("secondaryElements");
    border: 6px solid getColor("primary");
    padding: 1.5rem;
    min-width: 20rem;
  }
}

</style>
