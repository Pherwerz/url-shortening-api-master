<template>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./Footer/Footer.vue";

export default defineComponent({
  name: "Layout",
  components: { Footer },
});
</script>
