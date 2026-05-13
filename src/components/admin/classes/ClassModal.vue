<script setup>
import { reactive, watch, computed } from 'vue'

const props = defineProps({
    cls: { type: Object, default: null }, // null = Add, object = Edit
})

const emit = defineEmits(['save', 'close'])

const isEdit = computed(() => props.cls !== null)

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const form = reactive({
    name: '',
    day: 'Monday',
    time: '',
    trainer: '',
    capacity: 20,
    enrolled: 0,
    status: 'Active',
})

watch(
    () => props.cls,
    (val) => {
        Object.assign(form, val
            ? {
                name: val.name, day: val.day, time: val.time,
                trainer: val.trainer, capacity: val.capacity,
                enrolled: val.enrolled, status: val.status
            }
            : { name: '', day: 'Monday', time: '', trainer: '', capacity: 20, enrolled: 0, status: 'Active' }
        )
    },
    { immediate: true }
)

function handleSubmit() {
    if (!form.name || !form.time || !form.trainer) return
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
                        {{ isEdit ? 'Edit Class' : 'Add Class' }}
                    </h2>
                    <button class="text-gray-500 hover:text-white transition-colors" @click="emit('close')"
                        aria-label="Close modal">
                        <i class="fa-solid fa-xmark text-lg" />
                    </button>
                </div>

                <!-- Form -->
                <form class="p-6 space-y-5" @submit.prevent="handleSubmit" novalidate>

                    <!-- Class name -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="c-name">
                            Class Name <span class="text-red-400">*</span>
                        </label>
                        <input id="c-name" v-model="form.name" type="text" placeholder="Power Lifting" required
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                    </div>

                    <!-- Day + Time side by side -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="c-day">
                                Day
                            </label>
                            <select id="c-day" v-model="form.day"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm focus:border-neon-green focus:outline-none transition-colors">
                                <option v-for="d in days" :key="d">{{ d }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="c-time">
                                Time <span class="text-red-400">*</span>
                            </label>
                            <input id="c-time" v-model="form.time" type="text" placeholder="07:00 AM – 08:00 AM"
                                required
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                    </div>

                    <!-- Trainer -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="c-trainer">
                            Trainer <span class="text-red-400">*</span>
                        </label>
                        <input id="c-trainer" v-model="form.trainer" type="text" placeholder="Alex Rodriguez" required
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                    </div>

                    <!-- Capacity + Enrolled side by side -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="c-capacity">
                                Capacity
                            </label>
                            <input id="c-capacity" v-model.number="form.capacity" type="number" min="1" placeholder="20"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="c-enrolled">
                                Enrolled
                            </label>
                            <input id="c-enrolled" v-model.number="form.enrolled" type="number" min="0" placeholder="0"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                    </div>

                    <!-- Status -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="c-status">
                            Status
                        </label>
                        <select id="c-status" v-model="form.status"
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
                            {{ isEdit ? 'Save Changes' : 'Add Class' }}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </Teleport>
</template>

<style scoped></style>