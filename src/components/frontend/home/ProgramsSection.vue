<script setup>
import { ref } from 'vue'

const programs = ref([
  {
    id: 1,
    name: 'Bodybuilding',
    description: 'Build muscle and strength with our specialized hypertrophy programs designed by experts.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 2,
    name: 'Yoga & Flex',
    description: 'Improve flexibility, balance, and mental clarity in our calm, dedicated yoga studio.',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 3,
    name: 'CrossFit',
    description: 'High-intensity functional movements to push your limits and boost endurance.',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
])
</script>

<template>
    <section id="classes" class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Our Programs</span>
                <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mt-2 uppercase">Choose Your <span
                        class="text-neon-green">Style</span></h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Class Card 1 -->
                <div v-for="program in programs" :key="program.id"
                    class="group relative overflow-hidden h-96"
                    :class="program.featured ? 'border-t-4 border-neon-green border-x border-b border-white/10 transform md:-translate-y-4':'border border-white/10'"
                    >
                    <img :src="program.image" :alt="program.name"
                        alt="Bodybuilding"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90">
                    </div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <h3
                            class="text-2xl font-heading font-bold text-white mb-2 uppercase group-hover:text-neon-green transition-colors">
                            {{ program.name }}</h3>
                        <p class="text-gray-300 text-sm mb-4 line-clamp-2">{{ program.description }}</p>
                        <a href="#"
                            class="text-neon-green font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped></style>