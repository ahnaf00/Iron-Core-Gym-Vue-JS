<script setup>
import { ref } from 'vue'
import ScheduleCell from './ScheduleCell.vue'

// Single source of truth for column headers
const days = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])

// null = empty cell  |  { className, trainer } = active class
// Each row: { id, time, slots: [ ...7 entries matching days order ] }
const scheduleRows = ref([
  {
    id: 1,
    time: '06:00 AM',
    slots: [
      { className: 'Cardio',   trainer: 'John Doe'     },
      null,
      { className: 'Yoga',     trainer: 'Jane Smith'   },
      null,
      { className: 'Crossfit', trainer: 'Mike Tyson'   },
      null,
      null,
    ],
  },
  {
    id: 2,
    time: '08:00 AM',
    slots: [
      null,
      { className: 'Bodybuilding', trainer: 'Sarah Connor' },
      null,
      { className: 'Cardio',       trainer: 'John Doe'     },
      null,
      { className: 'Boxing',       trainer: 'Mike Tyson'   },
      { className: 'Yoga',         trainer: 'Jane Smith'   },
    ],
  },
  {
    id: 3,
    time: '10:00 AM',
    slots: [
      { className: 'Crossfit',     trainer: 'Mike Tyson'   },
      null,
      { className: 'Bodybuilding', trainer: 'Sarah Connor' },
      null,
      { className: 'Yoga',         trainer: 'Jane Smith'   },
      null,
      null,
    ],
  },
  {
    id: 4,
    time: '05:00 PM',
    slots: [
      null,
      { className: 'Yoga',   trainer: 'Jane Smith'   },
      null,
      { className: 'Boxing', trainer: 'Mike Tyson'   },
      null,
      { className: 'Cardio', trainer: 'John Doe'     },
      { className: 'Zumba',  trainer: 'Sarah Connor' },
    ],
  },
  {
    id: 5,
    time: '07:00 PM',
    slots: [
      { className: 'Boxing',       trainer: 'Mike Tyson'   },
      null,
      { className: 'Cardio',       trainer: 'John Doe'     },
      null,
      { className: 'Bodybuilding', trainer: 'Sarah Connor' },
      null,
      null,
    ],
  },
])
</script>

<template>
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">

            <div class="overflow-x-auto">
                <table class="w-full min-w-[800px] border-collapse text-left">
                    <thead>
                        <tr
                            class="bg-black text-white font-heading text-lg uppercase tracking-wider border-b border-white/20">
                            <th class="p-6 border-r border-white/10 text-neon-green">Time</th>
                            <th 
                                v-for="(day,index) in days"
                                :key="index"
                                class="p-6"
                                :class="{ 'border-r border-white/10':index< days.length-1 }"    
                            >{{ day }}</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-gray-300">
                        <!-- Row 1 -->
                        <tr
                            v-for="(row,rowIndex) in scheduleRows"
                            :key="row.id"
                            class=" hover:bg-white/5 transition-colors"
                            :class="{ 'border-b border-white/10': rowIndex < scheduleRows.length-1 }"
                        >
                            
                            <td class="p-6 border-r border-white/10 font-bold text-white">{{ row.time }}</td>

                            <ScheduleCell
                                v-for="(slot,slotIndex) in row.slots"
                                :key="slotIndex"
                                :entry="slot"
                                :islast="slotIndex==row.slots.length-1"
                            ></ScheduleCell>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </section>
</template>

<style scoped></style>