# 📂 Complete Project Structure - Image Organization

```
rigkatha/
├── public/
│   ├── stories/                           ← NEW! Organized story images
│   │   ├── agni/                         ← Agni deity folder
│   │   │   ├── wise-fish/                ← Individual story folder
│   │   │   │   ├── panel-1.jpg          ← Sage by river
│   │   │   │   ├── panel-2.jpg          ← Golden fish
│   │   │   │   ├── panel-3.jpg          ← Humble offerings  
│   │   │   │   ├── panel-4.jpg          ← Teaching wisdom
│   │   │   │   ├── panel-5.jpg          ← Fire blazing
│   │   │   │   └── panel-6.jpg          ← Peace & understanding
│   │   │   ├── first-priest/            ← Future story
│   │   │   └── three-fires/             ← Future story
│   │   │
│   │   ├── indra/                        ← Indra deity folder (future)
│   │   │   └── [story-folders]/
│   │   │
│   │   ├── README.md                     ← Image organization guide
│   │   └── PLACEHOLDERS.md               ← Placeholder guide
│   │
│   └── bg2.jpg                           ← Background image
│
├── src/
│   ├── data/
│   │   └── stories/
│   │       └── agni/
│   │           └── wise-fish.json        ← Updated with new paths!
│   │
│   └── components/
│       └── story/
│           └── ComicPanel.tsx            ← Uses images from /stories/
│
└── [other files...]
```

---

## 🎯 How Paths Work

### In JSON Data File
```json
{
  "imageUrl": "/stories/agni/wise-fish/panel-1.jpg"
}
```

### In Browser
```
http://localhost:5173/stories/agni/wise-fish/panel-1.jpg
```

### In Production
```
https://rigkatha.vercel.app/stories/agni/wise-fish/panel-1.jpg
```

---

## ✅ Benefits of This Structure

### 1. **Scalability**
```
Easy to add new stories without naming conflicts:
- /stories/agni/wise-fish/panel-1.jpg
- /stories/agni/first-priest/panel-1.jpg  ← Same name, different folder!
- /stories/indra/vritra-battle/panel-1.jpg
```

### 2. **Organization**
```
All images for one story stay together:
- Easy to find
- Easy to replace
- Easy to backup
- Easy to share with designers
```

### 3. **Clarity**
```
File path tells the full story:
/stories/agni/wise-fish/panel-1.jpg
   ↓      ↓        ↓         ↓
 Type  Deity   Story     Panel
```

### 4. **Maintenance**
```
Want to update all Agni story images?
→ Just open /public/stories/agni/

Want to delete a story?
→ Remove one folder: /public/stories/agni/wise-fish/
```

---

## 🚀 Adding Your AI-Generated Images

### Step 1: Generate Your Images
Use the prompts from `/public/stories/README.md`

### Step 2: Name Them Correctly
```
panel-1.jpg  (not Panel1.jpg or panel-01.jpg)
panel-2.jpg
panel-3.jpg
panel-4.jpg
panel-5.jpg
panel-6.jpg
```

### Step 3: Place in Correct Folder
```bash
# Navigate to the story folder
cd public/stories/agni/wise-fish/

# Place your images here
# Just drag and drop or use cp command
```

### Step 4: Verify
```bash
# Check if files exist
ls -la public/stories/agni/wise-fish/

# Should show:
# panel-1.jpg
# panel-2.jpg
# panel-3.jpg
# panel-4.jpg
# panel-5.jpg
# panel-6.jpg
```

### Step 5: Test
```bash
npm run dev
# Navigate to story, images should load!
```

---

## 📝 Quick Checklist

Before generating images:
- [x] Folder structure created ✅
- [x] JSON paths updated ✅
- [x] Build verified ✅
- [ ] Generate panel images using AI
- [ ] Optimize images (<500KB each)
- [ ] Place in correct folders
- [ ] Test in browser

---

**Your images will go here:**
`/home/subhajitlucky/project/rigkatha/public/stories/agni/wise-fish/`

**Just drop 6 images named:** `panel-1.jpg` through `panel-6.jpg`

🎨 That's it! The app is ready for your beautiful artwork!
