<script setup>
import BlogSidebar from './BlogSidebar.vue';


</script>

<template>
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12">

                <!-- Main Content (2/3) -->
                <div class="w-full lg:w-2/3 space-y-16">

                    <!-- Blog Post 1 -->
                    <article
                        class="bg-black border border-white/10 group hover:border-neon-green transition-all duration-300">
                        <div class="relative aspect-video overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
                                alt="Blog Image 1"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                            <div
                                class="absolute top-4 left-4 bg-neon-green text-black text-xs font-bold uppercase px-3 py-1">
                                Fitness</div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-6 text-gray-500 text-sm mb-4">
                                <span><i class="fa-regular fa-calendar-alt mr-2 text-neon-green"></i> Jan 10,
                                    2026</span>
                                <span><i class="fa-regular fa-user mr-2 text-neon-green"></i> By Admin</span>
                                <span><i class="fa-regular fa-comments mr-2 text-neon-green"></i> 5 Comments</span>
                            </div>
                            <h2
                                class="text-2xl font-heading font-bold text-white uppercase mb-4 group-hover:text-neon-green transition-colors">
                                <a href="#">The Ultimate Guide to Upper Body Strength</a>
                            </h2>
                            <p class="text-gray-400 leading-relaxed mb-6">
                                Developing a strong upper body is crucial not just for aesthetics but for overall
                                functional fitness. In this comprehensive guide, we break down the essential compound
                                movements...
                            </p>
                            <a href="#"
                                class="inline-block px-6 py-2 border border-white/20 text-white font-heading font-bold uppercase tracking-wider text-sm hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300">
                                Read More
                            </a>
                        </div>
                    </article>

                    <!-- Blog Post 2 -->
                    <article
                        class="bg-black border border-white/10 group hover:border-neon-green transition-all duration-300">
                        <div class="relative aspect-video overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop"
                                alt="Blog Image 2"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                            <div
                                class="absolute top-4 left-4 bg-neon-green text-black text-xs font-bold uppercase px-3 py-1">
                                Nutrition</div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-6 text-gray-500 text-sm mb-4">
                                <span><i class="fa-regular fa-calendar-alt mr-2 text-neon-green"></i> Jan 05,
                                    2026</span>
                                <span><i class="fa-regular fa-user mr-2 text-neon-green"></i> By Sarah C.</span>
                                <span><i class="fa-regular fa-comments mr-2 text-neon-green"></i> 12 Comments</span>
                            </div>
                            <h2
                                class="text-2xl font-heading font-bold text-white uppercase mb-4 group-hover:text-neon-green transition-colors">
                                <a href="#">Meal Prep 101: Fueling Your Gains</a>
                            </h2>
                            <p class="text-gray-400 leading-relaxed mb-6">
                                Consistency in the kitchen is just as important as consistency in the gym. Learn how to
                                prepare healthy, macro-friendly meals for the entire week in under two hours...
                            </p>
                            <a href="#"
                                class="inline-block px-6 py-2 border border-white/20 text-white font-heading font-bold uppercase tracking-wider text-sm hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300">
                                Read More
                            </a>
                        </div>
                    </article>

                    <!-- Blog Post 3 -->
                    <article
                        class="bg-black border border-white/10 group hover:border-neon-green transition-all duration-300">
                        <div class="relative aspect-video overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1532036075302-4bd46fcb07af?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Blog Image 3"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                            <div
                                class="absolute top-4 left-4 bg-neon-green text-black text-xs font-bold uppercase px-3 py-1">
                                Lifestyle</div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-6 text-gray-500 text-sm mb-4">
                                <span><i class="fa-regular fa-calendar-alt mr-2 text-neon-green"></i> Dec 28,
                                    2025</span>
                                <span><i class="fa-regular fa-user mr-2 text-neon-green"></i> By Mike T.</span>
                                <span><i class="fa-regular fa-comments mr-2 text-neon-green"></i> 3 Comments</span>
                            </div>
                            <h2
                                class="text-2xl font-heading font-bold text-white uppercase mb-4 group-hover:text-neon-green transition-colors">
                                <a href="#">The Importance of Sleep for Recovery</a>
                            </h2>
                            <p class="text-gray-400 leading-relaxed mb-6">
                                You can train hard and eat right, but if you aren't sleeping enough, you're leaving
                                gains on the table. Discover how sleep impacts muscle growth and hormone balance...
                            </p>
                            <a href="#"
                                class="inline-block px-6 py-2 border border-white/20 text-white font-heading font-bold uppercase tracking-wider text-sm hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300">
                                Read More
                            </a>
                        </div>
                    </article>

                    <!-- Pagination -->
                    <div class="flex justify-center items-center gap-2 pt-8">
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black transition-colors">
                            <i class="fa-solid fa-chevron-left"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center bg-neon-green text-black font-bold">1</a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black transition-colors">2</a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black transition-colors">3</a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black transition-colors">
                            <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>

                </div>

                <!-- Sidebar (1/3) -->
                <BlogSidebar/>
            </div>
        </div>
    </section>
</template>

<style scoped></style>