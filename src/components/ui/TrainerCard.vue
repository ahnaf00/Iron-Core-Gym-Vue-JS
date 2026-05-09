<!-- src/components/ui/TrainerCard.vue -->
<script setup>
defineProps({
    trainer: {
        type: Object,
        required: true,
        // Shape: { id, name, role, image, socials: [{ id, icon, href }] }
    },
    variant: {
        type: String,
        default: 'home',
        validator: (v) => ['home', 'page'].includes(v),
    },
})
</script>

<template>
    <!-- PAGE variant — bordered card with bg-black -->
    <div v-if="variant === 'page'"
        class="group relative bg-black border border-white/10 hover:border-neon-green transition-colors duration-300">
        <div class="relative overflow-hidden aspect-[3/4]">
            <img :src="trainer.image" :alt="trainer.name"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div
                class="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a v-for="social in trainer.socials" :key="social.id" :href="social.href"
                    class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors">
                    <i :class="social.icon" />
                </a>
            </div>
        </div>
        <div class="p-6 text-center">
            <h3 class="text-2xl font-heading font-bold text-white uppercase mb-1">{{ trainer.name }}</h3>
            <p class="text-neon-green text-sm font-bold tracking-wide uppercase">{{ trainer.role }}</p>
        </div>
    </div>

    <!-- HOME variant — no border wrapper, compact info -->
    <div v-else class="group relative">
        <div class="relative overflow-hidden aspect-[3/4] mb-4">
            <img :src="trainer.image" :alt="trainer.name"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div
                class="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a v-for="social in trainer.socials" :key="social.id" :href="social.href"
                    class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors">
                    <i :class="social.icon" />
                </a>
            </div>
        </div>
        <div class="text-center">
            <h3 class="text-xl font-heading font-bold text-white uppercase">{{ trainer.name }}</h3>
            <p class="text-neon-green text-sm font-bold tracking-wide">{{ trainer.role }}</p>
        </div>
    </div>
</template>

<style scoped></style>