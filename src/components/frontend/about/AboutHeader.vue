<script setup>

</script>

<template>
    <section class="relative h-80 flex items-center justify-center bg-black overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
                alt="About Background" class="w-full h-full object-cover opacity-50">
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>
        <div class="relative z-10 text-center">
            <h1 class="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-4 tracking-wider">About Us
            </h1>
            <nav aria-label="Breadcrumb" class="flex justify-center">
                <ol class="flex items-center space-x-2 text-sm text-gray-400 uppercase tracking-wide">
                    <li><a href="index.html" class="hover:text-neon-green transition-colors">Home</a></li>
                    <li><span class="text-neon-green">/</span></li>
                    <li class="text-white" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </section>
</template>

<style scoped></style>