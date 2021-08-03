<template>
  <footer class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="https://github.com/Pherwerz">pherwerz</a>.
  </footer>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="scss" scoped>
.attribution {
  font-size: 1.1rem;
  text-align: center;

  @media screen and (max-width: 767.98px) {
    font-size: 0.8rem;
    text-align: center;
  }

  & a {
    color: hsl(228, 45%, 44%);
  }
}
</style>
