// Custom Vite plugin for static SEO meta tag injection
import { readFileSync } from 'fs'
import { resolve } from 'path'

export function staticSEO() {
  return {
    name: 'vite-plugin-static-seo',
    transformIndexHtml(html, { path }) {
      // Default meta tags
      let metaTags = {
        title: 'Srishty Chandra - Research Professional & Economics Specialist',
        description: 'Srishty Chandra is a research professional specializing in economics, international trade, data analysis, and policy research.',
        keywords: 'Srishty Chandra, economics researcher, data analyst, international trade expert',
        ogTitle: 'Srishty Chandra - Research Professional & Economics Specialist',
        ogDescription: 'Research professional specializing in economics, international trade, and data analysis.',
        ogImage: 'https://srishtychandra.com/srishty-chandra-profile.jpg',
        canonicalUrl: 'https://srishtychandra.com/'
      }

      // Route-specific meta tags
      const routeMetaTags = {
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

      // Override with route-specific tags
      if (routeMetaTags[path]) {
        metaTags = { ...metaTags, ...routeMetaTags[path] }
      }

      // Generate meta tag HTML
      const metaTagsHtml = `
    <!-- SEO Meta Tags -->
    <title>${metaTags.title}</title>
    <meta name="description" content="${metaTags.description}">
    <meta name="keywords" content="${metaTags.keywords}">
    <link rel="canonical" href="${metaTags.canonicalUrl}">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${metaTags.ogTitle}">
    <meta property="og:description" content="${metaTags.ogDescription}">
    <meta property="og:url" content="${metaTags.canonicalUrl}">
    <meta property="og:image" content="${metaTags.ogImage}">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:title" content="${metaTags.ogTitle}">
    <meta name="twitter:description" content="${metaTags.ogDescription}">
    <meta name="twitter:image" content="${metaTags.ogImage}">
      `

      // Replace placeholder or inject before </head>
      if (html.includes('<!-- SEO_META_TAGS -->')) {
        return html.replace('<!-- SEO_META_TAGS -->', metaTagsHtml)
      } else {
        return html.replace('</head>', `${metaTagsHtml}\n  </head>`)
      }
    }
  }
}