# PeerRoast - MVP (Milestone-1)

PeerRoast is an async feedback exchange where indie creators, student developers, and founders get constructive critique on their MVPs before launch.

## 🚀 Built For
Milestone-1 Submission (Next.js, Modular React Components, React Context, Tailwind CSS).

## 📁 Repository Structure
```
├── app/
│   ├── layout.js          # Root layout & Context Provider wrapper
│   ├── page.js            # Home page & discovery feed
│   ├── project/[id]/
│   │   └── page.js        # Detailed project roast & feedback page
│   └── globals.css        # Tailwind directives and custom scrollbars
├── components/
│   ├── Navbar.js          # Main navigation bar
│   ├── ProjectCard.js     # Project summary card with upvote toggle
│   ├── SubmitModal.js     # Form modal to pitch/submit an MVP
│   ├── Badge.js           # Reusable badge tag
│   └── Button.js          # Reusable styled button
├── context/
│   └── ProjectContext.js  # React Context for global state & dummy data
├── PRODUCT-ASSUMPTIONS.md # Deliverable 1
├── DESIGN-SYSTEM.md       # Deliverable 2
└── package.json
```

## 🛠️ Getting Started
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:3000
```
