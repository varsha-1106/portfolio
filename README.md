# Varsha T. — Personal AI & Engineering Portfolio 🚀

A production-quality, personalized personal portfolio website engineered for **Varsha T.**, an aspiring AI Engineer and Artificial Intelligence & Machine Learning engineering student at Sri Sairam College of Engineering.

Inspired by the cinematic, dark editorial aesthetic of **MotionSites.ai "Dark Portfolio"**, this website replaces generic student templates with bespoke typography, subtle glowing borders, floating interface previews, responsive layouts, and genuine project narratives.

---

## 🎨 Visual Design System

- **Background:** `#0A0A0A` (Deep Obsidian)
- **Secondary Surface:** `#141414` / `#121212`
- **Primary Text:** `#F5F5F5`
- **Muted Text:** `#888888`
- **Border:** `#1F1F1F`
- **Accent:** Steel Blue / Cool Blue (`#4E85BF` to `#89AACC`)
- **Typography:**
  - **Display / Headlines:** *Instrument Serif* (Google Fonts)
  - **Body / Interface / Monospace:** *Inter* & System Monospace

---

## 📸 Personal Portrait Assets

Varsha's real studio portraits have been integrated into `/public/images/`:
- `public/images/varsha-profile.png` *(Studio Portrait)*
- `public/images/varsha-profile-glasses.png` *(Executive Glasses Portrait)*

Visitors can toggle between both professional looks directly from the hero portrait frame using the integrated view switcher!

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment Ready:** Vercel / Netlify / Node.js

---

## 📂 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── varsha-profile.png           # Primary studio portrait
│   │   └── varsha-profile-glasses.png   # Executive portrait with glasses
│   ├── favicon.svg                      # Custom VT. monogram icon
│   └── resume.pdf                       # (Place your final PDF resume here)
├── src/
│   ├── app/
│   │   ├── globals.css                  # Custom styling, fonts, glassmorphism
│   │   ├── layout.tsx                   # SEO Metadata, OpenGraph & Viewport
│   │   └── page.tsx                     # Main page composition
│   ├── components/
│   │   ├── hero/                        # Hero section & floating interface previews
│   │   ├── navbar/                      # Floating pill navigation with section spy
│   │   ├── about/                       # Editorial perspective & core traits
│   │   ├── projects/                    # Interactive gallery, abstract visuals, modal
│   │   ├── skills/                      # Active toolkit (growth mindset, no fake bars)
│   │   ├── education/                   # Sri Sairam College of Engineering card
│   │   ├── experience/                  # Smart India Hackathon, Ideathons, Leadership
│   │   ├── journey/                     # Learning roadmap & milestone timeline
│   │   ├── github/                      # Live public repository feed & fallback
│   │   ├── resume/                      # Resume download card & mail request
│   │   ├── contact/                     # Direct contacts, email copier, message form
│   │   └── footer/                      # Editorial copyright & back-to-top
│   ├── data/
│   │   ├── personal.ts                  # All personal brand info, bio & credentials
│   │   └── projects.ts                  # All 5 projects with extensible schema
│   └── types/
│       └── index.ts                     # TypeScript data interfaces
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Running the Project

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm start
```

---

## ✏️ How to Customize

1. **Adding Your Resume PDF:**
   Place your finalized resume file at `public/resume.pdf`. The download button on the site will automatically download it without code changes!
2. **Updating Project Information:**
   Open `src/data/projects.ts` to add repository URLs, modify project descriptions, or add live demo links as development progresses.
3. **Updating Bio & Activities:**
   Open `src/data/personal.ts` to update semesters, credentials, hackathons, or contact details.
