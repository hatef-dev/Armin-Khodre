<template>
  <div class="">
    <router-view dir="rtl" v-persian-digits :key="$route.path" />
  </div>
</template>
<script>
export default {
  name: "App",
}
</script>
<style>


</style>