# 📁 RigKatha Project Organization Guide

## 🎯 Purpose
This document explains the hierarchical file structure of RigKatha. The organization ensures that adding new content is intuitive and scalable.

---

## 📂 Directory Structure

```
rigkatha/
├── src/
│   ├── data/
│   │   ├── deities.json                    # List of all 10 deities
│   │   ├── themes.json                     # List of 11 universal themes
│   │   ├── mandalas.json                   # Metadata for all 10 Mandalas
│   │   │
│   │   ├── mandalas/                       # Mandala content (hymns & verses)
│   │   │   ├── mandala-1/                  # Mandala 1 folder
│   │   │   │   ├── hymns.json              # All hymn metadata for Mandala 1
│   │   │   │   ├── hymn-1/                 # Hymn 1 folder
│   │   │   │   │   └── verses.json         # Full verses for Hymn 1
│   │   │   │   ├── hymn-2/
│   │   │   │   │   └── verses.json
│   │   │   │   ├── hymn-3/
│   │   │   │   │   └── verses.json
│   │   │   │   └── ... (hymns 4-191)
│   │   │   │
│   │   │   ├── mandala-2/                  # Mandala 2 folder (when ready)
│   │   │   │   ├── hymns.json
│   │   │   │   └── hymn-1/
│   │   │   │       └── verses.json
│   │   │   │
│   │   │   └── ... (mandalas 3-10)
│   │   │
│   │   └── stories/                        # Story content (comics)
│   │       ├── agni/                       # Agni deity folder
│   │       │   ├── wise-fish/              # Story folder
│   │       │   │   └── story.json          # Story data
│   │       │   └── ... (more stories)
│   │       │
│   │       ├── indra/
│   │       │   ├── battle-vritra/
│   │       │   │   └── story.json
│   │       │   └── ... (more stories)
│   │       │
│   │       └── ... (other deities)
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── BrowseByDeity.tsx
│   │   ├── BrowseByTheme.tsx
│   │   ├── BrowseByMandala.tsx
│   │   ├── deity/
│   │   │   └── DeityDetail.tsx
│   │   ├── theme/
│   │   │   └── ThemeDetail.tsx
│   │   ├── mandala/
│   │   │   ├── MandalaDetail.tsx
│   │   │   └── HymnDetail.tsx
│   │   └── story/
│   │       └── StoryReader.tsx
│   │
│   └── components/
│       ├── ui/                             # Reusable UI components
│       └── story/                          # Story-specific components
│
├── public/
│   ├── stories/                            # Story images (comics)
│   │   ├── agni/
│   │   │   └── wise-fish/                  # Images for wise-fish story
│   │   │       ├── panel-1.jpg
│   │   │       ├── panel-2.jpg
│   │   │       ├── panel-3.jpg
│   │   │       ├── panel-4.jpg
│   │   │       ├── panel-5.jpg
│   │   │       └── panel-6.jpg
│   │   │
│   │   ├── indra/
│   │   │   └── battle-vritra/              # Folder ready for images
│   │   │
│   │   └── ... (other stories)
│   │
│   └── bg2.jpg                             # Background image
│
└── Documentation Files:
    ├── README.md                           # Main project readme
    ├── LICENSE                             # MIT License
    ├── ROADMAP_UNIFIED.md                  # Development roadmap
    ├── HOW_TO_ADD_MORE_HYMNS.md           # Guide for adding hymns
    ├── MANDALA_IMPLEMENTATION_GUIDE.md     # Architecture guide
    └── PROJECT_ORGANIZATION.md             # This file
```

---

## 🚀 How to Add New Content

### ✅ Adding a New Mandala

**Step 1:** Create the folder structure
```bash
mkdir -p src/data/mandalas/mandala-{n}
mkdir -p src/data/mandalas/mandala-{n}/hymn-{1..10}
```

**Step 2:** Create `src/data/mandalas/mandala-{n}/hymns.json`
```json
[
  {
    "number": 1,
    "title": "Sanskrit Title",
    "titleEnglish": "English Title",
    "deity": "Agni",
    "deityIcon": "🔥",
    "verseCount": 9,
    "composer": "Composer Name",
    "theme": "Theme description",
    "description": "Hymn description",
    "keywords": ["keyword1", "keyword2"],
    "hasStory": false,
    "storyId": null,
    "culturalSignificance": "Significance text"
  }
]
```

**Step 3:** Update `src/pages/mandala/MandalaDetail.tsx`
```tsx
import mandala2Hymns from '../../data/mandalas/mandala-2/hymns.json'

const mandalaHymnsMap: Record<number, any[]> = {
  1: mandala1Hymns,
  2: mandala2Hymns,  // Add this line
  // ...
}
```

---

### ✅ Adding Verses to a Hymn

**Step 1:** Create `src/data/mandalas/mandala-{n}/hymn-{m}/verses.json`
```json
{
  "mandala": 1,
  "hymn": 1,
  "verses": [
    {
      "number": 1,
      "sanskrit": "Sanskrit text here",
      "transliteration": "Transliterated text",
      "translation": "English translation",
      "wordMeanings": {
        "word1": "meaning1",
        "word2": "meaning2"
      },
      "explanation": "Detailed explanation"
    }
  ],
  "overallTheme": "Theme of entire hymn",
  "culturalContext": "Historical/cultural context",
  "sources": [
    "Source 1",
    "Source 2"
  ]
}
```

**Step 2:** Update `src/pages/mandala/HymnDetail.tsx`
```tsx
import mandala1Hymn7Verses from '../../data/mandalas/mandala-1/hymn-7/verses.json'

const hymnVersesMap: Record<string, any> = {
  '1-1': mandala1Hymn1Verses,
  // ...
  '1-7': mandala1Hymn7Verses,  // Add this line
}
```

---

### ✅ Adding a New Story

**Step 1:** Create folder structure
```bash
mkdir -p src/data/stories/{deity}/{story-name}
mkdir -p public/stories/{deity}/{story-name}
```

**Step 2:** Create `src/data/stories/{deity}/{story-name}/story.json`
```json
{
  "id": "deity-story-name",
  "title": "Story Title",
  "deity": "Deity Name",
  "deityIcon": "🔥",
  "theme": "Theme",
  "coverImage": "/stories/{deity}/{story-name}/panel-1.jpg",
  "panels": [
    {
      "number": 1,
      "imageUrl": "/stories/{deity}/{story-name}/panel-1.jpg",
      "narration": "Panel narration",
      "dialogue": "Character dialogue"
    }
  ],
  "lesson": {
    "title": "Lesson Title",
    "points": ["Point 1", "Point 2"]
  },
  "shloka": {
    "sanskrit": "Sanskrit shloka",
    "transliteration": "Transliteration",
    "translation": "English translation"
  },
  "quiz": {
    "questions": [
      {
        "question": "Question text?",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 0
      }
    ]
  }
}
```

**Step 3:** Add images to `public/stories/{deity}/{story-name}/`
```
panel-1.jpg
panel-2.jpg
panel-3.jpg
panel-4.jpg
panel-5.jpg
panel-6.jpg
```

**Step 4:** Update `src/pages/story/StoryReader.tsx`
```tsx
case 'deity-story-name':
  storyData = await import('../../data/stories/{deity}/{story-name}/story.json');
  break;
```

**Step 5:** Update `src/pages/deity/DeityDetail.tsx` and `src/pages/theme/ThemeDetail.tsx`
```tsx
import newStory from '../../data/stories/{deity}/{story-name}/story.json';

const storyDataMap: Record<string, any> = {
  // ...
  'deity-story-name': newStory,
};
```

---

## 🎨 File Naming Conventions

### Folders
- **Lowercase with hyphens**: `mandala-1`, `wise-fish`, `battle-vritra`
- **Descriptive names**: Use clear, meaningful names

### Files
- **JSON data files**: `hymns.json`, `verses.json`, `story.json`
- **TypeScript components**: `PascalCase.tsx` (e.g., `HymnDetail.tsx`)
- **Images**: `panel-1.jpg`, `panel-2.jpg`, etc.

---

## 📊 Data File Standards

### Hymns Metadata (`hymns.json`)
- **Required fields**: `number`, `title`, `titleEnglish`, `deity`, `verseCount`
- **Optional fields**: `hasStory`, `storyId`, `keywords`
- **Arrays**: All hymns in a mandala in one JSON array

### Verses Data (`verses.json`)
- **Required fields**: `number`, `sanskrit`, `translation`
- **Recommended**: `transliteration`, `wordMeanings`, `explanation`
- **Context fields**: `overallTheme`, `culturalContext`, `sources`

### Story Data (`story.json`)
- **Required sections**: `panels`, `lesson`, `shloka`
- **Panel count**: 6 panels standard (can vary)
- **Images**: Must match panel count

---

## 🔍 Quick Reference

### Current Status (as of now)
- **Mandalas**: 1 (with folder structure)
- **Hymns with metadata**: 10 (Mandala 1)
- **Hymns with full verses**: 6 (Hymns 1-6)
- **Stories with data**: 10 (all deities)
- **Stories with images**: 1 (Agni - Wise Fish)

### Next Steps
1. Add verses for hymns 7-10 (complete Madhuchandas set)
2. Generate images for remaining 9 stories
3. Add more hymns to Mandala 1 (up to 191)
4. Expand to Mandalas 2-10

---

## 🛠️ Development Workflow

### When adding new content:

1. **Create folder structure first**
   ```bash
   mkdir -p src/data/mandalas/mandala-{n}/hymn-{m}
   ```

2. **Add JSON data file**
   - Use existing files as templates
   - Validate JSON syntax

3. **Update TypeScript imports**
   - Import in relevant page components
   - Add to mapping objects

4. **Build and test**
   ```bash
   npm run build
   npm run dev
   ```

5. **Verify in browser**
   - Navigate to new content
   - Check all links work
   - Verify images load (if applicable)

---

## 📝 Notes

- **Consistency**: Always follow the same pattern for similar content
- **Scalability**: Structure supports hundreds of hymns and stories
- **Maintainability**: Each entity has its own dedicated folder
- **Git-friendly**: Changes to one hymn don't affect others

---

## 🙏 Contributing

When adding new content, ensure:
- [ ] Folder structure follows conventions
- [ ] JSON data is valid and complete
- [ ] TypeScript imports are updated
- [ ] Build succeeds without errors
- [ ] Content displays correctly in browser
- [ ] Images are optimized (<500KB each)

---

**Last Updated**: October 7, 2025  
**Maintained by**: RigKatha Development Team

🕉️ **May this structure serve the project well for years to come!**
