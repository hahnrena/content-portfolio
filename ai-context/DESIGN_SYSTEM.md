# Rena Hahn — Design & Frontend System Principles

## Core Principle

All UI is a **system for reducing cognitive load**, not a visual artifact.

Every component must answer:
- What decision does this simplify?
- What information does it structure?
- How does it scale across use cases?

---

## Component Philosophy

### 1. System-first, UI-second
- Components are interfaces for structured data
- UI is a representation layer, not the source of truth

### 2. Config-driven design
- Prefer configuration over hardcoded variations
- Components should accept structured inputs (JSON-like models)

### 3. Reusability > uniqueness
- Avoid one-off components
- Every component should be reusable across at least 3 contexts

### 4. State clarity
- State must be explicit, minimal, and predictable
- Avoid hidden coupling between UI and business logic

---

## Content & Information Architecture Rules

When designing information systems:

- Always define hierarchy first (before UI)
- Group by user intent, not technical structure
- Reduce decision points per screen
- Eliminate redundant navigation paths

---

## Documentation Standards

All systems must include:

- Purpose (what problem it solves)
- Data model (what inputs it accepts)
- Usage patterns (how it's used across contexts)
- Edge cases (how system behaves under stress)

---

## Storybook / Component Documentation Rules

Every component must document:

- Props schema
- Example states (empty, loading, error, success)
- Real-world usage examples
- Anti-patterns (what NOT to do)

---

## Engineering Standards

- Prefer modular architecture over monolith components
- Separate presentation from logic
- Use TypeScript for all shared interfaces
- Avoid deeply nested prop drilling

---

## Anti-patterns (NEVER DO THIS)

- UI without data structure
- Hardcoded layouts that cannot scale
- Duplicated components with minor variation
- Documentation that is not tied to real usage