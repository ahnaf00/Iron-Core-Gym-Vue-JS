<script setup>
import { ref } from 'vue'
import TrainerCard from '../../ui/TrainerCard.vue';

const trainers = ref([
  {
    id: 1,
    name: 'John Doe',
    role: 'CrossFit Expert',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop',
    socials: [
      { id: 1, icon: 'fa-brands fa-facebook-f', href: '#' },
      { id: 2, icon: 'fa-brands fa-instagram',  href: '#' },
      { id: 3, icon: 'fa-brands fa-twitter',    href: '#' },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1887&auto=format&fit=crop',
    socials: [
      { id: 1, icon: 'fa-brands fa-facebook-f', href: '#' },
      { id: 2, icon: 'fa-brands fa-instagram',  href: '#' },
    ],
  },
  {
    id: 3,
    name: 'Mike Tyson',
    role: 'Boxing Coach',
    image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=1887&auto=format&fit=crop',
    socials: [
      { id: 1, icon: 'fa-brands fa-facebook-f', href: '#' },
      { id: 2, icon: 'fa-brands fa-instagram',  href: '#' },
    ],
  },
  {
    id: 4,
    name: 'Sarah Connor',
    role: 'Cardio Specialist',
    image: 'https://images.unsplash.com/photo-1583468982260-87e832ac14e7?q=80&w=1889&auto=format&fit=crop',
    socials: [
      { id: 1, icon: 'fa-brands fa-facebook-f', href: '#' },
      { id: 2, icon: 'fa-brands fa-instagram',  href: '#' },
    ],
  },
  {
    id: 5,
    name: 'David Goggins',
    role: 'Mental Toughness',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
    socials: [
      { id: 1, icon: 'fa-brands fa-facebook-f', href: '#' },
      { id: 2, icon: 'fa-brands fa-instagram',  href: '#' },
    ],
  },
  {
    id: 6,
    name: 'Amanda Nunes',
    role: 'MMA Trainer',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    socials: [
      { id: 1, icon: 'fa-brands fa-facebook-f', href: '#' },
      { id: 2, icon: 'fa-brands fa-instagram',  href: '#' },
    ],
  },
])

const skills = ref([
  { id: 1, label: 'Cardio & Endurance',       percentage: 90 },
  { id: 2, label: 'Strength & Conditioning',  percentage: 95 },
  { id: 3, label: 'Yoga & Flexibility',        percentage: 85 },
])
</script>

<template>
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

                <TrainerCard
                    v-for="trainer in trainers"
                    :key="trainer.id"
                    :trainer="trainer"
                    variant="page"
                ></TrainerCard>

            </div>

            <!-- Skills Section -->
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Stats</span>
                    <h2 class="text-3xl font-heading font-bold text-white mt-2 uppercase">Our <span
                            class="text-neon-green">Expertise</span></h2>
                </div>

                <div class="space-y-8">
                    <!-- Skill 1 -->
                    <div v-for="skill in skills" :key="skill.id">
                        <div class="flex justify-between items-end mb-2">
                            <span class="text-white font-heading font-bold uppercase tracking-wider">{{ skill.label }}</span>
                            <span class="text-neon-green font-bold">{{ skill.percentage }}%</span>
                        </div>
                        <div class="w-full bg-white/10 h-3">
                            <div class="bg-neon-green h-full transition-all duration-700"
                            :style="{ width:`${skill.percentage}%` }"
                            ></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<style scoped></style>