# Image Setup Note

## Current Status

The pilgrimage site images are currently using external Unsplash URLs as fallbacks because the local image files don't exist yet.

## To Switch to Local Images

When you're ready to use local images:

1. **Add your images** to each pilgrimage folder:
   - `Public/images/pilgrimage/rishikesh/main.jpg`
   - `Public/images/pilgrimage/golden-temple/main.jpg`
   - etc.

2. **Update `constants.ts`** - Change the `imageUrl` values from external URLs to local paths:
   ```typescript
   // Change from:
   imageUrl: 'https://images.unsplash.com/photo-...',
   
   // To:
   imageUrl: '/images/pilgrimage/rishikesh/main.jpg',
   ```

3. **The error handling in `DivyaPath.tsx`** will automatically show a placeholder if local images are missing.

## Current Implementation

- External URLs are used as fallbacks (working now)
- Local paths are ready for when you add images
- Error handling shows placeholders if images fail to load

