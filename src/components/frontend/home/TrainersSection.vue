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
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socials: [
      { id: 1, icon: 'fa-brands fa-facebook-f', href: '#' },
      { id: 2, icon: 'fa-brands fa-instagram',  href: '#' },
    ],
  },
])
</script>

<template>
    <section id="trainers" class="py-24 bg-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Expert Team</span>
                <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mt-2 uppercase">Meet The <span
                        class="text-neon-green">Coaches</span></h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Trainer card -->
                <TrainerCard
                    v-for="trainer in trainers"
                    :key="trainer.id"
                    :trainer="trainer"
                />

            </div>
        </div>
    </section>
</template>

<style scoped></style>