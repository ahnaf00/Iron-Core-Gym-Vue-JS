<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Static demo data — replace with API call
const members = ref([
    { id: 1, name: 'Jake Miller', plan: 'Premium', joined: 'May 10, 2026', status: 'Active' },
    { id: 2, name: 'Sara Chen', plan: 'Basic', joined: 'May 09, 2026', status: 'Active' },
    { id: 3, name: 'Omar Hassan', plan: 'Elite', joined: 'May 08, 2026', status: 'Inactive' },
    { id: 4, name: 'Priya Sharma', plan: 'Premium', joined: 'May 07, 2026', status: 'Active' },
    { id: 5, name: 'Lucas Oliveira', plan: 'Basic', joined: 'May 06, 2026', status: 'Active' },
])

const statusClass = (status) =>
    status === 'Active'
        ? 'bg-green-400/10 text-green-400'
        : 'bg-red-400/10 text-red-400'

const planClass = (plan) => ({
    'Elite': 'bg-neon-green/10 text-neon-green',
    'Premium': 'bg-yellow-400/10 text-yellow-400',
    'Basic': 'bg-white/5 text-gray-400',
}[plan] ?? 'bg-white/5 text-gray-400')
</script>

<template>
    <div class="bg-black border border-white/10">

        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h3 class="text-white font-heading font-bold uppercase tracking-wider text-sm">
                Recent Members
            </h3>
            <RouterLink :to="{ name: 'admin.members' }"
                class="text-neon-green text-xs uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1">
                View All <i class="fa-solid fa-arrow-right text-[10px]" />
            </RouterLink>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-white/10">
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">Name</th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">Plan</th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">Joined</th>
                        <th class="text-left text-gray-500 uppercase tracking-wider text-xs font-medium px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in members" :key="member.id"
                        class="border-b border-white/5 hover:bg-white/3 transition-colors">
                        <td class="px-6 py-4 text-white font-medium">{{ member.name }}</td>
                        <td class="px-6 py-4">
                            <span class="text-xs font-bold uppercase tracking-wider px-2 py-1"
                                :class="planClass(member.plan)">
                                {{ member.plan }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-gray-400">{{ member.joined }}</td>
                        <td class="px-6 py-4">
                            <span class="text-xs font-bold uppercase tracking-wider px-2 py-1"
                                :class="statusClass(member.status)">
                                {{ member.status }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<style scoped></style>