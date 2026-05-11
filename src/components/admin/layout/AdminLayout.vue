<script setup>
import AdminSidebar from './AdminSidebar.vue'
import AdminTopbar  from './AdminTopbar.vue'
</script>

<template>
  <div class="flex min-h-screen bg-dark-surface text-white">

    <!-- Persistent sidebar -->
    <AdminSidebar />

    <!-- Main content area -->
    <div class="flex flex-col flex-1 min-w-0">

      <!-- Persistent topbar -->
      <AdminTopbar />

      <!-- Page content — swaps on every admin route change -->
      <main class="flex-1 p-6 overflow-y-auto">
        <RouterView />
      </main>

    </div>
  </div>
</template>

<style scoped></style>