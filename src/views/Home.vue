<template>
  <div class="min-h-screen">
    <!-- Mobile-Optimized Hero Section -->
    <section class="min-h-screen bg-gradient-to-br from-white via-accent-50/20 to-secondary-50/30 relative overflow-hidden flex items-center pt-20 sm:pt-0">
      <!-- Mobile-Optimized Animated Background -->
      <div class="absolute inset-0 opacity-[0.08] sm:opacity-[0.03] pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <!-- Mobile-friendly GDP Growth Line -->
          <path d="M50,400 Q200,350 300,320 T500,280 T700,260 T900,240 T1150,220" 
                stroke="currentColor" stroke-width="3" fill="none" 
                class="text-primary-500 animate-draw-line opacity-60"/>
          <!-- Simplified Mobile Bar Chart -->
          <g class="animate-fade-in hidden sm:block" style="animation-delay: 1s">
            <rect x="100" y="520" width="15" height="60" class="text-accent-400 animate-grow-bar" style="animation-delay: 0.5s"/>
            <rect x="125" y="500" width="15" height="80" class="text-accent-400 animate-grow-bar" style="animation-delay: 0.7s"/>
            <rect x="150" y="480" width="15" height="100" class="text-accent-400 animate-grow-bar" style="animation-delay: 0.9s"/>
            <rect x="175" y="460" width="15" height="120" class="text-accent-400 animate-grow-bar" style="animation-delay: 1.1s"/>
          </g>
        </svg>
      </div>

      <!-- Mobile-Optimized Floating Indicators -->
      <div class="absolute inset-0 pointer-events-none hidden sm:block">
        <div v-for="(indicator, index) in economicIndicators" :key="indicator.label"
             class="absolute opacity-10 text-xs text-neutral-500 font-mono animate-float-gentle"
             :style="`
               left: ${indicator.x}%; 
               top: ${indicator.y}%; 
               animation-delay: ${index * 0.8}s;
               animation-duration: ${6 + (index % 2)}s
             `">
          <div class="bg-white/40 backdrop-blur-sm px-2 py-1 rounded-md border border-neutral-200/30">
            {{ indicator.label }}: {{ indicator.value }}
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <!-- Mobile-First Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[90vh] sm:min-h-[80vh]">
          <!-- Mobile-Optimized Professional Introduction -->
          <div class="lg:col-span-7 order-1 space-y-4 sm:space-y-6 lg:space-y-8">
            <!-- Mobile-Friendly Academic Credentials -->
            <div class="animate-slide-up">
              <div class="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 bg-white/80 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-neutral-200/50 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300 touch-manipulation">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-inner">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="text-xs sm:text-sm font-semibold text-primary-900">Economic Research Specialist</div>
                  <div class="text-xs text-neutral-600">M.A. Economics • Policy Analysis</div>
                </div>
              </div>
            </div>
            
            <!-- Mobile-Optimized Typography -->
            <div class="space-y-4 sm:space-y-6 animate-slide-up" style="animation-delay: 0.2s">
              <div class="space-y-1 sm:space-y-2">
                <div class="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 tracking-wide">Hello, I'm</div>
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-900 leading-[0.9] tracking-tight">
                  Srishty Chandra
                </h1>
              </div>
              
              <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed font-light">
                Transforming <span class="text-accent-600 font-semibold">
                  economic complexity
                </span> into 
                <span class="text-primary-600 font-semibold">
                  actionable insights
                </span> through rigorous research and data-driven analysis.
              </p>
            </div>
            
            <!-- Mobile-Optimized Research Focus Tags -->
            <div class="animate-slide-up" style="animation-delay: 0.4s">
              <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span v-for="(focus, index) in researchFocus" :key="focus" 
                      class="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200/60 rounded-full text-xs sm:text-sm font-medium text-primary-800 hover:from-primary-100 hover:to-accent-100 hover:border-primary-300 hover:shadow-sm transition-all duration-300 cursor-default transform hover:scale-105 touch-manipulation"
                      :style="`animation-delay: ${0.6 + (index * 0.1)}s`">
                  {{ focus }}
                </span>
              </div>
            </div>
            
            <!-- Responsive CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up" style="animation-delay: 0.6s">
              <router-link to="/projects" 
                         class="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-accent-600 to-accent-700 text-white px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold hover:from-accent-700 hover:to-accent-800 transition-all duration-300 transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-0.5 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 focus:outline-none focus:ring-4 focus:ring-accent-500/30 touch-manipulation text-sm sm:text-base">
                <span>Explore Research</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
              </router-link>
              
              <router-link to="/about" 
                         class="group inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-primary-600 text-primary-600 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-500/30 touch-manipulation text-sm sm:text-base">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                </svg>
                <span>About Me</span>
              </router-link>
            </div>
          </div>

          <!-- Mobile-Optimized Research Interests Card -->
          <div class="lg:col-span-5 order-2 animate-slide-up w-full" style="animation-delay: 0.3s">
            <div class="relative group mx-auto max-w-md lg:max-w-none">
              <!-- Mobile-Optimized Main Card -->
              <div class="bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/60 shadow-xl sm:shadow-2xl shadow-neutral-900/5 p-4 sm:p-6 lg:p-8 relative overflow-hidden hover:shadow-2xl sm:hover:shadow-3xl hover:shadow-neutral-900/10 transition-all duration-500">
                <!-- Simplified Mobile Pattern -->
                <div class="absolute inset-0 opacity-[0.02] hidden sm:block">
                  <div class="grid grid-cols-6 gap-1 h-full">
                    <div v-for="i in 36" :key="i" class="bg-primary-500 rounded-sm"></div>
                  </div>
                </div>
                
                <!-- Mobile Gradient Overlay -->
                <div class="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-2xl"></div>
                
                <div class="relative z-10 space-y-4 sm:space-y-6 lg:space-y-8">
                  <!-- Mobile Header -->
                  <div class="text-center space-y-1 sm:space-y-2">
                    <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-primary-900">Research Interests</h3>
                    <p class="text-xs sm:text-sm text-neutral-600">Areas of focus and expertise</p>
                  </div>
                  
                  <!-- Mobile Research Areas -->
                  <div class="space-y-3 sm:space-y-4">
                    <div v-for="(area, index) in researchAreas" :key="area.title"
                         class="group/item cursor-pointer transform transition-all duration-300 active:scale-95 sm:hover:scale-[1.02] touch-manipulation"
                         @touchstart="handleAreaHover(index)"
                         @touchend="handleAreaLeave()"
                         @mouseenter="handleAreaHover(index)"
                         @mouseleave="handleAreaLeave()">
                      <div class="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300"
                           :class="area.bgClass">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-md"
                             :class="area.iconBg">
                          <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-300 group-hover/item:scale-110" fill="currentColor" viewBox="0 0 24 24">
                            <path :d="area.icon"/>
                          </svg>
                        </div>
                        <div class="flex-1 space-y-0.5 sm:space-y-1 min-w-0">
                          <h4 class="font-semibold text-sm sm:text-base text-primary-900 transition-colors duration-300 group-hover/item:text-primary-700">
                            {{ area.title }}
                          </h4>
                          <p class="text-xs text-neutral-600 leading-relaxed">{{ area.description }}</p>
                        </div>
                        <!-- Mobile Arrow Indicator -->
                        <svg class="w-4 h-4 text-neutral-400 opacity-60 sm:opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Mobile Quote -->
                  <div class="relative">
                    <div class="p-3 sm:p-5 bg-gradient-to-r from-neutral-50/80 to-neutral-100/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border-l-4 border-accent-500 shadow-sm">
                      <div class="flex items-start gap-2 sm:gap-3">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
                        </svg>
                        <p class="text-xs sm:text-sm text-neutral-700 italic leading-relaxed font-medium">
                          Economics is not just about numbers—it's about understanding human behavior and creating policies that improve lives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Mobile Floating Icons -->
              <div class="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-neutral-200/50 flex items-center justify-center animate-float-gentle hover:shadow-xl transition-shadow duration-300">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                </svg>
              </div>
              
              <div class="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-neutral-200/50 flex items-center justify-center animate-float-gentle hover:shadow-xl transition-shadow duration-300" style="animation-delay: 1s">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Scroll Indicator -->
      <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="text-center space-y-1 sm:space-y-2 group cursor-pointer touch-manipulation" @click="scrollToSection">
          <div class="text-xs text-neutral-500 group-hover:text-neutral-700 transition-colors">Explore Research</div>
          <div class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neutral-300 rounded-full flex justify-center group-hover:border-accent-500 transition-colors duration-300">
            <div class="w-1 h-2 sm:h-3 bg-neutral-400 rounded-full mt-1.5 sm:mt-2 animate-pulse group-hover:bg-accent-500 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile-Optimized Research Philosophy Section -->
    <section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50/30 to-accent-50/20 relative overflow-hidden">
      <!-- Mobile Background Pattern -->
      <div class="absolute inset-0 opacity-[0.03] sm:opacity-[0.02]">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#3B82F6_1px,transparent_1px)] bg-[length:20px_20px] sm:bg-[length:24px_24px]"></div>
      </div>
      
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Mobile Header -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4 animate-fade-in-up">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 tracking-tight">Research Philosophy</h2>
          <p class="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4">
            Bridging the gap between economic theory and real-world applications through 
            methodical analysis and evidence-based insights.
          </p>
        </div>

        <!-- Mobile-Optimized Philosophy Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div v-for="(philosophy, index) in philosophyCards" :key="philosophy.title"
               class="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-white/60 hover:shadow-xl sm:hover:shadow-2xl hover:bg-white/90 transition-all duration-500 transform active:scale-95 sm:hover:-translate-y-2 cursor-pointer animate-fade-in-up touch-manipulation"
               :style="`animation-delay: ${index * 0.2}s`"
               @touchstart="handlePhilosophyHover(index)"
               @mouseenter="handlePhilosophyHover(index)">
            
            <!-- Mobile Top Accent -->
            <div class="absolute top-0 left-0 w-full h-1 rounded-t-2xl sm:rounded-t-3xl transition-all duration-300"
                 :class="philosophy.gradient"></div>
            
            <div class="text-center space-y-4 sm:space-y-6">
              <!-- Mobile Icon -->
              <div class="relative">
                <div class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                     :class="philosophy.iconBg">
                  <svg class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300 group-hover:scale-110" 
                       :class="philosophy.iconColor" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="philosophy.icon"/>
                  </svg>
                </div>
                <!-- Mobile Glow Effect -->
                <div class="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     :class="philosophy.glowColor"></div>
              </div>
              
              <div class="space-y-2 sm:space-y-3">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                  {{ philosophy.title }}
                </h3>
                <p class="text-neutral-600 leading-relaxed text-sm sm:text-base">{{ philosophy.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile-Optimized Featured Research Section -->
    <section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Mobile Header -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4 animate-fade-in-up">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 tracking-tight">Featured Research</h2>
          <p class="text-base sm:text-lg md:text-xl text-neutral-600 px-4">Exploring economic dynamics across industries and markets</p>
        </div>

        <!-- Mobile-Optimized Research Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <!-- Mobile Featured Card -->
          <div class="lg:row-span-2">
            <div class="group h-full bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden cursor-pointer transform active:scale-95 sm:hover:scale-[1.02] transition-all duration-500 shadow-lg sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl touch-manipulation"
                 @click="navigateToProject(1)">
              
              <!-- Mobile Background Effects -->
              <div class="absolute top-0 right-0 w-24 sm:w-40 h-24 sm:h-40 bg-white/10 rounded-full blur-2xl sm:blur-3xl transform translate-x-8 sm:translate-x-16 -translate-y-8 sm:-translate-y-16 group-hover:scale-125 transition-transform duration-700"></div>
              <div class="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/5 rounded-full blur-xl sm:blur-2xl transform -translate-x-4 sm:-translate-x-8 translate-y-4 sm:translate-y-8 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div class="relative z-10 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[500px]">
                <div class="space-y-3 sm:space-y-4 lg:space-y-6">
                  <span class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-white/20">
                    Featured Study
                  </span>
                  
                  <div class="space-y-2 sm:space-y-3 lg:space-y-4">
                    <h3 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight group-hover:text-accent-100 transition-colors duration-300">
                      Digital Transformation Impact on SME Growth
                    </h3>
                    <p class="text-accent-100 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Comprehensive econometric analysis of digital adoption effects across emerging markets, 
                      examining productivity gains and market expansion patterns in small and medium enterprises.
                    </p>
                  </div>
                </div>
                
                <div class="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div class="flex flex-wrap gap-1.5 sm:gap-2">
                    <span class="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm border border-white/20">Econometrics</span>
                    <span class="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm border border-white/20">Market Analysis</span>
                    <span class="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm border border-white/20">2023</span>
                  </div>
                  
                  <div class="flex items-center gap-2 text-accent-100 group-hover:text-white transition-colors duration-300">
                    <span class="text-sm font-medium">Read full research</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Research Cards -->
          <div class="space-y-4 sm:space-y-6 lg:space-y-8">
            <div class="group bg-white border-2 border-neutral-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-primary-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 cursor-pointer transform active:scale-95 sm:hover:-translate-y-1 touch-manipulation"
                 @click="navigateToProject(2)">
              <div class="flex items-start gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                  </svg>
                </div>
                <div class="flex-1 space-y-2 sm:space-y-3 min-w-0">
                  <h3 class="text-base sm:text-lg lg:text-xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                    Behavioral Economics in Policy Design
                  </h3>
                  <p class="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    Exploring nudge theory applications and their effectiveness in public policy implementation.
                  </p>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="px-2 sm:px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Policy Research</span>
                    <span class="px-2 sm:px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">2023</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="group bg-white border-2 border-neutral-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-secondary-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 cursor-pointer transform active:scale-95 sm:hover:-translate-y-1 touch-manipulation"
                 @click="$router.push('/blog')">
              <div class="flex items-start gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <div class="flex-1 space-y-2 sm:space-y-3 min-w-0">
                  <h3 class="text-base sm:text-lg lg:text-xl font-bold text-primary-900 group-hover:text-secondary-700 transition-colors duration-300">
                    Latest Economic Insights
                  </h3>
                  <p class="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    Regular analysis and commentary on economic trends, market dynamics, and policy implications.
                  </p>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="px-2 sm:px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">Blog Articles</span>
                    <span class="px-2 sm:px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">Updated Weekly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile CTA Button -->
        <div class="text-center animate-fade-in-up">
          <router-link to="/projects" 
                       class="group inline-flex items-center gap-3 bg-primary-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-0.5 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 focus:outline-none focus:ring-4 focus:ring-primary-500/30 touch-manipulation">
            <span>View All Research</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,12H15V7H13.5V10.5H9.5V7H8V12H10V15H12V12H17V12Z"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Mobile-Optimized Connect Section -->
    <section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-900 via-accent-700 to-primary-800 text-white relative overflow-hidden">
      <!-- Mobile Background Effects -->
      <div class="absolute inset-0 opacity-15 sm:opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_60%)]"></div>
      </div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8 animate-fade-in-up">
        <!-- Mobile Header -->
        <div class="space-y-3 sm:space-y-4">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Let's Collaborate on Research</h2>
          <p class="text-base sm:text-lg md:text-xl text-accent-100 max-w-2xl mx-auto leading-relaxed px-4">
            Interested in discussing economic research, policy analysis, or collaborative projects? 
            I'd love to connect and explore how we can work together.
          </p>
        </div>
        
        <!-- Mobile CTA Buttons -->
        <div class="flex flex-col gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <router-link to="/contact" 
                       class="group inline-flex items-center justify-center gap-3 bg-white text-primary-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-accent-50 transition-all duration-300 transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 touch-manipulation">
            <span>Start a Conversation</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </router-link>
          
          <router-link to="/resume" 
                       class="group inline-flex items-center justify-center gap-3 border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/30 touch-manipulation">
            <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            <span>View Resume</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Enhanced data with better structure
const researchFocus = [
  'Trade Analysis',
  'Market Dynamics', 
  'Policy Research',
  'Behavioral Economics',
  'Data Visualization'
]

const researchAreas = [
  {
    title: 'Trade Analysis',
    description: 'International trade patterns & competitiveness',
    icon: 'M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,12H15V7H13.5V10.5H9.5V7H8V12H10V15H12V12H17V12Z',
    bgClass: 'bg-gradient-to-r from-accent-50 to-accent-100 hover:from-accent-100 hover:to-accent-200',
    iconBg: 'bg-accent-500'
  },
  {
    title: 'Policy Research',
    description: 'Economic policy impact & analysis',
    icon: 'M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z',
    bgClass: 'bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200',
    iconBg: 'bg-primary-500'
  },
  {
    title: 'Market Dynamics',
    description: 'Market behavior & economic trends',
    icon: 'M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    bgClass: 'bg-gradient-to-r from-secondary-50 to-secondary-100 hover:from-secondary-100 hover:to-secondary-200',
    iconBg: 'bg-secondary-500'
  }
]

const economicIndicators = [
  { label: 'GDP Growth', value: '+3.2%', x: 15, y: 20 },
  { label: 'Inflation Rate', value: '2.8%', x: 75, y: 15 },
  { label: 'Trade Balance', value: '$2.1B', x: 25, y: 70 },
  { label: 'Employment', value: '96.2%', x: 85, y: 75 },
  { label: 'Market Cap', value: '$1.8T', x: 45, y: 25 },
  { label: 'RCA Index', value: '1.45', x: 65, y: 85 }
]

const philosophyCards = [
  {
    title: 'Evidence-Based',
    description: 'Every conclusion is backed by rigorous data analysis and statistical validation, ensuring reliability and scientific accuracy.',
    gradient: 'bg-gradient-to-r from-accent-400 to-accent-600',
    iconBg: 'bg-gradient-to-br from-accent-100 to-accent-200',
    iconColor: 'text-accent-600',
    glowColor: 'bg-accent-500',
    icon: 'M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,12H15V7H13.5V10.5H9.5V7H8V12H10V15H12V12H17V12Z'
  },
  {
    title: 'Policy-Focused',
    description: 'Research designed to inform real-world policy decisions, bridging the gap between academic theory and practical implementation.',
    gradient: 'bg-gradient-to-r from-primary-400 to-primary-600',
    iconBg: 'bg-gradient-to-br from-primary-100 to-primary-200',
    iconColor: 'text-primary-600',
    glowColor: 'bg-primary-500',
    icon: 'M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z'
  },
  {
    title: 'Global Perspective',
    description: 'Analyzing economic trends across multiple markets and regions to understand interconnected global economic systems.',
    gradient: 'bg-gradient-to-r from-secondary-400 to-secondary-600',
    iconBg: 'bg-gradient-to-br from-secondary-100 to-secondary-200',
    iconColor: 'text-secondary-600',
    glowColor: 'bg-secondary-500',
    icon: 'M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
  }
]

// Enhanced interaction handlers
const handleAreaHover = (index) => {
  // Add subtle haptic feedback if supported
  if ('vibrate' in navigator) {
    navigator.vibrate(10)
  }
}

const handleAreaLeave = () => {
  // Reset any hover states if needed
}

const handlePhilosophyHover = (index) => {
  // Add interaction feedback
}

const scrollToSection = () => {
  const nextSection = document.querySelector('section:nth-of-type(2)')
  nextSection?.scrollIntoView({ behavior: 'smooth' })
}

const navigateToProject = (id) => {
  router.push(`/projects/${id}`)
}

onMounted(() => {
  // Add scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)
  
  // Observe sections for scroll animations
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
})
</script>

<style scoped>
/* Enhanced animations */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes draw-line {
  from {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
}

@keyframes grow-bar {
  from {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  to {
    transform: scaleY(1);
    transform-origin: bottom;
  }
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.animate-float-gentle {
  animation: float-gentle 4s ease-in-out infinite;
}

.animate-draw-line {
  animation: draw-line 3s ease-out forwards;
}

.animate-grow-bar {
  animation: grow-bar 1s ease-out forwards;
  transform: scaleY(0);
}

.animate-fade-in {
  animation: fade-in-up 1s ease-out forwards;
  opacity: 0;
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-x-100 {
  transform: scaleX(1);
}

/* Better focus states */
.focus\:ring-4:focus {
  box-shadow: 0 0 0 4px var(--tw-ring-color);
}

/* Enhanced glassmorphism */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
}

/* Better shadows */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>