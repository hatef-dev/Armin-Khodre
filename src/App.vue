<template>
  <div class="">
    <router-view class="bg-[#F1F5F9]" dir="rtl" v-persian-digits :key="$route.path" />
  </div>
</template>
<script>
export default {
  name: "App",
}
</script>
<style>


</style>