# Excellence Secondary School Website

A complete, professional, dynamic and responsive website for a secondary school in Lagos, Nigeria.

![Excellence Secondary School](https://img.shields.io/badge/School-Excellence%20Secondary-green)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🎓 Project Overview

This is a modern, fully responsive website designed for Excellence Secondary School in Lagos, Nigeria. The website features a clean, professional design with all essential sections for a secondary school including admissions, academics, student life, gallery, news, and contact information.

## ✨ Features

### Complete Sections
- **Homepage** - Hero section, principal's welcome, quick stats, announcements, and quick links
- **About Us** - School history, mission, vision, core values, and school anthem
- **Academics** - Curriculum (JSS 1-3, SSS 1-3), academic calendar, and exam preparation (WAEC, NECO, JAMB)
- **Admissions** - Requirements, application process, fees structure, downloadable forms
- **Students** - Student portal access, co-curricular activities, sports, and welfare services
- **Gallery** - Photo gallery with lightbox functionality
- **News & Events** - Latest news articles and upcoming events calendar
- **Contact** - Contact form, school address, phone/email, and social media links

### Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Mobile-first approach with hamburger menu
- ✅ Smooth scrolling navigation
- ✅ Active navigation highlighting (scroll spy)
- ✅ Animated counters for statistics
- ✅ Form validation (client-side)
- ✅ Gallery lightbox/modal functionality
- ✅ Back to top button with fade effect
- ✅ Modern CSS animations and transitions
- ✅ Accessibility features (ARIA labels, semantic HTML)
- ✅ SEO-friendly structure with meta tags
- ✅ Cross-browser compatible

### Design Specifications
- **Color Scheme**: 
  - Primary: Nigerian Green (#008751)
  - Secondary: Gold/Yellow (#FFD700)
  - Clean, professional educational theme
- **Typography**: Poppins and Roboto fonts via Google Fonts
- **Icons**: Font Awesome 6.4.0
- **Framework**: Bootstrap 5.3.0
- **Layout**: Flexbox and CSS Grid

## 📁 File Structure

```
/
├── index.html          # Main HTML file with all sections
├── css/
│   └── style.css      # Custom responsive styles
├── js/
│   └── main.js        # Interactive JavaScript features
├── images/
│   └── .gitkeep       # Placeholder for images directory
└── README.md          # This file
```

## 🚀 Setup Instructions

### Quick Start

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/lagos-secondary-school.git
   cd lagos-secondary-school
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!
   - All libraries are loaded via CDN

3. **Local Development**
   - Use a local server for best experience:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using PHP
   php -S localhost:8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
   - Then open http://localhost:8000 in your browser

### Customization

#### 1. School Information
Edit `index.html` to update:
- School name (search for "Excellence Secondary School")
- Principal's name and message
- Contact information (address, phone, email)
- School statistics (students, years, staff)
- Academic calendar dates
- Fees structure

#### 2. Colors and Branding
Edit `css/style.css`:
```css
:root {
    --primary-color: #008751;    /* Nigerian Green */
    --secondary-color: #FFD700;  /* Gold/Yellow */
    /* Modify these to match your school colors */
}
```

#### 3. Adding Images
- Place school photos in the `images/` directory
- Update image references in `index.html`
- Recommended image sizes:
  - Hero background: 1920x1080px
  - Gallery images: 800x600px
  - Icons/logos: 512x512px

#### 4. Social Media Links
Update social media URLs in `index.html`:
- Facebook, Twitter, Instagram, YouTube links are in the footer and contact sections
- Replace `#` with actual social media URLs

## 🌐 Deployment

### GitHub Pages (Free Hosting)

1. **Create Repository**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select branch (main/master)
   - Click Save

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/repo-name/`

### Alternative Hosting Options

- **Netlify**: Drag and drop deployment
  - Visit [netlify.com](https://www.netlify.com)
  - Drag your project folder
  - Get instant hosting

- **Vercel**: Git-based deployment
  - Connect your GitHub repository
  - Automatic deployments on push

- **Traditional Web Hosting**
  - Upload all files via FTP
  - Ensure file permissions are correct
  - Configure domain if needed

## 🎨 Customization Guide

### Adding New Sections
1. Add HTML section in `index.html`
2. Add navigation link in the navbar
3. Style in `css/style.css`
4. Add smooth scroll handling in `js/main.js`

### Modifying Forms
The contact form includes validation. To modify:
1. Edit form fields in `index.html`
2. Update validation logic in `js/main.js` (`initFormValidation` function)
3. Connect to backend/email service (not included - client-side only)

### Changing Layout
- Bootstrap 5 grid system is used
- Modify column classes (col-md-6, col-lg-4, etc.)
- Adjust breakpoints in CSS media queries

## 💻 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **Mobile**: < 768px (hamburger menu, stacked layout)
- **Tablet**: 768px - 1024px (adjusted layouts)
- **Desktop**: > 1024px (full layout)

## ⚡ Performance

- Optimized for fast loading
- CDN-hosted libraries
- Minimal custom CSS/JS
- Lazy loading ready
- Optimized for slower connections (common in Nigeria)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus states for interactive elements
- Alt texts for images (add when images are included)
- Screen reader friendly

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Bootstrap 5.3.0** - Responsive framework
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Poppins & Roboto typography

## 📄 Nigerian Education Context

This website is specifically designed for Nigerian secondary schools and includes:
- JSS 1-3 (Junior Secondary School) terminology
- SSS 1-3 (Senior Secondary School) terminology
- WAEC (West African Examinations Council) reference
- NECO (National Examinations Council) reference
- JAMB (Joint Admissions and Matriculation Board) reference
- NERDC (Nigerian Educational Research and Development Council) reference
- Nigerian Naira (₦) currency for fees
- Lagos-specific location information
- Typical Nigerian school hours (7:30 AM - 2:30 PM)

## 🎯 Features Checklist

- [x] Responsive design (mobile, tablet, desktop)
- [x] All required sections implemented
- [x] Smooth scroll navigation
- [x] Active navigation highlighting
- [x] Animated statistics counters
- [x] Form validation
- [x] Gallery with lightbox
- [x] Back to top button
- [x] Mobile hamburger menu
- [x] Professional color scheme
- [x] Accessibility features
- [x] SEO meta tags
- [x] Cross-browser compatibility
- [x] Fast loading optimized

## 📝 Content Guidelines

When adding content:
- Use professional, educational tone
- Keep paragraphs concise and readable
- Include relevant Nigerian educational context
- Use high-quality images (when added)
- Maintain consistent formatting
- Update dates and information regularly

## 🚨 Important Notes

1. **Forms**: Contact form is client-side only. To receive actual emails, integrate with:
   - FormSpree
   - EmailJS
   - Backend API (PHP, Node.js, etc.)

2. **Student Portal**: Button shows alert. Implement actual portal integration separately.

3. **Downloadable Forms**: Links are placeholder (#). Upload PDFs and update URLs.

4. **Images**: Currently using icon placeholders. Add actual school photos for production.

5. **Google Maps**: Placeholder included. Get embed code from Google Maps for actual map.

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: info@excellenceschool.edu.ng (update with actual email)

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Credits

- **Design & Development**: Custom built for Excellence Secondary School
- **Icons**: Font Awesome (https://fontawesome.com)
- **Fonts**: Google Fonts (https://fonts.google.com)
- **Framework**: Bootstrap (https://getbootstrap.com)

## 🎓 About Excellence Secondary School

Excellence Secondary School is a premier educational institution in Lagos, Nigeria, committed to providing quality education that develops academic excellence, strong moral character, and leadership skills in students.

**Motto**: Education for Excellence, Character for Life

---

**Built with ❤️ for Quality Education in Nigeria**

For more information, visit the website or contact the school administration.

## 🔄 Version History

- **v1.0.0** (2024-01-08) - Initial release with all core features

## 📚 Additional Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated**: January 2024
