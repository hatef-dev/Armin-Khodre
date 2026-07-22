<template>
  
  <Banner>
    <Header></Header>
  </Banner>
</template>
<script>
import Banner from '@/components/Banner.vue';
import Header from '@/components/Header.vue';
export default {
  name: "HomeView",
  components: {
    Banner,
    Header
  }
}
</script>