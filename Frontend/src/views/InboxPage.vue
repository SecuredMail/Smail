<template>
  <div class="flex h-screen">
    <div class="w-1/2 bg-gray-100">
      <!-- Left column -->
      <div class="py-4 px-6">
        <h2 class="text-lg font-bold mb-4">Left Column</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nisl ac dui ullamcorper, et volutpat neque sodales.</p>
      </div>
    </div>
    <div v-if="showThirdColumn" class="w-1/4 bg-gray-200">
      <!-- Third column -->
      <div class="py-4 px-6">
        <h2 class="text-lg font-bold mb-4">Third Column</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nisl ac dui ullamcorper, et volutpat neque sodales.</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Button</button>
      </div>
    </div>
    <div :class="{'w-1/2': !showThirdColumn, 'w-1/4': showThirdColumn}" class="bg-gray-300">
      <!-- Right column -->
      <div class="py-4 px-6">
        <h2 class="text-lg font-bold mb-4">Right Column</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nisl ac dui ullamcorper, et volutpat neque sodales.</p>
        <button @click="toggleThirdColumn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Toggle Third Column</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showThirdColumn: false,
    };
  },
  methods: {
    toggleThirdColumn() {
      this.showThirdColumn = !this.showThirdColumn;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles or overrides here */
</style>
