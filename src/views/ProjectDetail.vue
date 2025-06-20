<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-accent-50/40 to-white border-b border-neutral-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <!-- Back to Projects -->
        <div class="mb-8">
          <router-link 
            to="/projects" 
            class="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors font-medium"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
            </svg>
            Back to Projects
          </router-link>
        </div>

        <!-- Mobile-Optimized Project Header -->
        <div v-if="project" class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div class="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 mb-4 sm:mb-6 border border-primary-200/50">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
              </svg>
              {{ project.category }}
            </div>
            
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-4 sm:mb-6 leading-tight">
              {{ project.title }}
            </h1>
            
            <p class="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- Mobile-Optimized Meta Information -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div>
                <h3 class="text-xs sm:text-sm font-semibold text-neutral-800 uppercase tracking-wider mb-1 sm:mb-2">Duration</h3>
                <p class="text-sm sm:text-base text-neutral-600">{{ project.duration }}</p>
              </div>
              <div>
                <h3 class="text-xs sm:text-sm font-semibold text-neutral-800 uppercase tracking-wider mb-1 sm:mb-2">Status</h3>
                <span class="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      :class="project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'">
                  {{ project.status }}
                </span>
              </div>
            </div>
            
            <!-- Mobile-Optimized Skills/Tags -->
            <div class="mb-6 sm:mb-8">
              <h3 class="text-xs sm:text-sm font-semibold text-neutral-800 uppercase tracking-wider mb-2 sm:mb-3">Technologies & Methods</h3>
              <div class="flex flex-wrap gap-1.5 sm:gap-2">
                <span v-for="skill in project.skills" :key="skill" class="skill-tag text-xs sm:text-sm">
                  {{ skill }}
                </span>
              </div>
            </div>
            
            <!-- Mobile-Optimized Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a v-if="project.links.live" :href="project.links.live" target="_blank" class="btn-primary group text-center touch-manipulation transform active:scale-95 sm:hover:scale-105">
                <span>View Research</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </a>
              <a v-if="project.links.github" :href="project.links.github" target="_blank" class="btn-outline group text-center touch-manipulation transform active:scale-95 sm:hover:scale-105">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z"/>
                </svg>
                <span>View Code</span>
              </a>
              <button v-if="project.links.pdf" class="btn-outline text-center touch-manipulation transform active:scale-95 sm:hover:scale-105">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                Download PDF
              </button>
            </div>
          </div>
          
          <!-- Mobile-Optimized Project Visualization -->
          <div class="lg:sticky lg:top-8">
            <div class="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl h-64 sm:h-80 lg:h-96 flex items-center justify-center mb-4 sm:mb-6">
              <svg class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,12H15V7H13.5V10.5H9.5V7H8V12H10V15H12V12H17V12Z"/>
              </svg>
            </div>
            
            <!-- Mobile-Optimized Key Metrics -->
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              <div class="glass-card p-3 sm:p-4 text-center">
                <div class="text-xl sm:text-2xl font-bold text-primary-900">{{ project.metrics.impact }}</div>
                <div class="text-xs sm:text-sm text-neutral-600">Impact Score</div>
              </div>
              <div class="glass-card p-3 sm:p-4 text-center">
                <div class="text-xl sm:text-2xl font-bold text-accent-600">{{ project.metrics.complexity }}</div>
                <div class="text-xs sm:text-sm text-neutral-600">Complexity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div v-if="!project" class="text-center py-12 sm:py-16">
          <h2 class="text-xl sm:text-2xl font-bold text-neutral-800 mb-3 sm:mb-4">Project Not Found</h2>
          <p class="text-sm sm:text-base text-neutral-600 mb-6 sm:mb-8">The project you're looking for doesn't exist.</p>
          <router-link to="/projects" class="btn-primary touch-manipulation transform active:scale-95 sm:hover:scale-105">
            Back to Projects
          </router-link>
        </div>
        
        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Mobile-Optimized Main Content -->
          <div class="lg:col-span-2 space-y-8 sm:space-y-10 lg:space-y-12">
            <!-- Mobile-Optimized Overview -->
            <section>
              <h2 class="text-xl sm:text-2xl font-bold text-primary-900 mb-4 sm:mb-6">Project Overview</h2>
              <div class="prose prose-sm sm:prose-lg max-w-none text-neutral-700 leading-relaxed space-y-3 sm:space-y-4">
                <p class="text-sm sm:text-base">{{ project.overview }}</p>
                <p class="text-sm sm:text-base">This research project demonstrates advanced analytical capabilities and contributes meaningful insights to the field of economic research. The methodology employed combines quantitative analysis with qualitative assessments to provide comprehensive findings.</p>
              </div>
            </section>

            <!-- Mobile-Optimized Methodology -->
            <section>
              <h2 class="text-xl sm:text-2xl font-bold text-primary-900 mb-4 sm:mb-6">Methodology</h2>
              <div class="space-y-3 sm:space-y-4">
                <div v-for="(method, index) in project.methodology" :key="index" class="flex items-start gap-3 sm:gap-4">
                  <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5 sm:mt-1">
                    {{ index + 1 }}
                  </div>
                  <div>
                    <h3 class="text-sm sm:text-base font-semibold text-neutral-800 mb-1 sm:mb-2">{{ method.title }}</h3>
                    <p class="text-xs sm:text-sm text-neutral-600">{{ method.description }}</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Mobile-Optimized Key Findings -->
            <section>
              <h2 class="text-xl sm:text-2xl font-bold text-primary-900 mb-4 sm:mb-6">Key Findings</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div v-for="finding in project.findings" :key="finding.title" class="glass-card p-4 sm:p-6">
                  <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                    </svg>
                    <h3 class="text-sm sm:text-base font-semibold text-neutral-800">{{ finding.title }}</h3>
                  </div>
                  <p class="text-neutral-600 text-xs sm:text-sm">{{ finding.description }}</p>
                </div>
              </div>
            </section>
          </div>

          <!-- Mobile-Optimized Sidebar -->
          <div class="space-y-6 sm:space-y-8">
            <!-- Mobile-Optimized Project Details -->
            <div class="glass-card p-4 sm:p-6">
              <h3 class="text-sm sm:text-base font-semibold text-neutral-800 mb-3 sm:mb-4">Project Details</h3>
              <div class="space-y-3 sm:space-y-4">
                <div>
                  <dt class="text-xs sm:text-sm font-medium text-neutral-600">Client/Institution</dt>
                  <dd class="text-sm sm:text-base text-neutral-800">{{ project.client }}</dd>
                </div>
                <div>
                  <dt class="text-xs sm:text-sm font-medium text-neutral-600">Team Size</dt>
                  <dd class="text-sm sm:text-base text-neutral-800">{{ project.teamSize }} members</dd>
                </div>
                <div>
                  <dt class="text-xs sm:text-sm font-medium text-neutral-600">Role</dt>
                  <dd class="text-sm sm:text-base text-neutral-800">{{ project.role }}</dd>
                </div>
              </div>
            </div>

            <!-- Mobile-Optimized Tools & Technologies -->
            <div class="glass-card p-4 sm:p-6">
              <h3 class="text-sm sm:text-base font-semibold text-neutral-800 mb-3 sm:mb-4">Tools & Technologies</h3>
              <div class="space-y-2 sm:space-y-3">
                <div v-for="tool in project.tools" :key="tool.name">
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-xs sm:text-sm font-medium text-neutral-700">{{ tool.name }}</span>
                    <span class="text-xs text-neutral-500">{{ tool.proficiency }}%</span>
                  </div>
                  <div class="w-full bg-neutral-200 rounded-full h-1.5 sm:h-2">
                    <div class="bg-gradient-to-r from-primary-500 to-accent-500 h-1.5 sm:h-2 rounded-full transition-all duration-300"
                         :style="`width: ${tool.proficiency}%`"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile-Optimized Related Projects -->
            <div class="glass-card p-4 sm:p-6">
              <h3 class="text-sm sm:text-base font-semibold text-neutral-800 mb-3 sm:mb-4">Related Projects</h3>
              <div class="space-y-2 sm:space-y-3">
                <router-link 
                  v-for="related in relatedProjects" 
                  :key="related.id"
                  :to="`/projects/${related.id}`"
                  class="block p-2 sm:p-3 rounded-lg hover:bg-neutral-50 transition-colors group touch-manipulation"
                >
                  <h4 class="text-xs sm:text-sm font-medium text-neutral-800 group-hover:text-accent-600 transition-colors">
                    {{ related.title }}
                  </h4>
                  <p class="text-xs text-neutral-500 mt-0.5 sm:mt-1">{{ related.category }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Project {
  id: number
  title: string
  description: string
  category: string
  duration: string
  status: string
  skills: string[]
  overview: string
  client: string
  teamSize: number
  role: string
  links: {
    live?: string
    github?: string
    pdf?: string
  }
  metrics: {
    impact: string
    complexity: string
  }
  methodology: Array<{
    title: string
    description: string
  }>
  findings: Array<{
    title: string
    description: string
  }>
  tools: Array<{
    name: string
    proficiency: number
  }>
}

const route = useRoute()
const project = ref<Project | null>(null)

const projects: Project[] = [
  {
    id: 1,
    title: 'Economic Impact of Digital Transformation in SMEs',
    description: 'A comprehensive analysis of how digital adoption affects small and medium enterprises growth patterns in emerging markets.',
    category: 'Featured Research',
    duration: '8 months',
    status: 'Completed',
    skills: ['Econometrics', 'Data Analysis', 'Market Research', 'Statistical Modeling'],
    overview: 'This research project examines the transformative effects of digital technology adoption on small and medium enterprises (SMEs) across emerging markets. Through comprehensive data analysis and econometric modeling, we investigated productivity gains, market expansion opportunities, and operational efficiency improvements resulting from digital transformation initiatives.',
    client: 'Independent Research',
    teamSize: 3,
    role: 'Lead Researcher & Data Analyst',
    links: {
      live: '#',
      pdf: '#'
    },
    metrics: {
      impact: '8.5',
      complexity: 'High'
    },
    methodology: [
      {
        title: 'Data Collection',
        description: 'Gathered comprehensive datasets from 500+ SMEs across 5 emerging markets over a 3-year period.'
      },
      {
        title: 'Statistical Analysis',
        description: 'Applied advanced econometric techniques including panel data analysis and difference-in-differences methodology.'
      },
      {
        title: 'Validation',
        description: 'Cross-validated findings through expert interviews and case study analysis.'
      }
    ],
    findings: [
      {
        title: 'Productivity Gains',
        description: '23% average increase in productivity within 18 months of digital adoption.'
      },
      {
        title: 'Market Expansion',
        description: '45% of SMEs expanded to new markets through digital channels.'
      },
      {
        title: 'Cost Efficiency',
        description: '18% reduction in operational costs through process automation.'
      },
      {
        title: 'Revenue Growth',
        description: '31% higher revenue growth compared to non-digital counterparts.'
      }
    ],
    tools: [
      { name: 'Python/Pandas', proficiency: 95 },
      { name: 'R/Econometrics', proficiency: 90 },
      { name: 'Stata', proficiency: 85 },
      { name: 'Tableau', proficiency: 80 }
    ]
  },
  {
    id: 2,
    title: 'Behavioral Economics in Policy Making',
    description: 'Exploring nudge theory applications in public policy design and implementation.',
    category: 'Research Paper',
    duration: '6 months',
    status: 'Completed',
    skills: ['Behavioral Economics', 'Policy Analysis', 'Research Methods'],
    overview: 'This study investigates how behavioral economics principles, particularly nudge theory, can be effectively integrated into public policy design to improve citizen outcomes and government efficiency.',
    client: 'Academic Institution',
    teamSize: 2,
    role: 'Co-Researcher',
    links: {
      pdf: '#'
    },
    metrics: {
      impact: '7.2',
      complexity: 'Medium'
    },
    methodology: [
      {
        title: 'Literature Review',
        description: 'Comprehensive analysis of existing nudge implementations in policy contexts.'
      },
      {
        title: 'Case Studies',
        description: 'Detailed examination of successful nudge applications in various countries.'
      },
      {
        title: 'Framework Development',
        description: 'Created actionable framework for policymakers to implement behavioral insights.'
      }
    ],
    findings: [
      {
        title: 'Implementation Success',
        description: 'Nudges show 40% higher compliance rates than traditional policy approaches.'
      },
      {
        title: 'Cost Effectiveness',
        description: '60% reduction in implementation costs compared to regulatory approaches.'
      }
    ],
    tools: [
      { name: 'SPSS', proficiency: 85 },
      { name: 'Qualitative Analysis', proficiency: 90 },
      { name: 'Survey Design', proficiency: 80 }
    ]
  }
]

const relatedProjects = computed(() => {
  if (!project.value) return []
  return projects.filter(p => p.id !== project.value!.id).slice(0, 3)
})

onMounted(() => {
  const projectId = parseInt(route.params.id as string)
  project.value = projects.find(p => p.id === projectId) || null
})
</script>