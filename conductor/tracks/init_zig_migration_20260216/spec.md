# Track Specification: Initialize Zig-based SSG Migration

## 1. Goal

Establish the foundational structure for migrating the personal website from Astro to a custom Zig-based Static Site Generator (SSG). This tool will run during the build process to convert source content (text/markdown) into static HTML/CSS/JS files that can be hosted on GitHub Pages.

## 2. Core Requirements

- **Directory Structure:** Create a clean separation between the generator source code (Zig), raw content, and the output directory (`dist/` or `public/`).
- **Build System:** Implement `build.zig` to compile the SSG tool and a run step to execute it (generating the site).
- **SSG Logic (MVP):** Develop a Zig program that:
  1. Reads a source directory.
  2. Reads an HTML layout template.
  3. Injects content into the template.
  4. Writes the result to an output HTML file.
- **No Dependencies:** Adhere strictly to the "Zero Dependency" constraint (Standard Zig Libraries only).

## 3. Success Criteria

- [ ] Directory structure created (`src/`, `content/`, `templates/`, `dist/`).
- [ ] `build.zig` works correctly (`zig build`, `zig build run`).
- [ ] SSG compiles without warnings.
- [ ] SSG runs and generates `dist/index.html` from source content.
- [ ] Generated `dist/index.html` renders correctly in a browser.
- [ ] Basic logging to stdout (e.g., "Generated dist/index.html").

## 4. Risks & Assumptions

- **Assumption:** Input content format will be simple text or basic HTML fragments for the MVP.
- **Risk:** Zig is a newer language; standard library APIs for file I/O and strings are robust but require careful memory management (allocators).
