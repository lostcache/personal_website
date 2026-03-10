# Personal Website - Comprehensive Context Document

**Site URL:** https://harshdevisha.com
**Owner:** Harsh Devisha
**Purpose:** Personal portfolio and technical blog focused on distributed systems, systems programming, and full-stack development

---

## OWNER PROFILE

### Identity & Bio

- **Name:** Harsh Devisha
- **Tagline:** "100% Biodegradable, Cruelty-Free. Made in India"
- **Location:** Los Angeles, CA
- **Education:**
  - Computer Science Graduate Student at Loyola Marymount University (LMU) - 3.90 GPA
  - Bachelor's in Electrical Engineering from Pandit Deendayal Petroleum University
- **Contact:**
  - Email: harshdevisha91@gmail.com
  - GitHub: [@lostcache](https://github.com/lostcache)
  - LinkedIn: [harsh-devisha](https://www.linkedin.com/in/harsh-devisha/)

### Professional Summary

Recent CS grad from LMU based in Los Angeles with 3+ years as a software engineer building full-stack web applications. Primary passion is in math, systems & performance engineering—building distributed systems, kernel programming, implementing algorithms in multiple languages, and documenting the journey through technical writing.

---

## PROFESSIONAL EXPERIENCE

### 1. Graduate Research Assistant at Kubishi | LMU Seaver School of Science and Engineering

**Period:** August 2025 - Present

**Technologies:** Python, Mathematica, Algorithm Analysis

**Work:** Research into pursuit-evasion optimization problems, analyzing competitive ratios for pursuit strategies.

### 2. Software Engineer at SetFindr

**Period:** December 2024 - May 2025

**Technologies:** Python, FastAPI, Node.js, JWT, Qdrant, Google Cloud, OAuth2, OpenAI API

**Achievements:**

- Built P2P marketplace from scratch
- Implemented OAuth2.0 authentication system
- Integrated vector search using Qdrant
- Added NLP features using OpenAI API
- Deployed on Google Cloud infrastructure

### 3. Data Specialist at LMU Career and Professional Development Department

**Period:** August 2024 - May 2025

**Technologies:** ETL Pipelines, Data Analysis

**Work:** Building ETL pipelines and performing data analysis for career development insights.

### 4. Software Engineer - I at Nexuslink Services

**Period:** December 2021 - December 2023

**Technologies:** Puppeteer, JWT, REST APIs, Session Management, React-Redux

**Achievements:**

- Built React-Redux single-page applications
- Implemented JWT-based authentication systems
- Created automated document generation pipelines using Puppeteer
- Developed RESTful APIs with session management

---

## TECHNICAL EXPERTISE

### Core Interests

1. **Distributed Systems** - Consensus algorithms, replication, fault tolerance
2. **Systems Programming** - Low-level optimization, performance engineering
3. **Full-Stack Development** - Modern web technologies, API design
4. **Performance Engineering** - CPU architecture, cache optimization, data-oriented design

### Technology Stack

- **Languages:** Zig, Rust, C++, Python, JavaScript/TypeScript, Node.js
- **Frontend:** React, Next.js, Astro
- **Backend:** FastAPI, Node.js, REST APIs
- **Databases:** Vector databases (Qdrant), traditional databases
- **Infrastructure:** Google Cloud, OAuth2.0, JWT
- **Tools:** Puppeteer, ETL pipelines

---

## BLOG CONTENT OVERVIEW

The blog contains technical deep-dives into systems programming and performance engineering. Current posts:

### 1. The 1 Billion Row Challenge (1BRC)

**File:** `1brc.mdx`
**Last Updated:** December 23, 2025

**Summary:** A performance optimization journey processing 1 billion temperature measurements.

**Key Topics:**

- Performance profiling with flamegraphs
- CPU architecture and cache optimization
- Data-oriented design principles
- Parallel processing with threading
- Memory-mapped I/O (mmap)
- Custom hash map implementation (FastMap)
- Custom number parsing
- Avoiding unnecessary allocations

**Performance Results:**

- Initial implementation: ~513 seconds
- Multi-threaded with optimizations: ~103 seconds
- Using unordered_map: ~62 seconds
- Custom parsing: ~56 seconds
- mmap implementation: ~42 seconds
- Custom FastMap (cache-friendly): ~35 seconds

**Technical Highlights:**

- Custom FastMap class using data-oriented design
- FNV-1a hash function implementation
- Manual integer parsing for temperature values
- Avoiding std::map O(log n) complexity in favor of O(1) hash operations
- Using mmap for zero-copy file access
- 8-16 thread parallelization
- Sparse indexing strategy

### 2. Building Zue Part 1: Files Are Just Arrays

**File:** `part-1-building-zue-storage-engine.mdx`
**Last Updated:** December 16, 2025

**Summary:** Building a distributed storage engine from scratch, focusing on the storage layer.

**Key Concepts:**

- **Append-Only Log Architecture** - Never overwrite data, only append
- **Segment-Based Storage** - Log divided into segments (easier to delete old data)
- **Sparse Index** - Index every Nth record (every 4KB) for memory efficiency
- **Memory-Mapped I/O (mmap)** - Treat files as arrays in RAM for performance

**Technical Details:**

- **Log Structure:**
  - Log contains multiple Segments
  - Each Segment has an Index File and Log File
  - Index Entry: CRC (4B) + Relative Offset (4B) + Position (4B) = 12B
  - Log Record: CRC (4B) + Timestamp (8B) + Key Len (4B) + Key + Value Len (4B) + Value

**Platform Challenges:**

- Linux: Uses `mremap` for efficient memory mapping growth
- macOS: No `mremap` - requires `munmap`, `ftruncate`, `mmap` sequence (slower)

**Philosophy:** Trade CPU (linear scan) for RAM savings using sparse indexing

### 3. Building Zue Part 2: Networks Are Liars

**File:** `part-2-building-zue-network-protocol.mdx`
**Last Updated:** December 16, 2025

**Summary:** Building a custom binary protocol and async network layer.

**Key Concepts:**

- **Length-Prefixed Binary Protocol** - Avoid JSON overhead
- **TCP Stream Handling** - TCP is a stream, not message-based
- **Non-Blocking I/O** - Event loop using `poll()` for 100+ concurrent clients
- **Single-Threaded Async** - No locks, no blocking

**Protocol Structure:**

- Length (4 bytes, little-endian)
- Type (1 byte, enum)
- Payload (variable, Protobuf/binary)

**Architecture:**

- **Leader Event Loop:**
  - Timer-based heartbeats (2s interval)
  - Repair tick for lagging followers
  - poll() for non-blocking socket I/O
  - Handle append/read requests
  - Quorum-based replication

- **Follower Event Loop:**
  - Accept connections
  - Reject client writes (redirect to leader)
  - Handle replication requests
  - Update from heartbeats

**Performance:** Single-threaded event loop handles 100+ concurrent clients

### 4. Building Zue Part 3: Herding Cats (Distributed Consensus)

**File:** `part-3-building-zue-distributed-consensus.mdx`
**Last Updated:** December 16, 2025

**Summary:** Implementing Raft-like consensus for distributed replication.

**Key Concepts:**

- **Raft Consensus** - Leader election and log replication
- **Quorum Writes** - Require majority (2/3 nodes) for commit
- **Background Repair** - Catch up lagging followers incrementally
- **No Rollback** - Once committed, stays committed

**Replication Flow:**

1. Client sends append to Leader
2. Leader writes locally to mmap
3. Leader sends to followers in parallel
4. Wait for quorum response (Leader + 1 Follower = 2/3)
5. Commit and advance index
6. Return success to client

**Repair Mechanism:**

- Runs every 2 seconds (`tickRepair`)
- Sends small batches (100 records) to lagging followers
- Non-blocking background process
- Self-healing cluster

**Metrics:**

- 3,400+ lines of Zig code
- 200+ tests (unit, integration, stateful replication)
- Sub-millisecond writes
- Zero locks in hot path

**Project:** [github.com/lostcache/zue](https://github.com/lostcache/zue)

---

## TECHNICAL STACK DETAILS

### Framework & Build System

- **Core Framework:** Astro 5.16.6 (static site generator, zero-JS by default)
- **Content:** MDX (Markdown + JSX components)
- **Language:** TypeScript with strict configuration
- **Package Manager:** Node.js with ES modules

### Key Dependencies

- `@astrojs/mdx@4.3.13` - MDX support for blog posts
- `@astrojs/rss@4.0.14` - RSS feed generation
- `@astrojs/sitemap@3.6.0` - Automatic sitemap for SEO
- `astro-expressive-code@0.41.5` - Advanced syntax highlighting
- `mermaid@11.12.2` - Diagram and flowchart rendering
- `reading-time@1.5.0` - Reading time calculation
- `sharp@0.34.3` - Image optimization
- `prettier@3.7.4` - Code formatting

### Project Structure

```
/src
├── pages/              # Auto-routed pages
│   ├── index.astro     # Home page (dual-column layout)
│   ├── about.astro     # About page
│   └── blog/
│       ├── index.astro        # Blog listing
│       ├── [...slug].astro    # Dynamic blog renderer
│       └── rss.xml.js         # RSS feed
├── layouts/            # Reusable layouts
│   ├── BaseLayout.astro       # Standard wrapper
│   └── BlogPost.astro         # Blog post layout
├── components/         # Reusable components
│   ├── BaseHead.astro         # SEO meta tags
│   ├── Header.astro           # Navigation + theme toggle
│   ├── Footer.astro           # Footer + social links
│   ├── ThemeToggle.astro      # Light/dark toggle
│   ├── FormattedDate.astro    # Date formatter
│   ├── HeaderLink.astro       # Nav link with active state
│   ├── Mermaid.astro          # Diagram rendering
│   ├── ExpandableCode.astro   # Code modal view
│   └── Comments.astro         # Giscus comments
├── content/            # Markdown content
│   └── blog/           # Blog posts (.mdx files)
├── styles/
│   └── global.css      # Theme variables
├── consts.ts           # Site constants
└── content.config.ts   # Content schema (Zod)
```

### Build Configuration

**File:** `astro.config.mjs`

**Integrations:**

- astro-expressive-code (15px font size for code)
- MDX with custom `remarkReadingTime` plugin
- Sitemap generator

**Custom Remark Plugin:** `remark-reading-time.mjs`

- Calculates reading time using `reading-time` package
- Extracts text from Markdown AST
- Attaches `readingTime` to frontmatter

**Content Schema (Zod):**

```typescript
{
  title: string(required);
  description: string(required);
  pubDate: Date(required, coerced);
  updatedDate: Date(optional);
  heroImage: image(optional);
  readingTime: string(optional, auto - populated);
}
```

### Deployment

- **Platform:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Trigger:** Push to `main` branch
- **Actions:**
  - `withastro/action@v3` - Build/upload
  - `actions/deploy-pages@v4` - Deploy
- **Domain:** Custom domain via CNAME (harshdevisha.com)

---

## STYLING & DESIGN

### CSS Strategy

- **No CSS Framework** - Pure CSS with scoped component styles
- **CSS Custom Properties** - Extensive theming system (60+ variables)
- **Theme System:** Light/Dark mode via `localStorage` and `data-theme` attribute

### Color Palette

**Light Mode:**

- Accent: `#2337ff` (blue)
- Background: White
- Text: Black

**Dark Mode:**

- Accent: `#5b7cff` (purple-blue)
- Background: `#1a1d25` (near-black)
- Text: White

### Typography

- **Primary Font:** Charter, Bitstream Charter, Georgia (serif)
- **Headings:** System fonts (San Francisco, Segoe UI, Roboto)
- **Base Size:** 18px with 1.6x line height

### Layout Patterns

**Home Page:**

- Two-column grid (25% sidebar for blogs, 75% main content)
- Responsive breakpoint: 720px (mobile stacks vertically)
- Sticky header with box shadow
- Bento-style blog cards with hover animations
- Experience cards in 2-column grid

**Interactions:**

- Smooth transitions (0.2-0.3s)
- Transform animations (translateY for cards)
- Custom scrollbar styling
- Modal dialogs for expanded code views

---

## ADVANCED FEATURES

### 1. Reading Time Calculation

- Custom Remark plugin integrated into MDX pipeline
- Automatically calculates and displays estimated reading time
- Shown on all blog posts

### 2. Mermaid Diagram Rendering

- Client-side Mermaid.js integration
- **Theme-Aware:** Live sync with site theme changes
- **MutationObserver:** Detects theme attribute changes and re-renders
- Used extensively in Zue blog series for architecture diagrams

### 3. Expandable Code Components

- **Problem:** Long code blocks break reading flow
- **Solution:** Truncate with max-height, expand in modal
- Modal overlay displays full code
- Keyboard handling (Escape to close)
- Click-outside-to-dismiss

### 4. Giscus Comments Integration

- GitHub Discussions-backed comments
- Theme syncing via postMessage API
- Auto-loads with page

### 5. SEO Optimization

- OpenGraph meta tags for social sharing
- Twitter Card support
- Canonical URLs
- Auto-generated sitemap
- RSS feed at `/blog/rss.xml`
- Semantic HTML structure

### 6. Theme Flash Prevention

- Inline script in `<head>` runs before page render
- Checks `localStorage` and system preference
- Sets theme before Astro hydration
- Zero flash of unstyled content (FOUC)

### 7. Active Link Detection

- `HeaderLink` component parses URL pathname
- Compares with href for active state
- Applies visual styling (underline + bold)

### 8. Image Optimization

- Sharp integration for processing
- Astro Image component with automatic format/size optimization
- Hero images on blog posts

---

## CONTENT MANAGEMENT

### Architecture

- **Content Collections API** - Astro's built-in system (no external CMS)
- **Static Generation** - All pages built at build time
- **Dynamic Routes** - Auto-generated from content collection
- **Frontmatter Validation** - Zod schema ensures data integrity

### Development Patterns

- Type-safe Astro props with TypeScript interfaces
- Component composition (nested layouts)
- Astro lifecycle events (`astro:page-load` for SPA nav)
- Island architecture (minimal JavaScript shipped)

---

## HOME PAGE STRUCTURE

### Layout

**Dual-column design:**

**Left Column (25%):**

- "Recent Blogs" section
- Scrollable bento grid of blog cards
- Each card shows:
  - Title
  - Description
  - Last updated date
  - Hover animation (translateY)

**Right Column (75%):**

- Personal introduction
- Bio paragraph
- Experience section with download resume button
- 2x2 grid of experience cards

### Experience Cards

Each card contains:

- Job title
- Company name
- Date range
- Tech tags (color-coded pills)
- Hover effects

### Resume

- Download button for PDF resume
- File: `/harsh_devisha_resume.pdf`
- Theme-aware styling (black on light, white on dark)

---

## ABOUT PAGE

**Content Sections:**

1. Introduction ("Hey there! I'm Harsh")
2. What I Do (Technical focus areas)
3. What You'll Find Here (Blog content description)
4. Background (Professional history)
5. Let's Connect (Contact links)

**Features:**

- Giscus comments at bottom
- Links to GitHub, LinkedIn, email
- Detailed explanation of technical interests
- Personal philosophy on learning by building

---

## KEY DIFFERENTIATORS

### Technical Philosophy

1. **Zero JavaScript by default** - Only ship JS when necessary
2. **Performance First** - mmap, custom parsing, cache optimization
3. **Learn by Building** - Implement from scratch rather than use libraries
4. **Document Everything** - Detailed technical writing with code examples

### Content Strategy

1. **Deep Technical Dives** - Not surface-level tutorials
2. **Real Code** - Actual implementations, not pseudo-code
3. **Performance Focus** - Measurable improvements with flamegraphs
4. **Systems Thinking** - Distributed systems, consensus, networking

### Design Principles

1. **Accessibility** - Semantic HTML, ARIA labels, theme preferences
2. **Readability** - Large fonts (18px), high line-height (1.6x)
3. **Performance** - Static generation, image optimization
4. **Simplicity** - No external CSS frameworks, minimal dependencies

---

## TECHNICAL WRITING STYLE

### Characteristics

- **Conversational Tone** - "I call it Zue. This is Part 1..."
- **Humor** - Self-deprecating ("Was it harder than using SQLite? Yes.")
- **Honesty** - Admits mistakes and learning process
- **Visual** - Extensive use of Mermaid diagrams
- **Code-Heavy** - Full implementations in expandable blocks
- **Performance-Driven** - Always includes benchmarks and flamegraphs

### Code Presentation

- Syntax highlighting via astro-expressive-code
- Line numbers enabled
- File titles shown
- Expandable blocks for long code
- Multiple iterations shown (evolution of solution)

### Diagram Usage

Every complex concept gets a Mermaid diagram:

- System architecture
- Data structures
- Sequence flows
- State machines

---

## FUTURE DIRECTIONS

Based on TODO in 1BRC post:

- More optimization iterations for 1BRC
- Continued Zue development
- More deep-dives into systems programming
- Performance engineering content
- Distributed systems implementations

---

## METADATA & CONSTANTS

**Site Title:** "Harsh Devisha"
**Site Description:** "A blog about distributed systems, systems programming, and full-stack development by Harsh Devisha."

**Navigation Links:**

- Home (/)
- Blog (/blog)
- About (/about)
- GitHub (external)
- LinkedIn (external)

**Social Links:**

- GitHub: lostcache
- LinkedIn: harsh-devisha
- Email: harshdevisha91@gmail.com

---

## NOTABLE CODE PATTERNS

### Custom FastMap Implementation

- Cache-friendly data structure
- Separate vectors for each field (data-oriented design)
- FNV-1a hash function
- Linear probing for collision resolution
- Pre-allocated capacity (no dynamic allocation)
- Significantly faster than std::unordered_map

### mmap Usage Pattern

```c
1. open() file descriptor
2. mmap() with PROT_READ/MAP_PRIVATE
3. close() fd (mapping persists)
4. Direct pointer arithmetic for access
5. munmap() when done
```

### Length-Prefixed Protocol

```
[4-byte length][1-byte type][variable payload]
```

- Read length first
- Loop until exactly N bytes received
- Handles partial reads correctly

---

## KEYWORDS & TOPICS

**Primary Topics:**

- Distributed Systems
- Systems Programming
- Performance Engineering
- Full-Stack Development
- Consensus Algorithms
- Network Protocols

**Technologies Featured:**

- Zig, Rust, C++
- React, Next.js, Astro
- FastAPI, Node.js
- mmap, Raft, binary protocols
- Vector databases, OAuth2

**Performance Techniques:**

- Memory-mapped I/O
- Data-oriented design
- Cache optimization
- Custom hash maps
- Parallel processing
- Zero-copy techniques

---

## SUMMARY

This is a **modern, performance-focused personal portfolio and technical blog** built with Astro 5. It emphasizes:

- **Educational Content** - Deep technical deep-dives with real code
- **Performance** - Zero JavaScript by default, static generation, mmap, custom data structures
- **Developer Experience** - MDX for content, TypeScript support, hot reload
- **Accessibility** - Semantic HTML, ARIA labels, theme preferences, readable fonts
- **SEO** - Sitemap, RSS, OpenGraph tags, canonical URLs
- **Content Richness** - Syntax highlighting, diagrams, interactive code blocks, comments
- **Theme Flexibility** - Light/dark mode with automatic sync across components

The owner (Harsh Devisha) demonstrates expertise in:

- Low-level systems programming (Zig, C++, Rust)
- Distributed systems (Raft consensus, replication, fault tolerance)
- Performance optimization (cache-friendly code, custom parsing, mmap)
- Full-stack development (React, FastAPI, OAuth2, vector search)
- Technical writing (detailed explanations, diagrams, benchmarks)

**Core Philosophy:** Learn by building from scratch, optimize ruthlessly, document thoroughly, and share the journey.
