<!-- src/components/frontend/contact/ContactInfoCard.vue -->
<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-black border border-white/10 p-6 group hover:border-neon-green transition-colors">

    <!-- Icon -->
    <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green text-xl mb-4 group-hover:bg-neon-green group-hover:text-black transition-colors">
      <i :class="card.icon" />
    </div>

    <h3 class="text-lg font-heading font-bold text-white uppercase mb-2">{{ card.title }}</h3>

    <!-- Linked content (phone / email) -->
    <p v-if="card.href" class="text-gray-400 text-sm">
      <a :href="card.href" class="hover:text-white transition-colors">{{ card.text }}</a>
    </p>

    <!-- Plain text content (address / hours) -->
    <p v-else class="text-gray-400 text-sm">{{ card.text }}</p>

  </div>
</template>

<style scoped></style>