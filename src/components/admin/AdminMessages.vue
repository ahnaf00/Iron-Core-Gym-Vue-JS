<script setup>
import { ref, computed } from 'vue'

// ── Message data ──────────────────────────────────────────────
const messages = ref([
  {
    id: 1,
    name: 'Jordan Miles',
    email: 'jordan.miles@email.com',
    subject: 'Membership Inquiry',
    body: 'Hi, I\'m interested in joining Iron Core Gym. Could you tell me more about the Premium plan and whether it includes access to personal training sessions? I\'d also like to know about your opening hours on weekends.',
    date: '2025-05-14',
    time: '10:23 AM',
    read: false,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    subject: 'Class Schedule Question',
    body: 'Hello! I wanted to ask if the Morning Yoga class on Tuesdays is still available. I tried to book online but the slot seemed full. Is there a waitlist I can join? Also, are there any new classes being added next month?',
    date: '2025-05-13',
    time: '03:47 PM',
    read: false,
  },
  {
    id: 3,
    name: 'David Chen',
    email: 'd.chen92@email.com',
    subject: 'Personal Training Request',
    body: 'I\'ve been a Basic member for 6 months and I\'m thinking about upgrading to Elite for the personal training sessions. Can you let me know how the upgrade process works and if there are any ongoing promotions?',
    date: '2025-05-12',
    time: '08:15 AM',
    read: true,
  },
  {
    id: 4,
    name: 'Aisha Okafor',
    email: 'aisha.okafor@gmail.com',
    subject: 'Locker Room Feedback',
    body: 'I wanted to share some feedback about the locker room facilities. Overall the gym is fantastic, but the showers in the women\'s locker room have had low water pressure for the past two weeks. Could you please look into getting that fixed?',
    date: '2025-05-11',
    time: '06:52 PM',
    read: true,
  },
  {
    id: 5,
    name: 'Tom Eriksson',
    email: 'tom.e@workmail.com',
    subject: 'Corporate Membership',
    body: 'Hi there, I\'m the HR manager at a local tech company with about 40 employees. We\'re exploring corporate gym partnerships. Does Iron Core offer group or corporate plans? I\'d love to schedule a call to discuss options.',
    date: '2025-05-10',
    time: '11:04 AM',
    read: false,
  },
  {
    id: 6,
    name: 'Layla Nasser',
    email: 'layla.n@email.com',
    subject: 'Lost Item',
    body: 'Hello, I think I left my water bottle near the free weights area last Thursday evening around 7pm. It\'s a black Hydro Flask with a small sticker on the side. Has anyone turned it in to lost and found?',
    date: '2025-05-09',
    time: '09:30 AM',
    read: true,
  },
])

// ── Filter + search ───────────────────────────────────────────
const search = ref('')
const filterStatus = ref('All')

const filtered = computed(() =>
  messages.value.filter(m => {
    const q = search.value.toLowerCase()
    const matchSearch = m.name.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.subject.toLowerCase().includes(q)
    const matchStatus = filterStatus.value === 'Unread' ? !m.read
      : filterStatus.value === 'Read' ? m.read
        : true
    return matchSearch && matchStatus
  })
)

const unreadCount = computed(() => messages.value.filter(m => !m.read).length)

// ── Selection ─────────────────────────────────────────────────
const selected = ref(messages.value[0] ?? null)
const showDetail = ref(false)

function selectMessage(msg) {
  selected.value = msg
  showDetail.value = true
  const idx = messages.value.findIndex(m => m.id === msg.id)
  if (idx !== -1 && !messages.value[idx].read) {
    messages.value[idx].read = true
  }
}

function toggleRead(msg, e) {
  e.stopPropagation()
  const idx = messages.value.findIndex(m => m.id === msg.id)
  if (idx !== -1) messages.value[idx].read = !messages.value[idx].read
}

function markAllRead() {
  messages.value.forEach(m => { m.read = true })
}

// ── Delete ────────────────────────────────────────────────────
const pendingDelete = ref(null)

function askDelete(msg, e) {
  e.stopPropagation()
  pendingDelete.value = msg
}

function confirmDelete() {
  const id = pendingDelete.value.id
  messages.value = messages.value.filter(m => m.id !== id)
  if (selected.value?.id === id) {
    selected.value = messages.value[0] ?? null
  }
  pendingDelete.value = null
}
</script>

<template>
  <div class="space-y-6">

    <!-- Page heading ─────────────────────────────────────────── -->
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl font-heading font-bold text-white uppercase tracking-wider flex items-center gap-3">
          Messages
          <span v-if="unreadCount > 0"
            class="inline-flex items-center justify-center w-6 h-6 bg-neon-green text-black text-xs font-bold">
            {{ unreadCount }}
          </span>
        </h2>
        <p class="text-gray-500 text-sm mt-1">{{ messages.length }} total messages</p>
      </div>
      <button v-if="unreadCount > 0"
        class="flex items-center gap-2 text-xs text-gray-500 hover:text-neon-green uppercase tracking-wider font-bold transition-colors"
        @click="markAllRead">
        <i class="fa-solid fa-check-double" /> Mark all read
      </button>
    </div>

    <!-- Two-panel inbox ──────────────────────────────────────── -->
    <div class="flex border border-white/10 overflow-hidden" style="height: 640px;">

      <!-- LEFT: List panel -->
      <div class="w-full md:w-80 lg:w-96 shrink-0 flex flex-col border-r border-white/10 bg-black"
        :class="showDetail ? 'hidden md:flex' : 'flex'">

        <!-- Toolbar -->
        <div class="p-3 space-y-2 border-b border-white/10">

          <!-- Search -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
            <input v-model="search" type="text" placeholder="Search messages..."
              class="w-full bg-white/5 border border-white/10 pl-8 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:border-neon-green focus:outline-none transition-colors" />
          </div>

          <!-- Filter tabs -->
          <div class="flex gap-1">
            <button v-for="tab in ['All', 'Unread', 'Read']" :key="tab"
              class="flex-1 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors" :class="filterStatus === tab
                ? 'bg-neon-green text-black'
                : 'bg-white/5 text-gray-500 hover:text-white'" @click="filterStatus = tab">
              {{ tab }}
              <span v-if="tab === 'Unread' && unreadCount > 0">({{ unreadCount }})</span>
            </button>
          </div>
        </div>

        <!-- Message rows -->
        <div class="overflow-y-auto flex-1">

          <button v-for="msg in filtered" :key="msg.id"
            class="w-full text-left px-4 py-3.5 border-b border-white/5 hover:bg-white/5 transition-colors flex items-start gap-3"
            :class="selected?.id === msg.id
              ? 'bg-neon-green/5 border-l-2 border-l-neon-green'
              : 'border-l-2 border-l-transparent'" @click="selectMessage(msg)">
            <!-- Unread dot -->
            <span class="mt-2 w-2 h-2 rounded-full shrink-0 transition-colors"
              :class="msg.read ? 'bg-transparent' : 'bg-neon-green'" />

            <!-- Text content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2">
                <span class="text-sm truncate" :class="msg.read ? 'text-gray-400 font-normal' : 'text-white font-bold'">
                  {{ msg.name }}
                </span>
                <span class="text-gray-600 text-xs tabular-nums shrink-0">{{ msg.date }}</span>
              </div>
              <p class="text-xs mt-0.5 truncate" :class="msg.read ? 'text-gray-600' : 'text-gray-400'">
                {{ msg.subject }}
              </p>
              <p class="text-xs text-gray-600 truncate mt-0.5">{{ msg.body }}</p>
            </div>

            <!-- Quick actions -->
            <div class="flex flex-col gap-1.5 shrink-0">
              <button class="text-gray-600 hover:text-neon-green transition-colors"
                :title="msg.read ? 'Mark unread' : 'Mark read'" @click="toggleRead(msg, $event)">
                <i class="fa-solid text-xs" :class="msg.read ? 'fa-envelope' : 'fa-envelope-open'" />
              </button>
              <button class="text-gray-600 hover:text-red-400 transition-colors" title="Delete"
                @click="askDelete(msg, $event)">
                <i class="fa-solid fa-trash text-xs" />
              </button>
            </div>
          </button>

          <!-- Empty state -->
          <div v-if="filtered.length === 0" class="py-16 text-center text-gray-600">
            <i class="fa-solid fa-inbox text-2xl mb-3 block" />
            <p class="text-sm">No messages found.</p>
          </div>

        </div>
      </div>

      <!-- RIGHT: Detail panel -->
      <div class="flex-1 flex flex-col bg-black overflow-hidden" :class="showDetail ? 'flex' : 'hidden md:flex'">

        <!-- Mobile back -->
        <div class="md:hidden px-4 py-3 border-b border-white/10 shrink-0">
          <button class="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
            @click="showDetail = false">
            <i class="fa-solid fa-arrow-left text-xs" /> Back to inbox
          </button>
        </div>

        <!-- No selection -->
        <div v-if="!selected" class="flex-1 flex items-center justify-center text-gray-600">
          <div class="text-center">
            <i class="fa-solid fa-envelope-open-text text-4xl mb-4 block" />
            <p class="text-sm">Select a message to read</p>
          </div>
        </div>

        <template v-else>

          <!-- Detail header -->
          <div class="px-6 py-5 border-b border-white/10 shrink-0">
            <div class="flex items-start justify-between gap-4">

              <div class="min-w-0">
                <h3 class="text-white font-heading font-bold uppercase tracking-wider text-sm leading-snug">
                  {{ selected.subject }}
                </h3>
                <div class="flex items-center gap-3 mt-3">
                  <span
                    class="w-8 h-8 bg-neon-green/10 text-neon-green text-xs font-bold flex items-center justify-center uppercase shrink-0">
                    {{ selected.name.charAt(0) }}
                  </span>
                  <div class="min-w-0">
                    <p class="text-white text-sm font-medium truncate">{{ selected.name }}</p>
                    <p class="text-gray-500 text-xs truncate">{{ selected.email }}</p>
                  </div>
                </div>
              </div>

              <!-- Date + actions -->
              <div class="text-right shrink-0">
                <p class="text-gray-500 text-xs tabular-nums">{{ selected.date }}</p>
                <p class="text-gray-600 text-xs tabular-nums">{{ selected.time }}</p>
                <div class="flex items-center justify-end gap-3 mt-3">
                  <button class="text-gray-500 hover:text-neon-green transition-colors"
                    :title="selected.read ? 'Mark unread' : 'Mark read'" @click="toggleRead(selected, $event)">
                    <i class="fa-solid text-xs" :class="selected.read ? 'fa-envelope' : 'fa-envelope-open'" />
                  </button>
                  <button class="text-gray-500 hover:text-red-400 transition-colors"
                    @click="askDelete(selected, $event)">
                    <i class="fa-solid fa-trash text-xs" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          <!-- Body -->
          <div class="flex-1 overflow-y-auto px-6 py-6">
            <p class="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{{ selected.body }}</p>
          </div>

          <!-- Reply footer -->
          <div class="px-6 py-4 border-t border-white/10 shrink-0">
            <div class="flex items-center gap-3 px-4 py-3 bg-white/3 border border-white/10">
              <i class="fa-solid fa-reply text-gray-600 text-xs shrink-0" />
              <span class="text-gray-600 text-sm">Reply via email:</span>
              <a :href="`mailto:${selected.email}`" class="text-neon-green text-sm hover:underline truncate"
                target="_blank" rel="noopener noreferrer">
                {{ selected.email }}
              </a>
            </div>
          </div>

        </template>
      </div>

    </div>
  </div>

  <!-- Delete confirm ───────────────────────────────────────── -->
  <Teleport to="body">
    <div v-if="pendingDelete" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      @click.self="pendingDelete = null">
      <div class="bg-dark-surface border border-white/10 p-8 w-full max-w-sm mx-4">
        <h3 class="text-white font-heading font-bold uppercase tracking-wider mb-2">Delete Message</h3>
        <p class="text-gray-400 text-sm mb-6">
          Delete message from
          <span class="text-white font-medium">{{ pendingDelete.name }}</span>?
          This cannot be undone.
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

<style scoped></style>