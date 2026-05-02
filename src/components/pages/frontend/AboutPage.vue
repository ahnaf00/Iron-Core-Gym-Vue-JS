<script setup>
import Footer from '../../common/Footer.vue';
import Header from '../../common/Header.vue';
import AboutHeader from '../../frontend/about/AboutHeader.vue';
import DetailsSection from '../../frontend/about/DetailsSection.vue';
import VideSection from '../../frontend/about/VideSection.vue';
import WhyChooseUsSection from '../../frontend/about/WhyChooseUsSection.vue';

</script>

<template>
    <main class="flex-grow pt-20">
        <Header />
        <AboutHeader />
        <DetailsSection />
        <VideSection />
        <WhyChooseUsSection />
        <Footer />
    </main>
</template>

<style scoped></style>