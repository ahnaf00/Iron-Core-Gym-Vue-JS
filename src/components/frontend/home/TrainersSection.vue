<script setup>

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
                <!-- Trainer 1 -->
                <div class="group relative">
                    <div class="relative overflow-hidden aspect-[3/4] mb-4">
                        <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop"
                            alt="Trainer"
                            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                        <!-- Social Overlay -->
                        <div
                            class="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-instagram"></i></a>
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="text-xl font-heading font-bold text-white uppercase">John Doe</h3>
                        <p class="text-neon-green text-sm font-bold tracking-wide">CrossFit Expert</p>
                    </div>
                </div>

                <!-- Trainer 2 -->
                <div class="group relative">
                    <div class="relative overflow-hidden aspect-[3/4] mb-4">
                        <img src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1887&auto=format&fit=crop"
                            alt="Trainer"
                            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                        <!-- Social Overlay -->
                        <div
                            class="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="text-xl font-heading font-bold text-white uppercase">Jane Smith</h3>
                        <p class="text-neon-green text-sm font-bold tracking-wide">Yoga Instructor</p>
                    </div>
                </div>

                <!-- Trainer 3 -->
                <div class="group relative">
                    <div class="relative overflow-hidden aspect-[3/4] mb-4">
                        <img src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=1887&auto=format&fit=crop"
                            alt="Trainer"
                            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                        <!-- Social Overlay -->
                        <div
                            class="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="text-xl font-heading font-bold text-white uppercase">Mike Tyson</h3>
                        <p class="text-neon-green text-sm font-bold tracking-wide">Boxing Coach</p>
                    </div>
                </div>

                <!-- Trainer 4 -->
                <div class="group relative">
                    <div class="relative overflow-hidden aspect-[3/4] mb-4">
                        <img src="https://images.unsplash.com/photo-1583468982260-87e832ac14e7?q=80&w=1889&auto=format&fit=crop"
                            alt="Trainer"
                            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                        <!-- Social Overlay -->
                        <div
                            class="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"
                                class="w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full hover:bg-white transition-colors"><i
                                    class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="text-xl font-heading font-bold text-white uppercase">Sarah Connor</h3>
                        <p class="text-neon-green text-sm font-bold tracking-wide">Cardio Specialist</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>