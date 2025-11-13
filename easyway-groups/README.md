# Easy Way Groups - Modern Corporate Website

A comprehensive, creative website for Easy Way Groups showcasing three sub-companies: Easy Way Education, Easy Way Technologies, and Easy Way Media.

## 🎨 Design Features

### Creative Layouts & Components
- **Hero Section**: Animated parallax background with floating cards
- **Companies Grid**: Asymmetric card layout with hover effects
- **Services Section**: Diagonal alternating layout with image placeholders
- **Stats Section**: Dark theme with glassmorphism cards and counter animations
- **Testimonials Carousel**: Auto-rotating with manual controls and dot indicators
- **Bento Grid**: Modern "Why Choose Us" section with varied card sizes
- **Case Studies Carousel**: Infinite scrolling carousel with category badges
- **CTA Section**: Gradient background with parallax effects

### Interactive Features
- Smooth scroll navigation with anchor links
- Parallax scrolling effects on multiple sections
- Auto-animating counter for statistics
- Testimonials carousel with auto-advance (5s interval)
- Scroll-to-top button
- Mobile-responsive hamburger menu
- Intersection Observer for lazy animations
- Smooth transitions and hover effects throughout

### Modern Design Elements
- Gradient text effects on logos and titles
- Glassmorphism effects (backdrop blur)
- Smooth animations and transitions
- Color-coded company sections (Education: Green, Technology: Blue, Media: Pink)
- Professional typography with Google Fonts (Inter + Playfair Display)
- Responsive grid layouts
- Shadow and depth effects

## 📁 Project Structure

```
easyway-groups/
├── index.html          # Main HTML file with all sections
├── css/
│   └── style.css       # Complete styling with animations
├── js/
│   └── script.js       # Interactive features and animations
├── images/             # Image placeholder directory
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development
1. Navigate to the project folder
2. Start a local server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   ```
3. Open `http://localhost:8000` in your browser

### File Modifications
- **Images**: Replace `[Image Placeholder]` text with actual image paths in the `images/` folder
- **Content**: Edit text content directly in `index.html`
- **Colors**: Modify CSS variables in `css/style.css` (`:root` section)
- **Animations**: Adjust animation timing in `css/style.css` keyframes

## 🎯 Key Sections

### 1. Navigation
- Fixed sticky navbar with dropdown menus
- Mobile hamburger menu
- Smooth scroll to sections

### 2. Hero Section
- Large animated title with gradient text
- Floating company cards
- Call-to-action buttons
- Scroll indicator

### 3. Companies Overview
- Large Education card (spans 2 columns)
- Medium Technology and Media cards
- Feature lists with checkmarks
- Explore buttons

### 4. Services
- 6 diagonal service items
- Alternating left-right layout
- Service tags and descriptions
- Image placeholders

### 5. Statistics
- 4 animated counters
- Dark background with glassmorphism
- Parallax effect

### 6. Testimonials
- 3-slide carousel
- Auto-advance every 5 seconds
- Manual navigation buttons
- Dot indicators

### 7. Why Choose Us
- Bento grid layout (4 columns)
- Mixed card sizes
- Icons and descriptions
- Support features

### 8. Case Studies
- Infinite scrolling carousel
- 4 case study cards
- Category badges
- Read more buttons

### 9. Call-to-Action
- Gradient background
- Parallax layer
- Two action buttons

### 10. Footer
- 5-column layout
- Company links
- Social media links
- Legal links

## 🎨 Color Scheme

```css
Primary Blue: #2563eb
Secondary Purple: #7c3aed
Accent Gold: #f59e0b
Dark Background: #0f172a
Light Background: #f8fafc

Education Green: #10b981
Technology Blue: #3b82f6
Media Pink: #ec4899
```

## 📱 Responsive Breakpoints

- **Desktop**: 1400px max-width container
- **Tablet**: 1200px and below
- **Mobile**: 768px and below
- **Small Mobile**: 480px and below

## ✨ Animations

- **fadeInUp**: Elements fade in and slide up
- **fadeInRight**: Elements fade in and slide right
- **float**: Cards float up and down
- **scroll**: Infinite scrolling carousel
- **slideCarousel**: Case studies carousel
- **scrollDown**: Scroll indicator animation

## 🔧 JavaScript Features

- Navbar scroll detection
- Mobile menu toggle
- Testimonials carousel with auto-advance
- Parallax scrolling
- Counter animations with Intersection Observer
- Smooth anchor link scrolling
- Scroll-to-top button
- Responsive menu handling

## 📝 Customization Tips

1. **Add Real Images**: Replace placeholder divs with actual image tags
2. **Update Company Info**: Modify company descriptions and features
3. **Change Colors**: Update CSS variables in `:root`
4. **Add More Testimonials**: Duplicate `.testimonial-slide` divs
5. **Modify Services**: Edit the 6 service items in the services section
6. **Update Footer**: Add real links and social media URLs

## 🌐 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## 📄 License

This website template is created for Easy Way Groups.

---

**Created**: November 2025
**Design Inspiration**: Modern SaaS and corporate websites
**Technologies**: HTML5, CSS3, Vanilla JavaScript
