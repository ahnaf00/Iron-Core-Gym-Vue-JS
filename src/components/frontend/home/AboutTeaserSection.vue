<script setup>

</script>

<template>
    <section id="about" class="py-24 bg-black overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <!-- Image Grid -->
                <div class="relative">
                    <div class="relative z-10">
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                            alt="About IronCore"
                            class="w-full object-cover shadow-2xl border-2 border-white/5 grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <!-- Decor -->
                    <div
                        class="absolute -bottom-6 -right-6 w-full h-full border-2 border-neon-green z-0 hidden md:block">
                    </div>
                </div>

                <!-- Content -->
                <div class="space-y-8">
                    <div>
                        <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Who We Are</span>
                        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mt-2 uppercase leading-tight">
                            Take Your Fitness <br> To The <span class="text-neon-green">Next Level</span>
                        </h2>
                    </div>
                    <p class="text-gray-400 leading-relaxed">
                        IronCore Gym isn't just a place to workout; it's a sanctuary for those dedicated to
                        self-improvement. Founded in 2010, we've helped thousands of individuals transform their bodies
                        and minds.
                    </p>
                    <p class="text-gray-400 leading-relaxed">
                        Our philosophy is simple: Consistent effort yields undeniable results. Whether you're a beginner
                        or a pro athlete, our facility provides the atmosphere you need to succeed.
                    </p>

                    <ul class="space-y-4">
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-check text-black bg-neon-green p-1 rounded-full text-xs"></i>
                            <span class="text-white font-semibold">Professional Trainers</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-check text-black bg-neon-green p-1 rounded-full text-xs"></i>
                            <span class="text-white font-semibold">Modern Equipment</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-check text-black bg-neon-green p-1 rounded-full text-xs"></i>
                            <span class="text-white font-semibold">Fancy Gym Machines</span>
                        </li>
                    </ul>

                    <a href="about.html"
                        class="inline-block px-8 py-3 border-2 border-neon-green text-neon-green font-heading font-bold uppercase tracking-wider hover:bg-neon-green hover:text-black transition-all duration-300">
                        Read Our Story
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>