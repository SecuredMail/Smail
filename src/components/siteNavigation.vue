<template>
    <header class="sticky top-0 bg-message-notifiacation shadow-lg h-20 flex items-center">
        <nav class="container flex flex-col sm: flex-row gap-4 text-black py-6">
            <RouterLink to="{ name: 'home'}">
                <div class="flex items-center gap-3 flex-1">
                    <img align-lest width="64" height="64" src="https://img.icons8.com/nolan/64/gmail-new.png"
                        alt="gmail-new" />
                    <p class="text-2xl">SMAIL</p>
                </div>
            </RouterLink>
            <div class="nav_aside">
                <div class="nav_aside_buttons">
                    <div class="q-pa-md q-gutter-sm">
                        <q-btn color="purple" label="Purple" />
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import QBtn from 'quasar'
import { RouterLink } from 'vue-router'
export default {
    components: {
    QBtn
  },
    setup() {


        return {}
    }
}
</script>

<style scoped>
.container {
    max-width: 1600px;
    margin: 0 auto;
}
</style>