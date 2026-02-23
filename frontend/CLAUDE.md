# MCP Servers

## Figma MCP Server Rules

# Design System Rules for Creative Workflow App

## Overview

These design system rules define the conventions, patterns, and guidelines for implementing Figma designs in the Creative Workflow App project. They ensure consistent, high-quality code and maintain design-to-code fidelity.

## Project Structure

### Component Organization

- **UI Components**: Located in `src/components/ui/`
- **Workflow Nodes**: Located in `src/components/nodes/`
- **Feature Components**: Located in `src/components/`
- **Layout Components**: Located in `src/components/ui/` (e.g., `card.tsx`, `accordion.tsx`)
- **Figma Imported Components**: Located in `src/imports/`

### File Naming Conventions

- **Components**: PascalCase (e.g., `ImageEditorNode.tsx`)
- **Services**: PascalCase + Service suffix (e.g., `ImageEditorService.ts`)
- **Contexts**: PascalCase + Context suffix (e.g., `AssetsContext.tsx`)
- **Hooks**: use + PascalCase (e.g., `useThemeColors.ts`)

## Design Tokens

### Colors

- Colors are defined as CSS variables in the project's global styles
- Use `var(--color-*)` tokens instead of hardcoding hex values
- Reference existing color tokens from the project's theme system

### Typography

- Font sizes use CSS variables (e.g., `var(--text-p)`)
- Font families are defined in the global styles
- Text classes follow the project's existing patterns

### Spacing

- Use the project's existing spacing system
- Follow existing padding, margin, and gap patterns
- Maintain consistency with existing component layouts

## Styling Approach

### CSS Framework

- The project uses utility-first CSS classes
- Follow existing class naming patterns (e.g., `w-[76px]`, `h-[52px]`)
- Use responsive utilities where appropriate

### Custom Styles

- For complex components, use existing styling patterns
- Follow the project's approach to component-specific styles
- Maintain consistency with existing codebase

## Component Patterns

### UI Components

- **Reuse Existing Components**: Always use components from `src/components/ui/` when possible
- **Composition**: Components should accept `className` prop for composition
- **Variants**: Use union types for variant props (e.g., `variant: 'primary' | 'secondary'`)
- **Accessibility**: Follow WCAG requirements for accessibility

### Workflow Nodes

- **Node Structure**: Follow the existing node component patterns
- **Handles**: Use `@xyflow/react` Handle components for node connections
- **Resizers**: Use `NodeResizer` for resizable nodes
- **Toolbars**: Include `NodeToolbar` for node-specific actions

## Figma MCP Integration Rules

### Required Flow

1. **Fetch Design Context**: Run get_design_context first to fetch the structured representation for the exact node(s)
2. **Handle Large Responses**: If the response is too large or truncated, run get_metadata to get the high-level node map, then re-fetch only the required node(s) with get_design_context
3. **Get Visual Reference**: Run get_screenshot for a visual reference of the node variant being implemented
4. **Download Assets**: Only after you have both get_design_context and get_screenshot, download any assets needed and start implementation
5. **Translate to Code**: Translate the Figma output into the project's conventions, styles, and framework
6. **Validate**: Validate against Figma for 1:1 look and behavior before marking complete

### Implementation Rules

- **Treat as Design Representation**: Treat the Figma MCP output as a representation of design and behavior, not as final code style
- **Use Existing Components**: Replace Figma-generated component structures with existing components from `src/components/ui/` when possible
- **Map Design Tokens**: Map Figma colors, typography, and spacing to the project's existing design tokens
- **Follow Project Patterns**: Respect existing routing, state management, and data-fetch patterns
- **Visual Fidelity**: Strive for 1:1 visual parity with the Figma design

## Asset Handling

### Image Assets

- **Figma Assets**: Use the Figma MCP server's assets endpoint for image and SVG assets
- **Local Sources**: If the Figma MCP server returns a localhost source for an image or SVG, use that source directly
- **No New Icon Packages**: DO NOT import/add new icon packages - all assets should be in the Figma payload
- **No Placeholders**: DO NOT use or create placeholders if a localhost source is provided
- **Asset Storage**: Store downloaded assets in appropriate locations following existing patterns

## Code Quality

### Documentation

- **Component Documentation**: Add documentation for new components
- **JSDoc Comments**: Include JSDoc comments for exported components
- **Prop Types**: Use TypeScript types for all props

### Performance

- **Lazy Loading**: Use appropriate lazy loading for images and components
- **Optimization**: Follow existing performance optimization patterns
- **Bundle Size**: Be mindful of bundle size when adding new functionality

### Testing

- **Follow Existing Patterns**: If testing exists, follow the existing testing patterns
- **Component Tests**: Consider adding tests for new components

## Accessibility

### WCAG Compliance

- **WCAG AA**: Ensure color contrast meets WCAG AA standards
- **Keyboard Navigation**: Implement keyboard navigation for all interactive elements
- **ARIA Labels**: Add appropriate aria-labels for interactive elements
- **Semantic HTML**: Use semantic HTML elements where appropriate

### Focus Management

- **Focus States**: Implement proper focus states for interactive elements
- **Focus Trapping**: Use focus trapping for modals and dialogs

## Project-Specific Conventions

### Import Patterns

- **Path Aliases**: Use existing path aliases if available
- **Import Groups**: Group imports logically (React, third-party, internal, types)
- **Relative Imports**: Use relative imports appropriately

### State Management

- **Follow Existing Patterns**: Use the project's existing state management approach
- **Context Usage**: Use context for global state as appropriate

### Data Fetching

- **Existing Patterns**: Follow existing data fetching patterns
- **Error Handling**: Implement proper error handling for data operations

## Best Practices

### Start Simple

- Begin with core components and patterns
- Iterate and refine as needed

### Be Specific

- Provide clear, actionable instructions
- Include concrete examples where appropriate

### Make Rules Actionable

- Each rule should tell exactly what to do
- Avoid vague or ambiguous statements

### Use IMPORTANT for Critical Rules

- Prefix critical rules with "IMPORTANT:" to ensure priority

### Document the Why

- Explain reasoning behind important rules
- Provide context for project-specific decisions

## Examples

### Component Implementation Example

```tsx
// Good: Using existing UI components
import { Button } from '@/components/ui/button';

function MyComponent() {
  return (
    <Button variant="primary" className="w-full">
      Click Me
    </Button>
  );
}

// Bad: Creating custom button from scratch
function MyCustomButton() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Click Me
    </button>
  );
}
```

### Styling Example

```tsx
// Good: Using design tokens and existing patterns
<div className="w-[76px] h-[52px] rounded-[8px] overflow-hidden">
  <img 
    src={image} 
    alt={alt} 
    className="w-full h-full object-cover"
  />
</div>

// Bad: Hardcoding values
<div style={{ width: '76px', height: '52px', borderRadius: '8px' }}>
  <img 
    src={image} 
    alt={alt} 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

## Validation

### Testing the Rules

1. **Implement a Simple Component**: Test with a basic Figma component implementation
2. **Verify Compliance**: Ensure the implementation follows all applicable rules
3. **Refine Rules**: Adjust rules as needed based on implementation experience
4. **Share with Team**: Collaborate with team members to refine and expand rules

### Updating Rules

- **Regular Reviews**: Schedule periodic rule reviews (monthly or quarterly)
- **Version Control**: Keep rules under version control
- **Documentation**: Update documentation as rules evolve
- **Team Alignment**: Ensure all team members are familiar with the rules

## Conclusion

These design system rules provide a framework for consistent, high-quality implementation of Figma designs in the Creative Workflow App project. By following these guidelines, developers can ensure design-to-code fidelity, maintainability, and a cohesive user experience.

The rules should be viewed as a living document that evolves with the project. Regular reviews and updates will ensure they remain relevant and effective as the codebase grows and design patterns evolve.
