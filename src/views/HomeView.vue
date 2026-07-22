<template>
  <Banner>
    <Header></Header>
  </Banner>
  <SearchModel></SearchModel>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Header from "@/components/Header.vue";
import SearchModel from "@/components/SearchModel.vue";
export default {
  name: "HomeView",
  components: {
    Banner,
    Header,
    SearchModel,
  },
};
</script>
