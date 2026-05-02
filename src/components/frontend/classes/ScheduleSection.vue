<script setup>

</script>

<template>
    <!-- ==================== SCHEDULE SECTION ==================== -->
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">

            <div class="overflow-x-auto">
                <table class="w-full min-w-[800px] border-collapse text-left">
                    <thead>
                        <tr
                            class="bg-black text-white font-heading text-lg uppercase tracking-wider border-b border-white/20">
                            <th class="p-6 border-r border-white/10 text-neon-green">Time</th>
                            <th class="p-6 border-r border-white/10">Monday</th>
                            <th class="p-6 border-r border-white/10">Tuesday</th>
                            <th class="p-6 border-r border-white/10">Wednesday</th>
                            <th class="p-6 border-r border-white/10">Thursday</th>
                            <th class="p-6 border-r border-white/10">Friday</th>
                            <th class="p-6 border-r border-white/10">Saturday</th>
                            <th class="p-6">Sunday</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-gray-300">
                        <!-- Row 1 -->
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-6 border-r border-white/10 font-bold text-white">06:00 AM</td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Cardio</span>
                                <span class="text-xs opacity-70">John Doe</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Yoga</span>
                                <span class="text-xs opacity-70">Jane Smith</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span
                                    class="block font-bold uppercase text-white group-hover:text-black">Crossfit</span>
                                <span class="text-xs opacity-70">Mike Tyson</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td class="p-6"></td>
                        </tr>
                        <!-- Row 2 -->
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-6 border-r border-white/10 font-bold text-white">08:00 AM</td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span
                                    class="block font-bold uppercase text-white group-hover:text-black">Bodybuilding</span>
                                <span class="text-xs opacity-70">Sarah Connor</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Cardio</span>
                                <span class="text-xs opacity-70">John Doe</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Boxing</span>
                                <span class="text-xs opacity-70">Mike Tyson</span>
                            </td>
                            <td class="p-6 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Yoga</span>
                                <span class="text-xs opacity-70">Jane Smith</span>
                            </td>
                        </tr>
                        <!-- Row 3 -->
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-6 border-r border-white/10 font-bold text-white">10:00 AM</td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span
                                    class="block font-bold uppercase text-white group-hover:text-black">Crossfit</span>
                                <span class="text-xs opacity-70">Mike Tyson</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span
                                    class="block font-bold uppercase text-white group-hover:text-black">Bodybuilding</span>
                                <span class="text-xs opacity-70">Sarah Connor</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Yoga</span>
                                <span class="text-xs opacity-70">Jane Smith</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td class="p-6"></td>
                        </tr>
                        <!-- Row 4 -->
                        <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td class="p-6 border-r border-white/10 font-bold text-white">05:00 PM</td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Yoga</span>
                                <span class="text-xs opacity-70">Jane Smith</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Boxing</span>
                                <span class="text-xs opacity-70">Mike Tyson</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Cardio</span>
                                <span class="text-xs opacity-70">John Doe</span>
                            </td>
                            <td class="p-6 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Zumba</span>
                                <span class="text-xs opacity-70">Sarah Connor</span>
                            </td>
                        </tr>
                        <!-- Row 5 -->
                        <tr class="hover:bg-white/5 transition-colors">
                            <td class="p-6 border-r border-white/10 font-bold text-white">07:00 PM</td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Boxing</span>
                                <span class="text-xs opacity-70">Mike Tyson</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span class="block font-bold uppercase text-white group-hover:text-black">Cardio</span>
                                <span class="text-xs opacity-70">John Doe</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td
                                class="p-6 border-r border-white/10 group cursor-pointer hover:bg-neon-green hover:text-black transition-colors">
                                <span
                                    class="block font-bold uppercase text-white group-hover:text-black">Bodybuilding</span>
                                <span class="text-xs opacity-70">Sarah Connor</span>
                            </td>
                            <td class="p-6 border-r border-white/10"></td>
                            <td class="p-6"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </section>
</template>

<style scoped></style>