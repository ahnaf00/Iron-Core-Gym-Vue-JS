<!-- src/components/admin/AdminBlog.vue -->
<script setup>
import { ref, computed } from 'vue'
import PostsTable from './blog/PostsTable.vue'
import PostModal from './blog/PostModal.vue'

// ── Master data ───────────────────────────────────────────────
const posts = ref([
  {
    id: 1, title: '5 Best Exercises for Core Strength',
    category: 'Training', author: 'Alex Rodriguez',
    excerpt: 'A strong core is the foundation of every great workout. Here are five exercises you should add to your routine today.',
    body: '', coverImage: '', date: '2025-04-10', status: 'Published',
  },
  {
    id: 2, title: 'Nutrition Tips for Maximum Muscle Gain',
    category: 'Nutrition', author: 'Mia Thompson',
    excerpt: 'What you eat matters as much as how you train. Discover the top nutrition strategies for building lean muscle fast.',
    body: '', coverImage: '', date: '2025-04-18', status: 'Published',
  },
  {
    id: 3, title: 'The Mental Benefits of Regular Exercise',
    category: 'Lifestyle', author: 'Carlos Reyes',
    excerpt: 'Exercise isn\'t just about physical health. Learn how a consistent gym habit can transform your mental well-being.',
    body: '', coverImage: '', date: '2025-05-01', status: 'Published',
  },
  {
    id: 4, title: 'Iron Core Opens New Cardio Zone',
    category: 'News', author: 'Admin',
    excerpt: 'We\'re excited to announce the launch of our brand-new dedicated cardio zone — more space, more equipment, more results.',
    body: '', coverImage: '', date: '2025-05-08', status: 'Published',
  },
  {
    id: 5, title: 'Beginner\'s Guide to Powerlifting',
    category: 'Training', author: 'Marcus Bell',
    excerpt: 'Thinking about getting into powerlifting? This beginner-friendly guide covers everything you need to know to get started safely.',
    body: '', coverImage: '', date: '2025-05-12', status: 'Draft',
  },
  {
    id: 6, title: 'Hydration: How Much Water Do You Really Need?',
    category: 'Nutrition', author: 'Mia Thompson',
    excerpt: 'Staying hydrated is one of the easiest ways to improve your performance. But how much is actually enough?',
    body: '', coverImage: '', date: '2025-05-14', status: 'Draft',
  },
])

// ── Modal state ───────────────────────────────────────────────
const showModal = ref(false)
const editTarget = ref(null)

const openAdd = () => { editTarget.value = null; showModal.value = true }
const openEdit = (post) => { editTarget.value = post; showModal.value = true }
const closeModal = () => { showModal.value = false }

// ── CRUD ──────────────────────────────────────────────────────
let nextId = posts.value.length + 1

function handleSave(formData) {
  if (editTarget.value) {
    const idx = posts.value.findIndex(p => p.id === editTarget.value.id)
    if (idx !== -1) posts.value[idx] = { ...posts.value[idx], ...formData }
  } else {
    posts.value.unshift({ id: nextId++, ...formData })
  }
  closeModal()
}

function handleDelete(id) {
  posts.value = posts.value.filter(p => p.id !== id)
}

// ── Summary ───────────────────────────────────────────────────
const publishedCount = computed(() => posts.value.filter(p => p.status === 'Published').length)
const draftCount = computed(() => posts.value.filter(p => p.status === 'Draft').length)
</script>

<template>
  <div class="space-y-6">

    <!-- Page heading + stat pills -->
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider">Blog</h2>
        <p class="text-gray-500 text-sm mt-1">{{ posts.length }} posts total</p>
      </div>
      <!-- Quick stat pills -->
      <div class="flex gap-3">
        <span class="px-3 py-1.5 bg-green-400/10 text-green-400 text-xs font-bold uppercase tracking-wider">
          <i class="fa-solid fa-circle-check mr-1" />{{ publishedCount }} Published
        </span>
        <span class="px-3 py-1.5 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-wider">
          <i class="fa-solid fa-file-pen mr-1" />{{ draftCount }} Draft
        </span>
      </div>
    </div>

    <PostsTable :posts="posts" @edit="openEdit" @delete="handleDelete" />

    <PostModal v-if="showModal" :post="editTarget" @save="handleSave" @close="closeModal" />

  </div>
</template>

<style scoped></style>