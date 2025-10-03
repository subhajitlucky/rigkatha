# 🔊 Audio Implementation Guide

## How We Implemented Authentic Vedic Chanting

### What We Discovered
Instead of using text-to-speech (which sounds robotic), we're using **pre-recorded authentic Vedic chanting** from the **AASI Archive**.

### Technical Implementation

#### 1. Audio Source
- **Repository**: [aasi-archive/rv-audio](https://github.com/aasi-archive/rv-audio)
- **License**: BSD 2-Clause (Open Source)
- **Format**: MP3 files
- **URL Pattern**: `https://github.com/aasi-archive/rv-audio/raw/main/data/{mandala}/{sukta}.mp3`

#### 2. How It Works

```typescript
// In ShlokaDisplay.tsx
const audioUrl = `https://github.com/aasi-archive/rv-audio/raw/main/data/${mandala}/${sukta}.mp3`;

// HTML5 Audio Element
<audio ref={audioRef} src={audioUrl} preload="metadata" />

// Play/Pause Toggle
const toggleAudio = () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
};
```

#### 3. Features Implemented
- ✅ **Authentic Vedic chanting** by trained pandits
- ✅ **Play/Pause toggle** with visual feedback
- ✅ **Animated button** (pulses when playing)
- ✅ **Error handling** (shows "N/A" if audio unavailable)
- ✅ **Attribution** (credits AASI Archive)
- ✅ **Responsive** (shows text on desktop, icon-only on mobile)

#### 4. Button States
- **Ready**: 🔊 "Listen" (amber button)
- **Playing**: ⏸️ "Playing..." (green, pulsing)
- **Error**: 🔇 "N/A" (gray, disabled)

### Example: RV 1.1.1 (Agni)
When user clicks the speaker button on the "अग्निमीळे पुरोहितं" shloka:
1. Fetches: `https://github.com/aasi-archive/rv-audio/raw/main/data/1/1.mp3`
2. Plays authentic Vedic chanting of Mandala 1, Hymn 1
3. User hears the exact same pronunciation used in Vedic rituals

### Why This Is Better
| Text-to-Speech | Authentic Recording |
|---|---|
| ❌ Robotic voice | ✅ Real Vedic pandit |
| ❌ Wrong pronunciation | ✅ Traditional pronunciation |
| ❌ No rhythm/melody | ✅ Proper Vedic meter |
| ❌ Lacks reverence | ✅ Sacred chanting style |

### Audio Availability
⚠️ **Note**: Not all hymns may have audio recordings. The component gracefully handles missing audio by:
- Showing a "🔇 N/A" button
- Disabling the button
- Not breaking the user experience

### Attribution Required
Per BSD 2-Clause license, we must credit AASI Archive:
```html
🎵 Audio from AASI Archive • Authentic Vedic Chanting
```

### Browser Compatibility
- ✅ **Chrome/Edge**: Full support
- ✅ **Safari**: Full support
- ✅ **Firefox**: Full support
- ✅ **Mobile browsers**: Full support

### Future Enhancements
Potential improvements:
1. **Progress bar**: Show playback progress
2. **Playback speed**: Allow 0.5x - 2x speed
3. **Loop option**: Repeat for memorization
4. **Download**: Allow offline listening
5. **Playlist**: Auto-play next hymn

---

## Credits
- **Audio Source**: [AASI Archive - Rig Veda Audio](https://github.com/aasi-archive/rv-audio)
- **Inspiration**: [Rig Veda Online](https://rigveda-online.github.io/)
- **Implementation**: RigKatha Project

---

**Built with respect for Vedic tradition** 🕉️
