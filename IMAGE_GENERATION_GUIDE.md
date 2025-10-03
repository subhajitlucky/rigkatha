# 🎨 Image Generation Guide for Comic Panels

## Overview
Each story has 6 comic panels that need illustrations. The story data includes `sceneDescription` for each panel to guide your image generation.

## Current Story: The Wise Fish and Sacred Fire

### Panel 1
**Scene:** Sunset by river, young Indian sage in simple robes, small offerings of flowers and rice, peaceful atmosphere, golden light, sacred fire pit

**Suggested Prompt for AI:**
```
Sunset by a sacred river in ancient India, young sage with simple robes sitting peacefully, small wildflowers and rice grains as offerings, sacred fire pit, golden hour lighting, serene spiritual atmosphere, traditional Vedic art style, warm colors
```

### Panel 2
**Scene:** Magical golden fish emerging from water, glowing with divine light, surprised young sage, mystical atmosphere, water droplets catching light

**Suggested Prompt:**
```
Magnificent golden fish rising from river water, glowing with divine ethereal light, young sage looking surprised, water droplets sparkling in magical light, mystical spiritual scene, ancient India, Vedic mythology art style
```

### Panel 3
**Scene:** Close-up of sage's worried face looking at tiny offerings, contrast with imagined grand sacrifices in thought bubble, emotional scene

**Suggested Prompt:**
```
Close-up of young Indian sage looking sad at small flower offerings, thought bubble showing wealthy merchants with grand sacrifices, emotional contrast, traditional Indian art style, expressive faces
```

### Panel 4
**Scene:** Wise fish speaking with compassionate expression, sage listening intently, peaceful teaching moment, spiritual energy visible

**Suggested Prompt:**
```
Golden wise fish with compassionate expression teaching young sage by the river, sage listening intently, spiritual energy radiating, peaceful moment of wisdom transfer, Vedic art style, warm glowing light
```

### Panel 5
**Scene:** Magical transformation scene, small offerings creating magnificent flames, sacred fire blazing with divine energy, awe on sage's face, spiritual light

**Suggested Prompt:**
```
Sacred fire blazing magnificently from small flower offerings, divine flames dancing higher than ever, magical transformation, young sage in awe, spiritual divine energy, golden and orange flames, Vedic mythology style
```

### Panel 6
**Scene:** Peaceful resolution scene, sage meditating by fire with contentment, fish blessing him from water, stars appearing in twilight sky, serene conclusion

**Suggested Prompt:**
```
Peaceful evening scene, young sage meditating contentedly by sacred fire, golden fish watching from water with approval, stars appearing in twilight sky, serene spiritual conclusion, traditional Vedic art style, calm peaceful atmosphere
```

## Technical Specifications

### Image Dimensions
- **Aspect Ratio:** 16:9 (recommended)
- **Resolution:** 1920x1080px or 1280x720px
- **Format:** JPG or PNG

### Art Style Guidelines
- **Style:** Traditional Indian/Vedic art meets modern comic book aesthetics
- **Colors:** Warm palette (ambers, oranges, golds, deep reds for fire scenes)
- **Mood:** Spiritual, peaceful, mystical yet approachable for children
- **Character Design:** Simple robes, traditional Indian features, expressive faces

### File Naming Convention
```
agni-wise-fish-panel-1.jpg
agni-wise-fish-panel-2.jpg
agni-wise-fish-panel-3.jpg
agni-wise-fish-panel-4.jpg
agni-wise-fish-panel-5.jpg
agni-wise-fish-panel-6.jpg
```

## Tools for Image Generation

### AI Image Generators
1. **Midjourney** (Best quality, paid)
2. **DALL-E 3** (via ChatGPT Plus or API)
3. **Stable Diffusion** (Free, self-hosted)
4. **Leonardo.ai** (Good for consistent characters)
5. **Ideogram** (Great for consistent style)

### Style Modifiers to Add
- "Vedic art style"
- "Traditional Indian mythology illustration"
- "Spiritual peaceful atmosphere"
- "Comic book panel"
- "Warm golden lighting"

## Where to Place Images

### After Generation:
1. Save images to `/public/` folder
2. Update the story JSON file (`/src/data/stories/agni/wise-fish.json`)
3. Change `imageUrl` from `/story-panel-placeholder.jpg` to `/agni-wise-fish-panel-1.jpg` etc.

### Example Update:
```json
{
  "panelNumber": 1,
  "imageUrl": "/agni-wise-fish-panel-1.jpg",  // ← Update this
  "imageAlt": "...",
  // ... rest of panel data
}
```

## Testing
After adding images, test the story reader:
1. Run `npm run dev`
2. Navigate to `/browse/deity/agni`
3. Click on "The Wise Fish and Sacred Fire"
4. Verify all panels display correctly

## Next Stories to Illustrate
- Agni's Journey to the Gods (6 panels)
- The Three Sacred Flames (6 panels)
- Indra stories (if time permits)
