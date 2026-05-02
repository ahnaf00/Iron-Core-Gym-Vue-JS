<script setup>
import Footer from '../../common/Footer.vue';
import Header from '../../common/Header.vue';
import AllBlogs from '../../frontend/blog/AllBlogs.vue';
import BlogHeader from '../../frontend/blog/BlogHeader.vue';
import BlogSidebar from '../../frontend/blog/BlogSidebar.vue';


</script>

<template>
    <main class="flex-grow pt-20">
        <Header/>
        <BlogHeader/>
        <AllBlogs/>
        <Footer/>
    </main>
</template>

<style scoped>

</style>