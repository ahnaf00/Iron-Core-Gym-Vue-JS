<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    members: { type: Array, required: true },
})

const emit = defineEmits(['edit', 'delete'])

// ── Search + filter ───────────────────────────────────────────
const search = ref('')
const filterPlan = ref('All')
const filterStatus = ref('All')

const plans = ['All', 'Elite', 'Premium', 'Basic']
const statuses = ['All', 'Active', 'Inactive']

const filtered = computed(() =>
    props.members.filter(m => {
        const matchSearch = m.name.toLowerCase().includes(search.value.toLowerCase()) ||
            m.email.toLowerCase().includes(search.value.toLowerCase())
        const matchPlan = filterPlan.value === 'All' || m.plan === filterPlan.value
        const matchStatus = filterStatus.value === 'All' || m.status === filterStatus.value
        return matchSearch && matchPlan && matchStatus
    })
)

// ── Delete confirm ────────────────────────────────────────────
const pendingDelete = ref(null)

function askDelete(member) { 
    pendingDelete.value = member 
}

function confirmDelete() {
    emit('delete', pendingDelete.value.id)
    pendingDelete.value = null
}

// ── Helpers ───────────────────────────────────────────────────
const statusClass = (s) => s === 'Active'
    ? 'bg-green-400/10 text-green-400'
    : 'bg-red-400/10 text-red-400'

const planClass = (p) => ({
    'Elite': 'bg-neon-green/10 text-neon-green',
    'Premium': 'bg-yellow-400/10 text-yellow-400',
    'Basic': 'bg-white/5 text-gray-400',
}[p] ?? 'bg-white/5 text-gray-400')
</script>

<template>
    <div class="bg-black border border-white/10">

        <!-- Toolbar: search + filters + add button -->
        <div class="flex flex-wrap items-center gap-3 px-6 py-4 border-b border-white/10">

            <!-- Search -->
            <div class="relative flex-1 min-w-48">
                <i
                    class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                <input v-model="search" type="text" placeholder="Search name or email..."
                    class="w-full bg-white/5 border border-white/10 pl-8 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
            </div>

            <!-- Plan filter -->
            <select v-model="filterPlan"
                class="bg-white/5 border border-white/10 px-3 py-2 text-sm text-gray-400 focus:border-neon-green focus:outline-none transition-colors">
                <option v-for="p in plans" :key="p" :value="p">{{ p === 'All' ? 'All Plans' : p }}</option>
            </select>

            <!-- Status filter -->
            <select v-model="filterStatus"
                class="bg-white/5 border border-white/10 px-3 py-2 text-sm text-gray-400 focus:border-neon-green focus:outline-none transition-colors">
                <option v-for="s in statuses" :key="s" :value="s">{{ s === 'All' ? 'All Statuses' : s }}</option>
            </select>

            <!-- Add button -->
            <button
                class="ml-auto flex items-center gap-2 px-4 py-2 bg-neon-green text-black text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors shrink-0"
                @click="emit('edit', null)">
                <i class="fa-solid fa-plus" /> Add Member
            </button>

        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-white/10">
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">Name
                        </th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">Email
                        </th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">Plan
                        </th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">
                            Joined</th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">
                            Status</th>
                        <th class="text-right text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">
                            Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Rows -->
                    <tr v-for="member in filtered" :key="member.id"
                        class="border-b border-white/5 hover:bg-white/3 transition-colors">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <span
                                    class="w-8 h-8 bg-neon-green/10 text-neon-green font-bold text-xs flex items-center justify-center shrink-0 uppercase">
                                    {{ member.name.charAt(0) }}
                                </span>
                                <span class="text-white font-medium">{{ member.name }}</span>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-400">{{ member.email }}</td>
                        <td class="px-6 py-4">
                            <span class="text-xs font-bold uppercase tracking-wider px-2 py-1"
                                :class="planClass(member.plan)">
                                {{ member.plan }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-gray-400 tabular-nums">{{ member.joined }}</td>
                        <td class="px-6 py-4">
                            <span class="text-xs font-bold uppercase tracking-wider px-2 py-1"
                                :class="statusClass(member.status)">
                                {{ member.status }}
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-end gap-3">
                                <button
                                    class="text-gray-500 hover:text-neon-green transition-colors text-xs uppercase tracking-wider"
                                    @click="emit('edit', member)" aria-label="Edit member">
                                    <i class="fa-solid fa-pen-to-square" />
                                </button>
                                <button
                                    class="text-gray-500 hover:text-red-400 transition-colors text-xs uppercase tracking-wider"
                                    @click="askDelete(member)" aria-label="Delete member">
                                    <i class="fa-solid fa-trash" />
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- Empty state -->
                    <tr v-if="filtered.length === 0">
                        <td colspan="6" class="px-6 py-16 text-center text-gray-600">
                            <i class="fa-solid fa-users-slash text-2xl mb-3 block" />
                            No members match your search.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Row count -->
        <div class="px-6 py-3 border-t border-white/10 text-xs text-gray-600">
            Showing {{ filtered.length }} of {{ members.length }} members
        </div>

    </div>

    <!-- Delete confirm dialog (inline) -->
    <Teleport to="body">
        <div v-if="pendingDelete" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            @click.self="pendingDelete = null">
            <div class="bg-dark-surface border border-white/10 p-8 w-full max-w-sm mx-4">
                <h3 class="text-white font-heading font-bold uppercase tracking-wider mb-2">Delete Member</h3>
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