<script setup>
import { reactive, ref } from 'vue'

// ── Gym info ──────────────────────────────────────────────────
const gymInfo = reactive({
  name: 'Iron Core Gym',
  tagline: 'Forge Your Strength',
  email: 'info@ironcoregym.com',
  phone: '+1 (800) 555-0199',
  address: '247 Steel Avenue, New York, NY 10001',
})

// ── Opening hours ─────────────────────────────────────────────
const hours = reactive([
  { day: 'Monday', open: true, from: '06:00', to: '22:00' },
  { day: 'Tuesday', open: true, from: '06:00', to: '22:00' },
  { day: 'Wednesday', open: true, from: '06:00', to: '22:00' },
  { day: 'Thursday', open: true, from: '06:00', to: '22:00' },
  { day: 'Friday', open: true, from: '06:00', to: '21:00' },
  { day: 'Saturday', open: true, from: '08:00', to: '20:00' },
  { day: 'Sunday', open: false, from: '09:00', to: '17:00' },
])

// ── Social links ──────────────────────────────────────────────
const socials = reactive({
  instagram: 'https://instagram.com/ironcoregym',
  facebook: 'https://facebook.com/ironcoregym',
  twitter: 'https://twitter.com/ironcoregym',
  youtube: '',
})

// ── Save state ────────────────────────────────────────────────
const saveState = ref('idle') 

function saveSettings() {
  saveState.value = 'saving'
  setTimeout(() => {
    saveState.value = 'saved'
    setTimeout(() => { saveState.value = 'idle' }, 2500)
  }, 800)
}

// ── Danger zone ───────────────────────────────────────────────
const showDangerConfirm = ref(false)

function confirmReset() {
  showDangerConfirm.value = false
}
</script>

<template>
  <div class="space-y-6 max-w-3xl">

    <!-- Page heading ─────────────────────────────────────────── -->
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider">Settings</h2>
        <p class="text-gray-500 text-sm mt-1">Manage your gym profile and preferences</p>
      </div>

      <!-- Save button -->
      <button class="flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors"
        :class="saveState === 'saved'
          ? 'bg-green-500 text-white cursor-default'
          : 'bg-neon-green text-black hover:bg-white'" :disabled="saveState === 'saving' || saveState === 'saved'"
        @click="saveSettings">
        <i class="fa-solid" :class="{
          'fa-floppy-disk': saveState === 'idle',
          'fa-circle-notch fa-spin': saveState === 'saving',
          'fa-check': saveState === 'saved',
        }" />
        {{ saveState === 'idle' ? 'Save Changes'
          : saveState === 'saving' ? 'Saving...'
            : 'Saved!' }}
      </button>
    </div>

    <!-- ── Section 1: Gym Info ─────────────────────────────── -->
    <section class="bg-black border border-white/10">
      <div class="px-6 py-4 border-b border-white/10">
        <h3 class="text-white font-heading font-bold uppercase tracking-wider text-sm flex items-center gap-2">
          <i class="fa-solid fa-dumbbell text-neon-green text-xs" /> Gym Information
        </h3>
      </div>
      <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">

        <!-- Name -->
        <div class="sm:col-span-2">
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-name">
            Gym Name
          </label>
          <input id="s-name" v-model="gymInfo.name" type="text"
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

        <!-- Tagline -->
        <div class="sm:col-span-2">
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-tagline">
            Tagline
          </label>
          <input id="s-tagline" v-model="gymInfo.tagline" type="text" placeholder="Your gym's motto"
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-email">
            Contact Email
          </label>
          <input id="s-email" v-model="gymInfo.email" type="email"
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-phone">
            Phone
          </label>
          <input id="s-phone" v-model="gymInfo.phone" type="tel"
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

        <!-- Address -->
        <div class="sm:col-span-2">
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-address">
            Address
          </label>
          <input id="s-address" v-model="gymInfo.address" type="text"
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

      </div>
    </section>

    <!-- ── Section 2: Opening Hours ───────────────────────── -->
    <section class="bg-black border border-white/10">
      <div class="px-6 py-4 border-b border-white/10">
        <h3 class="text-white font-heading font-bold uppercase tracking-wider text-sm flex items-center gap-2">
          <i class="fa-solid fa-clock text-neon-green text-xs" /> Opening Hours
        </h3>
      </div>
      <div class="p-6 space-y-3">

        <div v-for="(row, i) in hours" :key="row.day" class="flex items-center gap-4">
          <!-- Day label -->
          <span class="w-28 text-gray-400 text-sm shrink-0">{{ row.day }}</span>

          <!-- Open/Closed toggle -->
          <label class="flex items-center gap-2 cursor-pointer shrink-0">
            <div class="relative w-9 h-5 rounded-full transition-colors duration-200"
              :class="row.open ? 'bg-neon-green' : 'bg-white/10'">
              <div class="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-black transition-transform duration-200"
                :class="row.open ? 'translate-x-4' : 'translate-x-0'" />
              <input v-model="hours[i].open" type="checkbox" class="sr-only" />
            </div>
            <span class="text-xs font-bold uppercase tracking-wider w-14"
              :class="row.open ? 'text-neon-green' : 'text-gray-600'">
              {{ row.open ? 'Open' : 'Closed' }}
            </span>
          </label>

          <!-- Time range (disabled when closed) -->
          <div class="flex items-center gap-2 flex-1">
            <input v-model="hours[i].from" type="time" :disabled="!row.open"
              class="flex-1 bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:border-neon-green focus:outline-none transition-colors disabled:opacity-30 disabled:cursor-not-allowed" />
            <span class="text-gray-600 text-xs shrink-0">to</span>
            <input v-model="hours[i].to" type="time" :disabled="!row.open"
              class="flex-1 bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:border-neon-green focus:outline-none transition-colors disabled:opacity-30 disabled:cursor-not-allowed" />
          </div>

        </div>

      </div>
    </section>

    <!-- ── Section 3: Social Links ────────────────────────── -->
    <section class="bg-black border border-white/10">
      <div class="px-6 py-4 border-b border-white/10">
        <h3 class="text-white font-heading font-bold uppercase tracking-wider text-sm flex items-center gap-2">
          <i class="fa-solid fa-share-nodes text-neon-green text-xs" /> Social Links
        </h3>
      </div>
      <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">

        <!-- Instagram -->
        <div>
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-ig">
            <i class="fa-brands fa-instagram mr-1" /> Instagram
          </label>
          <input id="s-ig" v-model="socials.instagram" type="url" placeholder="https://instagram.com/..."
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

        <!-- Facebook -->
        <div>
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-fb">
            <i class="fa-brands fa-facebook mr-1" /> Facebook
          </label>
          <input id="s-fb" v-model="socials.facebook" type="url" placeholder="https://facebook.com/..."
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

        <!-- Twitter/X -->
        <div>
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-tw">
            <i class="fa-brands fa-x-twitter mr-1" /> X (Twitter)
          </label>
          <input id="s-tw" v-model="socials.twitter" type="url" placeholder="https://twitter.com/..."
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

        <!-- YouTube -->
        <div>
          <label class="block text-gray-400 text-xs uppercase tracking-wider mb-2" for="s-yt">
            <i class="fa-brands fa-youtube mr-1" /> YouTube
          </label>
          <input id="s-yt" v-model="socials.youtube" type="url" placeholder="https://youtube.com/..."
            class="w-full bg-white/5 border border-white/10 p-3 text-white text-sm placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
        </div>

      </div>
    </section>

    <!-- ── Section 4: Danger Zone ─────────────────────────── -->
    <section class="bg-black border border-red-500/30">
      <div class="px-6 py-4 border-b border-red-500/20">
        <h3 class="text-red-400 font-heading font-bold uppercase tracking-wider text-sm flex items-center gap-2">
          <i class="fa-solid fa-triangle-exclamation text-xs" /> Danger Zone
        </h3>
      </div>
      <div class="p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-white text-sm font-medium">Reset all demo data</p>
          <p class="text-gray-500 text-xs mt-1">
            Clears all members, classes, trainers and blog posts. This cannot be undone.
          </p>
        </div>
        <button
          class="shrink-0 px-4 py-2.5 border border-red-500/50 text-red-400 text-xs font-bold uppercase tracking-wider hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
          @click="showDangerConfirm = true">
          <i class="fa-solid fa-rotate-left mr-1" /> Reset Data
        </button>
      </div>
    </section>

  </div>

  <!-- Danger zone confirm ──────────────────────────────────── -->
  <Teleport to="body">
    <div v-if="showDangerConfirm" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      @click.self="showDangerConfirm = false">
      <div class="bg-dark-surface border border-red-500/40 p-8 w-full max-w-sm mx-4">
        <div class="flex items-center gap-3 mb-4">
          <i class="fa-solid fa-triangle-exclamation text-red-400 text-xl" />
          <h3 class="text-white font-heading font-bold uppercase tracking-wider">Are you sure?</h3>
        </div>
        <p class="text-gray-400 text-sm mb-6">
          This will permanently reset all gym data. Every member, class, trainer, blog post and pricing plan will be
          removed. This action <span class="text-white font-medium">cannot be undone</span>.
        </p>
        <div class="flex gap-3">
          <button
            class="flex-1 py-2.5 border border-white/20 text-gray-400 text-sm font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors"
            @click="showDangerConfirm = false">
            Cancel
          </button>
          <button
            class="flex-1 py-2.5 bg-red-500 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-colors"
            @click="confirmReset">
            Yes, Reset
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>