// Advanced SEO Enhancement Utilities

// Generate comprehensive schema markup for the entire site
export const generateSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Main Website Schema
      {
        '@type': 'WebSite',
        '@id': 'https://srishtychandra.com/#website',
        url: 'https://srishtychandra.com/',
        name: 'Srishty Chandra - Economics Research Professional',
        description: 'Portfolio and professional website of Srishty Chandra, specializing in economics research, international trade analysis, and data analytics',
        publisher: {
          '@id': 'https://srishtychandra.com/#person'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://srishtychandra.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        },
        inLanguage: 'en-US'
      },
      // Enhanced Person Schema with Research Focus
      {
        '@type': ['Person', 'Researcher'],
        '@id': 'https://srishtychandra.com/#person',
        name: 'Srishty Chandra',
        alternateName: 'Srishty Chandra',
        url: 'https://srishtychandra.com',
        image: {
          '@type': 'ImageObject',
          url: 'https://srishtychandra.com/srishty-chandra-profile.jpg',
          width: 800,
          height: 800,
          caption: 'Srishty Chandra - Economics Research Professional'
        },
        sameAs: [
          'https://linkedin.com/in/srishty-chandra-9a5a73218',
          'https://github.com/srishty-chandra',
          'https://scholar.google.com/citations?user=srishty-chandra',
          'https://orcid.org/0000-0000-0000-0000'
        ],
        jobTitle: ['Research Professional', 'Economics Specialist', 'Data Analyst'],
        worksFor: {
          '@type': 'Organization',
          name: 'Independent Research Professional',
          description: 'Freelance economics research and data analysis services'
        },
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Symbiosis School of Economics',
            sameAs: 'https://sse.ac.in/'
          }
        ],
        email: 'srishty.chandra.98@gmail.com',
        telephone: '+91-6200103757',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          addressCountry': 'India',
          postalCode: '411004'
        },
        description: 'Srishty Chandra is an accomplished economics research professional with expertise in international trade analysis, API markets, and data analytics. Holding a Master\'s degree in Economics from Symbiosis School of Economics, she specializes in RCA analysis, PESTLE frameworks, and economic modeling using Python, R, and SQL.',
        knowsAbout: [
          'Economics Research',
          'International Trade Analysis',
          'API Markets Analysis',
          'Data Analytics',
          'Policy Research',
          'Python Programming',
          'R Statistical Computing',
          'SQL Database Management',
          'RCA (Revealed Comparative Advantage) Analysis',
          'PESTLE Analysis',
          'Economic Modeling',
          'Quantitative Research',
          'Statistical Analysis',
          'Econometrics',
          'Market Research'
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Master of Economics in International Trade and Economics',
            credentialCategory': 'degree',
            educationalLevel': 'Master\'s degree',
            issuedBy': {
              '@type': 'CollegeOrUniversity',
              name: 'Symbiosis School of Economics'
            },
            dateCreated: '2023'
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Google Advanced Data Analytics Professional Certificate',
            credentialCategory: 'certificate',
            issuedBy: {
              '@type': 'Organization',
              name: 'Google',
              sameAs: 'https://grow.google/certificates/data-analytics/'
            }
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'IELTS Academic - Band 7',
            credentialCategory: 'certificate',
            issuedBy: {
              '@type': 'Organization',
              name: 'British Council'
            }
          }
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Economics Researcher',
          occupationalCategory': '19-3011.01',
          responsibilities: [
            'Conduct economic research and analysis',
            'Analyze international trade patterns',
            'Develop economic models and forecasts',
            'Perform data analysis using Python, R, and SQL',
            'Write research reports and policy briefs'
          ]
        }
      },
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://srishtychandra.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://srishtychandra.com/'
          }
        ]
      }
    ]
  }
}

// Generate page-specific breadcrumbs
export const generateBreadcrumbs = (pageName, pageUrl) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://srishtychandra.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: `https://srishtychandra.com${pageUrl}`
      }
    ]
  }
}

// Generate FAQ Schema for common questions
export const generateFAQSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Srishty Chandra\'s area of expertise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Srishty Chandra specializes in economics research, international trade analysis, API markets analysis, and data analytics. She has expertise in Python, R, SQL, and various economic analysis frameworks including RCA and PESTLE.'
        }
      },
      {
        '@type': 'Question',
        name: 'What qualifications does Srishty Chandra have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Srishty Chandra holds a Master\'s degree in Economics (International Trade and Economics) from Symbiosis School of Economics, a Google Advanced Data Analytics Professional Certificate, and an IELTS Band 7 certification.'
        }
      },
      {
        '@type': 'Question',
        name: 'What services does Srishty Chandra offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Srishty Chandra offers economics research services, international trade analysis, data analytics consulting, policy research, and economic modeling. She works with organizations requiring expert analysis in economics and trade.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I contact Srishty Chandra for research collaboration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact Srishty Chandra via email at srishty.chandra.98@gmail.com or through the contact form on her website. She is based in Pune, Maharashtra, India.'
        }
      }
    ]
  }
}

// Generate Research/Article Schema
export const generateArticleSchema = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.description,
    author: {
      '@type': 'Person',
      name: 'Srishty Chandra',
      url: 'https://srishtychandra.com'
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    image: article.image,
    articleSection: article.category,
    keywords: article.keywords,
    wordCount: article.wordCount,
    publisher: {
      '@type': 'Person',
      name: 'Srishty Chandra',
      logo: {
        '@type': 'ImageObject',
        url: 'https://srishtychandra.com/favicon/favicon-192x192.png'
      }
    }
  }
}

// Generate LocalBusiness Schema for freelance services
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Srishty Chandra - Economics Research Services',
    image: 'https://srishtychandra.com/srishty-chandra-profile.jpg',
    '@id': 'https://srishtychandra.com/#business',
    url: 'https://srishtychandra.com',
    telephone: '+91-6200103757',
    email: 'srishty.chandra.98@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry': 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5204,
      longitude: 73.8567
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    priceRange: '$$',
    servesCuisine: 'Economics Research & Data Analytics',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 18.5204,
        longitude: 73.8567
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Economics Research Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Economic Research & Analysis',
            description: 'Comprehensive economic research and analysis services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'International Trade Analysis',
            description: 'Expert analysis of international trade patterns and markets'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Analytics Consulting',
            description: 'Advanced data analytics using Python, R, and SQL'
          }
        }
      ]
    }
  }
}

// Meta tags generator for better SEO
export const generateMetaTags = (page) => {
  const baseUrl = 'https://srishtychandra.com'
  const defaultImage = `${baseUrl}/srishty-chandra-profile.jpg`
  
  return {
    // Basic Meta Tags
    title: page.title || 'Srishty Chandra - Economics Research Professional',
    description: page.description || 'Srishty Chandra is an economics research professional specializing in international trade, data analysis, and policy research.',
    keywords: page.keywords || 'Srishty Chandra, economics researcher, data analyst, international trade expert',
    author: 'Srishty Chandra',
    
    // Open Graph Meta Tags
    'og:title': page.title || 'Srishty Chandra - Economics Research Professional',
    'og:description': page.description || 'Research professional specializing in economics, international trade, and data analysis.',
    'og:type': page.type || 'website',
    'og:url': page.url || baseUrl,
    'og:image': page.image || defaultImage,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:site_name': 'Srishty Chandra Portfolio',
    'og:locale': 'en_US',
    
    // Twitter Card Meta Tags
    'twitter:card': 'summary_large_image',
    'twitter:title': page.title || 'Srishty Chandra - Economics Research Professional',
    'twitter:description': page.description || 'Research professional specializing in economics, international trade, and data analysis.',
    'twitter:image': page.image || defaultImage,
    'twitter:creator': '@srishtychandra',
    
    // Additional Meta Tags
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    googlebot: 'index, follow',
    'revisit-after': '3 days',
    distribution: 'global',
    rating: 'general',
    language: 'English',
    
    // Canonical URL
    canonical: page.url || baseUrl
  }
}