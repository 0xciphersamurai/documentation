# Trigger Market Documentation

Professional documentation site for Trigger Market built with Fumadocs, Next.js 14, and TypeScript.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on port 3003)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
claude2-documentation/
├── app/                      # Next.js App Router
│   ├── docs/                # Documentation pages
│   │   ├── [[...slug]]/     # Dynamic route for all docs
│   │   └── layout.tsx       # Docs layout with navigation
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── content/                  # MDX content files
│   └── docs/
│       ├── index.mdx        # Docs home page
│       ├── _meta.json       # Navigation structure
│       ├── introduction/    # Introduction section (3 pages)
│       ├── getting-started/ # Getting started section (planned)
│       ├── core-concepts/   # Core concepts section (planned)
│       ├── guides/          # Guides section (planned)
│       ├── mechanics/       # Mechanics section (planned)
│       ├── use-cases/       # Use cases section (planned)
│       └── advanced/        # Advanced section (planned)
├── components/              # React components
│   └── interactive/         # Interactive components (planned)
├── lib/                     # Utility functions
│   └── source.ts           # Fumadocs source configuration
└── public/                  # Static assets

## ✅ Current Status

### Completed
- ✅ Full Fumadocs setup with Next.js 14
- ✅ TypeScript configuration
- ✅ Tailwind CSS styling with dark theme
- ✅ MDX support for content
- ✅ **Introduction Section (3 pages)**:
  - What is Trigger Market?
  - Why It Matters
  - Key Innovations
- ✅ Landing page with quick links
- ✅ No TypeScript errors
- ✅ Production build successful
- ✅ Development server running
- ✅ ESLint configured and passing

### Pending
- ⏳ Getting Started section (4 pages)
- ⏳ Core Concepts section (5 pages)
- ⏳ Guides section (5 pages)
- ⏳ Mechanics section (4 pages)
- ⏳ Use Cases section (4 pages)
- ⏳ Advanced section (2 pages)
- ⏳ Interactive React components

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Content**: Fumadocs + MDX
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Fumadocs UI, Radix UI
- **Icons**: Lucide React
- **Charts**: Recharts (for future interactive components)

## 📝 Writing Documentation

### Adding New Pages

1. Create a new `.mdx` file in the appropriate `content/docs/` subdirectory
2. Add frontmatter with `title` and `description`
3. Write content using MDX (Markdown + React components)
4. Update `_meta.json` if needed for navigation

### Example MDX File

\`\`\`mdx
---
title: Your Page Title
description: A brief description of the page
---

import { Callout } from 'fumadocs-ui/components/callout';

# Your Page Title

Your content here...

<Callout title="Note" type="info">
  Important information
</Callout>
\`\`\`

### Available Components

- `Callout`: Info boxes with different types (info, warn, error)
- `Steps`: Step-by-step guides
- Standard HTML/Markdown elements

## 🔧 Configuration

- `next.config.mjs`: Next.js configuration with Fumadocs MDX
- `tailwind.config.ts`: Tailwind CSS with Fumadocs preset
- `tsconfig.json`: TypeScript configuration
- `lib/source.ts`: Fumadocs source loader configuration

## 🌐 Deployment

The site can be deployed to:
- Vercel (recommended)
- Netlify
- Any platform supporting Next.js

## 📦 Dependencies

### Main Dependencies
- `next`: ^14.2.0
- `react`: ^18.3.0
- `fumadocs-ui`: ^13.0.0
- `fumadocs-core`: ^13.0.0
- `fumadocs-mdx`: ^9.0.0
- `lucide-react`: ^0.553.0

### Dev Dependencies
- `typescript`: ^5
- `tailwindcss`: ^3.4.1
- `eslint`: ^8
- `@types/react`: ^18
- `@types/node`: ^20

## 🚨 Troubleshooting

### Port Already in Use
If port 3003 is in use, change it in `package.json`:
\`\`\`json
"dev": "next dev -p YOUR_PORT"
\`\`\`

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npx tsc --noEmit`
- Clear Next.js cache: `rm -rf .next`

## 📄 License

This documentation is part of the Trigger Market project.

## 🤝 Contributing

1. Add content in `content/docs/`
2. Test locally with `npm run dev`
3. Ensure build passes: `npm run build`
4. Check for lint errors: `npm run lint`
