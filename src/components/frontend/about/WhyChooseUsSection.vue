<script setup>
import { ref } from 'vue'

const features = ref([
  {
    id: 1,
    icon: 'fa-solid fa-dumbbell',
    title: 'Pro Equipment',
    description: 'Train with the best. Our facility is equipped with top-tier Hammer Strength and Eleiko gear designed for serious athletes.',
  },
  {
    id: 2,
    icon: 'fa-solid fa-apple-whole',
    title: 'Nutrition Plans',
    description: 'Fuel your body right. Our certified nutritionists create personalized meal plans to maximize your gains and recovery.',
  },
  {
    id: 3,
    icon: 'fa-solid fa-brain',
    title: 'Smart Training',
    description: 'Work smarter, not just harder. We utilize data-driven training methodologies to track progress and break plateaus.',
  },
])
</script>

<template>
    <section class="py-24 bg-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Our Advantages</span>
                <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mt-2 uppercase">Why Choose <span
                        class="text-neon-green">IronCore</span></h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div
                    v-for="feature in features"
                    :key="feature.id"
                    class="p-8 border border-white/10 bg-white/5 hover:border-neon-green transition-colors group">
                    <i 
                    :class="[feature.icon,'text-5xl text-neon-green mb-6 group-hover:scale-110 transition-transform block']"></i>
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-4">{{ feature.title }}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>