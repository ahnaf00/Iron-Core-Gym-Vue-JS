<script setup>
const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages:  { type: Number, required: true },
})

const emit = defineEmits(['update:currentPage'])

const goTo    = (page) => { if (page >= 1 && page <= props.totalPages) emit('update:currentPage', page) }
const prev    = ()     => goTo(props.currentPage - 1)
const next    = ()     => goTo(props.currentPage + 1)
</script>

<template>
  <div class="flex justify-center items-center gap-2 pt-8">

    <!-- Prev -->
    <button
      :disabled="currentPage === 1"
      class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      aria-label="Previous page"
      @click="prev"
    >
      <i class="fa-solid fa-chevron-left" />
    </button>

    <!-- Page numbers -->
    <button
      v-for="page in totalPages"
      :key="page"
      class="w-10 h-10 flex items-center justify-center font-bold transition-colors"
      :class="page === currentPage
        ? 'bg-neon-green text-black'
        : 'border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black'"
      :aria-current="page === currentPage ? 'page' : undefined"
      @click="goTo(page)"
    >
      {{ page }}
    </button>

    <!-- Next -->
    <button
      :disabled="currentPage === totalPages"
      class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      aria-label="Next page"
      @click="next"
    >
      <i class="fa-solid fa-chevron-right" />
    </button>

  </div>
</template>

<style scoped></style>