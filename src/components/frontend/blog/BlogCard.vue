<script setup>
const props = defineProps({
    post:{
        type:Object,
        required:true
    }
})
</script>

<template>
    <article class="bg-black border border-white/10 group hover:border-neon-green transition-all duration-300">
        <div class="relative aspect-video overflow-hidden">
            <img 
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute top-4 left-4 bg-neon-green text-black text-xs font-bold uppercase px-3 py-1">
                {{ post.category }}</div>
        </div>
        <div class="p-8">
            <div class="flex items-center gap-6 text-gray-500 text-sm mb-4">
                <span><i class="fa-regular fa-calendar-alt mr-2 text-neon-green"></i> {{ post.date }}</span>
                <span><i class="fa-regular fa-user mr-2 text-neon-green"></i>By {{ post.author }}</span>
                <span><i class="fa-regular fa-comments mr-2 text-neon-green"></i> {{ post.comments }} Comments</span>
            </div>
            <h2
                class="text-2xl font-heading font-bold text-white uppercase mb-4 group-hover:text-neon-green transition-colors">
                <a href="#">{{ post.title }}</a>
            </h2>
            <p class="text-gray-400 leading-relaxed mb-6">
                {{ post.exerpt }}
            </p>
            <a href="#"
                class="inline-block px-6 py-2 border border-white/20 text-white font-heading font-bold uppercase tracking-wider text-sm hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300">
                Read More
            </a>
        </div>
    </article>

</template>

<style scoped></style>