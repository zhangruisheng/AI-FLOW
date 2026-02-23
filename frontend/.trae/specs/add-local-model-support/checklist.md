# Checklist

## Configuration
- [x] AI_MODELS includes Z-Image model definitions with type: 'local'
- [x] LOCAL_MODEL_ENDPOINT configuration added
- [x] STORAGE_KEYS includes LOCAL_SERVER_URL

## API Implementation
- [x] generateImageWithLocal function implemented
- [x] Health check function implemented for local server
- [x] Error handling covers connection timeout, GPU memory, model loading errors
- [x] Image-to-image generation supported for Z-Image-Edit

## Integration
- [x] generateImage function routes to local handler when model type is 'local'
- [x] Request format matches Z-Image API specification
- [x] Response correctly parsed and returned as base64 image

## UI Updates
- [x] Model dropdown shows Z-Image models with local indicator
- [x] Local server status indicator visible in UI
- [x] Local models disabled when server is offline
- [x] Settings panel allows configuring local server URL

## Language Support
- [x] Translation keys added for local model labels
- [x] Error messages translated for local model failures

## Testing
- [ ] Text-to-image generation works with Z-Image-Turbo
- [ ] High-quality generation works with Z-Image base model
- [ ] Image editing works with Z-Image-Edit
- [ ] Graceful fallback when local server is unavailable
