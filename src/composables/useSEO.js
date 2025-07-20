import { onMounted, onUnmounted } from 'vue'

export function useSEO(options) {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
    structuredData
  } = options

  const updateMetaTags = () => {
    // Update title
    if (title) {
      document.title = `${title} | Srishty Chandra`
    }

    // Update meta description
    updateMetaTag('name', 'description', description)
    
    // Update keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords)
    }

    // Update Open Graph tags
    if (ogTitle) updateMetaTag('property', 'og:title', ogTitle)
    if (ogDescription) updateMetaTag('property', 'og:description', ogDescription)
    if (ogImage) updateMetaTag('property', 'og:image', ogImage)

    // Update Twitter Card tags
    if (twitterTitle) updateMetaTag('name', 'twitter:title', twitterTitle)
    if (twitterDescription) updateMetaTag('name', 'twitter:description', twitterDescription)
    if (twitterImage) updateMetaTag('name', 'twitter:image', twitterImage)

    // Update canonical URL
    if (canonicalUrl) {
      updateLinkTag('canonical', canonicalUrl)
    }

    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData)
    }
  }

  const updateMetaTag = (attr, attrValue, content) => {
    if (!content) return
    
    let tag = document.querySelector(`meta[${attr}="${attrValue}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(attr, attrValue)
      document.head.appendChild(tag)
    }
    tag.content = content
  }

  const updateLinkTag = (rel, href) => {
    let tag = document.querySelector(`link[rel="${rel}"]`)
    if (!tag) {
      tag = document.createElement('link')
      tag.setAttribute('rel', rel)
      document.head.appendChild(tag)
    }
    tag.href = href
  }

  const addStructuredData = (data) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    script.setAttribute('data-vue-meta', 'true')
    document.head.appendChild(script)
  }

  const removeStructuredData = () => {
    const scripts = document.querySelectorAll('script[data-vue-meta="true"]')
    scripts.forEach(script => script.remove())
  }

  onMounted(() => {
    updateMetaTags()
  })

  onUnmounted(() => {
    removeStructuredData()
  })
}

// SEO data for each page
export const seoData = {
  home: {
    title: 'Research Professional & Economics Specialist',
    description: 'Srishty Chandra - Economics researcher specializing in international trade, data analysis, and policy research. Expert in Python, R, SQL with advanced certifications.',
    keywords: 'Srishty Chandra, economics researcher, data analyst, international trade expert, policy research, Python, R, SQL',
    canonicalUrl: 'https://srishtychandra.com/'
  },
  about: {
    title: 'About - Professional Background & Expertise',
    description: 'Learn about Srishty Chandra\'s journey as an economics researcher, academic achievements, and expertise in data analysis and international trade.',
    keywords: 'Srishty Chandra about, economics background, research experience, Symbiosis School of Economics, data analysis expertise',
    canonicalUrl: 'https://srishtychandra.com/about'
  },
  resume: {
    title: 'Resume - Professional Experience & Qualifications',
    description: 'Detailed resume of Srishty Chandra showcasing research experience, educational qualifications, certifications in data analytics, and technical skills.',
    keywords: 'Srishty Chandra resume, CV, research experience, economics qualifications, Google certifications, Python skills',
    canonicalUrl: 'https://srishtychandra.com/resume'
  },
  blog: {
    title: 'Blog - Economic Research & Analysis',
    description: 'Economic insights and research articles by Srishty Chandra covering international trade, policy analysis, and economic trends.',
    keywords: 'economics blog, research articles, Srishty Chandra publications, economic analysis, trade policy',
    canonicalUrl: 'https://srishtychandra.com/blog'
  },
  contact: {
    title: 'Contact - Connect for Research Collaboration',
    description: 'Contact Srishty Chandra for research collaborations, data analysis projects, and economic consulting opportunities.',
    keywords: 'contact Srishty Chandra, research collaboration, economics consulting, data analysis services',
    canonicalUrl: 'https://srishtychandra.com/contact'
  }
}