<template>
  <header
    class="sticky top-0 bg-message-notifiacation shadow-lg h-20 flex items-center"
  >
    <nav class="container flex flex-col sm: flex-row gap-4 text-black py-6">
      <div class="flex items-center gap-3">
        <MailLogo />
        <p class="text-2xl hidden sm:flex">SMAIL</p>
        <div class="flex items-center gap-3 flex-1 justify-end">
          <button
            @click="navigateToLogin"
            class="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-button hover:text-white rounded text-indigo-700 px-6 py-2 text-xs"
          >
            Sign In
          </button>
        </div>
        <button
          @click="navigateToRegister"
          class="mx-2 my-2 bg-button transition duration-150 ease-in-out hover:bg-white hover:text-button rounded text-white px-6 py-2 text-xs hidden sm:flex"
        >
          Create an account
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import MailLogo from "./mailLogo.vue"
export default {
  setup() {
    return {};
  },
  components: {
    MailLogo
  },
  methods: {
  navigateToLogin() {
    this.$router.push({ name: 'login' }); // Ensure 'login' is the name of the route for LoginView
  },
  navigateToRegister() {
    this.$router.push({ name: 'register' }); // Ensure 'login' is the name of the route for LoginView
  },
  
}

};
</script>

<style scoped>
.container {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
