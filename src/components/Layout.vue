<template>
  <Header />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./Footer/Footer.vue";
import Header from "./Header/Header.vue";

export default defineComponent({
  name: "Layout",
  components: { Footer, Header },
});
</script>
