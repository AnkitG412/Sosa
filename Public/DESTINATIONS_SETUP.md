# Destinations and Images Setup Guide

## Overview

This guide explains how to manage destination data and images for the SOSA Travelz website.

## File Structure

```
Public/
├── destinations.json          # Complete destinations data with local image paths
└── images/
    └── destinations/
        ├── README.md         # Detailed image guide
        ├── IMAGE_GUIDE.txt   # Quick reference
        ├── thailand/         # Thailand destination images
        │   ├── main.jpg
        │   ├── gallery-1.jpg
        │   ├── gallery-2.jpg
        │   └── ...
        ├── bali/             # Bali destination images
        └── ...               # Other destinations
```

## How to Replace Images

### Step 1: Locate the Destination Folder

Navigate to `Public/images/destinations/[destination-id]/`

For example:
- Thailand: `Public/images/destinations/thailand/`
- Bali: `Public/images/destinations/bali/`
- Kerala: `Public/images/destinations/kerala/`

### Step 2: Replace Image Files

1. **Main Image** (Hero image):
   - File name: `main.jpg` or `main.png`
   - Recommended: 1920x1080px or larger
   - This is the primary image shown on destination cards

2. **Gallery Images**:
   - File names: `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, etc.
   - Recommended: 800x600px or larger
   - These appear in the destination detail page gallery

### Step 3: Keep File Names Consistent

**Important**: Keep the exact file names as specified. The application looks for:
- `main.jpg` for the hero image
- `gallery-1.jpg`, `gallery-2.jpg`, etc. for gallery images

### Step 4: Refresh Browser

After replacing images, refresh your browser to see the changes.

## Destination IDs Reference

Here are all the destination IDs and their corresponding folders:

| Destination | ID | Folder Path |
|------------|-----|-------------|
| Thailand | `thailand` | `Public/images/destinations/thailand/` |
| Bali | `bali` | `Public/images/destinations/bali/` |
| Kerala | `kerala` | `Public/images/destinations/kerala/` |
| Indonesia | `indonesia` | `Public/images/destinations/indonesia/` |
| Santorini | `santorini` | `Public/images/destinations/santorini/` |
| Maldives | `maldives` | `Public/images/destinations/maldives/` |
| Swiss Alps | `swiss` | `Public/images/destinations/swiss/` |
| Paris | `paris` | `Public/images/destinations/paris/` |
| Kyoto | `kyoto` | `Public/images/destinations/kyoto/` |
| Amalfi Coast | `amalfi` | `Public/images/destinations/amalfi/` |
| Bora Bora | `bora-bora` | `Public/images/destinations/bora-bora/` |
| Cape Town | `cape-town` | `Public/images/destinations/cape-town/` |
| Machu Picchu | `machu-picchu` | `Public/images/destinations/machu-picchu/` |
| Reykjavik | `reykjavik` | `Public/images/destinations/reykjavik/` |
| Petra | `petra` | `Public/images/destinations/petra/` |
| Queenstown | `queenstown` | `Public/images/destinations/queenstown/` |
| Marrakech | `marrakech` | `Public/images/destinations/marrakech/` |
| Serengeti | `serengeti` | `Public/images/destinations/serengeti/` |

## Image Paths in Code

The image paths in `destinations.json` use the following format:
- Main image: `/images/destinations/[id]/main.jpg`
- Gallery: `/images/destinations/[id]/gallery-1.jpg`, etc.

These paths are relative to the `Public` folder, so:
- `/images/destinations/thailand/main.jpg` → `Public/images/destinations/thailand/main.jpg`

## Image Optimization Tips

1. **File Formats**:
   - Use `.jpg` for photos (best compatibility)
   - Use `.webp` for better compression (modern browsers)
   - Use `.png` only if transparency is needed

2. **File Sizes**:
   - Keep images under 500KB when possible
   - Use compression tools like TinyPNG or ImageOptim

3. **Dimensions**:
   - Main images: 1920x1080px or larger (16:9 aspect ratio recommended)
   - Gallery images: 800x600px or larger (4:3 aspect ratio recommended)

## Updating Destination Data

The destination data is stored in:
- `constants.ts` - TypeScript constants (currently used)
- `Public/destinations.json` - JSON file (for future use)

To update destination information:
1. Edit `constants.ts` for immediate changes
2. Or update `Public/destinations.json` if you plan to load from JSON

## Troubleshooting

**Images not showing?**
- Check that file names match exactly (case-sensitive)
- Verify images are in the correct folder
- Check browser console for 404 errors
- Ensure image paths in code match your file structure

**Need to add more gallery images?**
- Add more files: `gallery-6.jpg`, `gallery-7.jpg`, etc.
- Update the `gallery` array in `constants.ts` or `destinations.json`

## Support

For questions or issues, refer to:
- `Public/images/destinations/README.md` - Detailed guide
- `Public/images/destinations/IMAGE_GUIDE.txt` - Quick reference

