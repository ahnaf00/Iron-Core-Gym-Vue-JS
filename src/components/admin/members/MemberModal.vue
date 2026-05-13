<script setup>
import { reactive, watch, computed } from 'vue'

const props = defineProps({
  // null = Add mode, member object = Edit mode
  member: { type: Object, default: null },
})

const emit = defineEmits(['save', 'close'])

const isEdit = computed(() => props.member !== null)

// ── Form state ────────────────────────────────────────────────
const form = reactive({
  name:   '',
  email:  '',
  phone:  '',
  plan:   'Basic',
  status: 'Active',
})

// Populate form when editing; reset when adding
watch(
  () => props.member,
  (val) => {
    if (val) {
      Object.assign(form, {
        name:   val.name,
        email:  val.email,
        phone:  val.phone  ?? '',
        plan:   val.plan,
        status: val.status,
      })
    } else {
      Object.assign(form, { name: '', email: '', phone: '', plan: 'Basic', status: 'Active' })
    }
  },
  { immediate: true }
)

// ── Submit ────────────────────────────────────────────────────
function handleSubmit() {
  if (!form.name || !form.email) return
  emit('save', { ...form })
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70"
      @click.self="emit('close')"
    >
      <!-- Panel -->
      <div class="bg-dark-surface border border-white/10 w-full max-w-lg mx-0 sm:mx-4 max-h-[90vh] overflow-y-auto">

        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-dark-surface">
          <h2 class="text-white font-heading font-bold uppercase tracking-wider text-sm">
            {{ isEdit ? 'Edit Member' : 'Add Member' }}
          </h2>
          <button
            class="text-gray-500 hover:text-white transition-colors"
            @click="emit('close')"
            aria-label="Close modal"
          >
            <i class="fa-solid fa-xmark text-lg" />
          </button>
        </div>

        <!-- Form -->
        <form class="p-6 space-y-5" @submit.prevent="handleSubmit" novalidate>

          <!-- Name -->
          <div>
            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="m-name">
              Full Name <span class="text-red-400">*</span>
            </label>
            <input
              id="m-name"
              v-model="form.name"
              type="text"
              placeholder="Jake Miller"
              required
              class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="m-email">
              Email <span class="text-red-400">*</span>
            </label>
            <input
              id="m-email"
              v-model="form.email"
              type="email"
              placeholder="jake@example.com"
              required
              class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="m-phone">
              Phone
            </label>
            <input
              id="m-phone"
              v-model="form.phone"
              type="tel"
              placeholder="+1 (234) 567-890"
              class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors"
            />
          </div>

          <!-- Plan + Status side by side -->
          <div class="grid grid-cols-2 gap-4">

            <div>
              <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="m-plan">
                Plan
              </label>
              <select
                id="m-plan"
                v-model="form.plan"
                class="w-full bg-black border border-white/20 p-3 text-white text-sm focus:border-neon-green focus:outline-none transition-colors"
              >
                <option>Basic</option>
                <option>Premium</option>
                <option>Elite</option>
              </select>
            </div>

            <div>
              <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="m-status">
                Status
              </label>
              <select
                id="m-status"
                v-model="form.status"
                class="w-full bg-black border border-white/20 p-3 text-white text-sm focus:border-neon-green focus:outline-none transition-colors"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

          </div>

          <!-- Actions -->
          <div class="flex gap-3 pt-2">
            <button
              type="button"
              class="flex-1 py-3 border border-white/20 text-gray-400 text-sm font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors"
              @click="emit('close')"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="flex-1 py-3 bg-neon-green text-black text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              {{ isEdit ? 'Save Changes' : 'Add Member' }}
            </button>
          </div>

        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>