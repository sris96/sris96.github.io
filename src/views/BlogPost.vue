<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-accent-50/40 to-white border-b border-neutral-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <!-- Back to Blog -->
        <div class="mb-8">
          <router-link 
            to="/blog" 
            class="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors font-medium"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
            </svg>
            Back to Blog
          </router-link>
        </div>

        <!-- Article Header -->
        <div v-if="post" class="text-center">
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span v-for="tag in post.tags" :key="tag" class="skill-tag">
              {{ tag }}
            </span>
          </div>
          
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4 leading-tight">
            {{ post.title }}
          </h1>
          
          <p class="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ post.excerpt }}
          </p>
          
          <!-- Author & Meta Info -->
          <div class="flex items-center justify-center gap-6 text-sm text-neutral-600">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                {{ post.author.name.split(' ').map(n => n[0]).join('') }}
              </div>
              <div class="text-left">
                <p class="font-semibold text-neutral-800">{{ post.author.name }}</p>
                <p class="text-neutral-500">{{ post.author.role }}</p>
              </div>
            </div>
            <div class="hidden sm:block w-px h-8 bg-neutral-300"></div>
            <div class="text-center sm:text-left">
              <p class="font-medium">{{ post.date }}</p>
              <p class="text-neutral-500">{{ post.readTime }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div v-if="!post" class="text-center py-16">
          <h2 class="text-2xl font-bold text-neutral-800 mb-4">Article Not Found</h2>
          <p class="text-neutral-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <router-link to="/blog" class="btn-primary">
            Back to Blog
          </router-link>
        </div>
        
        <article v-else class="prose prose-lg max-w-none">
          <!-- Featured Image Placeholder -->
          <div class="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl mb-12 flex items-center justify-center">
            <svg class="w-20 h-20 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </div>

          <!-- Article Content -->
          <div class="text-neutral-700 leading-relaxed space-y-6">
            <p class="text-xl leading-relaxed text-neutral-600 font-medium">
              {{ post.excerpt }}
            </p>
            
            <h2 class="text-2xl font-bold text-primary-900 mt-12 mb-6">Introduction</h2>
            <p>
              This is a sample blog post demonstrating the structure and layout of individual article pages. 
              In a real implementation, this content would be dynamically loaded from a content management system 
              or markdown files.
            </p>
            
            <h2 class="text-2xl font-bold text-primary-900 mt-12 mb-6">Key Insights</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
            
            <blockquote class="border-l-4 border-accent-500 pl-6 py-4 bg-accent-50/30 rounded-r-lg my-8">
              <p class="text-lg font-medium text-neutral-800 italic">
                "This is an example quote that might appear in a typical blog post to highlight important insights or expert opinions."
              </p>
            </blockquote>
            
            <h2 class="text-2xl font-bold text-primary-900 mt-12 mb-6">Analysis & Methodology</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <ul class="list-disc pl-6 space-y-2 my-6">
              <li>Data collection from multiple reliable sources</li>
              <li>Statistical analysis using modern econometric methods</li>
              <li>Cross-validation with historical trends</li>
              <li>Expert consultation and peer review</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-primary-900 mt-12 mb-6">Conclusions</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <div class="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200/50 rounded-xl p-6 my-8">
              <h3 class="text-lg font-semibold text-primary-900 mb-3">Key Takeaways</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  <span>Understanding market dynamics is crucial for policy development</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  <span>Data-driven approaches yield more reliable insights</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  <span>Long-term trends require careful analysis and interpretation</span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <!-- Article Footer -->
        <div v-if="post" class="mt-16 pt-8 border-t border-neutral-200">
          <div class="flex flex-wrap justify-between items-center gap-6">
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium text-neutral-600">Share this article:</span>
              <div class="flex gap-3">
                <button class="p-2 rounded-lg glass-card hover:bg-white/80 transition-colors">
                  <svg class="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button class="p-2 rounded-lg glass-card hover:bg-white/80 transition-colors">
                  <svg class="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
            <router-link to="/blog" class="btn-outline">
              ← More Articles
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

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

const route = useRoute()
const post = ref<BlogPost | null>(null)

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

onMounted(() => {
  const postId = parseInt(route.params.id as string)
  post.value = blogPosts.find(p => p.id === postId) || null
})
</script>