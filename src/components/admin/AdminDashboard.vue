<!-- src/components/admin/AdminDashboard.vue -->
<script setup>
import { onMounted, ref } from 'vue'
import api from '../../axios.js'
import StatsCard from './dashboard/StatsCard.vue'
import RecentMembersTable from './dashboard/RecentMembersTable.vue'

const stats = ref([])
const isLoading = ref(true)
const error = ref(null)

const fetchDashboardStats = async () => {
  isLoading.value = true
  error.value = null

  try {
    const response = await api.get('/admin/dashboard/stats')
    const data = response.data.data

    stats.value = [
      {
        id: 1,
        icon: 'fa-solid fa-users',
        label: 'Total Members',
        value: Number(data.total_members || 0).toLocaleString(),
        trend: `+${data.new_members_this_month || 0} this mo`,
        trendUp: true,
      },
      {
        id: 2,
        icon: 'fa-solid fa-dumbbell',
        label: 'Active Trainers',
        value: String(data.total_trainers || 0),
        trend: 'Staff',
        trendUp: true,
      },
      {
        id: 3,
        icon: 'fa-solid fa-calendar-days',
        label: 'Active Classes',
        value: String(data.total_classes || 0),
        trend: 'Sessions',
        trendUp: true,
      },
      {
        id: 4,
        icon: 'fa-solid fa-envelope',
        label: 'Unread Messages',
        value: String(data.unread_messages || 0),
        trend: data.unread_messages > 0 ? 'Action needed' : 'All clear',
        trendUp: data.unread_messages === 0,
      },
    ]
  } catch (err) {
    console.error('Failed to load dashboard stats: ', err)
    error.value = 'Failed to load dashboard metrics'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchDashboardStats()
})
</script>

<template>
  <div class="space-y-8">

    <!-- Page heading -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider">Dashboard</h2>
        <p class="text-gray-500 text-sm mt-1">Welcome back. Here is your gym overview.</p>
      </div>
      <!-- Refresh button -->
      <button @click="fetchDashboardStats"
        class="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
        :disabled="isLoading">
        <i class="fa-solid fa-rotate" :class="{ 'fa-spin': isLoading }"></i>
        <span>Refresh</span>
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-12">
      <i class="fa-solid fa-spinner fa-spin text-neon-green text-3xl"></i>
      <p class="text-gray-400 text-xs uppercase tracking-widest mt-3">Loading stats...</p>
    </div>
    
     <!-- Error State -->
    <div v-else-if="error" class="p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
      <i class="fa-solid fa-triangle-exclamation mr-2"></i> {{ error }}
    </div>

    <!-- KPI Stats grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatsCard v-for="card in stats" :key="card.id" :card="card" />
    </div>

    <!-- Recent members table -->
    <RecentMembersTable />

  </div>
</template>

<style scoped></style>