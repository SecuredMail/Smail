<template>
    <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Enter Birth day</label>
        <div class="flex justify-center mt-2">
            <VDatePicker v-model="date" :select-attribute="selectAttribute" />

        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>