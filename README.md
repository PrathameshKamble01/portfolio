# Prathamesh Kamble - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcasing full-stack development expertise with Spring Boot, React, Android Kotlin, and international experience.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with dark mode support
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Performance**: Static generation and optimized images
- **Professional Sections**:
  - Homepage with hero section
  - About page with career journey
  - Experience timeline
  - Skills showcase with certifications
  - Projects portfolio
  - Contact form

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Analytics**: Vercel Analytics

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/PrathameshKamble01/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your EmailJS credentials (see Pre-Deployment Checklist below)
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Prerequisites

Before running this project, make sure you have:
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Type checking (if available)

# Additional commands
npm run export       # Export static site (if configured)
```

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Add your custom domain in Vercel settings

## 📁 Project Structure

```
├── components/          # Reusable UI components
│   ├── Footer.tsx      # Site footer with social links
│   ├── Navbar.tsx      # Navigation bar
│   ├── PageTransition.tsx # Page transition animations
│   └── ProjectCard.tsx # Project showcase card
├── pages/              # Next.js pages (App Router)
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Homepage with hero section
│   ├── about.tsx       # About page with career journey
│   ├── experience.tsx  # Experience timeline
│   ├── skills.tsx      # Skills & certifications
│   ├── projects.tsx    # Projects showcase
│   ├── contact.tsx     # Contact form page
│   └── contant.tsx     # Alternative contact page
├── public/             # Static assets
│   ├── profile.png     # Profile photo
│   ├── prathamesh.pdf  # Resume/CV
│   └── *.svg           # Icon assets
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports and custom styles
├── .env.local          # Environment variables (create from .env.local.example)
├── tailwind.config.js  # Tailwind CSS configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `pages/index.tsx` - Hero section and personal details
- `pages/about.tsx` - About content and career story
- `pages/experience.tsx` - Work experience details
- `pages/skills.tsx` - Skills and certifications
- `pages/projects.tsx` - Project portfolio
- `pages/contact.tsx` - Contact information

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `styles/globals.css`
- Component-specific styles are inline with Tailwind classes

## 🐛 Troubleshooting

### Common Issues:

**EmailJS not working:**
- Ensure `.env.local` file exists with correct EmailJS credentials
- Restart the development server after adding environment variables
- Check browser console for EmailJS errors

**Images not loading:**
- Verify image files exist in the `public/` directory
- Clear browser cache or use incognito mode
- Check image file names match the code references

**Build errors:**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run lint`
- Verify Node.js version is 18.x or higher

**Styling issues:**
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Verify dark mode classes are correctly applied

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] **Set up EmailJS for contact form**:
  1. Create a free account at [emailjs.com](https://www.emailjs.com/)
  2. Create an email service (Gmail, Outlook, etc.)
  3. Create an email template with these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_name}}`
  4. Copy your Service ID, Template ID, and Public Key from the EmailJS dashboard
  5. Update the `.env.local` file in the root directory:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
     ```
  6. Restart the development server after updating environment variables
- [ ] Add your CV/resume as `public/prathamesh.pdf`
- [ ] Replace the avatar placeholder in `pages/index.tsx` with your actual photo
- [ ] Verify all GitHub repository links are accessible
- [ ] Update contact email if needed
- [ ] Test the build locally: `npm run build`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prathamesh Kamble**
- Website: [prathameshkamble.dev](https://prathameshkamble.dev)
- LinkedIn: [linkedin.com/in/prathamesh-kamble-000/](https://linkedin.com/in/prathamesh-kamble-000/)
- GitHub: [github.com/PrathameshKamble01](https://github.com/PrathameshKamble01)
- Email: prathamesh.kamble.1221@gmail.com

---

Built with ❤️ using Next.js and deployed on Vercel.
