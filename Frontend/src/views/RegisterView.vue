<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-sidebar">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="logo mx-auto h-10 w-auto" src="https://img.icons8.com/nolan/64/gmail-new.png"
                    alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a Smail
                    Account
                </h2>
                <h2 class="text-center leading-9 tracking-tight text-gray-900">Enter your name
                </h2>
            </div>

            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                    <div class="mt-2">
                        <input id="name" name="username" type="name" autocomplete="name" required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Last
                            name(optional)</label>
                    </div>

                    <div class="mt-2">
                        <input id="Lname" name="Lname" type="name" autocomplete="Lname"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
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
import UserService from '@/services/UserService'; // Adjust the path as necessary

export default {
    data() {
        return {
            user: {
                firstName: '',
                lastName: ''
            }
        };
    },
    methods: {
        registerUser() {
            UserService.createUser(this.user)
                .then(response => {
                    alert('Registration successful');
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Registration failed: ', error.response);
                    alert('Registration failed');
                });
        }
    }
}
</script>

<style scoped>
.logo {
    width: 100px;
    height: 100px;
}

</style>