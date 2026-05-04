<script setup>
import { ref } from 'vue';
import PricingCard from './PricingCard.vue';

const allFeatures = [
  { id: 1, label: 'Free Riding'          },
  { id: 2, label: 'Unlimited Equipment'  },
  { id: 3, label: 'Personal Trainer'     },
  { id: 4, label: 'Weight Losing Classes' },
  { id: 5, label: 'Month to Month'       },
]

function buildFeatures(includedIds)
{
    return allFeatures.map(f => ({ ...f,included:includedIds.includes(f.id) }))
}

const plans = ref([
  { id: 1, name: 'Basic Plan',    price: 29, popular: false, features: buildFeatures([1, 2, 3])       },
  { id: 2, name: 'Standard Plan', price: 49, popular: true,  features: buildFeatures([1, 2, 3, 4])    },
  { id: 3, name: 'Premium Plan',  price: 89, popular: false, features: buildFeatures([1, 2, 3, 4, 5]) },
])
</script>

<template>
    <section id="pricing" class="py-24 bg-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Membership Plans</span>
                <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mt-2 uppercase">Choose Your <span
                        class="text-neon-green">Tier</span></h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                    v-for="plan in plans"
                    :key="plan.id"
                    :plan="plan"
                />

            </div>
        </div>
    </section>
</template>

<style scoped></style>