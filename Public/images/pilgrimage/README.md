# Pilgrimage Site Images Guide

This folder contains all pilgrimage site images for the Divya Path page.

## Folder Structure

Each pilgrimage site has its own folder:
- `rishikesh/` - Rishikesh images
- `golden-temple/` - Golden Temple (Amritsar) images
- `tirupati/` - Tirupati images
- `himalaya/` - Himalayan Temples images
- `varanasi/` - Varanasi images
- `bodhgaya/` - Bodh Gaya images
- `vaishno-devi/` - Vaishno Devi images
- `rameswaram/` - Rameswaram images

## Image Naming

For each pilgrimage site folder, use:
- **Main Image**: `main.jpg` (or `main.png`)
  - This is the image shown on the Divya Path page cards
  - Recommended size: 800x600px or larger
  - Aspect ratio: 4:3 or 16:9

## How to Add Images

1. Navigate to the pilgrimage site folder (e.g., `Public/images/pilgrimage/rishikesh/`)
2. Place your image file and name it `main.jpg`
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
4. Refresh your browser to see the changes

## Example Structure

```
Public/images/pilgrimage/
├── rishikesh/
│   └── main.jpg
├── golden-temple/
│   └── main.jpg
├── tirupati/
│   └── main.jpg
└── ...
```

## Image Paths

The image paths in the code use this format:
- `/images/pilgrimage/[site-id]/main.jpg`

These paths are relative to the `Public` folder.

## Current Pilgrimage Sites

| Site Name | ID | Folder Path |
|-----------|-----|-------------|
| Rishikesh | `rishikesh` | `Public/images/pilgrimage/rishikesh/` |
| Golden Temple | `golden-temple` | `Public/images/pilgrimage/golden-temple/` |
| Tirupati | `tirupati` | `Public/images/pilgrimage/tirupati/` |
| Himalayan Temples | `himalaya` | `Public/images/pilgrimage/himalaya/` |
| Varanasi | `varanasi` | `Public/images/pilgrimage/varanasi/` |
| Bodh Gaya | `bodhgaya` | `Public/images/pilgrimage/bodhgaya/` |
| Vaishno Devi | `vaishno-devi` | `Public/images/pilgrimage/vaishno-devi/` |
| Rameswaram | `rameswaram` | `Public/images/pilgrimage/rameswaram/` |

## Image Optimization Tips

- Use compressed images (under 300KB when possible)
- Recommended formats: `.jpg` for photos, `.webp` for better compression
- Dimensions: 800x600px minimum, but larger is fine (will be scaled)
- Use tools like TinyPNG or ImageOptim to compress before uploading

