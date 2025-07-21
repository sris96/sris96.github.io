import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { getAllBlogPosts } from './src/utils/blog.js'

// Generate meta tags for each route
function generateMetaTags(route) {
  const baseMetaTags = {
    title: 'Srishty Chandra - Research Professional & Economics Specialist',
    description: 'Srishty Chandra is a research professional specializing in economics, international trade, data analysis, and policy research.',
    keywords: 'Srishty Chandra, economics researcher, data analyst, international trade expert',
    ogImage: 'https://srishtychandra.com/srishty-chandra-profile.jpg',
  }

  // Route-specific meta tags
  const routeConfigs = {
    '/': {
      title: 'Srishty Chandra - Research Professional & Economics Specialist | Home',
      canonicalUrl: 'https://srishtychandra.com/'
    },
    '/about': {
      title: 'About Srishty Chandra | Economics Researcher & Data Analyst',
      description: 'Learn about Srishty Chandra\'s background in economics, international trade research, and data analysis expertise.',
      canonicalUrl: 'https://srishtychandra.com/about'
    },
    '/resume': {
      title: 'Resume - Srishty Chandra | Economics & Research Professional',
      description: 'Professional resume of Srishty Chandra showcasing experience in economics research, data analysis, and international trade.',
      canonicalUrl: 'https://srishtychandra.com/resume'
    },
    '/blog': {
      title: 'Economics Blog by Srishty Chandra | Research & Analysis',
      description: 'Insights on economics, international trade, market analysis, and policy research by Srishty Chandra.',
      canonicalUrl: 'https://srishtychandra.com/blog'
    },
    '/contact': {
      title: 'Contact Srishty Chandra | Economics Research Consultant',
      description: 'Get in touch with Srishty Chandra for economics research, data analysis, and consulting opportunities.',
      canonicalUrl: 'https://srishtychandra.com/contact'
    }
  }

  // Handle blog post routes
  if (route.startsWith('/blog/') && route !== '/blog/') {
    const slug = route.replace('/blog/', '')
    const posts = getAllBlogPosts()
    const post = posts.find(p => p.slug === slug)
    
    if (post) {
      const seo = post.seo || {}
      return {
        title: seo.title || `${post.title} | Srishty Chandra Blog`,
        description: seo.description || post.excerpt,
        keywords: seo.keywords || post.tags.join(', ') + ', Srishty Chandra',
        ogTitle: seo.ogTitle || post.title,
        ogDescription: seo.ogDescription || post.excerpt,
        ogImage: seo.ogImage || post.coverImage || baseMetaTags.ogImage,
        canonicalUrl: `https://srishtychandra.com/blog/${slug}`
      }
    }
  }

  return { ...baseMetaTags, ...(routeConfigs[route] || {}) }
}

// Vite plugin for injecting meta tags
export function injectMetaTags() {
  return {
    name: 'inject-meta-tags',
    transformIndexHtml: {
      enforce: 'pre',
      transform(html, ctx) {
        const route = ctx.path || '/'
        const meta = generateMetaTags(route)
        
        // Build meta tags HTML
        const metaTagsHtml = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}">
    <meta name="keywords" content="${meta.keywords}">
    <link rel="canonical" href="${meta.canonicalUrl || 'https://srishtychandra.com' + route}">
    <meta property="og:title" content="${meta.ogTitle || meta.title}">
    <meta property="og:description" content="${meta.ogDescription || meta.description}">
    <meta property="og:url" content="${meta.canonicalUrl || 'https://srishtychandra.com' + route}">
    <meta property="og:image" content="${meta.ogImage}">
    <meta name="twitter:title" content="${meta.ogTitle || meta.title}">
    <meta name="twitter:description" content="${meta.ogDescription || meta.description}">
    <meta name="twitter:image" content="${meta.ogImage}">`

        // Replace existing title tag and inject other meta tags
        html = html.replace(/<title>.*?<\/title>/, '')
        html = html.replace('</head>', `${metaTagsHtml}\n  </head>`)
        
        return html
      }
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    injectMetaTags()
  ],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    }
  }
})