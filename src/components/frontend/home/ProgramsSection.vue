<script setup>

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
                <div class="group relative overflow-hidden h-96 border border-white/10">
                    <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                        alt="Bodybuilding"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90">
                    </div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <h3
                            class="text-2xl font-heading font-bold text-white mb-2 uppercase group-hover:text-neon-green transition-colors">
                            Bodybuilding</h3>
                        <p class="text-gray-300 text-sm mb-4 line-clamp-2">Build muscle and strength with our
                            specialized hypertrophy programs designed by experts.</p>
                        <a href="#"
                            class="text-neon-green font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Class Card 2 -->
                <div
                    class="group relative overflow-hidden h-96 border-t-4 border-neon-green border-x border-b border-white/10 transform md:-translate-y-4">
                    <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop"
                        alt="Yoga"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90">
                    </div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <h3
                            class="text-2xl font-heading font-bold text-white mb-2 uppercase group-hover:text-neon-green transition-colors">
                            Yoga & Flex</h3>
                        <p class="text-gray-300 text-sm mb-4 line-clamp-2">Improve flexibility, balance, and mental
                            clarity in our calm, dedicated yoga studio.</p>
                        <a href="#"
                            class="text-neon-green font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Class Card 3 -->
                <div class="group relative overflow-hidden h-96 border border-white/10">
                    <img src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop"
                        alt="CrossFit"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90">
                    </div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <h3
                            class="text-2xl font-heading font-bold text-white mb-2 uppercase group-hover:text-neon-green transition-colors">
                            CrossFit</h3>
                        <p class="text-gray-300 text-sm mb-4 line-clamp-2">High-intensity functional movements to push
                            your limits and boost endurance.</p>
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