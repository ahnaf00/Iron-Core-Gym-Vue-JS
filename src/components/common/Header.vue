<script setup>
import { computed,ref } from 'vue';
import { RouterLink,useRoute } from 'vue-router'

</script>

<template>
    <!-- ==================== HEADER START ==================== -->
    <header class="fixed w-full top-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between h-20" aria-label="Main Navigation">

                <!-- Logo Area -->
                <div class="flex-shrink-0">
                    <a href="index.html" class="flex items-center gap-2 group" aria-label="IronCore Gym Home">
                        <i
                            class="fa-solid fa-dumbbell text-3xl text-neon-green transition-transform group-hover:rotate-[-15deg]"></i>
                        <span class="font-heading text-2xl font-bold uppercase tracking-wider text-white">Iron<span
                                class="text-neon-green">Core</span></span>
                    </a>
                </div>

                <!-- Desktop Navigation Links -->
                <div class="hidden lg:flex space-x-8">
                    <router-link to="/" class="text-sm font-bold uppercase tracking-wide hover:text-neon-green transition-colors text-neon-green"
                        aria-current="page">Home</router-link>
                    <router-link to="about" class="text-sm font-bold uppercase tracking-wide hover:text-neon-green transition-colors text-gray-300">About</router-link>
                    <router-link to="classes" class="text-sm font-bold uppercase tracking-wide hover:text-neon-green transition-colors text-gray-300">Classes</router-link>
                    <router-link to="trainers" class="text-sm font-bold uppercase tracking-wide hover:text-neon-green transition-colors text-gray-300">Trainers</router-link>
                    <router-link to="pricing" class="text-sm font-bold uppercase tracking-wide hover:text-neon-green transition-colors text-gray-300">Pricing</router-link>
                    <router-link to="blog" class="text-sm font-bold uppercase tracking-wide hover:text-neon-green transition-colors text-gray-300">Blog</router-link>
                    <router-link to="contact" class="text-sm font-bold uppercase tracking-wide hover:text-neon-green transition-colors text-gray-300">Contact</router-link>

                </div>

                <!-- CTA Button & Mobile Toggle -->
                <div class="flex items-center gap-4">
                    <!-- CTA Button -->
                    <a href="join.html"
                        class="hidden sm:inline-block px-6 py-2.5 bg-neon-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 clip-path-slant">
                        Join Now
                    </a>

                    <!-- Mobile Menu Button -->
                    <button type="button" class="lg:hidden p-2 text-gray-300 hover:text-neon-green focus:outline-none"
                        aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </nav>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div class="hidden lg:hidden bg-dark-surface border-t border-white/10" id="mobile-menu">
            <div class="px-4 pt-2 pb-6 space-y-1">
                <a href="index.html"
                    class="block px-3 py-2 text-base font-bold uppercase text-neon-green border-l-4 border-neon-green bg-white/5"
                    aria-current="page">Home</a>
                <a href="about.html"
                    class="block px-3 py-2 text-base font-bold uppercase text-gray-300 hover:text-neon-green hover:bg-white/5 hover:border-l-4 hover:border-neon-green transition-all">About</a>
                <a href="classes.html"
                    class="block px-3 py-2 text-base font-bold uppercase text-gray-300 hover:text-neon-green hover:bg-white/5 hover:border-l-4 hover:border-neon-green transition-all">Classes</a>
                <a href="trainers.html"
                    class="block px-3 py-2 text-base font-bold uppercase text-gray-300 hover:text-neon-green hover:bg-white/5 hover:border-l-4 hover:border-neon-green transition-all">Trainers</a>
                <a href="pricing.html"
                    class="block px-3 py-2 text-base font-bold uppercase text-gray-300 hover:text-neon-green hover:bg-white/5 hover:border-l-4 hover:border-neon-green transition-all">Pricing</a>
                <a href="blog.html"
                    class="block px-3 py-2 text-base font-bold uppercase text-gray-300 hover:text-neon-green hover:bg-white/5 hover:border-l-4 hover:border-neon-green transition-all">Blog</a>
                <a href="contact.html"
                    class="block px-3 py-2 text-base font-bold uppercase text-gray-300 hover:text-neon-green hover:bg-white/5 hover:border-l-4 hover:border-neon-green transition-all">Contact</a>
                <div class="pt-4">
                    <a href="join.html"
                        class="block w-full text-center px-6 py-3 bg-neon-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white transition-colors">
                        Join Now
                    </a>
                </div>
            </div>
        </div>
    </header>
    <!-- ==================== HEADER END ==================== -->
</template>

<style scoped></style>