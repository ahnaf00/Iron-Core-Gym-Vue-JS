<script setup>
import { reactive, ref, watch, computed } from 'vue'

const props = defineProps({
    plan: { type: Object, default: null },
})

const emit = defineEmits(['save', 'close'])

const isEdit = computed(() => props.plan !== null)

// ── Form state ────────────────────────────────────────────────
const form = reactive({
    name: '',
    price: 0,
    period: '/ month',
    description: '',
    highlighted: false,
    status: 'Active',
})

// Features managed as a separate ref (array of strings)
const features = ref([''])

watch(
    () => props.plan,
    (val) => {
        Object.assign(form, val
            ? {
                name: val.name, price: val.price, period: val.period,
                description: val.description, highlighted: val.highlighted,
                status: val.status
            }
            : {
                name: '', price: 0, period: '/ month', description: '',
                highlighted: false, status: 'Active'
            }
        )
        features.value = val && val.features.length
            ? [...val.features]
            : ['']
    },
    { immediate: true }
)

// ── Features list helpers ─────────────────────────────────────
const addFeature = () => features.value.push('')
const removeFeature = (i) => { if (features.value.length > 1) features.value.splice(i, 1) }

// ── Submit ────────────────────────────────────────────────────
function handleSubmit() {
    if (!form.name) return
    const cleanFeatures = features.value.filter(f => f.trim() !== '')
    emit('save', { ...form, features: cleanFeatures })
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
                    class="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-dark-surface z-10">
                    <h2 class="text-white font-heading font-bold uppercase tracking-wider text-sm">
                        {{ isEdit ? 'Edit Plan' : 'Add Plan' }}
                    </h2>
                    <button class="text-gray-500 hover:text-white transition-colors" @click="emit('close')"
                        aria-label="Close modal">
                        <i class="fa-solid fa-xmark text-lg" />
                    </button>
                </div>

                <!-- Form -->
                <form class="p-6 space-y-5" @submit.prevent="handleSubmit" novalidate>

                    <!-- Plan name -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="p-name">
                            Plan Name <span class="text-red-400">*</span>
                        </label>
                        <input id="p-name" v-model="form.name" type="text" placeholder="Elite" required
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                    </div>

                    <!-- Price + Period side by side -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="p-price">
                                Price ($)
                            </label>
                            <input id="p-price" v-model.number="form.price" type="number" min="0" step="0.01"
                                placeholder="49"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="p-period">
                                Period
                            </label>
                            <input id="p-period" v-model="form.period" type="text" placeholder="/ month"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                    </div>

                    <!-- Description -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="p-desc">
                            Description
                        </label>
                        <input id="p-desc" v-model="form.description" type="text"
                            placeholder="For serious athletes pushing limits"
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                    </div>

                    <!-- Features list (dynamic) -->
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <label class="text-gray-400 text-xs uppercase tracking-wider">
                                Features
                            </label>
                            <button type="button"
                                class="text-neon-green text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1"
                                @click="addFeature">
                                <i class="fa-solid fa-plus text-xs" /> Add Feature
                            </button>
                        </div>
                        <div class="space-y-2">
                            <div v-for="(feat, i) in features" :key="i" class="flex items-center gap-2">
                                <i class="fa-solid fa-check text-neon-green text-xs shrink-0" />
                                <input v-model="features[i]" type="text" :placeholder="`Feature ${i + 1}`"
                                    class="flex-1 bg-black border border-white/20 px-3 py-2 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                                <button type="button"
                                    class="text-gray-600 hover:text-red-400 transition-colors shrink-0"
                                    :class="{ 'opacity-25 cursor-not-allowed': features.length === 1 }"
                                    :disabled="features.length === 1" @click="removeFeature(i)"
                                    aria-label="Remove feature">
                                    <i class="fa-solid fa-xmark text-sm" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Status + Highlighted side by side -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="p-status">
                                Status
                            </label>
                            <select id="p-status" v-model="form.status"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm focus:border-neon-green focus:outline-none transition-colors">
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                        <div class="flex flex-col justify-end">
                            <label class="flex items-center gap-3 cursor-pointer group pb-3">
                                <!-- Custom toggle -->
                                <div class="relative w-10 h-5 rounded-full transition-colors duration-200"
                                    :class="form.highlighted ? 'bg-neon-green' : 'bg-white/10'">
                                    <div class="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-black transition-transform duration-200"
                                        :class="form.highlighted ? 'translate-x-5' : 'translate-x-0'" />
                                    <input v-model="form.highlighted" type="checkbox" class="sr-only" />
                                </div>
                                <span
                                    class="text-gray-400 text-xs uppercase tracking-wider group-hover:text-white transition-colors">
                                    Most Popular
                                </span>
                            </label>
                        </div>
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
                            {{ isEdit ? 'Save Changes' : 'Add Plan' }}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </Teleport>
</template>

<style scoped></style>