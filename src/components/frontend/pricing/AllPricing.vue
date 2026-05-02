<script setup>

</script>

<template>
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Toggle Switch -->
            <div class="flex justify-center items-center mb-16 gap-4">
                <span class="text-white font-bold uppercase tracking-wider" id="monthly-label">Monthly</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" id="pricing-toggle">
                    <div
                        class="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-neon-green after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-white/20">
                    </div>
                </label>
                <span class="text-gray-500 font-bold uppercase tracking-wider" id="yearly-label">Yearly <span
                        class="text-neon-green text-xs ml-1">(Save 20%)</span></span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                <!-- Beginner Plan -->
                <div
                    class="border border-white/10 bg-black p-8 flex flex-col group hover:border-white/30 transition-all duration-300">
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-4">Beginner</h3>
                    <p class="text-gray-400 text-sm mb-6">Perfect for starters looking to get fit.</p>
                    <div class="mb-8">
                        <span class="text-4xl font-bold text-white price-amount" data-monthly="29"
                            data-yearly="279">$29</span>
                        <span class="text-gray-500 price-period">/ Month</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-grow text-gray-400 text-sm">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> 06:00 -
                            22:00 Access</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Standard
                            Equipment</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Locker
                            Room Access</li>
                        <li class="flex items-center gap-3 opacity-50"><i class="fa-solid fa-xmark"></i> Personal
                            Trainer</li>
                        <li class="flex items-center gap-3 opacity-50"><i class="fa-solid fa-xmark"></i> Nutrition Guide
                        </li>
                    </ul>
                    <a href="#"
                        class="block text-center py-3 border border-white/20 text-white font-heading font-bold uppercase tracking-wider hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300">
                        Choose Plan
                    </a>
                </div>

                <!-- Pro Plan (Highlighted) -->
                <div
                    class="border-2 border-neon-green bg-white/5 p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_20px_rgba(57,255,20,0.1)]">
                    <div class="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold uppercase px-4 py-1">
                        Recommended</div>
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-4">Pro Athlete</h3>
                    <p class="text-gray-400 text-sm mb-6">For dedicated gym goers.</p>
                    <div class="mb-8">
                        <span class="text-5xl font-bold text-neon-green price-amount" data-monthly="49"
                            data-yearly="469">$49</span>
                        <span class="text-gray-500 price-period">/ Month</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-grow text-gray-300 text-sm font-medium">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> 24/7 Gym
                            Access</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> All
                            Equipment</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Free Group
                            Classes</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> 1 Personal
                            Session/mo</li>
                        <li class="flex items-center gap-3 opacity-50"><i class="fa-solid fa-xmark"></i> Nutrition Guide
                        </li>
                    </ul>
                    <a href="#"
                        class="block text-center py-4 bg-neon-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 clip-path-slant">
                        Choose Plan
                    </a>
                </div>

                <!-- Athlete Plan -->
                <div
                    class="border border-white/10 bg-black p-8 flex flex-col group hover:border-white/30 transition-all duration-300">
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-4">Elite</h3>
                    <p class="text-gray-400 text-sm mb-6">Maximum performance package.</p>
                    <div class="mb-8">
                        <span class="text-4xl font-bold text-white price-amount" data-monthly="89"
                            data-yearly="859">$89</span>
                        <span class="text-gray-500 price-period">/ Month</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-grow text-gray-400 text-sm">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> 24/7 VIP
                            Access</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> All
                            Equipment + Sauna</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Unlimited
                            Classes</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> 4 Personal
                            Sessions/mo</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-neon-green"></i> Full
                            Nutrition Guide</li>
                    </ul>
                    <a href="#"
                        class="block text-center py-3 border border-white/20 text-white font-heading font-bold uppercase tracking-wider hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300">
                        Choose Plan
                    </a>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped></style>