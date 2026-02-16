# Track Plan: Initialize C-based SSG Migration

## Phase 1: Project Scaffolding & Build System

- [ ] Task: Create directory structure (`src/`, `content/`, `templates/`, `dist/`) and initialize `Makefile`.
  - [ ] Sub-task: Create directories.
  - [ ] Sub-task: Create a dummy `src/main.c` (Hello World to stdout).
  - [ ] Sub-task: Write `Makefile` with targets: `all`, `clean`, `generate`.
- [ ] Task: Verify build system functionality.
  - [ ] Sub-task: Run `make` and ensure the binary `bin/ssg` is created.
  - [ ] Sub-task: Run `make generate` and verify it runs the binary.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Project Scaffolding & Build System' (Protocol in workflow.md)

## Phase 2: SSG Core Implementation (File I/O)

- [ ] Task: Implement File Reading.
  - [ ] Sub-task: Create a utility function `read_file(filename)` that returns a string buffer.
  - [ ] Sub-task: Handle file read errors gracefully.
- [ ] Task: Implement File Writing.
  - [ ] Sub-task: Create a utility function `write_file(filename, content)` that saves a string buffer to disk.
  - [ ] Sub-task: Handle write errors (e.g., directory doesn't exist).
- [ ] Task: Implement Basic Template Engine.
  - [ ] Sub-task: Create a function `replace_placeholder(template, placeholder, value)` that replaces `{{ content }}` in the template with actual content.
  - [ ] Sub-task: Write a unit test/verification for the replacement logic.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: SSG Core Implementation' (Protocol in workflow.md)

## Phase 3: Site Generation & content

- [ ] Task: Create Source Content.
  - [ ] Sub-task: Create `templates/layout.html` with basic HTML5 structure and a `{{ content }}` placeholder.
  - [ ] Sub-task: Create `content/index.txt` with the homepage body text.
- [ ] Task: Wire up the Generator.
  - [ ] Sub-task: Update `main.c` to read `content/index.txt`.
  - [ ] Sub-task: Update `main.c` to read `templates/layout.html`.
  - [ ] Sub-task: Perform substitution and write to `dist/index.html`.
  - [ ] Sub-task: Copy static assets (CSS) to `dist/`.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Site Generation & Content' (Protocol in workflow.md)
