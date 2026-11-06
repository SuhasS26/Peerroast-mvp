# Product Assumptions: PeerRoast

## 1. What product are you planning to build?
PeerRoast is an async peer-review and feedback exchange platform designed for indie hackers, student builders, and early-stage startup founders before launching on public directories like Product Hunt.

## 2. What problem does it solve?
Early-stage founders build products in silos. When they launch, they often suffer from poor conversion, confusing onboarding copy, or overlooked UX bugs because they lacked unfiltered, constructive critique from fellow creators prior to launch day.

## 3. Who are the target users?
- Indie hackers, solo developers, and early-stage startup teams.
- Hackathon participants and student developers seeking peer reviews.
- Product designers looking for real-world user perspectives.

## 4. What is the main use case?
A maker submits their MVP (tagline, pitch, demo link, category, and what specific feedback they are seeking). Other builders test the demo and leave structured roasts/critiques on UX, positioning, and functionality, while upvoting the most promising ideas.

## 5. What are the core features?
- **Project Discovery Feed:** Filter submitted MVPs by category (AI, DevTools, SaaS, Productivity) and sort by upvotes.
- **Product Details & Review Page:** In-depth view featuring pitch points, live links, and actionable feedback threads.
- **Async Critique & Roast Submission:** Structured feedback form (What's great, What's confusing, Suggestions).
- **Interactive Upvoting & Filtering:** Instant client-side upvoting and category toggles powered by React Context.
- **Submit Product Modal/Form:** Form for makers to pitch their project with instant state updates across the app.

## 6. What assumptions are you making about the users?
- Builders are willing to exchange constructive criticism with fellow peers.
- Makers prefer qualitative, candid feedback over generic praise.
- Builders have an active MVP URL, GitHub repo, or Figma prototype ready to share.

## 7. What will be included in your MVP?
- Comprehensive Landing Page with hero section, live stats, and featured projects.
- Discovery Feed with category filtering and real-time search.
- Interactive Product Detail view with full roast/critique submission and upvoting.
- Submit New Project modal with form validation updating the global React Context.
- Responsive mobile & desktop layout with unified Tailwind styling.

## 8. What will NOT be included in the MVP?
- Real OAuth / backend database authentication (uses local mock session).
- Live payment gateways or tipping mechanisms.
- Automated web scraping / screenshot generation.
- Real-time WebSockets / push notifications.
