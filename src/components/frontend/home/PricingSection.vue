<script setup>

</script>

<template>
    <section id="pricing" class="py-24 bg-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Membership Plans</span>
                <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mt-2 uppercase">Choose Your <span
                        class="text-neon-green">Tier</span></h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <!-- Basic Plan -->
                <div class="border border-white/10 p-8 flex flex-col group hover:border-white/30 transition-colors">
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-4">Basic Plan</h3>
                    <div class="mb-8">
                        <span class="text-4xl font-bold text-neon-green">$29</span>
                        <span class="text-gray-500">/ Month</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-grow text-gray-400 text-sm">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Free
                            Riding</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Unlimited
                            Equipment</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Personal
                            Trainer</li>
                        <li class="flex items-center gap-3 opacity-50"><i class="fa-solid fa-xmark"></i> Weight Losing
                            Classes</li>
                        <li class="flex items-center gap-3 opacity-50"><i class="fa-solid fa-xmark"></i> Month to Mouth
                        </li>
                    </ul>
                    <a href="#"
                        class="block text-center py-3 border border-white/20 text-white font-heading font-bold uppercase tracking-wider hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300">
                        Enroll Now
                    </a>
                </div>

                <!-- Standard Plan (Highlighted) -->
                <div
                    class="border-2 border-neon-green p-8 flex flex-col relative transform md:-translate-y-4 bg-white/5">
                    <div class="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold uppercase px-3 py-1">
                        Popular</div>
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-4">Standard Plan</h3>
                    <div class="mb-8">
                        <span class="text-4xl font-bold text-neon-green">$49</span>
                        <span class="text-gray-500">/ Month</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-grow text-gray-400 text-sm">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Free
                            Riding</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Unlimited
                            Equipment</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Personal
                            Trainer</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Weight
                            Losing Classes</li>
                        <li class="flex items-center gap-3 opacity-50"><i class="fa-solid fa-xmark"></i> Month to Mouth
                        </li>
                    </ul>
                    <a href="#"
                        class="block text-center py-3 bg-neon-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white transition-all duration-300">
                        Enroll Now
                    </a>
                </div>

                <!-- Premium Plan -->
                <div class="border border-white/10 p-8 flex flex-col group hover:border-white/30 transition-colors">
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-4">Premium Plan</h3>
                    <div class="mb-8">
                        <span class="text-4xl font-bold text-neon-green">$89</span>
                        <span class="text-gray-500">/ Month</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-grow text-gray-400 text-sm">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Free
                            Riding</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Unlimited
                            Equipment</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Personal
                            Trainer</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Weight
                            Losing Classes</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Month to
                            Mouth</li>
                    </ul>
                    <a href="#"
                        class="block text-center py-3 border border-white/20 text-white font-heading font-bold uppercase tracking-wider hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300">
                        Enroll Now
                    </a>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped></style>