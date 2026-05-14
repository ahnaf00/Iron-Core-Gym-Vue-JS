<script setup>
import { reactive, watch, computed } from 'vue'

const props = defineProps({
    post: { type: Object, default: null },
})

const emit = defineEmits(['save', 'close'])

const isEdit = computed(() => props.post !== null)
const categories = ['Nutrition', 'Training', 'Lifestyle', 'News']

const form = reactive({
    title: '',
    category: 'Training',
    author: '',
    excerpt: '',
    body: '',
    coverImage: '',
    date: new Date().toISOString().slice(0, 10),
    status: 'Draft',
})

watch(
    () => props.post,
    (val) => {
        Object.assign(form, val
            ? {
                title: val.title, category: val.category, author: val.author,
                excerpt: val.excerpt, body: val.body ?? '', coverImage: val.coverImage ?? '',
                date: val.date, status: val.status
            }
            : {
                title: '', category: 'Training', author: '', excerpt: '', body: '',
                coverImage: '', date: new Date().toISOString().slice(0, 10), status: 'Draft'
            }
        )
    },
    { immediate: true }
)

function handleSubmit() {
    if (!form.title || !form.author || !form.excerpt) return
    emit('save', { ...form })
}
</script>

<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70"
            @click.self="emit('close')">
            <!-- Wider modal for blog — max-w-2xl -->
            <div
                class="bg-dark-surface border border-white/10 w-full max-w-2xl mx-0 sm:mx-4 max-h-[90vh] overflow-y-auto">

                <!-- Header -->
                <div
                    class="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-dark-surface z-10">
                    <h2 class="text-white font-heading font-bold uppercase tracking-wider text-sm">
                        {{ isEdit ? 'Edit Post' : 'New Post' }}
                    </h2>
                    <button class="text-gray-500 hover:text-white transition-colors" @click="emit('close')"
                        aria-label="Close modal">
                        <i class="fa-solid fa-xmark text-lg" />
                    </button>
                </div>

                <!-- Form -->
                <form class="p-6 space-y-5" @submit.prevent="handleSubmit" novalidate>

                    <!-- Title -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="b-title">
                            Title <span class="text-red-400">*</span>
                        </label>
                        <input id="b-title" v-model="form.title" type="text"
                            placeholder="5 Best Exercises for Core Strength" required
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                    </div>

                    <!-- Category + Author side by side -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="b-category">
                                Category
                            </label>
                            <select id="b-category" v-model="form.category"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm focus:border-neon-green focus:outline-none transition-colors">
                                <option v-for="c in categories" :key="c">{{ c }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="b-author">
                                Author <span class="text-red-400">*</span>
                            </label>
                            <input id="b-author" v-model="form.author" type="text" placeholder="Alex Rodriguez" required
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                    </div>

                    <!-- Date + Status side by side -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="b-date">
                                Publish Date
                            </label>
                            <input id="b-date" v-model="form.date" type="date"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm focus:border-neon-green focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="b-status">
                                Status
                            </label>
                            <select id="b-status" v-model="form.status"
                                class="w-full bg-black border border-white/20 p-3 text-white text-sm focus:border-neon-green focus:outline-none transition-colors">
                                <option>Draft</option>
                                <option>Published</option>
                            </select>
                        </div>
                    </div>

                    <!-- Cover Image URL -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="b-cover">
                            Cover Image URL
                        </label>
                        <input id="b-cover" v-model="form.coverImage" type="url"
                            placeholder="https://example.com/image.jpg"
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
                        <!-- Live preview -->
                        <div v-if="form.coverImage" class="mt-2 h-32 overflow-hidden border border-white/10">
                            <img :src="form.coverImage" alt="Cover preview" class="w-full h-full object-cover"
                                loading="lazy" @error="(e) => e.target.style.display = 'none'" />
                        </div>
                    </div>

                    <!-- Excerpt -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="b-excerpt">
                            Excerpt <span class="text-red-400">*</span>
                        </label>
                        <textarea id="b-excerpt" v-model="form.excerpt" rows="2" maxlength="200"
                            placeholder="Short post preview (max 200 characters)..." required
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors resize-none" />
                        <p class="text-gray-600 text-xs mt-1 text-right tabular-nums">
                            {{ form.excerpt.length }}/200
                        </p>
                    </div>

                    <!-- Body -->
                    <div>
                        <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="b-body">
                            Body
                        </label>
                        <textarea id="b-body" v-model="form.body" rows="8"
                            placeholder="Write the full post content here..."
                            class="w-full bg-black border border-white/20 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors resize-y" />
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
                            {{ isEdit ? 'Save Changes' : 'Publish Post' }}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </Teleport>
</template>

<style scoped></style>