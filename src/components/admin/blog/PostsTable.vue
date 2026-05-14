<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    posts: { type: Array, required: true },
})

const emit = defineEmits(['edit', 'delete'])

// ── Search + filters ──────────────────────────────────────────
const search = ref('')
const filterCategory = ref('All')
const filterStatus = ref('All')

const categories = ['All', 'Nutrition', 'Training', 'Lifestyle', 'News']
const statuses = ['All', 'Published', 'Draft']

const filtered = computed(() =>
    props.posts.filter(p => {
        const matchSearch = p.title.toLowerCase().includes(search.value.toLowerCase()) ||
            p.author.toLowerCase().includes(search.value.toLowerCase())
        const matchCategory = filterCategory.value === 'All' || p.category === filterCategory.value
        const matchStatus = filterStatus.value === 'All' || p.status === filterStatus.value
        return matchSearch && matchCategory && matchStatus
    })
)

// ── Delete confirm ────────────────────────────────────────────
const pendingDelete = ref(null)
const askDelete = (post) => { pendingDelete.value = post }
const confirmDelete = () => { emit('delete', pendingDelete.value.id); pendingDelete.value = null }

// ── Helpers ───────────────────────────────────────────────────
const categoryColor = (cat) => ({
    'Nutrition': 'bg-green-400/10  text-green-400',
    'Training': 'bg-neon-green/10 text-neon-green',
    'Lifestyle': 'bg-yellow-400/10 text-yellow-400',
    'News': 'bg-blue-400/10   text-blue-400',
}[cat] ?? 'bg-white/5 text-gray-400')

const statusClass = (s) => s === 'Published'
    ? 'bg-green-400/10 text-green-400'
    : 'bg-yellow-400/10 text-yellow-400'

// Fallback cover when no image provided
const coverSrc = (post) => post.coverImage ||
    `https://picsum.photos/seed/${post.id}/600/400`
</script>

<template>
    <div>
        <!-- Toolbar -->
        <div class="flex flex-wrap items-center gap-3 px-6 py-4 bg-black border border-white/10 border-b-0">

            <!-- Search -->
            <div class="relative flex-1 min-w-48">
                <i
                    class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                <input v-model="search" type="text" placeholder="Search title or author..."
                    class="w-full bg-white/5 border border-white/10 pl-8 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
            </div>

            <!-- Category filter -->
            <select v-model="filterCategory"
                class="bg-white/5 border border-white/10 px-3 py-2 text-sm text-gray-400 focus:border-neon-green focus:outline-none transition-colors">
                <option v-for="c in categories" :key="c" :value="c">
                    {{ c === 'All' ? 'All Categories' : c }}
                </option>
            </select>

            <!-- Status filter -->
            <select v-model="filterStatus"
                class="bg-white/5 border border-white/10 px-3 py-2 text-sm text-gray-400 focus:border-neon-green focus:outline-none transition-colors">
                <option v-for="s in statuses" :key="s" :value="s">
                    {{ s === 'All' ? 'All Statuses' : s }}
                </option>
            </select>

            <!-- Add button -->
            <button
                class="ml-auto flex items-center gap-2 px-4 py-2 bg-neon-green text-black text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors shrink-0"
                @click="emit('edit', null)">
                <i class="fa-solid fa-plus" /> New Post
            </button>
        </div>

        <!-- Card grid -->
        <div class="bg-black border border-white/10 p-6">
            <div v-if="filtered.length > 0" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                <article v-for="post in filtered" :key="post.id"
                    class="border border-white/10 bg-white/3 flex flex-col group">
                    <!-- Cover image -->
                    <div class="relative overflow-hidden h-44">
                        <img :src="coverSrc(post)" :alt="post.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy" />
                        <!-- Status badge over image -->
                        <span class="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider px-2 py-1"
                            :class="statusClass(post.status)">
                            {{ post.status }}
                        </span>
                    </div>

                    <!-- Content -->
                    <div class="p-4 flex flex-col flex-1 gap-3">
                        <!-- Category + date -->
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5"
                                :class="categoryColor(post.category)">
                                {{ post.category }}
                            </span>
                            <span class="text-gray-600 text-xs tabular-nums">{{ post.date }}</span>
                        </div>

                        <!-- Title -->
                        <h3 class="text-white font-heading font-bold text-sm leading-snug line-clamp-2">
                            {{ post.title }}
                        </h3>

                        <!-- Excerpt -->
                        <p class="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">
                            {{ post.excerpt }}
                        </p>

                        <!-- Author + actions -->
                        <div class="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
                            <div class="flex items-center gap-2">
                                <span
                                    class="w-6 h-6 bg-neon-green/10 text-neon-green text-xs font-bold flex items-center justify-center uppercase">
                                    {{ post.author.charAt(0) }}
                                </span>
                                <span class="text-gray-500 text-xs">{{ post.author }}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <button class="text-gray-500 hover:text-neon-green transition-colors text-xs"
                                    @click="emit('edit', post)" aria-label="Edit post">
                                    <i class="fa-solid fa-pen-to-square" />
                                </button>
                                <button class="text-gray-500 hover:text-red-400 transition-colors text-xs"
                                    @click="askDelete(post)" aria-label="Delete post">
                                    <i class="fa-solid fa-trash" />
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Empty state -->
            <div v-else class="py-16 text-center text-gray-600">
                <i class="fa-solid fa-newspaper text-3xl mb-3 block" />
                <p>No posts match your search.</p>
            </div>

            <!-- Count -->
            <p class="mt-4 text-xs text-gray-600">
                Showing {{ filtered.length }} of {{ posts.length }} posts
            </p>
        </div>
    </div>

    <!-- Delete confirm -->
    <Teleport to="body">
        <div v-if="pendingDelete" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            @click.self="pendingDelete = null">
            <div class="bg-dark-surface border border-white/10 p-8 w-full max-w-sm mx-4">
                <h3 class="text-white font-heading font-bold uppercase tracking-wider mb-2">Delete Post</h3>
                <p class="text-gray-400 text-sm mb-6">
                    Are you sure you want to delete
                    <span class="text-white font-medium">{{ pendingDelete.title }}</span>?
                    This action cannot be undone.
                </p>
                <div class="flex gap-3">
                    <button
                        class="flex-1 py-2.5 border border-white/20 text-gray-400 text-sm font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors"
                        @click="pendingDelete = null">
                        Cancel
                    </button>
                    <button
                        class="flex-1 py-2.5 bg-red-500 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-colors"
                        @click="confirmDelete">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>