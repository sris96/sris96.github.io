<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-accent-50/40 to-white border-b border-neutral-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-900 mb-3 sm:mb-4">About Me</h1>
        <p class="text-base sm:text-lg text-neutral-600">Research Professional & Economics Specialist</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Profile Section -->
          <div class="lg:col-span-2 space-y-6 sm:space-y-8">
            <div class="prose prose-lg text-neutral-700 max-w-none">
              <p>
                I am a dedicated research professional with a passion for uncovering insights through data analysis 
                and economic research. With a Master's degree in Economics from Symbiosis School of Economics, 
                I specialize in international trade analysis and have developed expertise in statistical modeling 
                and policy evaluation.
              </p>
              <p>
                My journey began with a Bachelor's in Chemistry, which instilled in me a scientific approach to 
                problem-solving. This analytical foundation has been invaluable in my transition to economics, 
                where I apply rigorous methodologies to understand complex market dynamics and trade relationships.
              </p>
              <p>
                Throughout my academic and professional journey, I have maintained a focus on practical applications 
                of research, working on projects that address real-world challenges in pharmaceutical markets, 
                textile industries, and international trade policies.
              </p>
            </div>

            <!-- Experience Timeline -->
            <div class="mt-12">
              <h2 class="section-title">Professional Journey</h2>
              <div class="space-y-6">
                <div class="border-l-2 border-primary-200 pl-6">
                  <div class="relative">
                    <div class="absolute -left-8 top-1 w-4 h-4 bg-primary-900 rounded-full"></div>
                    <h3 class="font-semibold text-lg text-primary-900">Research Analyst</h3>
                    <p class="text-sm text-neutral-500 mb-2">Symbiosis School of Economics | 2021-2023</p>
                    <p class="text-neutral-600">Conducted comprehensive research on international trade patterns and economic policy implications.</p>
                  </div>
                </div>
                <div class="border-l-2 border-primary-200 pl-6">
                  <div class="relative">
                    <div class="absolute -left-8 top-1 w-4 h-4 bg-primary-900 rounded-full"></div>
                    <h3 class="font-semibold text-lg text-primary-900">Economics Graduate Student</h3>
                    <p class="text-sm text-neutral-500 mb-2">M.Sc. Economics | 2021-2023</p>
                    <p class="text-neutral-600">Specialized in International Trade and completed research on pharmaceutical market dynamics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6 sm:space-y-8">
            <!-- Skills -->
            <div class="card">
              <h3 class="font-semibold text-lg text-primary-900 mb-4">Core Skills</h3>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-neutral-700">Data Analysis</span>
                  <div class="w-24 bg-neutral-200 rounded-full h-2">
                    <div class="bg-primary-900 h-2 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-neutral-700">Research</span>
                  <div class="w-24 bg-neutral-200 rounded-full h-2">
                    <div class="bg-primary-900 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-neutral-700">Economics</span>
                  <div class="w-24 bg-neutral-200 rounded-full h-2">
                    <div class="bg-primary-900 h-2 rounded-full" style="width: 85%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-neutral-700">Statistics</span>
                  <div class="w-24 bg-neutral-200 rounded-full h-2">
                    <div class="bg-primary-900 h-2 rounded-full" style="width: 80%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Interests -->
            <div class="card">
              <h3 class="font-semibold text-lg text-primary-900 mb-4">Research Interests</h3>
              <ul class="space-y-2 text-neutral-700">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  International Trade
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Behavioral Economics
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Market Analysis
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Policy Research
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 bg-gradient-to-br from-secondary-50/60 to-neutral-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl font-display font-semibold mb-3 sm:mb-4 text-primary-900">Want to know more?</h2>
        <p class="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8">
          Feel free to explore my research projects or get in touch.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <router-link to="/projects" class="btn-primary">
            View Projects
          </router-link>
          <router-link to="/contact" class="btn-outline">
            Contact Me
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO, seoData } from '../composables/useSEO'

// Set page-specific SEO
useSEO({
  ...seoData.about,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Srishty Chandra",
    "description": seoData.about.description,
    "url": seoData.about.canonicalUrl,
    "mainEntity": {
      "@type": "Person",
      "name": "Srishty Chandra",
      "description": "Economics researcher with expertise in international trade and data analysis"
    }
  }
})
</script>