<script setup>
import { ref } from 'vue'
import TrainersTable from './trainers/TrainersTable.vue'
import TrainerModal from './trainers/TrainerModal.vue'

// ── Master data ───────────────────────────────────────────────
const trainers = ref([
  { id: 1, name: 'Alex Rodriguez', email: 'alex@ironcoregym.com', phone: '+1 234 567 001', specialty: 'Strength & Conditioning', experience: '8 Years', status: 'Active' },
  { id: 2, name: 'Mia Thompson', email: 'mia@ironcoregym.com', phone: '+1 234 567 002', specialty: 'Yoga & Flexibility', experience: '5 Years', status: 'Active' },
  { id: 3, name: 'Carlos Reyes', email: 'carlos@ironcoregym.com', phone: '+1 234 567 003', specialty: 'CrossFit', experience: '10 Years', status: 'Active' },
  { id: 4, name: 'Yuki Nakamura', email: 'yuki@ironcoregym.com', phone: '+1 234 567 004', specialty: 'Martial Arts', experience: '12 Years', status: 'Active' },
  { id: 5, name: 'Fiona Walsh', email: 'fiona@ironcoregym.com', phone: '+1 234 567 005', specialty: 'Pilates', experience: '6 Years', status: 'Inactive' },
  { id: 6, name: 'Marcus Bell', email: 'marcus@ironcoregym.com', phone: '+1 234 567 006', specialty: 'Powerlifting', experience: '9 Years', status: 'Active' },
])

// ── Modal state ───────────────────────────────────────────────
const showModal = ref(false)
const editTarget = ref(null)

const openAdd = () => { editTarget.value = null; showModal.value = true }
const openEdit = (trainer) => { editTarget.value = trainer; showModal.value = true }
const closeModal = () => { showModal.value = false }

// ── CRUD ──────────────────────────────────────────────────────
let nextId = trainers.value.length + 1

function handleSave(formData) {
  if (editTarget.value) {
    const idx = trainers.value.findIndex(t => t.id === editTarget.value.id)
    if (idx !== -1) trainers.value[idx] = { ...trainers.value[idx], ...formData }
  } else {
    trainers.value.unshift({ id: nextId++, ...formData })
  }
  closeModal()
}

function handleDelete(id) {
  trainers.value = trainers.value.filter(t => t.id !== id)
}
</script>
<template>
  <div>
    <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider">Trainers</h2>
    <p class="text-gray-500 text-sm mt-1">{{ trainers.length }}</p>
  </div>

  <TrainersTable :trainers="trainers" @edit="openEdit" @delete="handleDelete"></TrainersTable>

  <TrainerModal v-if="showModal" :trainer="editTarget" @save="handleSave" @close="closeModal"></TrainerModal>
</template>