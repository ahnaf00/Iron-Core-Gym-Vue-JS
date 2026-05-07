<script setup>

defineProps({
    entry:{
        type:Object,
        default:null,
    },
    islast:{
        type:Boolean,
        default:false
    },
})

</script>

<template>

    <td 
        v-if="entry"
        class="p-6 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors"
        :class="{ 'border-r border-white/10': !islast }"
    >
        
        <span class="block font-bold uppercase text-white group-hover:text-black">{{ entry.className }}</span>
        <span class="text-xs opacity-70">{{ entry.trainer }}</span>
    </td>

    <td 
        v-else
        class="p-6"
        :class="{ 'border-r border-white/10': !islast }"    
    ></td>

</template>

<style scoped></style>