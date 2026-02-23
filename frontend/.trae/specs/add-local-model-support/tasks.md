# Tasks

- [x] Task 1: Update configuration for local model support
  - [x] SubTask 1.1: Add Z-Image model definitions to AI_MODELS in config.ts
  - [x] SubTask 1.2: Add LOCAL_MODEL_ENDPOINT and STORAGE_KEYS for local server URL
  - [x] SubTask 1.3: Add model type field to distinguish local vs cloud models

- [x] Task 2: Implement local model API client
  - [x] SubTask 2.1: Create generateImageWithLocal function in googleAI.ts
  - [x] SubTask 2.2: Implement health check function for local server status
  - [x] SubTask 2.3: Add error handling for local model specific errors
  - [x] SubTask 2.4: Support image-to-image generation for Z-Image-Edit

- [x] Task 3: Update generateImage function to route to local model
  - [x] SubTask 3.1: Check model type and route to appropriate handler
  - [x] SubTask 3.2: Handle local model request/response format
  - [x] SubTask 3.3: Support negative prompt for Z-Image base model

- [x] Task 4: Update UI for model selection
  - [x] SubTask 4.1: Add local server status indicator in CreationPage
  - [x] SubTask 4.2: Update model dropdown to show local models with status
  - [x] SubTask 4.3: Add local server URL configuration in settings
  - [x] SubTask 4.4: Disable local models when server is offline

- [x] Task 5: Add language support for local model UI
  - [x] SubTask 5.1: Add translation keys for local model labels
  - [x] SubTask 5.2: Add error messages for local model failures

# Task Dependencies
- [Task 2] depends on [Task 1]
- [Task 3] depends on [Task 2]
- [Task 4] depends on [Task 3]
- [Task 5] depends on [Task 4]
