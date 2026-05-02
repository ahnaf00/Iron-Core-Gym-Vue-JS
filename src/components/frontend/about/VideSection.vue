<script setup>

</script>

<template>
    <section class="relative h-[600px] bg-fixed bg-cover bg-center flex items-center justify-center"
        style="background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop');">
        <div class="absolute inset-0 bg-black/70"></div>
        <div class="relative z-10 text-center">
            <button type="button"
                class="w-24 h-24 rounded-full bg-neon-green text-black flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-110 transition-transform duration-300 animate-pulse group"
                aria-label="Play Video">
                <i class="fa-solid fa-play ml-2"></i>
            </button>
            <h2 class="text-3xl font-heading font-bold text-white uppercase mt-8 tracking-wider">See Us In Action</h2>
        </div>
    </section>
</template>

<style scoped></style>