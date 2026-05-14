<script setup>
import { ref, computed } from 'vue'
import PricingCards from './pricing/PricingCards.vue'
import PlanModal from './pricing/PlanModal.vue'

// ── Master data ───────────────────────────────────────────────
const plans = ref([
  {
    id: 1,
    name: 'Basic',
    price: 29,
    period: '/ month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym floor',
      'Locker room access',
      'Free fitness assessment',
      '2 Group classes / week',
    ],
    highlighted: false,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Premium',
    price: 59,
    period: '/ month',
    description: 'For dedicated members who want more',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'Access to sauna & spa',
      '1 Personal training session / month',
      'Nutrition consultation',
    ],
    highlighted: true,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Elite',
    price: 99,
    period: '/ month',
    description: 'For serious athletes pushing limits',
    features: [
      'Everything in Premium',
      '4 Personal training sessions / month',
      'Custom meal plan',
      'Priority class booking',
      'Guest passes (2 / month)',
      'Exclusive member events',
    ],
    highlighted: false,
    status: 'Active',
  },
])

// ── Modal state ───────────────────────────────────────────────
const showModal = ref(false)
const editTarget = ref(null)

const openAdd = () => { editTarget.value = null; showModal.value = true }
const openEdit = (plan) => { editTarget.value = plan; showModal.value = true }
const closeModal = () => { showModal.value = false }

// ── CRUD ──────────────────────────────────────────────────────
let nextId = plans.value.length + 1

function handleSave(formData) {
  if (editTarget.value) {
    const idx = plans.value.findIndex(p => p.id === editTarget.value.id)
    if (idx !== -1) plans.value[idx] = { ...plans.value[idx], ...formData }
  } else {
    plans.value.push({ id: nextId++, ...formData })
  }
  closeModal()
}

function handleDelete(id) {
  plans.value = plans.value.filter(p => p.id !== id)
}

// ── Summary ───────────────────────────────────────────────────
const activeCount = computed(() => plans.value.filter(p => p.status === 'Active').length)
</script>

<template>
  <div class="space-y-6">

    <!-- Page heading -->
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider">Pricing</h2>
        <p class="text-gray-500 text-sm mt-1">
          {{ plans.length }} plans &mdash; {{ activeCount }} active
        </p>
      </div>
      <button
        class="flex items-center gap-2 px-4 py-2 bg-neon-green text-black text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
        @click="openAdd">
        <i class="fa-solid fa-plus" /> Add Plan
      </button>
    </div>

    <PricingCards :plans="plans" @edit="openEdit" @delete="handleDelete" />

    <PlanModal v-if="showModal" :plan="editTarget" @save="handleSave" @close="closeModal" />

  </div>
</template>

<style scoped></style>