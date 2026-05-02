<script setup>

</script>

<template>
    <section id="hero" class="relative h-screen min-h-[600px] flex items-center justify-center bg-black">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Gym Background" class="w-full h-full object-cover opacity-60">
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 container mx-auto px-4 text-center">
            <h2 class="text-neon-green font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Welcome to IronCore
            </h2>
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase text-white mb-6 leading-tight">
                Forge Your <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Best
                    Self</span>
            </h1>
            <p class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Unleash your potential with state-of-the-art equipment, elite personal trainers, and a community driven
                by results.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing"
                    class="px-8 py-4 bg-neon-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 clip-path-slant">
                    Get Started
                </a>
                <a href="classes.html"
                    class="px-8 py-4 border border-white text-white font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 clip-path-slant">
                    View Schedule
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped></style>