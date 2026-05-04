<script setup>
import { ref, computed } from 'vue'

const height = ref('')
const weight = ref('')
const age    = ref('')
const gender = ref('Male')

const bmiResult   = ref(null)
const bmiCategory = ref('')

// Static range table — extracted to ref array
const bmiRanges = ref([
  { id: 1, range: 'Below 18.5',  label: 'Underweight' },
  { id: 2, range: '18.5 – 24.9', label: 'Healthy'     },
  { id: 3, range: '25.0 – 29.9', label: 'Overweight'  },
  { id: 4, range: '30.0 & Above', label: 'Obese'       },
])

// Dynamic result colour based on BMI value
const resultColorClass = computed(() => {
  if (!bmiResult.value) return ''
  if (bmiResult.value < 18.5) return 'text-blue-400'
  if (bmiResult.value < 25)   return 'text-neon-green'
  if (bmiResult.value < 30)   return 'text-yellow-400'
  return 'text-red-500'
})

function calculateBMI() {
  const h = parseFloat(height.value)
  const w = parseFloat(weight.value)
  if (!h || !w || h <= 0 || w <= 0) return

  const heightM = h / 100
  const bmi = w / (heightM * heightM)
  bmiResult.value = parseFloat(bmi.toFixed(1))

  if (bmi < 18.5)    bmiCategory.value = 'Underweight'
  else if (bmi < 25) bmiCategory.value = 'Healthy'
  else if (bmi < 30) bmiCategory.value = 'Overweight'
  else               bmiCategory.value = 'Obese'
}

function resetForm() {
  height.value = ''
  weight.value = ''
  age.value    = ''
  gender.value = 'Male'
  bmiResult.value  = null
  bmiCategory.value = ''
}
</script>

<template>
    <section id="bmi" class="py-24 bg-dark-surface relative">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <!-- Text Content -->
                <div class="space-y-6">
                    <h2 class="text-4xl font-heading font-bold text-white uppercase">Calculate Your <span
                            class="text-neon-green">BMI</span></h2>
                    <p class="text-gray-400">
                        Determine your Body Mass Index (BMI) to understand your weight category. This simple tool can
                        help you plan your fitness journey more effectively.
                    </p>

                    <div class="grid grid-cols-2 gap-4 text-sm text-gray-400 mt-8">
                        <div 
                            v-for="range in bmiRanges"
                            :key="range.id"
                            class="p-3 border border-white/10 text-center"
                        >
                            <span class="block text-white font-bold mb-1">{{ range.range }}</span>
                            {{ range.label }}
                        </div>
                    </div>
                </div>

                <!-- Calculator Form -->
                <div class="bg-black p-8 border border-white/10 relative">
                    <h3 class="text-xl font-heading font-bold text-white uppercase mb-6 text-center">BMI Calculator</h3>
                    <form class="space-y-4" @submit.prevent="calculateBMI">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <input type="number" v-model="height" placeholder="Height / cm"
                                class="w-full bg-transparent border border-white/20 p-3 text-white focus:border-neon-green focus:outline-none transition-colors">

                            <input type="number" v-model="weight" placeholder="Weight / kg"
                                class="w-full bg-transparent border border-white/20 p-3 text-white focus:border-neon-green focus:outline-none transition-colors">

                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="number" v-model="age" placeholder="Age"
                                class="w-full bg-transparent border border-white/20 p-3 text-white focus:border-neon-green focus:outline-none transition-colors">

                            <select v-model="gender"
                                class="w-full bg-transparent border border-white/20 p-3 text-gray-400 focus:border-neon-green focus:outline-none transition-colors">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <button type="submit"
                            class="w-full py-3 bg-neon-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
                            Calculate Now
                        </button>
                    </form>

                    <!-- Animated result -->
                    <Transition name="fade">
                        <div v-if="bmiResult !== null"
                        class="mt-6 p-4 border border-white/10 text-center space-y-1">
                        <p class="text-gray-400 text-sm uppercase tracking-wider">Your BMI</p>
                        <p class="text-5xl font-heading font-bold" :class="resultColorClass">{{ bmiResult }}</p>
                        <p class="text-white font-bold uppercase tracking-wide">{{ bmiCategory }}</p>
                        <button type="button" @click="resetForm"
                            class="mt-3 text-xs text-gray-500 hover:text-neon-green transition-colors uppercase tracking-wider">
                            Reset
                        </button>
                        </div>
                    </Transition>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>