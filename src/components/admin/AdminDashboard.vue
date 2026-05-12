<!-- src/components/admin/AdminDashboard.vue -->
<script setup>
import { ref } from 'vue'
import StatsCard from './dashboard/StatsCard.vue'
import RecentMembersTable from './dashboard/RecentMembersTable.vue'

const stats = ref([
  {
    id: 1,
    icon: 'fa-solid fa-users',
    label: 'Total Members',
    value: '1,240',
    trend: '+5%',
    trendUp: true,
  },
  {
    id: 2,
    icon: 'fa-solid fa-dumbbell',
    label: 'Trainers',
    value: '12',
    trend: '+2',
    trendUp: true,
  },
  {
    id: 3,
    icon: 'fa-solid fa-calendar-days',
    label: 'Active Classes',
    value: '18',
    trend: '+3',
    trendUp: true,
  },
  {
    id: 4,
    icon: 'fa-solid fa-envelope',
    label: 'New Messages',
    value: '36',
    trend: '-4',
    trendUp: false,
  },
])
</script>

<template>
  <div class="space-y-8">

    <!-- Page heading -->
    <div>
      <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider">Dashboard</h2>
      <p class="text-gray-500 text-sm mt-1">Welcome back, Admin. Here's what's happening today.</p>
    </div>

    <!-- KPI Stats grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatsCard v-for="card in stats" :key="card.id" :card="card" />
    </div>

    <!-- Recent members table -->
    <RecentMembersTable />

  </div>
</template>

<style scoped></style>