---
description: "Access language-specific code styleguides bridged from Conductor"
---

# Conductor Styleguide

This command provides access to the official code styleguides from Gemini Conductor.

### Available Styleguides
- cpp
- csharp
- dart
- general
- go
- html-css
- javascript
- python
- typescript

### Instructions
1. **Identify Language:** Determine which language the user is interested in (e.g., from the command arguments or context).
2. **Fetch Rules:** Read the specific styleguide rules from the following path:
   - `/Users/harsh_devisha/.opencode/conductor-bridge/vendor/conductor/templates/code_styleguides/<language>.md`
3. **Apply:** Use these rules for all code generation, refactoring, or review tasks.
4. **Apply Mode:** If the user specifically asks to *apply* a styleguide to the current file or context, summarize the most relevant rules from the file and explain how they apply to the current code.
5. **No Language?** If the user didn't specify a language, list the available options above and ask which one they need.

> [!NOTE]
> These guides are bridged from Gemini Conductor.
> **Bridge Version:** 1.2.1
> **Source Directory:** [templates/code_styleguides](https://github.com/gemini-cli-extensions/conductor/tree/32f44820450576e60a0685de602fff38bfd85609/templates/code_styleguides)

<!-- conductor-bridge-metadata:
  origin: templates/code_styleguides
  origin_sha: 32f44820450576e60a0685de602fff38bfd85609
  available_languages: cpp, csharp, dart, general, go, html-css, javascript, python, typescript
-->
