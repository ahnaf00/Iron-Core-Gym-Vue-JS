<script setup>
import { ref,computed } from 'vue';
import BlogSidebar from './BlogSidebar.vue';
import BlogCard from './BlogCard.vue';
import BlogPagination from './BlogPagination.vue';

const POSTS_PER_PAGE = 3

const allPosts = ref([
  {
    id: 1,
    category: 'Fitness',
    date: 'Jan 10, 2026',
    author: 'Admin',
    comments: 5,
    title: 'The Ultimate Guide to Upper Body Strength',
    excerpt: 'Developing a strong upper body is crucial not just for aesthetics but for overall functional fitness. In this comprehensive guide, we break down the essential compound movements...',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Nutrition',
    date: 'Jan 05, 2026',
    author: 'Sarah C.',
    comments: 12,
    title: 'Meal Prep 101: Fueling Your Gains',
    excerpt: "Consistency in the kitchen is just as important as consistency in the gym. Learn how to prepare healthy, macro-friendly meals for the entire week in under two hours...",
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Lifestyle',
    date: 'Dec 28, 2025',
    author: 'Mike T.',
    comments: 3,
    title: 'The Importance of Sleep for Recovery',
    excerpt: "You can train hard and eat right, but if you aren't sleeping enough, you're leaving gains on the table. Discover how sleep impacts muscle growth and hormone balance...",
    image: 'https://images.unsplash.com/photo-1532036075302-4bd46fcb07af?q=80&w=1169&auto=format&fit=crop',
  },
])

const currentPage = ref(1)
const totalpages = computed(() => Math.ceil(allPosts.value.length/POSTS_PER_PAGE))

const paginatedPosts = computed(() => {
    const start = (currentPage.value-1)*POSTS_PER_PAGE
    return allPosts.value.slice(start, start+POSTS_PER_PAGE)
}) 
</script>

<template>
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12">

                <!-- Main Content (2/3) -->
                <div class="w-full lg:w-2/3 space-y-16">
                    <BlogCard
                        v-for="post in allPosts"
                        :key="post.id"
                        :post="post"
                    ></BlogCard>
                    
                    <BlogPagination
                        v-model:currentPage="currentPage"
                        :total-pages="totalPages"
                    ></BlogPagination>

                </div>

                <!-- Sidebar (1/3) -->
                <BlogSidebar></BlogSidebar>
            </div>
        </div>
    </section>
</template>

<style scoped></style>