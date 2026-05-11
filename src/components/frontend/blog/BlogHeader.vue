<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="relative h-80 flex items-center justify-center bg-black overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1170&auto=format&fit=crop"
                alt="Blog Background" class="w-full h-full object-cover opacity-70" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </div>
        <div class="relative z-10 text-center">
            <h1 class="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-4 tracking-wider">
                Latest News
            </h1>
            <nav aria-label="Breadcrumb" class="flex justify-center">
                <ol class="flex items-center space-x-2 text-sm text-gray-400 uppercase tracking-wide">
                    <li>
                        <RouterLink to="/" class="hover:text-neon-green transition-colors">Home</RouterLink>
                    </li>
                    <li><span class="text-neon-green">/</span></li>
                    <li class="text-white" aria-current="page">Blog</li>
                </ol>
            </nav>
        </div>
    </section>
</template>

<style scoped></style>