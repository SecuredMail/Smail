<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-sidebar">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="logo mx-auto h-10 w-auto" src="https://img.icons8.com/nolan/64/gmail-new.png"
                    alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a Smail
                    Account
                </h2>
                <h2 class="text-center leading-9 tracking-tight text-gray-900">Enter your details
                </h2>
            </div>

            <form class="space-y-6" action="#" method="POST">
                <BirthDatePicker />
                <GenderPicker />

                <div>
                    <PhoneNumberInput />
                </div>

                <div class="next_button flex justify-end">
                    <button type="next"
                        class="flex justify-center rounded-md bg-button px-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-background hover:text-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import PhoneNumberInput from '@/components/phoneNumberInput/phoneNumberInput.vue'
import BirthDatePicker from '@/components/birthDatePicker.vue'
import GenderPicker from '@/components/genderPicker.vue'
export default {
    components: {
        PhoneNumberInput,
        BirthDatePicker,
        GenderPicker,
    }
}
</script>

<style scoped>
.logo {
    width: 100px;
    height: 100px;
}
</style>