<script setup>

</script>

<template>
    <aside class="w-full lg:w-1/3 lg:pl-8 space-y-12">
        <div class="lg:sticky lg:top-24 space-y-12">

            <!-- Search Widget -->
            <div class="bg-black border border-white/10 p-8">
                <h3 class="text-xl font-heading font-bold text-white uppercase mb-6 border-l-4 border-neon-green pl-3">
                    Search</h3>
                <form class="relative" onsubmit="event.preventDefault();">
                    <input type="text" placeholder="Search..."
                        class="w-full bg-dark-surface border border-white/20 p-4 text-white placeholder-gray-500 focus:border-neon-green focus:outline-none transition-colors">
                    <button type="submit"
                        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-neon-green transition-colors">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>

            <!-- Categories Widget -->
            <div class="bg-black border border-white/10 p-8">
                <h3 class="text-xl font-heading font-bold text-white uppercase mb-6 border-l-4 border-neon-green pl-3">
                    Categories</h3>
                <ul class="space-y-4">
                    <li>
                        <a href="#"
                            class="flex justify-between items-center text-gray-400 hover:text-neon-green transition-colors group">
                            <span><i
                                    class="fa-solid fa-chevron-right text-xs mr-2 text-neon-green opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                Fitness</span>
                            <span class="text-sm bg-white/5 px-2 py-1 rounded">(12)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex justify-between items-center text-gray-400 hover:text-neon-green transition-colors group">
                            <span><i
                                    class="fa-solid fa-chevron-right text-xs mr-2 text-neon-green opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                Nutrition</span>
                            <span class="text-sm bg-white/5 px-2 py-1 rounded">(8)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex justify-between items-center text-gray-400 hover:text-neon-green transition-colors group">
                            <span><i
                                    class="fa-solid fa-chevron-right text-xs mr-2 text-neon-green opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                Lifestyle</span>
                            <span class="text-sm bg-white/5 px-2 py-1 rounded">(5)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex justify-between items-center text-gray-400 hover:text-neon-green transition-colors group">
                            <span><i
                                    class="fa-solid fa-chevron-right text-xs mr-2 text-neon-green opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                Weight Loss</span>
                            <span class="text-sm bg-white/5 px-2 py-1 rounded">(3)</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Tags Widget -->
            <div class="bg-black border border-white/10 p-8">
                <h3 class="text-xl font-heading font-bold text-white uppercase mb-6 border-l-4 border-neon-green pl-3">
                    Popular Tags</h3>
                <div class="flex flex-wrap gap-2">
                    <a href="#"
                        class="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-neon-green hover:text-black hover:border-neon-green transition-colors">#gym</a>
                    <a href="#"
                        class="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-neon-green hover:text-black hover:border-neon-green transition-colors">#fitness</a>
                    <a href="#"
                        class="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-neon-green hover:text-black hover:border-neon-green transition-colors">#healthy</a>
                    <a href="#"
                        class="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-neon-green hover:text-black hover:border-neon-green transition-colors">#cardio</a>
                    <a href="#"
                        class="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-neon-green hover:text-black hover:border-neon-green transition-colors">#trainer</a>
                    <a href="#"
                        class="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-neon-green hover:text-black hover:border-neon-green transition-colors">#workout</a>
                </div>
            </div>

            <!-- Banner Widget -->
            <div class="relative h-64 overflow-hidden border border-white/10 group">
                <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop"
                    alt="Promo"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                    <span class="text-neon-green font-bold uppercase tracking-wider text-sm mb-2">Limited
                        Offer</span>
                    <h3 class="text-2xl font-heading font-bold text-white uppercase mb-4">50% Off First
                        Month</h3>
                    <a href="join.html"
                        class="px-6 py-2 bg-neon-green text-black font-bold uppercase text-sm hover:bg-white transition-colors">Join
                        Now</a>
                </div>
            </div>

        </div>
    </aside>
</template>

<style scoped></style>