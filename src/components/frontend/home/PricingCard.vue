<script setup>

const prop = defineProps({
    plan:{
        type:Object,
        require:true
    }
})

</script>

<template>

    <div 
        class="p-8 flex flex-col relative"
        :class="plan.popular
        ? 'border-2 border-neon-green transform md:-translate-y-4 bg-white/5':
        'border border-white/10 group hover:border-white/30 transition-colors'"
        >
        <div v-if="plan.popular" 
            class="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold uppercase px-3 py-1">
            Popular
        </div>

        <h3 class="text-xl font-heading font-bold text-white uppercase mb-4">{{ plan.name }}</h3>

        <div class="mb-8">
            <span class="text-4xl font-bold text-neon-green">{{ plan.price }}</span>
            <span class="text-gray-500">/ Month</span>
        </div>

        <ul class="space-y-4 mb-8 flex-grow text-gray-400 text-sm">
            <li 
                v-for="feature in plan.features"
                :key="feature.id"
                class="flex items-center gap-3"
                :class="{ 'opacity-50': !feature.included }"
                >
                <i :class="feature.included ? 'fa-solid fa-check text-neon-green':'fa-solid fa-xmark'"></i>
                {{ feature.label }}
            </li>
            
        </ul>

        <a href="#"
            class="block text-center py-3  font-heading font-bold uppercase tracking-wider transition-all duration-300"
            :class="plan.popular ? 'bg-neon-green text-black hover:bg-white'
            :'border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black'"
            >
            Enroll Now
        </a>

    </div>

</template>

<style scoped></style>