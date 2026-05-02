<script setup>
import { ref } from 'vue'

const stats = ref([
  { id: 1, icon: 'fa-solid fa-users',         value: '1500+',  label: 'Happy Members'   },
  { id: 2, icon: 'fa-solid fa-dumbbell',       value: 'Modern', label: 'Equipment'       },
  { id: 3, icon: 'fa-solid fa-person-running', value: '50+',    label: 'Expert Trainers' },
  { id: 4, icon: 'fa-solid fa-clock',          value: '24/7',   label: 'Gym Access'      },
])
</script>

<template>
    <section
        class="py-16 bg-dark-surface border-b border-white/5 relative z-20 -mt-20 mx-4 md:mx-auto md:max-w-6xl shadow-2xl">
        <div class="container mx-auto px-4">
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div v-for="stat in stats" :key="stat.id" class="p-4 group">
                    <i :class="[stat.icon,'text-4xl text-neon-green mb-4 group-hover:scale-110 transition-transform']"></i>
                    <h3 class="text-3xl font-heading font-bold text-white mb-1">{{ stat.value }}</h3>
                    <p class="text-gray-400 text-sm uppercase tracking-wide">{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>