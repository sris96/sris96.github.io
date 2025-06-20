<template>
  <footer class="bg-neutral-100 text-neutral-800 mt-20">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="text-2xl font-display font-bold bg-gradient-to-r from-accent-600 to-primary-800 bg-clip-text text-transparent">
            Srishty Chandra
          </div>
          <p class="text-neutral-600 text-sm">
            Research Professional specializing in Economics and Data Analysis
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-900">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/about" class="text-neutral-600 hover:text-accent-700 text-sm transition-colors">About</router-link></li>
            <li><router-link to="/resume" class="text-neutral-600 hover:text-accent-700 text-sm transition-colors">Resume</router-link></li>
            <li><router-link to="/projects" class="text-neutral-600 hover:text-accent-700 text-sm transition-colors">Projects</router-link></li>
            <li><router-link to="/contact" class="text-neutral-600 hover:text-accent-700 text-sm transition-colors">Contact</router-link></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-900">Connect</h4>
          <div class="flex space-x-4">
            <a href="https://linkedin.com/in/srishty-chandra-9a5a73218" target="_blank" rel="noopener noreferrer" class="text-neutral-600 hover:text-accent-700 transition-colors">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:srishty.chandra.2021@ssc.ac.in" class="text-neutral-600 hover:text-accent-700 transition-colors">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-neutral-300 text-center">
        <p class="text-neutral-500 text-sm">&copy; 2024 Srishty Chandra. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>