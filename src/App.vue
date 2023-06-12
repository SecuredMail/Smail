<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-background">
    <RouterView />
    <siteNavigation />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import siteNavigation from '@/components/siteNavigation.vue'

export default {
  name: "App",
  components: {
            siteNavigation,
        }
}
</script>

<style lang="scss" scoped>

</style>