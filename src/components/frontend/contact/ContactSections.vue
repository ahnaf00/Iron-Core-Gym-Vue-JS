<script setup>

</script>

<template>
    <section class="py-24 bg-dark-surface">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

                <!-- Left Column: Info & Map -->
                <div class="space-y-12">

                    <!-- Info Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div
                            class="bg-black border border-white/10 p-6 group hover:border-neon-green transition-colors">
                            <div
                                class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green text-xl mb-4 group-hover:bg-neon-green group-hover:text-black transition-colors">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <h3 class="text-lg font-heading font-bold text-white uppercase mb-2">Location</h3>
                            <p class="text-gray-400 text-sm">123 Iron Street, Muscle City, MC 90210, United States</p>
                        </div>
                        <div
                            class="bg-black border border-white/10 p-6 group hover:border-neon-green transition-colors">
                            <div
                                class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green text-xl mb-4 group-hover:bg-neon-green group-hover:text-black transition-colors">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <h3 class="text-lg font-heading font-bold text-white uppercase mb-2">Phone</h3>
                            <p class="text-gray-400 text-sm">
                                <a href="tel:+1234567890" class="hover:text-white transition-colors">+1 (234)
                                    567-890</a>
                            </p>
                        </div>
                        <div
                            class="bg-black border border-white/10 p-6 group hover:border-neon-green transition-colors">
                            <div
                                class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green text-xl mb-4 group-hover:bg-neon-green group-hover:text-black transition-colors">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <h3 class="text-lg font-heading font-bold text-white uppercase mb-2">Email</h3>
                            <p class="text-gray-400 text-sm">
                                <a href="mailto:info@ironcoregym.com"
                                    class="hover:text-white transition-colors">info@ironcoregym.com</a>
                            </p>
                        </div>
                        <div
                            class="bg-black border border-white/10 p-6 group hover:border-neon-green transition-colors">
                            <div
                                class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green text-xl mb-4 group-hover:bg-neon-green group-hover:text-black transition-colors">
                                <i class="fa-solid fa-clock"></i>
                            </div>
                            <h3 class="text-lg font-heading font-bold text-white uppercase mb-2">Hours</h3>
                            <p class="text-gray-400 text-sm">Mon - Sun: 6:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                    <!-- Map -->
                    <div class="h-80 w-full bg-white/5 border border-white/10 relative overflow-hidden group">
                        <!-- Placeholder Map Image/Iframe -->
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164965!2d-73.98784412426285!3d40.75797463483256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1709420000000!5m2!1sen!2sus"
                            width="100%" height="100%" style="border:0; filter: grayscale(100%) invert(90%);"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            class="group-hover:filter-none transition-all duration-500"></iframe>
                    </div>

                </div>

                <!-- Right Column: Form -->
                <div class="bg-black p-8 md:p-12 border border-white/10">
                    <span class="text-neon-green font-bold tracking-[0.2em] uppercase text-sm">Get In Touch</span>
                    <h2 class="text-3xl font-heading font-bold text-white mt-2 mb-8 uppercase">Send Us A <span
                            class="text-neon-green">Message</span></h2>

                    <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input type="text" placeholder="Your Name"
                                    class="w-full bg-transparent border border-white/20 p-4 text-white placeholder-gray-500 focus:border-neon-green focus:outline-none transition-colors">
                            </div>
                            <div>
                                <input type="email" placeholder="Your Email"
                                    class="w-full bg-transparent border border-white/20 p-4 text-white placeholder-gray-500 focus:border-neon-green focus:outline-none transition-colors">
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Subject"
                                class="w-full bg-transparent border border-white/20 p-4 text-white placeholder-gray-500 focus:border-neon-green focus:outline-none transition-colors">
                        </div>
                        <div>
                            <textarea rows="5" placeholder="Message"
                                class="w-full bg-transparent border border-white/20 p-4 text-white placeholder-gray-500 focus:border-neon-green focus:outline-none transition-colors resize-none"></textarea>
                        </div>
                        <button type="submit"
                            class="w-full py-4 bg-neon-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300 clip-path-slant">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped></style>