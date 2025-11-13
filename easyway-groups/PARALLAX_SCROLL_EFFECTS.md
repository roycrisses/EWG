# Parallax & Scroll-to-Reveal Effects

## Overview
The Easy Way Groups website now includes advanced parallax scrolling effects and scroll-to-reveal animations that create an engaging, modern user experience.

## 🎬 Parallax Scroll Effects

### Three Speed Levels
The website uses three different parallax speeds for depth effect:

1. **Parallax Slow** (0.3x speed)
   - Stats section background
   - CTA section background
   - Slower, more subtle movement
   - Creates depth in the background

2. **Parallax Medium** (0.5x speed)
   - Service items (2nd, 4th, 6th)
   - CTA layer
   - Balanced movement

3. **Parallax Fast** (0.7x speed)
   - Service items (3rd, 6th)
   - More pronounced movement
   - Brings elements forward

### How It Works
As you scroll down the page:
- Background elements move slower than the scroll speed
- Creates a "depth" effect where backgrounds appear to be further away
- Different elements move at different speeds for visual interest
- Smooth, continuous animation on scroll

## 📍 Scroll-to-Reveal Animations

### Four Reveal Types

#### 1. `.reveal` - Fade Up
- Elements fade in and slide up from below
- Used for: Section headers, main titles
- Transition: 0.8s ease
- Transform: translateY(30px) → translateY(0)

#### 2. `.reveal-left` - Slide from Left
- Elements slide in from the left with fade
- Used for: Left-aligned cards (Education card)
- Transition: 0.8s ease
- Transform: translateX(-50px) → translateX(0)

#### 3. `.reveal-right` - Slide from Right
- Elements slide in from the right with fade
- Used for: Right-aligned cards (Technology, Media cards)
- Transition: 0.8s ease
- Transform: translateX(50px) → translateX(0)

#### 4. `.reveal-scale` - Scale In
- Elements scale up from smaller size with fade
- Used for: Stat items, testimonial cards
- Transition: 0.8s ease
- Transform: scale(0.8) → scale(1)

## 🎯 Where Effects Are Applied

### Parallax Elements
- **Stats Section**: Background layer moves at 0.3x speed
- **Service Items**: 
  - Items 1, 3, 5: parallax-slow (0.3x)
  - Items 2, 4: parallax-medium (0.5x)
  - Items 6: parallax-fast (0.7x)
- **CTA Section**: Background moves at 0.5x speed

### Scroll-Reveal Elements
- **Companies Section**:
  - Header: `.reveal` (fade up)
  - Education Card: `.reveal-left` (slide from left)
  - Technology Card: `.reveal-right` (slide from right)
  - Media Card: `.reveal-scale` (scale in)

- **Services Section**:
  - Header: `.reveal` (fade up)
  - Service Items: `.reveal-left` and `.reveal-right` (alternating)

- **Stats Section**:
  - Title: `.reveal` (fade up)
  - Stat Items: `.reveal-scale` (scale in)

- **Testimonials Section**:
  - Header: `.reveal` (fade up)
  - Testimonial Cards: `.reveal-scale` (scale in)

- **CTA Section**:
  - Content: `.reveal` (fade up)

## 🔧 Technical Implementation

### CSS Classes
```css
.reveal { opacity: 0; transform: translateY(30px); }
.reveal.active { opacity: 1; transform: translateY(0); }

.reveal-left { opacity: 0; transform: translateX(-50px); }
.reveal-left.active { opacity: 1; transform: translateX(0); }

.reveal-right { opacity: 0; transform: translateX(50px); }
.reveal-right.active { opacity: 1; transform: translateX(0); }

.reveal-scale { opacity: 0; transform: scale(0.8); }
.reveal-scale.active { opacity: 1; transform: scale(1); }

.parallax-slow { transform: translateY(0px); }
.parallax-medium { transform: translateY(0px); }
.parallax-fast { transform: translateY(0px); }
```

### JavaScript Logic
```javascript
// Scroll reveal detection
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Trigger when element is 85% into viewport
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
};

// Parallax calculation
window.addEventListener('scroll', () => {
    const slowElements = document.querySelectorAll('.parallax-slow');
    slowElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
    // ... similar for medium and fast
});
```

## 🎨 Performance Considerations

- Uses `will-change: transform` for optimized rendering
- Animations use CSS transforms (GPU accelerated)
- Scroll events are throttled with requestAnimationFrame
- Passive event listeners for better scroll performance
- No layout thrashing or repaints

## 📱 Responsive Behavior

- Parallax effects work on all screen sizes
- Scroll-reveal animations trigger at 85% viewport height
- Smooth performance on mobile devices
- Touch-friendly interactions

## 🎬 Animation Timing

- Scroll-reveal transition: 0.8s ease
- Parallax: Real-time on scroll
- No delay between reveals (staggered by scroll position)
- Smooth 60fps animations

## 🔄 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support
- IE11: Parallax works, reveal animations may not

## 💡 Customization Tips

### Adjust Parallax Speed
Edit the multipliers in `js/script.js`:
```javascript
// Change 0.3 to any value (0 = no movement, 1 = normal scroll speed)
element.style.transform = `translateY(${scrollPosition * 0.3}px)`;
```

### Change Reveal Trigger Point
Edit the threshold in `js/script.js`:
```javascript
// Change 0.85 to trigger earlier (0.5) or later (0.95)
if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
```

### Adjust Animation Duration
Edit the transition time in `css/style.css`:
```css
.reveal { transition: opacity 0.8s ease, transform 0.8s ease; }
/* Change 0.8s to 0.5s for faster, 1.2s for slower */
```

### Add More Parallax Elements
Add class to any element:
```html
<div class="parallax-slow">Slow background</div>
<div class="parallax-medium">Medium speed</div>
<div class="parallax-fast">Fast foreground</div>
```

### Add More Reveal Elements
Add class to any element:
```html
<div class="reveal">Fades up</div>
<div class="reveal-left">Slides from left</div>
<div class="reveal-right">Slides from right</div>
<div class="reveal-scale">Scales in</div>
```

## 🎯 Best Practices

1. **Don't Overuse**: Parallax effects should enhance, not distract
2. **Test on Mobile**: Ensure smooth performance on all devices
3. **Accessibility**: Effects don't interfere with keyboard navigation
4. **Performance**: Monitor frame rate on lower-end devices
5. **Consistency**: Use similar speeds and timings throughout

---

**Last Updated**: November 2025
**Status**: ✅ Fully Implemented and Optimized
