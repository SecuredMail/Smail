<template>
    <div>
        <div class="flex items-center justify-between">
            <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Gender
            </label>
        </div>

        <div class="mt-2 relative">
            <select id="Lname" name="Lname" autocomplete="Lname"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-button sm:text-sm sm:leading-6">
                <option value="" disabled selected>Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="rather not say">rather not say</option>
            </select>

        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>