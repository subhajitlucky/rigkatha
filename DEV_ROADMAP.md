# 🛠️ RigKatha Development Roadmap
> **Step-by-step implementation guide - Sept 30 to Oct 7, 2025**

---

## 🎯 **PHASE 1: LAYOUT & HOME PAGE** (Day 1 - Sept 30) ✅ **COMPLETED**

### 1. Core Layout Components ✅
- [x] 1.1 Create Navbar component (`src/components/ui/Navbar.tsx`) ✅
  - [x] 1.1.1 Logo/Brand "ऋग्कथा" ✅
  - [x] 1.1.2 Navigation links (About, GitHub) ✅
  - [x] 1.1.3 Responsive mobile menu ✅
  - [x] 1.1.4 Sticky/fixed positioning ✅
  
- [x] 1.2 Create Footer component (`src/components/ui/Footer.tsx`) ✅
  - [x] 1.2.1 Attribution & sources ✅
  - [x] 1.2.2 Social links (GitHub) ✅
  - [x] 1.2.3 Mission statement ("make ancient wisdom accessible") ✅
  - [x] 1.2.4 Educational use notice ✅

- [x] 1.3 Update App.tsx ✅
  - [x] 1.3.1 Import Navbar and Footer ✅
  - [x] 1.3.2 Wrap Routes with layout components ✅
  - [x] 1.3.3 Flexbox layout for sticky footer ✅

### 2. Homepage Development (`src/pages/Home.tsx`) ✅
- [x] 2.1 Hero Section ✅
  - [x] 2.1.1 Large "ऋग्कथा" heading ✅
  - [x] 2.1.2 Tagline: "Ancient Wisdom Through Comics" ✅
  - [x] 2.1.3 Gradient background ✅
  - [x] 2.1.4 Responsive typography ✅
  - [x] 2.1.5 Bouncing scroll indicator ✅
  
- [x] 2.2 "Choose Your Path" Section ✅
  - [x] 2.2.1 Section heading ✅
  - [x] 2.2.2 Create PathCard component (`src/components/ui/PathCard.tsx`) ✅
  - [x] 2.2.3 Card 1: Browse by Deity (ॐ) ✅
  - [x] 2.2.4 Card 2: Browse by Theme (🪷) ✅
  - [x] 2.2.5 Card 3: Browse by Mandala (📜) ✅
  - [x] 2.2.6 Grid layout (3 columns desktop, 1 column mobile) ✅
  - [x] 2.2.7 Hover effects and animations ✅
  
- [ ] 2.3 Featured Story Section **SKIPPED FOR NOW**
  - [ ] 2.3.1 Will add in Phase 6 (Oct 5-6)
  
- [x] 2.4 Stats Bar ✅
  - [x] 2.4.1 Display: 1,028 Hymns, 10 Mandalas ✅
  - [x] 2.4.2 Clean centered layout ✅

### 3. Theme & Styling ✅
- [x] 3.1 Define color palette ✅
  - [x] 3.1.1 Primary: Saffron/Amber ✅
  - [x] 3.1.2 Secondary: Deep Brown ✅
  - [x] 3.1.3 Accent: Gold ✅
  - [x] 3.1.4 Background: Cream/Amber gradients ✅
  - [x] 3.1.5 Text: Dark brown ✅
  
- [x] 3.2 Typography ✅
  - [x] 3.2.1 Devanagari for "ऋग्कथा" ✅
  - [x] 3.2.2 System fonts (elegant) ✅
  - [x] 3.2.3 Readable body text ✅
  
- [x] 3.3 Global styles ✅
  - [x] 3.3.1 TailwindCSS utility classes ✅
  - [x] 3.3.2 Responsive breakpoints (md:, lg:) ✅
  - [x] 3.3.3 Smooth transitions ✅

---

## 📚 **PHASE 2: BROWSE PAGES** (Day 2 - Oct 1)

### 4. Browse by Deity Page
- [ ] 4.1 Create BrowseByDeity.tsx (`src/pages/BrowseByDeity.tsx`)
  - [ ] 4.1.1 Page header
  - [ ] 4.1.2 Create DeityCard component (`src/components/ui/DeityCard.tsx`)
  - [ ] 4.1.3 Grid of 8 deity cards
  - [ ] 4.1.4 Each card: Icon, Name, Story count, Description
  - [ ] 4.1.5 Link to specific deity page
  
- [ ] 4.2 Define deity data structure
  - [ ] 4.2.1 Create deities.json (`src/data/deities.json`)
  - [ ] 4.2.2 Fields: id, name, icon, description, storyCount

### 5. Browse by Theme Page
- [ ] 5.1 Create BrowseByTheme.tsx (`src/pages/BrowseByTheme.tsx`)
  - [ ] 5.1.1 Page header
  - [ ] 5.1.2 Create ThemeCard component (`src/components/ui/ThemeCard.tsx`)
  - [ ] 5.1.3 Grid of theme cards
  - [ ] 5.1.4 Each card: Icon, Theme name, Story count, Description
  
- [ ] 5.2 Define theme data structure
  - [ ] 5.2.1 Create themes.json (`src/data/themes.json`)
  - [ ] 5.2.2 Themes: Courage, Wisdom, Nature, Truth, etc.

### 6. Browse by Mandala Page
- [ ] 6.1 Create BrowseByMandala.tsx (`src/pages/BrowseByMandala.tsx`)
  - [ ] 6.1.1 Page header
  - [ ] 6.1.2 Create MandalaCard component (`src/components/ui/MandalaCard.tsx`)
  - [ ] 6.1.3 List/grid of 10 Mandala cards
  - [ ] 6.1.4 Each card: Number, Hymn count, Brief description
  
- [ ] 6.2 Define mandala data
  - [ ] 6.2.1 Create mandalas.json (`src/data/mandalas.json`)
  - [ ] 6.2.2 All 10 Mandalas with metadata

---

## 📖 **PHASE 3: STORY LIST PAGES** (Day 3 - Oct 2)

### 7. Deity Stories Page
- [ ] 7.1 Create DeityStories.tsx (`src/pages/DeityStories.tsx`)
  - [ ] 7.1.1 Get deity ID from route params
  - [ ] 7.1.2 Filter stories by deity
  - [ ] 7.1.3 Display deity header
  - [ ] 7.1.4 Grid of story cards
  
- [ ] 7.2 Create StoryCard component (`src/components/ui/StoryCard.tsx`)
  - [ ] 7.2.1 Story thumbnail
  - [ ] 7.2.2 Title, source citation
  - [ ] 7.2.3 Reading time, difficulty
  - [ ] 7.2.4 Link to story reader

### 8. Theme Stories Page
- [ ] 8.1 Create ThemeStories.tsx (`src/pages/ThemeStories.tsx`)
  - [ ] 8.1.1 Get theme ID from route params
  - [ ] 8.1.2 Filter stories by theme
  - [ ] 8.1.3 Display theme header
  - [ ] 8.1.4 Grid of story cards

### 9. Mandala Stories Page
- [ ] 9.1 Create MandalaStories.tsx (`src/pages/MandalaStories.tsx`)
  - [ ] 9.1.1 Get mandala number from route params
  - [ ] 9.1.2 Filter stories by mandala
  - [ ] 9.1.3 Display mandala header
  - [ ] 9.1.4 List of stories with hymn numbers

### 10. Stories Data
- [ ] 10.1 Create stories.json (`src/data/stories.json`)
  - [ ] 10.1.1 Complete data structure for 5 initial stories
  - [ ] 10.1.2 Fields: id, title, deity, theme, mandala, panels, shloka, quiz
  - [ ] 10.1.3 Validate all Sanskrit text
  - [ ] 10.1.4 Verify all source citations

---

## 🎨 **PHASE 4: STORY READER (Comic Viewer)** (Day 4-5 - Oct 3-4)

### 11. Story Reader Page
- [ ] 11.1 Create StoryReader.tsx (`src/pages/StoryReader.tsx`)
  - [ ] 11.1.1 Get story ID from route params
  - [ ] 11.1.2 Load story data
  - [ ] 11.1.3 Navigation structure
  - [ ] 11.1.4 Progress indicator

### 12. Comic Panel System
- [ ] 12.1 Create ComicPanel component (`src/components/comic/ComicPanel.tsx`)
  - [ ] 12.1.1 Panel container with background
  - [ ] 12.1.2 Character positioning
  - [ ] 12.1.3 Narration text overlay
  - [ ] 12.1.4 Dialogue bubbles
  
- [ ] 12.2 Create StoryProgression component (`src/components/comic/StoryProgression.tsx`)
  - [ ] 12.2.1 Next/Previous buttons
  - [ ] 12.2.2 Panel counter (1/6)
  - [ ] 12.2.3 Swipe gestures (mobile)
  - [ ] 12.2.4 Keyboard navigation
  
- [ ] 12.3 Add Framer Motion animations
  - [ ] 12.3.1 Panel transitions
  - [ ] 12.3.2 Character entrances
  - [ ] 12.3.3 Text fade-ins

### 13. Lesson & Shloka Display
- [ ] 13.1 Create LessonCard component (`src/components/story/LessonCard.tsx`)
  - [ ] 13.1.1 Lesson title
  - [ ] 13.1.2 Summary text
  - [ ] 13.1.3 Key takeaways list
  - [ ] 13.1.4 Discussion questions
  
- [ ] 13.2 Create ShlokaDisplay component (`src/components/story/ShlokaDisplay.tsx`)
  - [ ] 13.2.1 Sanskrit text (Devanagari)
  - [ ] 13.2.2 Transliteration
  - [ ] 13.2.3 English translation
  - [ ] 13.2.4 Meaning/context
  - [ ] 13.2.5 Source citation (Mandala.Sukta.Rik)
  - [ ] 13.2.6 Audio pronunciation button (optional)

### 14. Quiz System
- [ ] 14.1 Create QuizContainer component (`src/components/quiz/QuizContainer.tsx`)
  - [ ] 14.1.1 Quiz header
  - [ ] 14.1.2 Score tracker
  - [ ] 14.1.3 Question progression
  
- [ ] 14.2 Create QuestionCard component (`src/components/quiz/QuestionCard.tsx`)
  - [ ] 14.2.1 Question text
  - [ ] 14.2.2 Multiple choice options
  - [ ] 14.2.3 Submit button
  - [ ] 14.2.4 Instant feedback
  - [ ] 14.2.5 Explanation display

---

## 🎬 **PHASE 5: CONTENT CREATION** (Day 2-5 - Parallel to dev)

### 15. Story Content
- [ ] 15.1 Story 1: Indra vs Vritra (Courage)
  - [ ] 15.1.1 Write adapted story
  - [ ] 15.1.2 Generate 6 comic panels
  - [ ] 15.1.3 Get shloka from RV 1.32.1
  - [ ] 15.1.4 Write lesson & quiz
  
- [ ] 15.2 Story 2: Agni's First Hymn (Wisdom)
  - [ ] 15.2.1 Write adapted story
  - [ ] 15.2.2 Generate comic panels
  - [ ] 15.2.3 Get shloka from RV 1.1.1
  - [ ] 15.2.4 Write lesson & quiz
  
- [ ] 15.3 Story 3: Ushas (Dawn & New Beginnings)
  - [ ] 15.3.1 Write adapted story
  - [ ] 15.3.2 Generate comic panels
  - [ ] 15.3.3 Get relevant shloka
  - [ ] 15.3.4 Write lesson & quiz
  
- [ ] 15.4 Story 4: Varuna (Truth & Cosmic Law)
  - [ ] 15.4.1 Write adapted story
  - [ ] 15.4.2 Generate comic panels
  - [ ] 15.4.3 Get relevant shloka
  - [ ] 15.4.4 Write lesson & quiz
  
- [ ] 15.5 Story 5: Ashvins (Teamwork)
  - [ ] 15.5.1 Write adapted story
  - [ ] 15.5.2 Generate comic panels
  - [ ] 15.5.3 Get relevant shloka
  - [ ] 15.5.4 Write lesson & quiz

### 16. Visual Assets
- [ ] 16.1 Character sprites
  - [ ] 16.1.1 Indra (warrior god)
  - [ ] 16.1.2 Agni (fire deity)
  - [ ] 16.1.3 Vritra (dragon)
  - [ ] 16.1.4 Ushas (dawn goddess)
  - [ ] 16.1.5 Varuna (ocean god)
  - [ ] 16.1.6 Ashvins (twin healers)
  
- [ ] 16.2 Backgrounds
  - [ ] 16.2.1 Sky/clouds (battles)
  - [ ] 16.2.2 Sacred fire altar
  - [ ] 16.2.3 Dawn/sunrise scene
  - [ ] 16.2.4 Ocean/water scene
  - [ ] 16.2.5 Divine realm
  
- [ ] 16.3 UI assets
  - [ ] 16.3.1 Homepage hero background
  - [ ] 16.3.2 Vedic patterns/borders
  - [ ] 16.3.3 Deity icons
  - [ ] 16.3.4 Theme icons

---

## ✨ **PHASE 6: POLISH & OPTIMIZATION** (Day 6 - Oct 5)

### 17. Animations & Interactions
- [ ] 17.1 Page transitions
- [ ] 17.2 Card hover effects
- [ ] 17.3 Smooth scrolling
- [ ] 17.4 Loading states
- [ ] 17.5 Skeleton screens

### 18. Mobile Optimization
- [ ] 18.1 Test all pages on mobile
- [ ] 18.2 Touch gestures for comic panels
- [ ] 18.3 Mobile navigation menu
- [ ] 18.4 Responsive images
- [ ] 18.5 Font size adjustments

### 19. Performance
- [ ] 19.1 Image optimization (WebP format)
- [ ] 19.2 Lazy loading images
- [ ] 19.3 Code splitting
- [ ] 19.4 Bundle size analysis
- [ ] 19.5 Lighthouse audit (target: 90+ score)

### 20. Accessibility
- [ ] 20.1 Alt text for all images
- [ ] 20.2 Keyboard navigation
- [ ] 20.3 ARIA labels
- [ ] 20.4 Color contrast check
- [ ] 20.5 Screen reader testing

---

## 🚀 **PHASE 7: DEPLOYMENT & DEMO** (Day 7-8 - Oct 6-7)

### 21. Deployment
- [ ] 21.1 Setup Vercel project
  - [ ] 21.1.1 Connect GitHub repo
  - [ ] 21.1.2 Configure build settings
  - [ ] 21.1.3 Set environment variables (if any)
  
- [ ] 21.2 Deploy to production
  - [ ] 21.2.1 First deployment
  - [ ] 21.2.2 Test all routes work
  - [ ] 21.2.3 Test on mobile devices
  - [ ] 21.2.4 Fix any deployment issues
  
- [ ] 21.3 Custom domain (optional)
  - [ ] 21.3.1 Purchase/configure domain
  - [ ] 21.3.2 Setup DNS
  - [ ] 21.3.3 SSL certificate

### 22. About Page
- [ ] 22.1 Create About.tsx (`src/pages/About.tsx`)
  - [ ] 22.1.1 Project description
  - [ ] 22.1.2 How to use
  - [ ] 22.1.3 Attribution & sources
  - [ ] 22.1.4 Team/creator info
  - [ ] 22.1.5 Hackathon context

### 23. Demo Video
- [ ] 23.1 Script demo flow (30-60 seconds)
  - [ ] 23.1.1 Show homepage (5s)
  - [ ] 23.1.2 Click deity path (10s)
  - [ ] 23.1.3 Select story (5s)
  - [ ] 23.1.4 Show comic panels (20s)
  - [ ] 23.1.5 Show lesson & shloka (10s)
  - [ ] 23.1.6 End screen (10s)
  
- [ ] 23.2 Record demo
  - [ ] 23.2.1 Screen recording (1080p)
  - [ ] 23.2.2 Add background music (optional)
  - [ ] 23.2.3 Add text overlays
  
- [ ] 23.3 Upload to YouTube
  - [ ] 23.3.1 Upload video
  - [ ] 23.3.2 Write description
  - [ ] 23.3.3 Add #RigVedaHack tag

### 24. Final Testing
- [ ] 24.1 Cross-browser testing (Chrome, Firefox, Safari)
- [ ] 24.2 Device testing (desktop, tablet, mobile)
- [ ] 24.3 Performance check (<3s load time)
- [ ] 24.4 All links working
- [ ] 24.5 No console errors
- [ ] 24.6 Content accuracy review

### 25. Submission
- [ ] 25.1 Prepare submission post
  - [ ] 25.1.1 One-line pitch
  - [ ] 25.1.2 Live link
  - [ ] 25.1.3 Demo video link
  - [ ] 25.1.4 GitHub link
  - [ ] 25.1.5 #RigVedaHack tag
  
- [ ] 25.2 Update README with final info
  - [ ] 25.2.1 Live demo link
  - [ ] 25.2.2 Video link
  - [ ] 25.2.3 Screenshots
  
- [ ] 25.3 Submit before Oct 7, 11:59 PM IST
  - [ ] 25.3.1 Double-check all requirements met
  - [ ] 25.3.2 Post submission
  - [ ] 25.3.3 Celebrate! 🎉

---

## 📊 **Progress Tracking**

Update this section daily:

- **Sept 30**: Phase 1 - Steps 1, 2, 3 ✅ **COMPLETED**
  - ✅ 1.1 Navbar component (Desktop + Mobile)
  - ✅ 1.2 Footer component (Sources, Attribution)
  - ✅ 1.3 App.tsx layout structure
  - ✅ 2.1 Hero section (Title, Tagline, Description)
  - ✅ 2.2 PathCard component + 3 cards (Deity, Theme, Mandala)
  - ✅ 2.4 Stats bar (Hymns, Mandalas)
  - ✅ 3.1 Vedic color theme (Amber, Saffron, Gold)
  - ✅ 3.3 Responsive design implemented
  
- **Oct 1**: Phase 2 - Steps 4, 5, 6 ☐ **NEXT**
- **Oct 2**: Phase 3 - Steps 7, 8, 9, 10 ☐
- **Oct 3**: Phase 4 (Part 1) - Steps 11, 12 ☐
- **Oct 4**: Phase 4 (Part 2) - Steps 13, 14 ☐
- **Oct 5**: Phase 6 - Steps 17, 18, 19, 20 ☐
- **Oct 6**: Phase 7 (Part 1) - Steps 21, 22, 23 ☐
- **Oct 7**: Phase 7 (Part 2) - Steps 24, 25 ☐

---

## 🎯 **Quick Reference: Key Decisions Made**

✅ **Navigation Structure**: 3 paths (Deity, Theme, Mandala)
✅ **Target Audience**: School kids (8-12), Teens (13-18), Scholars
✅ **Routing**: Page-based with React Router
✅ **Theme**: Ancient Vedic (saffron, amber, gold, cream)
✅ **Content Sources**: Griffith (1896), VedaWeb, Sacred-Texts
✅ **MVP Stories**: 5 stories (Indra, Agni, Ushas, Varuna, Ashvins)
✅ **Comic Format**: 5-6 panels per story
✅ **Tech Stack**: React 18, TypeScript, TailwindCSS, Framer Motion, Vite

---

**Let's build something amazing! 🔥**
