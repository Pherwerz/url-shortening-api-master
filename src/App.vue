<template>
  <Layout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./components/Layout.vue";

export default defineComponent({
  name: "App",
  components: { Layout },
});
</script>

<style lang="scss">
:root {
  --dark-gray: hsl(0, 0%, 63%);
  --black: hsl(0, 0%, 0%);
  --white: hsl(0, 0%, 100%);
  --very-dark-gray: hsl(0, 0%, 27%);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 65%;

  @media screen and (max-width: 991.98px) {
    font-size: 50%;
  }

  @media screen and (max-width: 767.98px) {
    font-size: 65%;
  }
}

body {
  font-size: 1.8rem;
  background-color: var(--very-light-gray);
  font-family: "Spartan", sans-serif;
  display: relative;
  font-weight: 500;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>

 <!-- Features
  Pricing
  Resources

  Login
  Sign Up

  More than just shorter links

  Build your brand’s recognition and get detailed insights 
  on how your links are performing.

  Get Started
  
  Shorten a link here...

  Shorten It!

  Advanced Statistics

  Track how your links are performing across the web with our 
  advanced statistics dashboard.

  Brand Recognition

  Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.

  Detailed Records

  Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.

  Fully Customizable

  Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.

  Boost your links today

  Get Started

  Features

  Link Shortening
  Branded Links
  Analytics

  Resources

  Blog
  Developers
  Support

  Company

  About
  Our Team
  Careers
  Contact -->