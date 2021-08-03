<template>
  <header>
    <div class="container">
      <div class="header-logo">
        <img src="../../images/logo.svg" alt="logo" />
      </div>

      <ul>
        <li v-for="link in links" :key="link">
          <a href="#">{{ link }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      links: ["Features", "Pricing", "Resources"],
    };
  },
});
</script>
