# FLORA - AI Creative Workflow Editor

A node-based visual workflow system for AI-powered creative tools, built with React, TypeScript, and WebGL.

## Features

- **Node-based Workflow**: Visual canvas for building AI image generation pipelines
- **Real-time Shader Previews**: Live WebGL shader effects showing processing modes
- **Google AI Integration**: Connect to Google's Generative AI APIs for image generation
- **Image Upload**: Drag and drop or click to upload images to input nodes
- **Interactive Controls**: Adjust model presets, processing modes, and generation steps
- **History Management**: View and reuse previously generated images
- **Responsive Design**: Built with Tailwind CSS v4 and a custom design system

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up Google AI API key:
   - Get an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env` file and add:
     ```
     VITE_GOOGLE_AI_API_KEY=your_api_key_here
     ```
   - Or configure it in the app by clicking the Settings icon in the header

### Development

Run the development server:

```bash
npm run dev
```

## Usage

### Setting up a Workflow

1. **Add Images**: Click on any Image Input node to upload your source images
2. **Configure Editor**: 
   - Select a model preset (imagen-3, Flux Pro, DALL-E 3, etc.)
   - Choose a processing mode (内容组合, 风格迁移, etc.)
   - Adjust the number of steps
   - Enter your prompt
   - Watch the real-time shader preview update
3. **Generate**: Click the play button to generate your image
4. **Preview & Save**: View results in the Preview node and save or reuse them

### Connecting to Google AI

The app supports real Google AI image generation:

1. Click the Settings icon in the header
2. Enter your Google AI API key
3. The key is stored securely in your browser's local storage
4. Now your generations will use actual AI models

**Note**: The current implementation includes mock API calls. To connect to real Google AI services, you'll need to:
- Implement the Google Imagen API integration
- Handle authentication properly
- Add error handling and rate limiting

## Technical Stack

- **React 18** with TypeScript
- **React Flow** for node-based canvas
- **WebGL** for real-time shader previews
- **Tailwind CSS v4** with custom design system
- **ShadCN UI** components
- **Sonner** for toast notifications
- **Google Generative AI** (planned integration)

## Architecture

```
/components
  /nodes          - Custom workflow nodes (Input, Editor, Preview)
  /ui             - Reusable UI components (ShadCN)
  FloraCanvas     - Main workflow canvas
  ShaderPreview   - WebGL shader visualization
  WorkflowContext - State management
  
/lib
  googleAI.ts     - AI API integration

/styles
  globals.css     - Tailwind v4 config + design system
```

## Design System

The app uses a custom design system defined in `styles/globals.css` with:
- Custom color tokens for light/dark modes
- Typography scale (h1-h4, p, label)
- Spacing and border radius tokens
- Elevation and shadow system
- SF Pro Display font family

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
