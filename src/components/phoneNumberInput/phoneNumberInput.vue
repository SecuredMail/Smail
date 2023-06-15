<template>
    <div class="flex items-center justify-between">
      <label for="phone-no" class="block text-sm font-medium leading-6 text-gray-900">phone-no
      </label>
    </div>
    <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
</template>

<script>
import { ref } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import "@/components/phoneNumberInput/vue-tel-input.css";

export default {
  components: {
    VueTelInput,
  },

  setup() {
    const phone = ref(null);

    return {
      phone,
    };
  },
};

</script>

<style lang="scss" scoped></style>