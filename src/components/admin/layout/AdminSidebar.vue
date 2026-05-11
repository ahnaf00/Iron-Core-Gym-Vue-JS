<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
    { name: 'admin.dashboard', label: 'Dashboard', icon: 'fa-solid fa-gauge-high' },
    { name: 'admin.members', label: 'Members', icon: 'fa-solid fa-users' },
    { name: 'admin.trainers', label: 'Trainers', icon: 'fa-solid fa-dumbbell' },
    { name: 'admin.classes', label: 'Classes', icon: 'fa-solid fa-calendar-days' },
    { name: 'admin.pricing', label: 'Pricing', icon: 'fa-solid fa-tag' },
    { name: 'admin.blog', label: 'Blog', icon: 'fa-solid fa-pen-nib' },
    { name: 'admin.messages', label: 'Messages', icon: 'fa-solid fa-envelope' },
    { name: 'admin.settings', label: 'Settings', icon: 'fa-solid fa-gear' },
]

// Active check — matches exact route name or any child of it
const isActive = (itemName) => route.name === itemName
</script>

<template>
    <aside class="w-64 min-h-screen bg-black border-r border-white/10 flex flex-col shrink-0">

        <!-- Brand -->
        <div class="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
            <RouterLink :to="{ name: 'admin.dashboard' }" class="flex items-center gap-3">
                <span class="w-7 h-7 bg-neon-green flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-bolt text-black text-xs" />
                </span>
                <span class="text-white font-heading font-bold uppercase tracking-wider text-sm">
                    IronCore <span class="text-neon-green">Admin</span>
                </span>
            </RouterLink>
        </div>

        <!-- Nav -->
        <nav class="flex-1 py-6 overflow-y-auto" aria-label="Admin navigation">
            <ul class="space-y-1 px-3">
                <li v-for="item in navItems" :key="item.name">
                    <RouterLink :to="{ name: item.name }"
                        class="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium uppercase tracking-wider transition-colors duration-200"
                        :class="isActive(item.name)
                            ? 'bg-neon-green text-black'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'">
                        <i :class="[item.icon, 'w-4 text-center']" />
                        {{ item.label }}
                    </RouterLink>
                </li>
            </ul>
        </nav>

        <!-- Footer: back to site link -->
        <div class="p-4 border-t border-white/10 shrink-0">
            <RouterLink :to="{ name: 'home' }"
                class="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-500 hover:text-white transition-colors">
                <i class="fa-solid fa-arrow-left w-4 text-center" />
                Back to Site
            </RouterLink>
        </div>

    </aside>
</template>

<style scoped></style>