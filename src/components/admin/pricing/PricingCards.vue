<!-- src/components/admin/pricing/PricingCards.vue -->
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    plans: { type: Array, required: true },
})

const emit = defineEmits(['edit', 'delete'])

// ── Delete confirm ────────────────────────────────────────────
const pendingDelete = ref(null)
const askDelete = (plan) => { pendingDelete.value = plan }
const confirmDelete = () => { emit('delete', pendingDelete.value.id); pendingDelete.value = null }

// ── Helpers ───────────────────────────────────────────────────
const statusClass = (s) => s === 'Active'
    ? 'bg-green-400/10 text-green-400'
    : 'bg-red-400/10 text-red-400'
</script>

<template>
    <div>

        <!-- Plan cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <div v-for="plan in plans" :key="plan.id" class="relative border flex flex-col" :class="plan.highlighted
                ? 'border-neon-green bg-neon-green/5'
                : 'border-white/10 bg-black'">

                <!-- Most Popular badge -->
                <div v-if="plan.highlighted"
                    class="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-green text-black text-xs font-bold uppercase tracking-wider px-3 py-0.5">
                    Most Popular
                </div>

                <!-- Card header -->
                <div class="p-6 border-b" :class="plan.highlighted ? 'border-neon-green/20' : 'border-white/10'">
                    <div class="flex items-start justify-between gap-2 mb-4">
                        <h3 class="text-white font-heading font-bold uppercase tracking-wider text-lg">
                            {{ plan.name }}
                        </h3>
                        <span class="text-xs font-bold uppercase tracking-wider px-2 py-1 shrink-0"
                            :class="statusClass(plan.status)">
                            {{ plan.status }}
                        </span>
                    </div>

                    <!-- Price -->
                    <div class="flex items-baseline gap-1">
                        <span class="text-neon-green font-bold text-4xl tabular-nums">${{ plan.price }}</span>
                        <span class="text-gray-500 text-sm">{{ plan.period }}</span>
                    </div>
                    <p class="text-gray-400 text-sm mt-2">{{ plan.description }}</p>
                </div>

                <!-- Features list -->
                <div class="p-6 flex-1">
                    <ul class="space-y-2">
                        <li v-for="(feat, i) in plan.features" :key="i"
                            class="flex items-start gap-2 text-sm text-gray-300">
                            <i class="fa-solid fa-check text-neon-green text-xs mt-1 shrink-0" />
                            {{ feat }}
                        </li>
                    </ul>
                </div>

                <!-- Actions -->
                <div class="px-6 pb-6 flex gap-3">
                    <button
                        class="flex-1 py-2 border border-white/20 text-gray-400 text-xs font-bold uppercase tracking-wider hover:text-neon-green hover:border-neon-green transition-colors"
                        @click="emit('edit', plan)">
                        <i class="fa-solid fa-pen-to-square mr-1" /> Edit
                    </button>
                    <button
                        class="py-2 px-4 border border-white/20 text-gray-500 text-xs font-bold uppercase tracking-wider hover:text-red-400 hover:border-red-400/40 transition-colors"
                        @click="askDelete(plan)" aria-label="Delete plan">
                        <i class="fa-solid fa-trash" />
                    </button>
                </div>

            </div>

            <!-- Empty state -->
            <div v-if="plans.length === 0" class="col-span-full py-16 text-center text-gray-600 border border-white/10">
                <i class="fa-solid fa-tags text-3xl mb-3 block" />
                <p>No pricing plans yet. Add one to get started.</p>
            </div>
        </div>

    </div>

    <!-- Delete confirm -->
    <Teleport to="body">
        <div v-if="pendingDelete" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            @click.self="pendingDelete = null">
            <div class="bg-dark-surface border border-white/10 p-8 w-full max-w-sm mx-4">
                <h3 class="text-white font-heading font-bold uppercase tracking-wider mb-2">Delete Plan</h3>
                <p class="text-gray-400 text-sm mb-6">
                    Are you sure you want to delete the
                    <span class="text-white font-medium">{{ pendingDelete.name }}</span> plan?
                    This action cannot be undone.
                </p>
                <div class="flex gap-3">
                    <button
                        class="flex-1 py-2.5 border border-white/20 text-gray-400 text-sm font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors"
                        @click="pendingDelete = null">
                        Cancel
                    </button>
                    <button
                        class="flex-1 py-2.5 bg-red-500 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-colors"
                        @click="confirmDelete">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped></style>