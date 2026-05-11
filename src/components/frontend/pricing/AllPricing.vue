<script setup>
import { ref, computed } from 'vue'
import PricingCard from './PricingCard.vue'

const isYearly = ref(false)

const plans = ref([
  {
    id: 1,
    name: 'Beginner',
    description: 'Perfect for starters looking to get fit.',
    monthlyPrice: 29,
    yearlyPrice: 279,
    featured: false,
    features: [
      { id: 1, label: '06:00 - 22:00 Access',  included: true  },
      { id: 2, label: 'Standard Equipment',     included: true  },
      { id: 3, label: 'Locker Room Access',     included: true  },
      { id: 4, label: 'Personal Trainer',       included: false },
      { id: 5, label: 'Nutrition Guide',        included: false },
    ],
  },
  {
    id: 2,
    name: 'Pro Athlete',
    description: 'For dedicated gym goers.',
    monthlyPrice: 49,
    yearlyPrice: 469,
    featured: true,
    features: [
      { id: 1, label: '24/7 Gym Access',        included: true  },
      { id: 2, label: 'All Equipment',          included: true  },
      { id: 3, label: 'Free Group Classes',     included: true  },
      { id: 4, label: '1 Personal Session/mo',  included: true  },
      { id: 5, label: 'Nutrition Guide',        included: false },
    ],
  },
  {
    id: 3,
    name: 'Elite',
    description: 'Maximum performance package.',
    monthlyPrice: 89,
    yearlyPrice: 859,
    featured: false,
    features: [
      { id: 1, label: '24/7 VIP Access',        included: true },
      { id: 2, label: 'All Equipment + Sauna',  included: true },
      { id: 3, label: 'Unlimited Classes',      included: true },
      { id: 4, label: '4 Personal Sessions/mo', included: true },
      { id: 5, label: 'Full Nutrition Guide',   included: true },
    ],
  },
])

// Derive each plan's display price from the toggle state
const displayPrices = computed(() =>
  Object.fromEntries(
    plans.value.map((plan) => [
      plan.id,
      isYearly.value ? plan.yearlyPrice : plan.monthlyPrice,
    ])
  )
)
</script>

<template>
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Toggle Switch -->
            <div class="flex justify-center items-center mb-16 gap-4">
                <span class="text-white font-bold uppercase tracking-wider" id="monthly-label">Monthly</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" id="pricing-toggle">
                    <div
                        class="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-neon-green after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-white/20">
                    </div>
                </label>
                <span class="text-gray-500 font-bold uppercase tracking-wider" id="yearly-label">Yearly <span
                        class="text-neon-green text-xs ml-1">(Save 20%)</span></span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

               <PricingCard
                    v-for="plan in plans"
                    :key="plan.id"
                    :plan="plan"
                    :display-price="displayPrices[plan.id]"
                    :is-yearly="isYearly"
               ></PricingCard>

            </div>
        </div>
    </section>
</template>

<style scoped></style>