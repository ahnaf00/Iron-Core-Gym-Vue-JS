<script setup>
import { reactive, watch, computed } from 'vue'

const props = defineProps({
    trainer: { type: Object, default: null }, // null = Add, object = Edit
})

const emit = defineEmits(['save', 'close'])

const isEdit = computed(() => props.trainer !== null)

const form = reactive({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    experience: '',
    bio: '',
    status: 'Active',
})

// Populate on edit, reset on add
watch(
    () => props.trainer,
    (val) => {
        Object.assign(form, val
            ? {
                name: val.name, email: val.email, phone: val.phone ?? '',
                specialty: val.specialty, experience: val.experience,
                bio: val.bio ?? '', status: val.status
            }
            : { name: '', email: '', phone: '', specialty: '', experience: '', bio: '', status: 'Active' }
        )
    },
    { immediate: true }
)

function handleSubmit() {
    if (!form.name || !form.email || !form.specialty) return
    emit('save', { ...form })
}
</script>

<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70"
            @click.self="emit('close')">
            <div
                class="bg-dark-surface border border-white/10 w-full max-w-lg mx-0 sm:mx-4 max-h-[90vh] overflow-y-auto">

                <!-- Header -->
                <div
                    class="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-dark-surface">
                    <h2 class="text-white font-heading font-bold uppercase tracking-wider text-sm">
                        {{ isEdit ? 'Edit Trainer' : 'Add Trainer' }}
                    </h2>
                    <button class="text-gray-500 hover:text-white transition-colors" @click="emit('close')"
                        aria-label="Close modal">
                        <i class="fa-solid fa-xmark text-lg" />
                    </button>
                </div>

                <!-- Form -->
                <form class="p-6 space-y-5" @submit.prevent="handleSubmit" novalidate>

                    <!-- Name -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="t-name">
                            Full Name <span class="text-red-400">*</span>
                        </label>
                        <input id="t-name" v-model="form.name" type="text" placeholder="Alex Rodriguez" required
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="t-email">
                            Email <span class="text-red-400">*</span>
                        </label>
                        <input id="t-email" v-model="form.email" type="email" placeholder="alex@ironcoregym.com"
                            required
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                    </div>

                    <!-- Phone -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="t-phone">
                            Phone
                        </label>
                        <input id="t-phone" v-model="form.phone" type="tel" placeholder="+1 (234) 567-890"
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                    </div>

                    <!-- Specialty + Experience side by side -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="t-specialty">
                                Specialty <span class="text-red-400">*</span>
                            </label>
                            <input id="t-specialty" v-model="form.specialty" type="text"
                                placeholder="Strength & Conditioning" required
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="t-exp">
                                Experience
                            </label>
                            <input id="t-exp" v-model="form.experience" type="text" placeholder="8 Years"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                    </div>

                    <!-- Bio -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="t-bio">
                            Bio
                        </label>
                        <textarea id="t-bio" v-model="form.bio" rows="3" placeholder="Short trainer bio..."
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors resize-none" />
                    </div>

                    <!-- Status -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="t-status">
                            Status
                        </label>
                        <select id="t-status" v-model="form.status"
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm focus:border-neon-green focus:outline-none transition-colors">
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    <!-- Actions -->
                    <div class="flex gap-3 pt-2">
                        <button type="button"
                            class="flex-1 py-3 border border-white/20 text-gray-400 text-sm font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors"
                            @click="emit('close')">
                            Cancel
                        </button>
                        <button type="submit"
                            class="flex-1 py-3 bg-neon-green text-black text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors">
                            {{ isEdit ? 'Save Changes' : 'Add Trainer' }}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </Teleport>
</template>

<style scoped></style>