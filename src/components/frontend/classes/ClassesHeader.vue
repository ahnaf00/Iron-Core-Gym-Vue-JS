<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="relative h-80 flex items-center justify-center bg-black overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                alt="Classes Background" class="w-full h-full object-cover opacity-50">
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>
        <div class="relative z-10 text-center">
            <h1 class="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-4 tracking-wider">Class
                Schedule</h1>
            <nav aria-label="Breadcrumb" class="flex justify-center">
                <ol class="flex items-center space-x-2 text-sm text-gray-400 uppercase tracking-wide">
                    <RouterLink to="/" class="hover:text-neon-green transition-colors">Home</RouterLink>
                    <li><span class="text-neon-green">/</span></li>
                    <li class="text-white" aria-current="page">Classes</li>
                </ol>
            </nav>
        </div>
    </section>
</template>

<style scoped></style>