<script setup>
import { ref } from 'vue'
import ClassesTable from './classes/ClassesTable.vue'
import ClassModal from './classes/ClassModal.vue'

// ── Master data ───────────────────────────────────────────────
const classes = ref([
  { id: 1, name: 'Power Lifting', day: 'Monday', time: '07:00 AM – 08:00 AM', trainer: 'Alex Rodriguez', capacity: 20, enrolled: 18, status: 'Active' },
  { id: 2, name: 'Morning Yoga', day: 'Tuesday', time: '06:00 AM – 07:00 AM', trainer: 'Mia Thompson', capacity: 15, enrolled: 15, status: 'Active' },
  { id: 3, name: 'CrossFit WOD', day: 'Wednesday', time: '08:00 AM – 09:00 AM', trainer: 'Carlos Reyes', capacity: 25, enrolled: 12, status: 'Active' },
  { id: 4, name: 'Kickboxing', day: 'Thursday', time: '06:00 PM – 07:00 PM', trainer: 'Yuki Nakamura', capacity: 20, enrolled: 9, status: 'Active' },
  { id: 5, name: 'Pilates Core', day: 'Friday', time: '09:00 AM – 10:00 AM', trainer: 'Fiona Walsh', capacity: 12, enrolled: 0, status: 'Inactive' },
  { id: 6, name: 'Deadlift Mastery', day: 'Saturday', time: '10:00 AM – 11:30 AM', trainer: 'Marcus Bell', capacity: 10, enrolled: 7, status: 'Active' },
  { id: 7, name: 'Flexibility Flow', day: 'Sunday', time: '08:00 AM – 09:00 AM', trainer: 'Mia Thompson', capacity: 18, enrolled: 11, status: 'Active' },
  { id: 8, name: 'HIIT Burn', day: 'Monday', time: '06:00 PM – 07:00 PM', trainer: 'Carlos Reyes', capacity: 20, enrolled: 19, status: 'Active' },
])

// ── Modal state ───────────────────────────────────────────────
const showModal = ref(false)
const editTarget = ref(null)

const openAdd = () => { editTarget.value = null; showModal.value = true }
const openEdit = (cls) => { editTarget.value = cls; showModal.value = true }
const closeModal = () => { showModal.value = false }

// ── CRUD ──────────────────────────────────────────────────────
let nextId = classes.value.length + 1

function handleSave(formData) {
  if (editTarget.value) {
    const idx = classes.value.findIndex(c => c.id === editTarget.value.id)
    if (idx !== -1) classes.value[idx] = { ...classes.value[idx], ...formData }
  } else {
    classes.value.unshift({ id: nextId++, ...formData })
  }
  closeModal()
}

function handleDelete(id) {
  classes.value = classes.value.filter(c => c.id !== id)
}

// ── Summary counts ────────────────────────────────────────────
const activeCount = computed(() => classes.value.filter(c => c.status === 'Active').length)

import { computed } from 'vue'
</script>

<template>
  <div class="space-y-6">

    <!-- Page heading -->
    <div>
      <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider">Classes</h2>
      <p class="text-gray-500 text-sm mt-1">
        {{ classes.length }} total &mdash; {{ activeCount }} active
      </p>
    </div>

    <ClassesTable :classes="classes" @edit="openEdit" @delete="handleDelete" />

    <ClassModal v-if="showModal" :cls="editTarget" @save="handleSave" @close="closeModal" />

  </div>
</template>

<style scoped></style>