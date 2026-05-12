<script setup>
const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div
        class="bg-black border border-white/10 p-6 flex flex-col gap-4 hover:border-neon-green/40 transition-colors duration-300">

        <!-- Top row: icon + trend -->
        <div class="flex items-center justify-between">
            <div class="w-10 h-10 bg-neon-green/10 flex items-center justify-center text-neon-green">
                <i :class="card.icon" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider px-2 py-1" :class="card.trendUp
                ? 'text-green-400 bg-green-400/10'
                : 'text-red-400 bg-red-400/10'">
                <i :class="card.trendUp ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'" class="mr-1" />
                {{ card.trend }}
            </span>
        </div>

        <!-- Value + label -->
        <div>
            <p class="text-3xl font-heading font-bold text-white tabular-nums">{{ card.value }}</p>
            <p class="text-gray-500 text-sm uppercase tracking-wider mt-1">{{ card.label }}</p>
        </div>

    </div>
</template>

<style scoped></style>