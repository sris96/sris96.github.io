# Blog Post SEO Template for Markdown Files

When creating blog posts in markdown, use this template to ensure proper SEO optimization:

```markdown
---
id: [unique number]
title: "[Your Blog Title]"
date: "[Publication Date]"
dateModified: "[Last Modified Date]"
excerpt: "[Brief 150-160 character description for search results]"
category: "[Category Name]"
readTime: "[X min read]"
tags: ["tag1", "tag2", "tag3"]
author:
  name: "Srishty Chandra"
  role: "Economic Researcher"
featured: [true/false]
coverImage: "[URL to cover image]"
imageCredit: "[Image attribution if required]"

# SEO Metadata Section
seo:
  title: "[SEO optimized title - max 60 chars including your name]"
  description: "[SEO meta description - 150-160 chars with keywords]"
  keywords: ["keyword1", "keyword2", "your name", "economics", "research"]
  ogTitle: "[Open Graph title for social media]"
  ogDescription: "[Open Graph description for social media sharing]"
  ogImage: "[URL to social media preview image - 1200x630px recommended]"
  twitterTitle: "[Twitter card title]"
  twitterDescription: "[Twitter card description]"
  twitterImage: "[Twitter card image URL]"
  canonicalUrl: "https://srishtychandra.com/blog/[post-slug]"

# Structured Data for Rich Snippets
structuredData:
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://srishtychandra.com/blog/[post-slug]#article",
    "headline": "[Article headline]",
    "alternativeHeadline": "[Alternative headline if applicable]",
    "description": "[Article description]",
    "image": "[Article image URL]",
    "datePublished": "[YYYY-MM-DD]",
    "dateModified": "[YYYY-MM-DD]",
    "author": {
      "@type": "Person",
      "name": "Srishty Chandra",
      "url": "https://srishtychandra.com",
      "sameAs": ["https://linkedin.com/in/srishty-chandra-9a5a73218"]
    },
    "publisher": {
      "@type": "Person",
      "name": "Srishty Chandra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://srishtychandra.com/favicon/favicon-192x192.png"
      }
    },
    "keywords": "[comma-separated keywords]",
    "articleSection": "[Category/Section]",
    "wordCount": [number],
    "timeRequired": "PT[X]M",
    "isPartOf": {
      "@type": "Blog",
      "name": "Srishty Chandra Economics Blog",
      "url": "https://srishtychandra.com/blog"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "[Topic Name]",
        "sameAs": "[Wikipedia or authoritative URL]"
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "[Organization Name]",
        "sameAs": "[Organization URL]"
      }
    ]
  }
---

# [Your Article Title]

[Your article content starts here...]
```

## SEO Best Practices for Blog Posts

### 1. Title Optimization
- Include primary keyword near the beginning
- Keep under 60 characters
- Include your name for personal branding
- Make it compelling and clickable

### 2. Meta Description
- Summarize the article value proposition
- Include primary and secondary keywords naturally
- Keep between 150-160 characters
- Include a call-to-action if relevant

### 3. Keywords Strategy
- Research relevant keywords using Google Keyword Planner
- Include long-tail keywords specific to your niche
- Use variations throughout the content naturally
- Focus on user intent keywords

### 4. Content Structure
- Use H1 for main title (only one per page)
- Use H2 for major sections
- Use H3 for subsections
- Include keywords in headings naturally

### 5. Image Optimization
- Use descriptive file names (e.g., india-economy-analysis-2024.jpg)
- Add alt text with keywords
- Compress images for fast loading
- Use appropriate dimensions (1200x630 for social sharing)

### 6. Internal Linking
- Link to related blog posts
- Link to your main pages (About, Resume, Contact)
- Use descriptive anchor text
- Aim for 2-3 internal links per post

### 7. Structured Data Benefits
- Enables rich snippets in search results
- Improves click-through rates
- Helps search engines understand content
- Supports voice search optimization

### 8. Social Media Optimization
- Custom OG tags for better social sharing
- Optimized images for each platform
- Compelling descriptions for shares
- Platform-specific formatting

## Example Usage

For an economics research article, your frontmatter might look like:

```markdown
---
id: 11
title: "PESTLE Analysis of Indian API Markets: A Comprehensive Guide"
date: "June 15, 2025"
excerpt: "In-depth PESTLE analysis of India's API markets examining political, economic, social, technological, legal, and environmental factors."
category: "Market Analysis"
readTime: "12 min read"
tags: ["PESTLE", "API Markets", "India", "Market Analysis", "Economics"]
author:
  name: "Srishty Chandra"
  role: "Economic Researcher"
featured: true
seo:
  title: "PESTLE Analysis Indian API Markets - Srishty Chandra"
  description: "Expert PESTLE analysis of Indian API markets by economist Srishty Chandra. Comprehensive guide covering all six factors affecting the pharmaceutical industry."
  keywords: ["PESTLE analysis", "Indian API markets", "pharmaceutical economics", "Srishty Chandra", "market analysis India"]
---
```

Remember: Good SEO takes time. Focus on creating valuable content for your readers while following these technical guidelines.