<template>
    <!-- Sidebar -->
    <div class="bg-gray-200 w-1/6 h-screen">
        <div class="py-4 px-6">
            <!-- Account Profile -->
            <div class="flex flex-col tj:flex-row tj:items-center tj:space-x-4">
                <div class="flex -space-x-2 overflow-hidden">
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" />
                </div>
                <div class="name-email">
                    <h4 class="text-lg font-medium">Your Name</h4>
                    <p class="email text-gray-500 ">example@gmail.com</p>
                </div>
            </div>
            <hr class="my-4 border-gray-900" />
            <div class="flex justify-center items-center">
                <button
                    class="bg-button text-white hover:bg-white hover:text-button rounded-full py-1 px-4 sm:px-3 md:px-6 mt-4 mb-4 flex items-center">
                    <span class="text-3xl sm:text-2xl md:text-4xl mr-2 mb-1">+</span>
                    <span class="text-base sm:text-lg md:text-xl">New</span>
                </button>
            </div>
        </div>
        <div class="w-full ">
            <!-- Sidebar Navigation -->
            <ul class="space-y-4 mt-10">
                <li
                    class="px-6 py-1 bg-grey-200 text-gray-700 hover:bg-gray-100 hover:text-button border-l-4 hover:border-button flex items-center gap-4">
                    <img class="hidden sm:flex" width="35" height="35" src="https://img.icons8.com/windows/96/inbox.png"
                        alt="inbox" />
                    <a href="#">Inbox</a>
                </li>
                <li
                    class="px-6 py-1 bg-grey-200 text-gray-700 hover:bg-gray-100 hover:text-button border-l-4 hover:border-button flex items-center gap-4">
                    <img class="hidden sm:flex" width="35" height="35" src="https://img.icons8.com/ios/100/sent--v1.png"
                        alt="Sent" />
                    <a href="#">Sent</a>
                </li>
                <li
                    class="px-6 py-1 bg-grey-200 text-gray-700 hover:bg-gray-100 hover:text-button border-l-4 hover:border-button flex items-center gap-4">
                    <img class="hidden sm:flex" width="35" height="35" src="https://img.icons8.com/ios/100/hearts--v1.png"
                        alt="Drafts" />
                    <a href="#">Drafts</a>
                </li>
                <li
                    class="px-6 py-1 bg-grey-200 text-gray-700 hover:bg-gray-100 hover:text-button border-l-4 hover:border-button flex items-center gap-4">
                    <img class="hidden sm:flex" width="35" height="35" src="https://img.icons8.com/ios/100/clock--v3.png"
                        alt="Snooze" />
                    <a href="#">Snooze</a>
                </li>
                <li
                    class="px-6 py-1 bg-grey-200 text-gray-700 hover:bg-gray-100 hover:text-button border-l-4 hover:border-button flex items-center gap-4">
                    <img class="hidden sm:flex" width="35" height="35" src="https://img.icons8.com/ios/100/trash--v1.png"
                        alt="Trash" />
                    <a href="#">Trash</a>
                </li>
                <!-- Add more sidebar items here -->
            </ul>
        </div>
        <div class="w-full mt-12">
            <h1 class="text-xl text-gray-500 px-8 mb-4">Labels</h1>
            <ul class="space-y-4 py-1">
                <li class="hover:bg-gray-100 py-1 px-7"><span class="badge gap-5 ">
                        <span class="badge-dot bg-gray-500"></span>
                        Personal
                    </span></li>
                <li class="hover:bg-gray-100 py-1 px-7"><span class="badge gap-5">
                        <span class="badge-dot bg-red-700"></span>
                        School
                    </span></li>
                <li class="hover:bg-gray-100 py-1 px-7"><span class="badge gap-5">
                        <span class="badge-dot bg-yellow-800"></span>
                        Office
                    </span></li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    setup() {
        return {};
    },
};
</script>
  
<style scoped>
.badge {
    display: inline-flex;
    align-items: center;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
}

.badge-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.5rem;
}





/* Media query for small screens */
@media (max-width: 640px) {
    .name-email {
        display: none;
    }

    .tj:hidden {
        display: inline-block;
    }

    .tj:flex-row {
        flex-direction: column;
    }
}

@media (max-width: 930px) {
    .email {
        display: none;
    }
}
</style>
  