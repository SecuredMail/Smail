<template>
    <div class="flex flex-col min-h-screen font-Roboto bg-sidebar grid-cols-12">
        <SiteNavigation />
        <div class="container flex flex-col sm: flex-row gap-4 text-black py-6 ">
            <section id="hero" class="w-full pb-24">
                <BaseSection>
                    <div
                        class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left ">
                        <span data-aos="fade-right" data-aos-once="true"
                            class="text-base text-button font-semibold uppercase">Sign Up Today</span>
                        <h1 data-aos="fade-right" data-aos-once="true"
                            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
                            The World's <span class="text-header-gradient">Fastest Growing</span> <br>Web App
                        </h1>
                        <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
                            Get more done with Smail. Now integrated with Google Chat, Google Meet, <br>and more, all in one
                            place.
                        </p>
                        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="700"
                            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
                            <BaseButton class="max-w-full px-8 py-4 bg-button border border-[#0c66ee] text-white">
                                Get Started
                            </BaseButton>
                            <BaseButton
                                class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center text-header-gradient">
                                <span>Download App</span>
                                <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
                            </BaseButton>
                        </div>
                        <!-- <div class="relative image-container hidden sm:flex lg:col-span-4 justify-end">
                            <div class="w-full">
                                <img data-aos="fade-up" data-aos-once="true"
                                    :src="require('@/assets/fileCover.png')" class="-mt-4 max-h-full" alt="" />
                            </div>
                        </div> -->
                    </div>
                    <!-- <div class="top-left-image hidden sm:flex flex-col-reverse col-span-12 lg:col-span-6">
                            <div class="w-full">
                                <img data-aos="fade-up" data-aos-once="true"
                                    :src="require('@/assets/pattern/hero-image.webp')" class="-mt-4 max-h-full" alt="" />
                            </div>
                        </div> -->
                    <img data-aos="fade-up" data-aos-delay="300" :src="require('@/assets/pattern/ellipse-1.png')"
                        class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6" />
                    <img data-aos="fade-up" data-aos-delay="300" :src="require('@/assets/pattern/ellipse-2.png')"
                        class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6" />
                    <img data-aos="fade-up" data-aos-delay="300" :src="require('@/assets/pattern/ellipse-3.png')"
                        class="hidden sm:block absolute bottom-56 right-24 w-6" />
                    <img data-aos="fade-up" data-aos-delay="300" :src="require('@/assets/pattern/star.png')"
                        class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8" />
                </BaseSection>
            </section>
        </div>
        <FooterBar class="mt-auto" />
    </div>
</template>

<script>
import SiteNavigation from '@/components/siteNavigation.vue';
import FooterBar from '@/components/footerBar.vue'
export default {
    components: {
        SiteNavigation,
        FooterBar,
    },
    setup() {


        return {}
    }
}
</script>

<style scoped>
.text-header-gradient {
    background: rgb(57, 132, 244);
    background: linear-gradient(169.4deg, #3984f4 -6.01%, #5D5FEF 20.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.container {
    top: 200px;
    position: relative;
    max-width: 1625px;
    max-height: 1000px;
    align-items: center;
    display: flex;
    justify-content: flex-start;
}

.image-container {
    width: 800px;
    height: 500px;
}
</style>