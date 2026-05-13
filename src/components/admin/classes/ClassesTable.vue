<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    classes: { type: Array, required: true },
})

const emit = defineEmits(['edit', 'delete'])

// ── Search + filters ──────────────────────────────────────────
const search = ref('')
const filterDay = ref('All')
const filterStatus = ref('All')

const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const statuses = ['All', 'Active', 'Inactive']

const filtered = computed(() =>
    props.classes.filter(c => {
        const matchSearch = c.name.toLowerCase().includes(search.value.toLowerCase()) ||
            c.trainer.toLowerCase().includes(search.value.toLowerCase())
        const matchDay = filterDay.value === 'All' || c.day === filterDay.value
        const matchStatus = filterStatus.value === 'All' || c.status === filterStatus.value
        return matchSearch && matchDay && matchStatus
    })
)

// ── Capacity bar fill ─────────────────────────────────────────
const capacityPct = (c) => Math.min(Math.round((c.enrolled / c.capacity) * 100), 100)
const capacityColor = (c) => {
    const pct = capacityPct(c)
    if (pct >= 90) return 'bg-red-400'
    if (pct >= 60) return 'bg-yellow-400'
    return 'bg-neon-green'
}

// ── Delete confirm ────────────────────────────────────────────
const pendingDelete = ref(null)
const askDelete = (cls) => { pendingDelete.value = cls }
const confirmDelete = () => { emit('delete', pendingDelete.value.id); pendingDelete.value = null }

// ── Helpers ───────────────────────────────────────────────────
const statusClass = (s) => s === 'Active'
    ? 'bg-green-400/10 text-green-400'
    : 'bg-red-400/10 text-red-400'
</script>

<template>
    <div class="bg-black border border-white/10">

        <!-- Toolbar -->
        <div class="flex flex-wrap items-center gap-3 px-6 py-4 border-b border-white/10">

            <!-- Search -->
            <div class="relative flex-1 min-w-48">
                <i
                    class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                <input v-model="search" type="text" placeholder="Search class or trainer..."
                    class="w-full bg-white/5 border border-white/10 pl-8 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
            </div>

            <!-- Day filter -->
            <select v-model="filterDay"
                class="bg-white/5 border border-white/10 px-3 py-2 text-sm text-gray-400 focus:border-neon-green focus:outline-none transition-colors">
                <option v-for="d in days" :key="d" :value="d">
                    {{ d === 'All' ? 'All Days' : d }}
                </option>
            </select>

            <!-- Status filter -->
            <select v-model="filterStatus"
                class="bg-white/5 border border-white/10 px-3 py-2 text-sm text-gray-400 focus:border-neon-green focus:outline-none transition-colors">
                <option v-for="s in statuses" :key="s" :value="s">
                    {{ s === 'All' ? 'All Statuses' : s }}
                </option>
            </select>

            <!-- Add button -->
            <button
                class="ml-auto flex items-center gap-2 px-4 py-2 bg-neon-green text-black text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors shrink-0"
                @click="emit('edit', null)">
                <i class="fa-solid fa-plus" /> Add Class
            </button>

        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-white/10">
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">Class
                        </th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">
                            Schedule</th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">
                            Trainer</th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">
                            Capacity</th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">
                            Status</th>
                        <th class="text-right text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">
                            Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cls in filtered" :key="cls.id"
                        class="border-b border-white/5 hover:bg-white/3 transition-colors">
                        <!-- Name -->
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <span
                                    class="w-8 h-8 bg-neon-green/10 text-neon-green flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-dumbbell text-xs" />
                                </span>
                                <span class="text-white font-medium">{{ cls.name }}</span>
                            </div>
                        </td>

                        <!-- Schedule: day + time stacked -->
                        <td class="px-6 py-4">
                            <p class="text-white text-xs font-bold uppercase tracking-wider">{{ cls.day }}</p>
                            <p class="text-gray-500 text-xs mt-0.5">{{ cls.time }}</p>
                        </td>

                        <!-- Trainer -->
                        <td class="px-6 py-4 text-gray-400">{{ cls.trainer }}</td>

                        <!-- Capacity: enrolled / capacity + mini bar -->
                        <td class="px-6 py-4 min-w-32">
                            <div class="flex items-center gap-2">
                                <span class="text-gray-400 tabular-nums text-xs">
                                    {{ cls.enrolled }}/{{ cls.capacity }}
                                </span>
                                <div class="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-300"
                                        :class="capacityColor(cls)" :style="{ width: capacityPct(cls) + '%' }" />
                                </div>
                            </div>
                        </td>

                        <!-- Status -->
                        <td class="px-6 py-4">
                            <span class="text-xs font-bold uppercase tracking-wider px-2 py-1"
                                :class="statusClass(cls.status)">
                                {{ cls.status }}
                            </span>
                        </td>

                        <!-- Actions -->
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-end gap-3">
                                <button class="text-gray-500 hover:text-neon-green transition-colors"
                                    @click="emit('edit', cls)" aria-label="Edit class">
                                    <i class="fa-solid fa-pen-to-square" />
                                </button>
                                <button class="text-gray-500 hover:text-red-400 transition-colors"
                                    @click="askDelete(cls)" aria-label="Delete class">
                                    <i class="fa-solid fa-trash" />
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- Empty state -->
                    <tr v-if="filtered.length === 0">
                        <td colspan="6" class="px-6 py-16 text-center text-gray-600">
                            <i class="fa-solid fa-calendar-xmark text-2xl mb-3 block" />
                            No classes match your search.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Row count -->
        <div class="px-6 py-3 border-t border-white/10 text-xs text-gray-600">
            Showing {{ filtered.length }} of {{ classes.length }} classes
        </div>

    </div>

    <!-- Delete confirm -->
    <Teleport to="body">
        <div v-if="pendingDelete" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            @click.self="pendingDelete = null">
            <div class="bg-dark-surface border border-white/10 p-8 w-full max-w-sm mx-4">
                <h3 class="text-white font-heading font-bold uppercase tracking-wider mb-2">Delete Class</h3>
                <p class="text-gray-400 text-sm mb-6">
                    Are you sure you want to delete
                    <span class="text-white font-medium">{{ pendingDelete.name }}</span>?
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