# Track Specification: Initialize C-based SSG Migration

## 1. Goal

Establish the foundational structure for migrating the personal website from Astro to a custom C-based Static Site Generator (SSG). This tool will run during the build process to convert source content (text/markdown) into static HTML/CSS/JS files that can be hosted on GitHub Pages.

## 2. Core Requirements

- **Directory Structure:** Create a clean separation between the generator source code (C), raw content, and the output directory (`dist/` or `public/`).
- **Build System:** Implement a `Makefile` to compile the SSG tool and a target to run it (generating the site).
- **SSG Logic (MVP):** Develop a C program that:
  1. Reads a source directory.
  2. Reads an HTML layout template.
  3. Injects content into the template.
  4. Writes the result to an output HTML file.
- **No Dependencies:** Adhere strictly to the "Zero Dependency" constraint (Standard C Libraries only).

## 3. Success Criteria

- [ ] Directory structure created (`src/generator/`, `content/`, `templates/`, `dist/`).
- [ ] `Makefile` works correctly (`make`, `make clean`, `make build-site`).
- [ ] SSG compiles without warnings.
- [ ] SSG runs and generates `dist/index.html` from source content.
- [ ] Generated `dist/index.html` renders correctly in a browser.
- [ ] Basic logging to stdout (e.g., "Generated dist/index.html").

## 4. Risks & Assumptions

- **Assumption:** Input content format will be simple text or basic HTML fragments for the MVP (full Markdown parsing is a future track).
- **Risk:** String manipulation in C is error-prone (buffer overflows, memory leaks). We must use safe string handling practices.
