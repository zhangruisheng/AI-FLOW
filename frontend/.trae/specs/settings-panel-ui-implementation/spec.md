# Settings Panel UI Implementation Spec

## Why
The Settings Panel (Character Settings, Scene Composition, Style Settings) needs to be compared between Figma design, browser rendering, and React implementation to ensure UI consistency.

## What Changes
- Compare Figma design versions (228_3835 vs 402_5924)
- Compare browser rendered HTML with Figma design
- Compare React implementation with Figma design
- Identify discrepancies and provide fix recommendations

## Impact
- Affected code: [CreationPage.tsx](file:///c:/Users/monkr/Documents/github/Creativeworkflowapp/src/components/CreationPage.tsx)
- Affected Figma components:
  - `.figma/228_3835/` (Simple version)
  - `.figma/402_5924/` (Extended version)

## Figma Design References
- **Simple Version**: `.figma/228_3835/` - Basic collapsed state
- **Extended Version**: `.figma/402_5924/` - Full expanded state with all controls

---

## ADDED Requirements

### Requirement: Character Settings Section
The Character Settings section should match Figma design exactly.

#### Scenario: Section Header
- **WHEN** the Character Settings section renders
- **THEN** it should display the correct icon and title
- **AND** use the correct font (SF Pro, 16px, bold)

#### Scenario: Facial Feature Extraction Card
- **WHEN** the Facial Feature Extraction card renders
- **THEN** it should have correct rounded corners (20px)
- **AND** display Gender, Age, Face Shape, Facial Features fields
- **AND** have Enable toggle switch

#### Scenario: Pose Reference Card
- **WHEN** the Pose Reference card renders
- **THEN** it should display reference image placeholder
- **AND** have upload and action buttons

#### Scenario: Clothing Card
- **WHEN** the Clothing card renders
- **THEN** it should display category tags (All, Tops/Outerwear, Bottoms, Dresses, Footwear, Accessories, Other)
- **AND** show image upload area

---

### Requirement: Scene Composition Section
The Scene Composition section should match Figma design exactly.

#### Scenario: Camera Control Card
- **WHEN** the Camera Control card renders
- **THEN** it should display: Lens Type, Focal Length, Aperture, Shutter Speed, ISO Value, Shooting Angle
- **AND** each field should have a dropdown indicator

#### Scenario: Image Style Card
- **WHEN** the Image Style card renders
- **THEN** it should display: Portrait Type, Imaging Style, Art Style, Art Effect, Depth of Field, Photo Effect, Special Effect, Post Processing
- **AND** have Enable toggle

---

### Requirement: Style Settings Section
The Style Settings section should match Figma design exactly.

#### Scenario: Visual Deconstruction Card
- **WHEN** the Visual Deconstruction card renders
- **THEN** it should display image preview with green border
- **AND** show language toggle (English/Chinese)
- **AND** show output format toggle (Description/Matrix)
- **AND** display description text area

#### Scenario: Prompt Preset Card
- **WHEN** the Prompt Preset card renders
- **THEN** it should display icon, title, and action button

---

## Design Version Comparison

### Figma 228_3835 (Simple Version)
- Height: 1214px
- Collapsed cards with minimal content
- Basic structure without expanded controls

### Figma 402_5924 (Extended Version)
- Height: 2298px
- Fully expanded cards with all controls
- Complete form fields and toggles

---

## Component Structure Analysis

### Character Settings
| Element | Figma Design | Browser HTML | React Code | Status |
|---------|--------------|--------------|------------|--------|
| Section Icon | mliv6m21-m23zwch.svg | ✓ | icons.m23zwch | ✅ Match |
| Section Title | "Character Settings" | ✓ | t('character_settings') | ✅ Match |
| Facial Feature Card | rounded-[20px] | rounded-[20px] | rounded-[20px] | ✅ Match |
| Gender Field | 🚻 Gender | ✓ | ✓ | ✅ Match |
| Age Field | 🧑 Age | ✓ | ✓ | ✅ Match |
| Face Shape Field | 😊 Face Shape | ✓ | ✓ | ✅ Match |
| Facial Features Field | 😀 Facial Features | ✓ | ✓ | ✅ Match |
| Enable Toggle | Green (#00e424) | ✓ | bg-[#00e424] | ✅ Match |

### Scene Composition
| Element | Figma Design | Browser HTML | React Code | Status |
|---------|--------------|--------------|------------|--------|
| Section Icon | mliv6m21-m23zwch.svg | ✓ | icons.m23zwch | ✅ Match |
| Camera Control Card | ✓ | ✓ | ✓ | ✅ Match |
| Lens Type | 🔭 Lens Type | ✓ | ✓ | ✅ Match |
| Focal Length | 📏 Focal Length | ✓ | ✓ | ✅ Match |
| Aperture | ⚙️ Aperture | ✓ | ✓ | ✅ Match |
| Shutter Speed | ⏱️ Shutter Speed | ✓ | ✓ | ✅ Match |
| ISO Value | 🎞️ ISO Value | ✓ | ✓ | ✅ Match |
| Shooting Angle | 📐 Shooting Angle | ✓ | ✓ | ✅ Match |
| Image Style Card | ✓ | ✓ | ✓ | ✅ Match |

### Style Settings
| Element | Figma Design | Browser HTML | React Code | Status |
|---------|--------------|--------------|------------|--------|
| Section Icon | Double circle | ✓ | CSS circles | ✅ Match |
| Visual Deconstruction | ✓ | ✓ | ✓ | ✅ Match |
| Image Preview | Green border | outline-green-500 | outline-green-500 | ✅ Match |
| Language Toggle | English/Chinese | ✓ | ✓ | ✅ Match |
| Description Text | ✓ | ✓ | ✓ | ✅ Match |
| Prompt Preset | ✓ | ✓ | ✓ | ✅ Match |

---

## Style Specifications

### Colors
| Name | Value | Usage |
|------|-------|-------|
| Black-100 | #1c1c1c | Text, borders |
| Black-5 | #1c1c1c0d | Button backgrounds |
| Black-40 | #1c1c1c66 | Placeholder text |
| White-100 | #ffffff | Card backgrounds |
| Brand Green | #00e424 | Enable toggle (on) |
| Gray-100 | #f5f5f5 | Section backgrounds |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Section Title | SF Pro | 16px | Bold |
| Card Title | SF Pro | 13px | Medium |
| Field Label | SF Pro | 13px | Regular |
| Field Value | SF Pro | 13px | Medium |

### Spacing
| Element | Value |
|---------|-------|
| Section padding | 20px |
| Card padding | 10-16px |
| Field gap | 4px |
| Section gap | 24px |

### Border Radius
| Element | Value |
|---------|-------|
| Section container | 16px (rounded-2xl) |
| Card container | 20px |
| Buttons | 19px (rounded-full) |
| Toggle | 52px (rounded-full) |

---

## Discrepancies Found

### 1. Toggle Switch Implementation
| Aspect | Figma | Browser | React | Status |
|--------|-------|---------|-------|--------|
| ON state color | #00e424 | #00e424 | #00e424 / green-500 | ⚠️ Inconsistent naming |
| OFF state color | gray-200 | gray-200 | gray-200 | ✅ Match |
| Toggle size | 40x24px | 40x24px | 48x24px | ❌ Width mismatch |

### 2. Image Preview Border
| Aspect | Figma | Browser | React | Status |
|--------|-------|---------|-------|--------|
| Border style | outline-1 | outline-1 | outline-1 | ✅ Match |
| Border color | green-500 | green-500 | green-500 | ✅ Match |

### 3. Missing Icons Reference
Some icons in React code reference non-existent paths:
- `icons.ijjgawt` - Not defined in icons object
- `icons.ujzvev2` - Not defined in icons object
- `icons.ea31gl8` - Not defined in icons object

---

## Priority Recommendations

### High Priority
1. Fix missing icon references in React code
2. Standardize toggle switch dimensions (40x24px)
3. Ensure consistent color variable usage

### Medium Priority
1. Add hover states for all interactive elements
2. Implement proper focus states for accessibility
3. Add transition animations for toggles

### Low Priority
1. Optimize image loading
2. Add skeleton loading states
3. Implement responsive breakpoints
