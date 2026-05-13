<!-- src/components/admin/AdminMembers.vue -->
<script setup>
import { ref } from 'vue'
import MembersTable from './members/MembersTable.vue'
import MemberModal from './members/MemberModal.vue'

// ── Master data ───────────────────────────────────────────────
// TODO: replace with real API fetch (e.g. onMounted → axios.get('/api/members'))
const members = ref([
  { id: 1, name: 'Jake Miller', email: 'jake@example.com', phone: '+1 234 567 890', plan: 'Premium', joined: 'May 10, 2026', status: 'Active' },
  { id: 2, name: 'Sara Chen', email: 'sara@example.com', phone: '+1 234 567 891', plan: 'Basic', joined: 'May 09, 2026', status: 'Active' },
  { id: 3, name: 'Omar Hassan', email: 'omar@example.com', phone: '+1 234 567 892', plan: 'Elite', joined: 'May 08, 2026', status: 'Inactive' },
  { id: 4, name: 'Priya Sharma', email: 'priya@example.com', phone: '+1 234 567 893', plan: 'Premium', joined: 'May 07, 2026', status: 'Active' },
  { id: 5, name: 'Lucas Oliveira', email: 'lucas@example.com', phone: '+1 234 567 894', plan: 'Basic', joined: 'May 06, 2026', status: 'Active' },
  { id: 6, name: 'Aisha Karimi', email: 'aisha@example.com', phone: '+1 234 567 895', plan: 'Elite', joined: 'May 05, 2026', status: 'Active' },
  { id: 7, name: 'Dante Cruz', email: 'dante@example.com', phone: '+1 234 567 896', plan: 'Basic', joined: 'May 04, 2026', status: 'Inactive' },
  { id: 8, name: 'Mei Tanaka', email: 'mei@example.com', phone: '+1 234 567 897', plan: 'Premium', joined: 'May 03, 2026', status: 'Active' },
])

// ── Modal state ───────────────────────────────────────────────
const showModal = ref(false)
const editTarget = ref(null)   // null = Add mode, member object = Edit mode

function openAdd() { editTarget.value = null; showModal.value = true }
function openEdit(member) { editTarget.value = member; showModal.value = true }
function closeModal() { showModal.value = false }

// ── CRUD handlers ─────────────────────────────────────────────
let nextId = members.value.length + 1

function handleSave(formData) {
  if (editTarget.value) {
    const idx = members.value.findIndex(m => m.id === editTarget.value.id)
    if (idx !== -1) members.value[idx] = { ...members.value[idx], ...formData }
  } 
  else 
  {
    members.value.unshift({
      id: nextId++,
      joined: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      ...formData,
    })
  }
  closeModal()
}

function handleDelete(id) {
  members.value = members.value.filter(m => m.id !== id)
}
</script>

<template>
  <div class="space-y-6">

    <!-- Page heading -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider">Members</h2>
        <p class="text-gray-500 text-sm mt-1">{{ members.length }} total members</p>
      </div>
    </div>

    <!-- Table (owns search + filter toolbar internally) -->
    <MembersTable :members="members" @edit="openEdit" @delete="handleDelete" />

    <!-- Add / Edit modal -->
    <MemberModal v-if="showModal" :member="editTarget" @save="handleSave" @close="closeModal" />

  </div>
</template>

<style scoped></style>