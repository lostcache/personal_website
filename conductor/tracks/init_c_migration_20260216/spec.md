# Track Specification: Initialize C/HTML/CSS Migration

## 1. Goal

Establish the foundational structure for migrating the personal website from Astro to a custom C-based HTTP server serving static HTML/CSS/JS content. This track focuses on setting up the build system, directory structure, and a minimal "Hello World" server implementation.

## 2. Core Requirements

- **Directory Structure:** Create a clean separation between backend (C source) and frontend (HTML/CSS/JS assets).
- **Build System:** Implement a `Makefile` to compile the C server and manage build artifacts.
- **HTTP Server (MVP):** Develop a basic C program using socket programming to listen on a port (e.g., 8080) and accept connections.
- **Static File Serving:** The server must be able to read and serve a simple `index.html` file.
- **No Dependencies:** Adhere strictly to the "Zero Dependency" constraint (Standard C Libraries only).

## 3. Success Criteria

- [ ] Directory structure created (`src/`, `public/`, `bin/`, etc.).
- [ ] `Makefile` works correctly (`make`, `make clean`, `make run`).
- [ ] Server compiles without warnings.
- [ ] Server starts and listens on `localhost:8080`.
- [ ] Browser request to `localhost:8080` returns the content of `index.html`.
- [ ] Basic logging to stdout (e.g., "Request received").

## 4. Risks & Assumptions

- **Assumption:** The development environment (macOS/Linux) has a C compiler (gcc/clang) installed.
- **Risk:** Implementing a secure and robust HTTP parser from scratch is complex. We will implement a _minimal_ parser for the MVP.
