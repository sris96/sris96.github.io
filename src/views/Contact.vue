<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-accent-50/40 to-white border-b border-neutral-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-900 mb-3 sm:mb-4">Contact Me</h1>
        <p class="text-base sm:text-lg text-neutral-600">Let's Connect and Collaborate</p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Centered Contact Information -->
      <div class="max-w-2xl mx-auto">
        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm always open to discussing research opportunities, collaboration on economic analysis projects, 
            or simply connecting with fellow researchers and professionals in the field.
          </p>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p class="text-gray-600">srishty.chandra.98@gmail.com</p>
                <p class="text-sm text-gray-500 mt-1">Best way to reach me for professional inquiries</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">LinkedIn</h3>
                <a href="https://linkedin.com/in/srishty-chandra-9a5a73218" target="_blank" class="text-secondary-600 hover:text-secondary-700">
                  linkedin.com/in/srishty-chandra-9a5a73218
                </a>
                <p class="text-sm text-gray-500 mt-1">Connect with me professionally</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C8.13,2 5,5.13 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.13 15.87,2 12,2M12,11.5C10.62,11.5 9.5,10.38 9.5,9C9.5,7.62 10.62,6.5 12,6.5C13.38,6.5 14.5,7.62 14.5,9C14.5,10.38 13.38,11.5 12,11.5Z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                <p class="text-gray-600">Pune, Maharashtra, India</p>
                <p class="text-sm text-gray-500 mt-1">Open to remote collaboration opportunities</p>
              </div>
            </div>
          </div>

          <!-- Research Interests -->
          <div class="mt-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Research Interests</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                <span class="text-gray-700">International Trade</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-secondary-600 rounded-full mr-3"></div>
                <span class="text-gray-700">Market Analysis</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-accent-600 rounded-full mr-3"></div>
                <span class="text-gray-700">Policy Research</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                <span class="text-gray-700">Data Analytics</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-secondary-400 rounded-full mr-3"></div>
                <span class="text-gray-700">Economic Modeling</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                <span class="text-gray-700">Industry Analysis</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form - Temporarily Hidden for Static Hosting -->
        <!-- <div class="card">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@example.com"
              >
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a subject</option>
                <option value="research-collaboration">Research Collaboration</option>
                <option value="data-analysis">Data Analysis Project</option>
                <option value="consultation">Consultation</option>
                <option value="academic-discussion">Academic Discussion</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </form>

          <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'">
            {{ submitMessage.text }}
          </div>
        </div> -->
      </div>

      <!-- Collaboration Opportunities -->
      <section class="mt-20">
        <div class="text-center mb-12">
          <h2 class="section-title">Collaboration Opportunities</h2>
          <p class="section-subtitle">
            I'm interested in working on projects that make a meaningful impact
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L20.71,8.71L23,11V6H16Z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Research Projects</h3>
            <p class="text-gray-600">
              Collaborative research in economics, trade analysis, and policy evaluation
            </p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3H5C3.9,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19Z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Data Analysis</h3>
            <p class="text-gray-600">
              Statistical modeling, econometric analysis, and data visualization projects
            </p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Writing & Publishing</h3>
            <p class="text-gray-600">
              Co-authoring research papers, reports, and analytical articles
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useSEO, seoData } from '../composables/useSEO'

// Set page-specific SEO
useSEO({
  ...seoData.contact,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Srishty Chandra",
    "description": seoData.contact.description,
    "url": seoData.contact.canonicalUrl,
    "mainEntity": {
      "@type": "Person",
      "name": "Srishty Chandra",
      "email": "srishty.chandra.98@gmail.com",
      "sameAs": "https://linkedin.com/in/srishty-chandra-9a5a73218"
    }
  }
})

const isSubmitting = ref(false)
const submitMessage = ref(null)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = null

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    submitMessage.value = {
      type: 'success',
      text: 'Thank you for your message! I\'ll get back to you soon.'
    }
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
  } catch (error) {
    submitMessage.value = {
      type: 'error',
      text: 'Sorry, there was an error sending your message. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>