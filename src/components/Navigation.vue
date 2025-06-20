<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300" :class="scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2 group">
            <div class="text-xl sm:text-2xl font-display font-bold bg-gradient-to-r from-accent-600 to-primary-800 bg-clip-text text-transparent transition-opacity group-hover:opacity-80">
              SC
            </div>
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="nav-link"
            :class="{ 'text-accent-700': $route.path === item.href }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-3 rounded-lg text-neutral-700 hover:text-accent-700 hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 transition-colors touch-manipulation"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div 
      v-show="mobileMenuOpen" 
      class="md:hidden bg-white/95 backdrop-blur-sm border-t border-neutral-100 shadow-lg"
    >
      <div class="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          @click="mobileMenuOpen = false"
          class="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-accent-700 hover:bg-accent-50 transition-colors touch-manipulation"
          :class="{ 'text-accent-700 bg-accent-50': $route.path === item.href }"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>