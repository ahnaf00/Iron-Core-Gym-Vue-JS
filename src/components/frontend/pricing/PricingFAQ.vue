<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    id: 1,
    question: 'Can I cancel my membership anytime?',
    answer:
      'Yes, absolutely. Our monthly plans are month-to-month with no long-term commitment. You can cancel up to 24 hours before your next billing cycle.',
  },
  {
    id: 2,
    question: 'Do you offer a free trial day?',
    answer:
      "We offer a one-day guest pass for $15. If you decide to join within 7 days of using the guest pass, we'll credit that amount towards your first month's membership.",
  },
  {
    id: 3,
    question: 'Are personal trainers included?',
    answer:
      'The Basic plan does not include personal training. The Pro plan includes 1 session per month, and the Elite plan includes 4 sessions per month. Additional sessions can be purchased separately.',
  },
  {
    id: 4,
    question: 'Is there a freezing policy?',
    answer:
      'Yes, annual members can freeze their membership for up to 3 months for medical reasons or travel. Please contact the front desk for assistance.',
  },
])
</script>

<template>
    <section class="py-24 bg-black border-t border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-neon-green font-bold tracking-[0.2em] uppercase">Common Questions</span>
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mt-2 uppercase">F.A.Q.</h2>
            </div>

            <div class="max-w-3xl mx-auto space-y-4">
                <!-- FAQ Item 1 -->
                <details
                    v-for="faq in faqs"
                    :key="faq.id"
                    class="group bg-dark-surface border border-gray-800 rounded-sm overflow-hidden transition-all duration-300 open:border-neon-green">
                    <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                        <span
                            class="font-heading text-lg text-white group-hover:text-neon-green transition-colors uppercase font-bold">{{ faq.question }}</span>
                        <span class="transition-transform duration-300 group-open:rotate-180 text-neon-green">
                            <i class="fa-solid fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div class="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                        {{ faq.answer }}
                    </div>
                </details>

            </div>
        </div>
    </section>
</template>

<style scoped></style>