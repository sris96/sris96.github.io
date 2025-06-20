<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-accent-50/40 to-white border-b border-neutral-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-900 mb-3 sm:mb-4">Blog</h1>
        <p class="text-base sm:text-lg text-neutral-600">Insights, Research & Economic Perspectives</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <!-- Mobile-Optimized Featured Post -->
        <div class="mb-12 sm:mb-16">
          <div class="card bg-gradient-to-br from-accent-50/30 to-neutral-50 border-accent-200 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-2xl"></div>
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div class="lg:col-span-2">
              <div class="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 mb-4 sm:mb-6 border border-primary-200/50">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                </svg>
                Featured Article
              </div>
              <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 font-serif leading-tight">
                The Future of India's API Industry: Breaking Free from Import Dependency
              </h2>
              <p class="text-sm sm:text-base lg:text-lg text-neutral-600 mb-4 sm:mb-6 font-medium">December 15, 2023 • 8 min read</p>
              <p class="text-base sm:text-lg lg:text-xl text-neutral-700 mb-6 sm:mb-8 leading-relaxed">
                As India grapples with its heavy reliance on Chinese Active Pharmaceutical Ingredients (APIs), 
                this analysis explores strategic pathways for building domestic manufacturing capabilities and 
                reducing import vulnerabilities. Drawing from extensive research on market dynamics...
              </p>
              <div class="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span class="skill-tag text-xs sm:text-sm">International Trade</span>
                <span class="skill-tag text-xs sm:text-sm">Policy Analysis</span>
                <span class="skill-tag text-xs sm:text-sm">Market Research</span>
              </div>
              <router-link to="/blog/9" class="btn-primary group touch-manipulation transform active:scale-95 sm:hover:scale-105">
                <span>Read Full Article</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
              </router-link>
            </div>
            <div class="lg:col-span-1">
              <div class="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-neutral-100">
                <div class="w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg class="w-12 h-12 sm:w-16 sm:h-16 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,19A2,2 0 0,1 10,17A2,2 0 0,1 12,15A2,2 0 0,1 14,17A2,2 0 0,1 12,19M12,3C7.86,3 4.5,5.69 4.05,9.55C3.87,11.84 4.58,14.05 6.15,15.68L7.5,17.06C9.13,18.78 10.91,20.24 12,20.24C13.09,20.24 14.87,18.78 16.5,17.06L17.85,15.68C19.42,14.05 20.13,11.84 19.95,9.55C19.5,5.69 16.14,3 12,3M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8Z"/>
                  </svg>
                </div>
                <div class="text-center">
                  <h3 class="text-base sm:text-lg font-semibold text-primary-900 mb-1 sm:mb-2">Research Insights</h3>
                  <p class="text-neutral-600 text-xs sm:text-sm">Based on comprehensive market analysis and policy research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <!-- Mobile-Optimized Search Bar -->
        <div class="max-w-2xl mx-auto mb-8 sm:mb-12">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search articles..."
              class="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 rounded-xl sm:rounded-2xl glass-card border border-neutral-200 focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/20 transition-all duration-300 text-sm sm:text-base touch-manipulation"
            >
            <svg class="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
        </div>

        <!-- Mobile-Optimized Blog Categories -->
        <div class="mb-8 sm:mb-12">
          <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            class="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 transform active:scale-95 sm:hover:scale-105 touch-manipulation"
            :class="selectedCategory === category 
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg sm:shadow-xl shadow-primary-500/25' 
              : 'glass-card text-neutral-700 hover:bg-white/80'"
          >
            {{ category }}
          </button>
          </div>
        </div>

        <!-- Blog Posts Grid -->
        <div>
          <div v-if="filteredPosts.length === 0" class="text-center py-16">
            <svg class="w-24 h-24 mx-auto text-neutral-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
            </svg>
            <h3 class="text-xl font-semibold text-neutral-600 mb-2">No articles found</h3>
            <p class="text-neutral-500">Try adjusting your search or filter criteria</p>
          </div>
          
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <article v-for="post in filteredPosts" :key="post.id" class="blog-card group transform active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-1 transition-all duration-300">
              <div class="relative overflow-hidden">
                <div class="bg-gradient-to-br from-neutral-100 to-neutral-200 h-40 sm:h-48 rounded-t-lg">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-12 h-12 sm:w-16 sm:h-16 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,11V19H8V11H10M14,11V19H12V11H14M18,11V19H16V11H18Z"/>
                    </svg>
                  </div>
                </div>
                <div v-if="post.featured" class="absolute top-4 right-4">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent-500 text-white">
                    Featured
                  </span>
                </div>
              </div>
              <div class="p-4 sm:p-6">
                <div class="flex items-center gap-2 mb-2 sm:mb-3">
                  <span class="text-xs font-medium text-accent-600 uppercase tracking-wider">{{ post.category }}</span>
                  <span class="text-neutral-300">•</span>
                  <span class="text-xs text-neutral-500">{{ post.readTime }}</span>
                </div>
                <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-primary-900 mb-2 sm:mb-3 group-hover:text-accent-700 transition-colors line-clamp-2 leading-tight">
                  {{ post.title }}
                </h3>
                <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">{{ post.excerpt }}</p>
                
                <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="text-xs px-2 py-1 rounded-md bg-neutral-100 text-neutral-600">
                    {{ tag }}
                  </span>
                </div>
                
                <div class="flex items-center justify-between pt-3 sm:pt-4 border-t border-neutral-100">
                  <div class="flex items-center gap-2 sm:gap-3">
                    <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                      {{ post.author.name.split(' ').map(n => n[0]).join('') }}
                    </div>
                    <div>
                      <p class="text-xs sm:text-sm font-medium text-neutral-800">{{ post.author.name }}</p>
                      <p class="text-xs text-neutral-500">{{ post.date }}</p>
                    </div>
                  </div>
                  <router-link :to="`/blog/${post.id}`" class="text-xs sm:text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors group flex items-center gap-1 touch-manipulation">
                    <span>Read</span>
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </router-link>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!-- Mobile-Optimized Pagination -->
        <div v-if="filteredPosts.length > 0" class="mt-12 sm:mt-16 flex justify-center">
          <nav class="inline-flex items-center gap-1 sm:gap-2">
            <button class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg glass-card text-neutral-600 hover:bg-white/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
              </svg>
            </button>
            <button class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium text-sm sm:text-base touch-manipulation">1</button>
            <button class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg glass-card text-neutral-600 hover:bg-white/80 transition-all duration-300 text-sm sm:text-base touch-manipulation">2</button>
            <button class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg glass-card text-neutral-600 hover:bg-white/80 transition-all duration-300 text-sm sm:text-base touch-manipulation">3</button>
            <span class="px-2 sm:px-3 text-neutral-400 text-sm sm:text-base">...</span>
            <button class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg glass-card text-neutral-600 hover:bg-white/80 transition-all duration-300 text-sm sm:text-base touch-manipulation">8</button>
            <button class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg glass-card text-neutral-600 hover:bg-white/80 transition-all duration-300 touch-manipulation">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured?: boolean
  tags: string[]
  image?: string
  author: {
    name: string
    role: string
  }
}

const selectedCategory = ref('All')
const searchQuery = ref('')

const categories = [
  'All',
  'Economic Research',
  'International Trade',
  'Data Analysis',
  'Policy Insights',
  'Market Trends',
  'Academia'
]

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding RCA: A Tool for Trade Competitiveness Analysis',
    excerpt: 'Revealed Comparative Advantage (RCA) is a crucial metric for understanding a country\'s trade competitiveness. This post explores its applications in economic research.',
    category: 'Economic Research',
    date: 'November 28, 2023',
    readTime: '6 min read',
    tags: ['RCA', 'Trade Analysis', 'Economic Metrics'],
    author: {
      name: 'Sikandar Atiq',
      role: 'Economic Researcher'
    }
  },
  {
    id: 2,
    title: 'The Impact of GST on Indian Manufacturing',
    excerpt: 'Analyzing how the Goods and Services Tax implementation has transformed the Indian manufacturing landscape, particularly in textiles and cotton industries.',
    category: 'Policy Insights',
    date: 'November 15, 2023',
    readTime: '8 min read',
    tags: ['GST', 'India', 'Manufacturing', 'Tax Policy'],
    author: {
      name: 'Sikandar Atiq',
      role: 'Policy Analyst'
    }
  },
  {
    id: 3,
    title: 'Data Visualization Best Practices in Economic Research',
    excerpt: 'Effective data visualization is crucial for communicating research findings. Here are key principles for creating impactful economic charts and graphs.',
    category: 'Data Analysis',
    date: 'October 30, 2023',
    readTime: '5 min read',
    tags: ['Data Viz', 'Research Methods', 'Analytics'],
    author: {
      name: 'Sikandar Atiq',
      role: 'Data Analyst'
    }
  },
  {
    id: 4,
    title: 'Trade Wars and Their Economic Implications',
    excerpt: 'An analysis of how trade conflicts reshape global supply chains and affect developing economies, with case studies from recent years.',
    category: 'International Trade',
    date: 'October 12, 2023',
    readTime: '10 min read',
    tags: ['Trade Wars', 'Global Economy', 'Supply Chains'],
    author: {
      name: 'Sikandar Atiq',
      role: 'International Trade Expert'
    }
  },
  {
    id: 5,
    title: 'The Role of Secondary Data in Economic Research',
    excerpt: 'Exploring the importance, advantages, and limitations of using secondary data sources in economic analysis and policy research.',
    category: 'Academia',
    date: 'September 28, 2023',
    readTime: '7 min read',
    tags: ['Research Methods', 'Secondary Data', 'Academic Writing'],
    author: {
      name: 'Sikandar Atiq',
      role: 'Academic Researcher'
    }
  },
  {
    id: 6,
    title: 'Emerging Markets: Opportunities and Challenges',
    excerpt: 'A comprehensive look at investment opportunities and risks in emerging markets, with focus on Asian economies.',
    category: 'Market Trends',
    date: 'September 15, 2023',
    readTime: '9 min read',
    tags: ['Emerging Markets', 'Investment', 'Asia'],
    author: {
      name: 'Sikandar Atiq',
      role: 'Market Analyst'
    }
  },
  {
    id: 7,
    title: 'Python for Economic Data Analysis',
    excerpt: 'A practical guide to using Python libraries like pandas and numpy for economic data analysis, with real-world examples.',
    category: 'Data Analysis',
    date: 'September 1, 2023',
    readTime: '12 min read',
    tags: ['Python', 'Pandas', 'Economic Analysis'],
    author: {
      name: 'Sikandar Atiq',
      role: 'Data Scientist'
    }
  },
  {
    id: 8,
    title: 'The Economics of Climate Change',
    excerpt: 'Examining the economic impacts of climate change and the cost-benefit analysis of various mitigation strategies.',
    category: 'Policy Insights',
    date: 'August 20, 2023',
    readTime: '15 min read',
    tags: ['Climate Change', 'Environmental Economics', 'Policy'],
    author: {
      name: 'Sikandar Atiq',
      role: 'Environmental Economist'
    }
  },
  {
    id: 9,
    title: 'API Manufacturing in India: Breaking Import Dependencies',
    excerpt: 'Deep dive into India\'s pharmaceutical industry challenges and opportunities for building domestic API manufacturing capabilities.',
    category: 'International Trade',
    date: 'August 5, 2023',
    readTime: '8 min read',
    featured: true,
    tags: ['Pharmaceuticals', 'API', 'India', 'Import Substitution'],
    author: {
      name: 'Sikandar Atiq',
      role: 'Industry Analyst'
    }
  }
]

const filteredPosts = computed(() => {
  let posts = blogPosts
  
  if (selectedCategory.value !== 'All') {
    posts = posts.filter(post => post.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }
  
  return posts
})
</script>