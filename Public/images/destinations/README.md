# Destination Images Guide

This folder contains all destination images organized by destination ID.

## Folder Structure

Each destination has its own folder named after the destination ID:
- `thailand/` - Thailand destination images
- `bali/` - Bali destination images
- `kerala/` - Kerala destination images
- ... and so on for all destinations

## Image Naming Convention

For each destination folder, use the following naming:

1. **Main Image** (Hero image shown on destination cards):
   - File name: `main.jpg` (or `main.png`)
   - Recommended size: 1920x1080px or larger
   - This is the primary image shown on destination listing pages

2. **Gallery Images** (Additional images shown in the gallery):
   - File names: `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, etc.
   - Recommended size: 800x600px or larger
   - These images appear in the destination detail page gallery

## How to Replace Images

1. Navigate to the destination folder (e.g., `Public/images/destinations/thailand/`)
2. Replace the existing image files with your own images
3. **Important**: Keep the exact file names (`main.jpg`, `gallery-1.jpg`, etc.)
4. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## Example

For Thailand destination:
```
Public/images/destinations/thailand/
  ├── main.jpg          (Main hero image)
  ├── gallery-1.jpg     (Gallery image 1)
  ├── gallery-2.jpg     (Gallery image 2)
  ├── gallery-3.jpg     (Gallery image 3)
  ├── gallery-4.jpg     (Gallery image 4)
  └── gallery-5.jpg     (Gallery image 5)
```

## Updating the JSON File

The destination data is stored in `Public/destinations.json`. If you need to:
- Add more gallery images: Add more entries to the `gallery` array
- Change image paths: Update the `imageUrl` or `gallery` array values
- Add a new destination: Copy an existing destination object and modify it

## Image Optimization Tips

- Use compressed images to improve page load speed
- Recommended formats:
  - `.webp` for best compression (modern browsers)
  - `.jpg` for maximum compatibility
- Keep file sizes under 500KB per image when possible
- Use tools like TinyPNG or ImageOptim to compress images before uploading

## Notes

- All image paths in the JSON file are relative to the `Public` folder
- The paths start with `/images/destinations/` which maps to `Public/images/destinations/`
- After updating images, refresh your browser to see the changes

