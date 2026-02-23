# Technical Specifications: Icon Usage

## Overview
This document outlines the standards for using icons within the codebase to prevent display errors and ensure visual consistency.

## Guidelines

### 1. Icon Sources
*   **Standard Icons**: Use `lucide-react` for common UI symbols (e.g., Plus, Minus, Chevron, Settings).
*   **Custom Assets**: Use imported SVG paths (from `/imports`) for brand-specific or complex vector graphics.
*   **Prohibited**: Do not use inline SVGs (`<svg>...</svg>`) directly in components. This prevents inconsistencies in `viewBox`, `stroke`, and sizing.

### 2. Styling Standards
*   **Stroke Width**: Explicit `strokeWidth={1.5}` should be used to match the design system's fine lines, overriding library defaults (often 2px) if necessary.
*   **Sizing**: Control icon size via the parent container using Tailwind classes (e.g., `size-[12px]`) and apply `size-full` (width/height: 100%) to the icon component.
*   **Color**: Use `text-foreground` or `text-muted-foreground` (via Tailwind) on the parent or icon to handle coloring. Avoid hardcoded hex values in `stroke` or `fill`.

### 3. Implementation Example

**Incorrect (Inline):**
```tsx
<button className="size-[12px]">
  <svg viewBox="0 0 12 12">
    <path d="..." strokeWidth="1.5" />
  </svg>
</button>
```

**Correct (Lucide):**
```tsx
import { Minus } from "lucide-react";

<button className="size-[12px]">
  <Minus className="size-full" strokeWidth={1.5} />
</button>
```
