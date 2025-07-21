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
          <!-- Featured Image -->
          <div v-if="post.coverImage" class="mb-12">
            <div class="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <img 
                :src="post.coverImage" 
                :alt="post.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div v-if="post.imageCredit" class="mt-3 text-xs text-neutral-500 italic text-center">
              {{ post.imageCredit }}
            </div>
          </div>
          
          <!-- Fallback Image Placeholder -->
          <div v-else class="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl mb-12 flex items-center justify-center">
            <svg class="w-20 h-20 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </div>

          <!-- Article Content -->
          <div class="prose prose-lg max-w-none text-neutral-700" v-html="htmlContent">
          </div>
        </article>

        <!-- Share Article Section -->
        <div v-if="post" class="mt-16 pt-8 border-t border-neutral-200">
          <div class="bg-gradient-to-r from-accent-50/50 to-primary-50/50 rounded-2xl p-6 sm:p-8 mb-8">
            <h3 class="text-lg sm:text-xl font-semibold text-neutral-800 mb-4 text-center">
              Share this article
            </h3>
            
            <!-- Share Buttons -->
            <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
              <!-- Twitter -->
              <button 
                @click="shareToTwitter"
                class="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors touch-manipulation active:scale-95"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span class="hidden sm:inline">Twitter</span>
              </button>

              <!-- LinkedIn -->
              <button 
                @click="shareToLinkedIn"
                class="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors touch-manipulation active:scale-95"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span class="hidden sm:inline">LinkedIn</span>
              </button>

              <!-- Facebook -->
              <button 
                @click="shareToFacebook"
                class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors touch-manipulation active:scale-95"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span class="hidden sm:inline">Facebook</span>
              </button>

              <!-- WhatsApp -->
              <button 
                @click="shareToWhatsApp"
                class="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors touch-manipulation active:scale-95"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
                <span class="hidden sm:inline">WhatsApp</span>
              </button>

              <!-- Copy Link -->
              <button 
                @click="copyLink"
                class="flex items-center gap-2 px-4 py-2 bg-neutral-600 hover:bg-neutral-700 text-white rounded-lg transition-colors touch-manipulation active:scale-95"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                <span class="hidden sm:inline">{{ copied ? 'Copied!' : 'Copy Link' }}</span>
              </button>
            </div>

            <!-- Copy Link Field -->
            <div class="bg-white rounded-lg p-4 border border-neutral-200">
              <label class="block text-sm font-medium text-neutral-700 mb-2">Article URL:</label>
              <div class="flex gap-2">
                <input 
                  ref="linkInput"
                  :value="currentUrl" 
                  readonly
                  class="flex-1 px-3 py-2 border border-neutral-300 rounded-md text-sm bg-neutral-50 text-neutral-600"
                />
                <button 
                  @click="copyLink"
                  class="px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-md text-sm font-medium transition-colors"
                >
                  {{ copied ? 'Copied!' : 'Copy' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Back to Blog -->
          <div class="text-center">
            <router-link to="/blog" class="btn-outline">
              ← More Articles
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getBlogPostBySlug, parseMarkdown } from '../utils/blog'
import { useSEO } from '../composables/useSEO'

const route = useRoute()
const post = ref(null)
const htmlContent = ref('')
const copied = ref(false)
const linkInput = ref(null)

// Get current URL
const currentUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href
  }
  return ''
})

// Share functions
const shareToTwitter = () => {
  const text = `${post.value.title} - ${post.value.excerpt}`
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl.value)}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareToLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl.value)}`
  window.open(url, '_blank', 'width=600,height=600')
}

const shareToFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareToWhatsApp = () => {
  const text = `${post.value.title} - ${post.value.excerpt}`
  const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + currentUrl.value)}`
  window.open(url, '_blank')
}

const copyLink = async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(currentUrl.value)
    } else {
      // Fallback for older browsers
      if (linkInput.value) {
        linkInput.value.select()
        linkInput.value.setSelectionRange(0, 99999)
        document.execCommand('copy')
      }
    }
    
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

onMounted(() => {
  const slug = route.params.slug
  const blogPost = getBlogPostBySlug(slug)
  
  if (blogPost) {
    post.value = blogPost
    // Parse markdown content to HTML
    htmlContent.value = parseMarkdown(blogPost.content)
    
    // Update SEO for blog post
    const seoData = blogPost.seo || {}
    const defaultStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blogPost.title,
      description: blogPost.excerpt,
      author: {
        '@type': 'Person',
        name: blogPost.author.name,
        url: 'https://srishtychandra.com'
      },
      datePublished: new Date(blogPost.date).toISOString(),
      dateModified: blogPost.dateModified ? new Date(blogPost.dateModified).toISOString() : new Date(blogPost.date).toISOString(),
      image: blogPost.coverImage || 'https://srishtychandra.com/srishty-chandra-profile.jpg',
      publisher: {
        '@type': 'Person',
        name: 'Srishty Chandra',
        logo: {
          '@type': 'ImageObject',
          url: 'https://srishtychandra.com/favicon/favicon-192x192.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl.value
      },
      keywords: blogPost.tags.join(', '),
      articleBody: blogPost.content,
      wordCount: blogPost.content.split(' ').length,
      timeRequired: blogPost.readTime
    }
    
    useSEO({
      title: seoData.title || `${blogPost.title} | Srishty Chandra Blog`,
      description: seoData.description || blogPost.excerpt,
      keywords: seoData.keywords || `${blogPost.tags.join(', ')}, Srishty Chandra, economics blog, research insights`,
      ogTitle: seoData.ogTitle || blogPost.title,
      ogDescription: seoData.ogDescription || blogPost.excerpt,
      ogImage: seoData.ogImage || blogPost.coverImage || 'https://srishtychandra.com/srishty-chandra-profile.jpg',
      twitterTitle: seoData.twitterTitle || blogPost.title,
      twitterDescription: seoData.twitterDescription || blogPost.excerpt,
      twitterImage: seoData.twitterImage || blogPost.coverImage || 'https://srishtychandra.com/srishty-chandra-profile.jpg',
      canonicalUrl: seoData.canonicalUrl || `https://srishtychandra.com/blog/${blogPost.slug}`,
      structuredData: blogPost.structuredData || defaultStructuredData
    })
  }
})
</script>