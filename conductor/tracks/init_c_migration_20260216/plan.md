# Track Plan: Initialize C/HTML/CSS Migration

## Phase 1: Project Scaffolding & Build System

- [ ] Task: Create directory structure (`server/`, `public/`, `bin/`, `obj/`) and initialize `Makefile`.
  - [ ] Sub-task: Create directories.
  - [ ] Sub-task: Create a dummy `server/main.c` (Hello World to stdout).
  - [ ] Sub-task: Write `Makefile` with targets: `all`, `build`, `clean`, `run`.
- [ ] Task: Verify build system functionality.
  - [ ] Sub-task: Run `make` and ensure binary is created.
  - [ ] Sub-task: Run `make run` and verify output.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Project Scaffolding & Build System' (Protocol in workflow.md)

## Phase 2: Basic HTTP Server Implementation (Socket Programming)

- [ ] Task: Implement TCP Socket setup.
  - [ ] Sub-task: Write test for socket creation (mock or integration).
  - [ ] Sub-task: Implement `socket()`, `bind()`, and `listen()` logic in C.
  - [ ] Sub-task: Add error handling for socket operations.
- [ ] Task: Implement Connection Handling Loop.
  - [ ] Sub-task: Write acceptance test (connect with `curl`).
  - [ ] Sub-task: Implement `accept()` loop to handle incoming connections.
  - [ ] Sub-task: Log connection details to stdout.
- [ ] Task: Implement Basic HTTP Response.
  - [ ] Sub-task: Construct a hardcoded HTTP 200 OK response string.
  - [ ] Sub-task: Send response using `send()`/`write()`.
  - [ ] Sub-task: Close connection.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Basic HTTP Server Implementation' (Protocol in workflow.md)

## Phase 3: Serving Static Files

- [ ] Task: Implement File Reading Logic.
  - [ ] Sub-task: Create a utility function to read file content into a buffer.
  - [ ] Sub-task: Handle "File Not Found" (404) cases.
- [ ] Task: Create Frontend Assets.
  - [ ] Sub-task: Create `public/index.html` with basic "Hello World" content.
  - [ ] Sub-task: Create `public/style.css` (minimal styling).
- [ ] Task: Connect Server to File System.
  - [ ] Sub-task: Update request handler to parse the requested path (GET /).
  - [ ] Sub-task: Serve `public/index.html` for root requests.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Serving Static Files' (Protocol in workflow.md)
