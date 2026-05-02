<script setup>
import Footer from '../../common/Footer.vue';
import Header from '../../common/Header.vue';
import AllPricing from '../../frontend/pricing/AllPricing.vue';
import PricingFAQ from '../../frontend/pricing/PricingFAQ.vue';
import PricingHeader from '../../frontend/pricing/PricingHeader.vue';


</script>

<template>
    <main class="flex-grow pt-20">
        <Header/>
        <PricingHeader/>
        <AllPricing/>
        <PricingFAQ/>
        <Footer/>
    </main>
</template>

<style scoped>

</style>