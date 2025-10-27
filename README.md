# SentriMorph - Advanced Cyber Defense Partner

A modern, dark-themed cybersecurity company website built with Next.js, Tailwind CSS, Lucide Icons, and Email.js.

## Features

- 🌐 Responsive design optimized for all devices
- 🎨 Dark theme with red accents
- 📧 Contact form integration with Email.js
- 🎯 Smooth scrolling navigation
- ⚡ Fast performance with Next.js
- 🎭 Modern UI components

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with your Email.js credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Email.js Setup

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Add your credentials to `.env.local`

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout
│   └── page.js          # Home page
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── CyberDefense.jsx # Defense partner section
│   ├── Services.jsx     # Services section
│   ├── Industries.jsx   # Industries accordion
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer component
└── public/              # Static assets
```

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **Email.js** - Email service integration

## License

© 2023 SentriMorph. All rights reserved.

