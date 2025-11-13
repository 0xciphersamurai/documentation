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
claude-user-documentation/
├── app/                      # Next.js App Router
│   ├── docs/                # Documentation pages
│   │   ├── [[...slug]]/     # Dynamic route for all docs
│   │   └── layout.tsx       # Docs layout with navigation
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── content/                  # MDX content files (20 pages)
│   ├── index.mdx            # Main landing page
│   ├── meta.json            # Top-level navigation
│   ├── introduction/        # Introduction (3 pages)
│   │   ├── index.mdx        # What is Trigger Market
│   │   ├── why-it-matters.mdx
│   │   ├── how-it-works.mdx
│   │   └── meta.json
│   ├── understanding-debates/ # Core concepts (4 pages)
│   │   ├── index.mdx        # Opinions and Prices
│   │   ├── opinion-lifecycle.mdx
│   │   ├── how-consensus-forms.mdx
│   │   ├── dynamic-evolution.mdx
│   │   └── meta.json
│   ├── getting-started/     # Quick start (3 pages)
│   │   ├── index.mdx        # First position walkthrough
│   │   ├── your-first-position.mdx
│   │   ├── reading-the-market.mdx
│   │   └── meta.json
│   ├── participating/       # Ways to participate (4 pages)
│   │   ├── index.mdx        # Trading opinions
│   │   ├── creating-debates.mdx
│   │   ├── proposing-opinions.mdx
│   │   ├── why-participation-matters.mdx
│   │   └── meta.json
│   ├── how-it-works/        # System mechanics (4 pages)
│   │   ├── index.mdx        # Settlement process
│   │   ├── fee-structure.mdx
│   │   ├── opinion-replacement.mdx
│   │   ├── value-conservation.mdx
│   │   └── meta.json
│   └── advanced/            # Advanced topics (2 pages)
│       ├── market-dynamics.mdx
│       ├── security-considerations.mdx
│       └── meta.json
├── components/              # React components
├── lib/                     # Utility functions
│   └── source.ts           # Fumadocs source configuration
└── public/                  # Static assets

## ✅ Current Status

### Completed
- ✅ Full Fumadocs setup with Next.js 14
- ✅ TypeScript configuration
- ✅ Tailwind CSS styling with dark theme
- ✅ MDX support for content
- ✅ Complete documentation overhaul (20 pages)
- ✅ **Introduction** (3 pages): What it is, why it matters, how it works
- ✅ **Understanding Debates** (4 pages): Opinions, lifecycle, consensus, evolution
- ✅ **Getting Started** (3 pages): Quick start, positions, market reading
- ✅ **Participating** (4 pages): Trading, creating, proposing, network effects
- ✅ **How It Works** (4 pages): Settlement, fees, replacement, value conservation
- ✅ **Advanced** (2 pages): Market dynamics, security considerations
- ✅ Educational tone without pump/dump language
- ✅ User-focused explanations (not overly technical)
- ✅ All content from PRD.md and whitepaper.typ
- ✅ No TypeScript errors
- ✅ ESLint configured and passing

## 📖 Documentation Content

The documentation is complete and covers:

**For New Users:**
- Oracle-free consensus markets explained simply
- Step-by-step first position guide
- How to read market signals and interpret prices
- Understanding active vs. candidate opinion states

**For Active Participants:**
- Trading strategies and approaches
- How to create debates and earn 0.25% fees forever
- How to propose new opinions
- Position management and risk strategies

**For Technical Users:**
- L² norm AMM mechanics and properties
- Settlement criteria (age, stability, agreement, confirmations)
- Opinion replacement dynamics
- Value conservation guarantees (Euler's theorem)
- Security model and attack resistance

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
