<script setup>

</script>

<template>
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <!-- Text Left -->
                <div class="space-y-8">
                    <div>
                        <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Our Story</span>
                        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mt-2 uppercase leading-tight">
                            Built For <span class="text-neon-green">Greatness</span></h2>
                    </div>
                    <p class="text-gray-400 leading-relaxed text-lg">
                        IronCore Gym was founded in 2010 with a single mission: to create a training environment that
                        pushes you to your absolute limits. What started as a small garage gym has evolved into a
                        premier fitness destination for athletes, bodybuilders, and fitness enthusiasts alike.
                    </p>
                    <p class="text-gray-400 leading-relaxed">
                        We believe that strength is earned, not given. Our philosophy centers on old-school hard work
                        combined with modern sports science. We provide the tools; you provide the sweat.
                    </p>
                    <div class="pt-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Signature_sample.svg"
                            alt="Founder Signature" class="h-12 invert opacity-70">
                        <p class="text-white font-bold mt-2">James "The Iron" Sterling <span
                                class="text-neon-green text-sm font-normal ml-2">/ Founder</span></p>
                    </div>
                </div>

                <!-- Image Right -->
                <div class="relative">
                    <div class="relative z-10 aspect-[4/5] overflow-hidden border-2 border-white/5">
                        <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1887&auto=format&fit=crop"
                            alt="Gym Interior"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-neon-green/10 z-0 -z-10"></div>
                    <div class="absolute -top-6 -right-6 w-1/2 h-1/2 border-2 border-neon-green z-0"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>