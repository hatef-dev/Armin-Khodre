<template>
  <div class="">
    <router-view :key="$route.path" />
  </div>
</template>
<script>
export default {
  name: "App",
}
</script>
<style>
body{
  cursor: url('@/assets/image.png');
}

</style>