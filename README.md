# AI Content Generator App

A modern AI-powered content generation application built with Next.js 15 and Gemini AI. Generate various types of content including blog posts, YouTube video ideas, and LinkedIn posts through an intuitive interface.

## Features

- **AI-Powered Content Generation**: Generate various content types using Google's Gemini AI
- **Multiple Content Templates**:
  - Blog posts with SEO optimization
  - YouTube video ideas and descriptions
  - LinkedIn professional posts
- **Rich Text Editor**: Built-in editor with Quill for content creation and editing
- **User Authentication**: Secure authentication with Clerk
- **Responsive Design**: Modern UI built with Tailwind CSS and shadcn/ui components
- **Dashboard**: Interactive dashboard with content history and analytics

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI Components**: shadcn/ui, Radix UI, Tailwind CSS
- **AI Integration**: Google Gemini AI via @google/genai
- **Authentication**: Clerk
- **Editor**: React Quill
- **Charts**: Recharts
- **Icons**: Lucide React, Tabler Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Google Gemini AI API key
- Clerk account for authentication

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ai_content_generator_app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── dashboard/         # Dashboard pages
│   │   ├── [templateId]/  # Dynamic template pages
│   │   ├── history/       # Content history
│   │   └── upgrade/       # Upgrade page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
│   ├── ai-provider.ts    # AI integration
│   ├── generator-templates.ts # Content templates
│   └── utils.ts          # Utility functions
└── middleware.ts         # Next.js middleware
```

## Content Templates

The application supports several content generation templates:

### Blog Posts

- SEO-optimized blog post generation
- Automatic title and keyword suggestions
- Rich text format output

### YouTube Content

- **Video Ideas**: Generate creative video concepts
- **Descriptions**: SEO-optimized video descriptions with tags

### LinkedIn Posts

- Professional networking content
- Business-focused valuable information

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with shadcn/ui components. Configuration is in `components.json`:

- Style: New York
- Base color: Neutral
- CSS variables enabled
- Lucide icons

### ESLint

ESLint configuration is in `eslint.config.mjs` with Next.js recommended settings.

## Authentication

User authentication is handled by Clerk. Users are redirected to the dashboard after login, and unauthenticated users see the landing page.

## AI Integration

The application integrates with Google's Gemini AI through the `@google/genai` package. The AI provider is configured in `src/lib/ai-provider.ts` using the Gemini 2.5 Flash model.

<!-- ## License

This project is private and not open for public distribution. -->
