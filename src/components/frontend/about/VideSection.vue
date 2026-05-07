<script setup>

import { ref } from 'vue'

const videoUrl  = ref('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')
const embedUrl  = ref('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1')
const showModal = ref(false)

function openModal()  { showModal.value = true  }
function closeModal() { showModal.value = false }

</script>

<template>
    <section class="relative h-[600px] bg-fixed bg-cover bg-center flex items-center justify-center" :style="{ backgroundImage: `url('${videoUrl}')`} ">

        <div class="absolute inset-0 bg-black/70"></div>

        <div class="relative z-10 text-center">
            <button type="button"
                class="w-24 h-24 rounded-full bg-neon-green text-black flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-110 transition-transform duration-300 animate-pulse group"
                aria-label="Play Video"
                @click="openModal"
            >
                <i class="fa-solid fa-play ml-2"></i>
            </button>
            <h2 class="text-3xl font-heading font-bold text-white uppercase mt-8 tracking-wider">See Us In Action</h2>
        </div>
    </section>
  <!-- Video modal -->
    <Transition name="fade">
        <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Gym Video"
        @click.self="closeModal"
        >
        <!-- Close button -->
        <button
            type="button"
            class="absolute top-6 right-6 text-white hover:text-neon-green transition-colors text-3xl"
            aria-label="Close video"
            @click="closeModal"
        >
            <i class="fa-solid fa-xmark" />
        </button>

        <!-- Embed -->
        <div class="w-full max-w-4xl aspect-video">
            <iframe
            :src="embedUrl"
            class="w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            title="IronCore Gym Video"
            />
        </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>