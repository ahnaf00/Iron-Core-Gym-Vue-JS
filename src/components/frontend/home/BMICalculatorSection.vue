<script setup>

</script>

<template>
    <section id="bmi" class="py-24 bg-dark-surface relative">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <!-- Text Content -->
                <div class="space-y-6">
                    <h2 class="text-4xl font-heading font-bold text-white uppercase">Calculate Your <span
                            class="text-neon-green">BMI</span></h2>
                    <p class="text-gray-400">
                        Determine your Body Mass Index (BMI) to understand your weight category. This simple tool can
                        help you plan your fitness journey more effectively.
                    </p>

                    <div class="grid grid-cols-2 gap-4 text-sm text-gray-400 mt-8">
                        <div class="p-3 border border-white/10 text-center">
                            <span class="block text-white font-bold mb-1">Below 18.5</span>
                            Underweight
                        </div>
                        <div class="p-3 border border-white/10 text-center">
                            <span class="block text-white font-bold mb-1">18.5 - 24.9</span>
                            Healthy
                        </div>
                        <div class="p-3 border border-white/10 text-center">
                            <span class="block text-white font-bold mb-1">25.0 - 29.9</span>
                            Overweight
                        </div>
                        <div class="p-3 border border-white/10 text-center">
                            <span class="block text-white font-bold mb-1">30.0 & Above</span>
                            Obese
                        </div>
                    </div>
                </div>

                <!-- Calculator Form -->
                <div class="bg-black p-8 border border-white/10 relative">
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-6 text-center">BMI Calculator</h3>
                    <form class="space-y-4" onsubmit="event.preventDefault();">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="number" placeholder="Height / cm"
                                class="w-full bg-transparent border border-white/20 p-3 text-white focus:border-neon-green focus:outline-none transition-colors">
                            <input type="number" placeholder="Weight / kg"
                                class="w-full bg-transparent border border-white/20 p-3 text-white focus:border-neon-green focus:outline-none transition-colors">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="number" placeholder="Age"
                                class="w-full bg-transparent border border-white/20 p-3 text-white focus:border-neon-green focus:outline-none transition-colors">
                            <select
                                class="w-full bg-transparent border border-white/20 p-3 text-gray-400 focus:border-neon-green focus:outline-none transition-colors">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <button type="submit"
                            class="w-full py-3 bg-neon-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
                            Calculate Now
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped></style>