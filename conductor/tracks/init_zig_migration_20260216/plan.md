# Track Plan: Initialize Zig-based SSG Migration

## Phase 1: Project Scaffolding & Build System
- [ ] Task: Create directory structure (`src/`, `content/`, `templates/`, `dist/`) and initialize `build.zig`.
  - [ ] Sub-task: Create directories.
  - [ ] Sub-task: Create a dummy `src/main.zig` (Hello World to stdout).
  - [ ] Sub-task: Initialize `build.zig` with a standard executable step and a run step.
- [ ] Task: Verify build system functionality.
  - [ ] Sub-task: Run `zig build` and ensure the binary is created in `zig-out/bin/`.
  - [ ] Sub-task: Run `zig build run` and verify output.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Project Scaffolding & Build System' (Protocol in workflow.md)

## Phase 2: SSG Core Implementation (File I/O)
- [ ] Task: Implement File Reading.
  - [ ] Sub-task: Create a utility function/struct to handle file reading using `std.fs`.
  - [ ] Sub-task: Handle file read errors gracefully.
- [ ] Task: Implement File Writing.
  - [ ] Sub-task: Create a utility function to write strings to disk using `std.fs`.
  - [ ] Sub-task: Ensure output directories exist or are created.
- [ ] Task: Implement Basic Template Engine.
  - [ ] Sub-task: Create a function that takes an allocator, template string, placeholder, and value, and returns a new string with the replacement.
  - [ ] Sub-task: Write a unit test in `src/main.zig` (or `src/tests.zig`) for the replacement logic.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: SSG Core Implementation' (Protocol in workflow.md)

## Phase 3: Site Generation & Content
- [ ] Task: Create Source Content.
  - [ ] Sub-task: Create `templates/layout.html` with basic HTML5 structure and a `{{ content }}` placeholder.
  - [ ] Sub-task: Create `content/index.txt` with the homepage body text.
- [ ] Task: Wire up the Generator.
  - [ ] Sub-task: Update `main.zig` to read `content/index.txt`.
  - [ ] Sub-task: Update `main.zig` to read `templates/layout.html`.
  - [ ] Sub-task: Perform substitution and write to `dist/index.html`.
  - [ ] Sub-task: Copy static assets (CSS) to `dist/` (can be done in Zig or via build step).
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Site Generation & Content' (Protocol in workflow.md)
