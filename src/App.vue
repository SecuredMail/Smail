<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-background">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';

export default {
  name: "App",
}
</script>

<style lang="scss" scoped>

</style>