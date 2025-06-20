# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + TypeScript + Vite portfolio website with Tailwind CSS for styling. The project uses Vue Router for navigation and follows modern Vue 3 Composition API patterns.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production (type-checks then builds)
npm run build

# Preview production build locally
npm run preview
```

## Architecture & Structure

### Core Stack
- **Vue 3.4.38** with Composition API (`<script setup>` syntax)
- **TypeScript 5.5.3** (strict mode enabled)
- **Vite 5.4.2** for fast builds and HMR
- **Vue Router 4** for client-side routing
- **Tailwind CSS 3.3.5** with extensive customizations

### Directory Structure
- `/src/views/` - Page components (Home, About, Resume, Projects, Blog, Contact)
- `/src/components/` - Reusable components (Navigation, Footer)
- `/src/router/` - Vue Router configuration
- `/src/assets/` - Static assets
- `/src/style.css` - Global styles with custom Tailwind components

### Routing Pattern
Routes are defined in `src/router/index.ts`:
- `/` → Home.vue
- `/about` → About.vue
- `/resume` → Resume.vue
- `/projects` → Projects.vue
- `/blog` → Blog.vue
- `/contact` → Contact.vue

### Styling Architecture
The project uses a sophisticated Tailwind CSS setup with:
- Custom color system (primary, secondary, accent, neutral)
- Custom fonts (Inter, Playfair Display, JetBrains Mono)
- Extensive animations (fade-in, slide, float, gradient effects)
- Custom component classes in `src/style.css`:
  - Buttons: `btn-primary`, `btn-secondary`, `btn-outline`
  - Cards: `glass-card`, `gradient-card`, `floating-card`
  - Typography: `section-title`, `section-subtitle`, `text-gradient`

### Component Patterns
- Components use Vue 3 `<script setup lang="ts">` syntax
- Heavy use of Tailwind utility classes
- Animated background elements and gradient effects
- Glass morphism and modern UI patterns
- No state management library (components are self-contained)

## Important Notes

- **No test framework** is currently configured
- TypeScript is configured but underutilized (mostly empty setup blocks)
- The app layout consists of fixed Navigation, router-view content area, and fixed Footer
- All styling uses Tailwind CSS with custom extensions defined in `tailwind.config.js`
- The project follows a design-first approach with emphasis on visual effects and animations