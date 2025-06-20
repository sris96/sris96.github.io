<template>
  <div class="min-h-screen">
    <!-- Mobile-Optimized Header -->
    <section class="pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-accent-50/40 to-white border-b border-neutral-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-900 mb-3 sm:mb-4">Research Projects</h1>
        <p class="text-base sm:text-lg text-neutral-600">Exploring Economic Insights Through Data-Driven Research</p>
      </div>
    </section>

    <!-- Mobile-Optimized Main Content -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <!-- Mobile-Optimized Featured Project -->
        <div class="mb-12 sm:mb-16">
          <article class="card bg-gradient-to-br from-accent-50/30 to-neutral-50 border-accent-200">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-700 mb-3 sm:mb-4">
                  Featured Research
                </span>
                <h2 class="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-3 sm:mb-4 leading-tight">
                  Economic Impact of Digital Transformation in SMEs
                </h2>
                <p class="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                  A comprehensive analysis of how digital adoption affects small and medium enterprises' 
                  growth patterns in emerging markets. This research examines productivity gains, 
                  market expansion opportunities, and operational efficiency improvements.
                </p>
                <div class="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  <span class="skill-tag text-xs sm:text-sm">Econometrics</span>
                  <span class="skill-tag text-xs sm:text-sm">Data Analysis</span>
                  <span class="skill-tag text-xs sm:text-sm">Market Research</span>
                </div>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <router-link to="/projects/1" class="btn-primary text-center touch-manipulation transform active:scale-95 sm:hover:scale-105">View Details</router-link>
                  <button class="btn-outline text-center touch-manipulation transform active:scale-95 sm:hover:scale-105">Download PDF</button>
                </div>
              </div>
              <div class="bg-neutral-100 rounded-lg h-48 sm:h-64 flex items-center justify-center">
                <span class="text-sm sm:text-base text-neutral-500">Research Visualization</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Mobile-Optimized Other Projects -->
        <div>
          <h2 class="section-title text-2xl sm:text-3xl mb-8 sm:mb-12">Other Research Projects</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <!-- Mobile-Optimized Project 1 -->
            <article class="project-card group transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-1 transition-all duration-300">
              <div class="bg-neutral-100 h-40 sm:h-48 rounded-t-lg"></div>
              <div class="p-4 sm:p-6">
                <span class="text-xs font-medium text-accent-600 uppercase tracking-wider">Research Paper</span>
                <h3 class="text-lg sm:text-xl font-semibold text-primary-900 mt-2 mb-2 sm:mb-3 group-hover:text-accent-700 transition-colors leading-tight">
                  Behavioral Economics in Policy Making
                </h3>
                <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Exploring nudge theory applications in public policy design and implementation.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-xs sm:text-sm text-neutral-500">2023</span>
                  <router-link to="/projects/2" class="text-xs sm:text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors touch-manipulation">
                    Read More →
                  </router-link>
                </div>
              </div>
            </article>

            <!-- Mobile-Optimized Project 2 -->
            <article class="project-card group transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-1 transition-all duration-300">
              <div class="bg-neutral-100 h-40 sm:h-48 rounded-t-lg"></div>
              <div class="p-4 sm:p-6">
                <span class="text-xs font-medium text-accent-600 uppercase tracking-wider">Analysis</span>
                <h3 class="text-lg sm:text-xl font-semibold text-primary-900 mt-2 mb-2 sm:mb-3 group-hover:text-accent-700 transition-colors leading-tight">
                  Sustainable Economic Development
                </h3>
                <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Research on balancing economic growth with environmental sustainability goals.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-xs sm:text-sm text-neutral-500">2023</span>
                  <router-link to="/projects/2" class="text-xs sm:text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors touch-manipulation">
                    Read More →
                  </router-link>
                </div>
              </div>
            </article>

            <!-- Mobile-Optimized Project 3 -->
            <article class="project-card group transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-1 transition-all duration-300">
              <div class="bg-neutral-100 h-40 sm:h-48 rounded-t-lg"></div>
              <div class="p-4 sm:p-6">
                <span class="text-xs font-medium text-accent-600 uppercase tracking-wider">Case Study</span>
                <h3 class="text-lg sm:text-xl font-semibold text-primary-900 mt-2 mb-2 sm:mb-3 group-hover:text-accent-700 transition-colors leading-tight">
                  International Trade Analysis
                </h3>
                <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Analyzing trade patterns and their impact on emerging market economies.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-xs sm:text-sm text-neutral-500">2022</span>
                  <router-link to="/projects/2" class="text-xs sm:text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors touch-manipulation">
                    Read More →
                  </router-link>
                </div>
              </div>
            </article>

            <!-- Mobile-Optimized Project 4 -->
            <article class="project-card group transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-1 transition-all duration-300">
              <div class="bg-neutral-100 h-40 sm:h-48 rounded-t-lg"></div>
              <div class="p-4 sm:p-6">
                <span class="text-xs font-medium text-accent-600 uppercase tracking-wider">Research</span>
                <h3 class="text-lg sm:text-xl font-semibold text-primary-900 mt-2 mb-2 sm:mb-3 group-hover:text-accent-700 transition-colors leading-tight">
                  Pharmaceutical Market Dynamics
                </h3>
                <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Study of pricing strategies and market competition in pharmaceutical industry.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-xs sm:text-sm text-neutral-500">2022</span>
                  <router-link to="/projects/2" class="text-xs sm:text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors touch-manipulation">
                    Read More →
                  </router-link>
                </div>
              </div>
            </article>

            <!-- Mobile-Optimized Project 5 -->
            <article class="project-card group transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-1 transition-all duration-300">
              <div class="bg-neutral-100 h-40 sm:h-48 rounded-t-lg"></div>
              <div class="p-4 sm:p-6">
                <span class="text-xs font-medium text-accent-600 uppercase tracking-wider">Publication</span>
                <h3 class="text-lg sm:text-xl font-semibold text-primary-900 mt-2 mb-2 sm:mb-3 group-hover:text-accent-700 transition-colors leading-tight">
                  Textile Industry Economic Impact
                </h3>
                <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Economic analysis of textile industry's contribution to regional development.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-xs sm:text-sm text-neutral-500">2022</span>
                  <router-link to="/projects/2" class="text-xs sm:text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors touch-manipulation">
                    Read More →
                  </router-link>
                </div>
              </div>
            </article>

            <!-- Mobile-Optimized Project 6 -->
            <article class="project-card group transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-1 transition-all duration-300">
              <div class="bg-neutral-100 h-40 sm:h-48 rounded-t-lg"></div>
              <div class="p-4 sm:p-6">
                <span class="text-xs font-medium text-accent-600 uppercase tracking-wider">Data Analysis</span>
                <h3 class="text-lg sm:text-xl font-semibold text-primary-900 mt-2 mb-2 sm:mb-3 group-hover:text-accent-700 transition-colors leading-tight">
                  Consumer Behavior Patterns
                </h3>
                <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Statistical analysis of consumer decision-making in digital marketplaces.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-xs sm:text-sm text-neutral-500">2021</span>
                  <router-link to="/projects/2" class="text-xs sm:text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors touch-manipulation">
                    Read More →
                  </router-link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const projects = [
  { id: 1, route: '/projects/1' },
  { id: 2, route: '/projects/2' },
  { id: 3, route: '/projects/2' }, // Using project 2 as template
  { id: 4, route: '/projects/2' },
  { id: 5, route: '/projects/2' },
  { id: 6, route: '/projects/2' }
]
</script>