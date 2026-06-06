# Product Requirements Document (PRD): LocalHype Website

## 1. Project Overview

**Objective:** To develop a fully responsive, high-converting, single-page landing site for LocalHype. The site must clearly communicate the value proposition to two distinct audiences (Local Businesses and Community Members) while adopting a modern, bold, and energetic visual language inspired by the provided reference design.

**Tech Stack:**

* **Framework:** Next.js (App Router recommended)
* **Styling:** Tailwind CSS
* **UI Components:** `shadcn/ui` (Highly recommended for accessible, customizable base components like Cards, Buttons, and Accordions that can easily be styled to match the reference).
* **Deployment:** Vercel (recommended)

---

## 2. Design System & Theming

### Color Palette (Tailwind Configuration)

You will need to extend your `tailwind.config.js` with these exact brand colors.

* **Primary Action (Orange):** `#FA4101` — Use for primary backgrounds, active states, and the footer.
* **Highlight/CTA (Lime Green):** `#B9E901` — Use for primary CTA buttons, high-contrast highlights, and "pop" elements.
* **Deep Accent (Purple):** `#3D06B7` — Use for massive headers, secondary backgrounds, or contrasting text against the lime green.
* **Base Black:** `#000000` — Use for standard text, thick borders (if going for the neo-brutalist look), and hard shadows.
* **Base White:** `#FFFFFF` — Use for card backgrounds, floating UI elements, and text on top of the Orange/Purple backgrounds.

### Typography Setup

* **Primary/Headings:** `Bricolage Grotesque` (Google Fonts). Use this for all big, bold headlines. It gives that slightly quirky, modern tech feel seen in the reference. Keep font weights heavy (700-900) and trackings tight (letter-spacing: tighter).
* **Secondary/Accents/Body:** `Barlow Condensed` (Google Fonts). Use this for the "pill" tags above headings, navigation links, and smaller subtext.
* *Note:* For long paragraphs of body text, consider a clean sans-serif like `Inter` or `DM Sans` if Barlow Condensed feels too squished for readability, but keep Barlow for accents.

### UI Treatment (Inspired by Reference)

* **Pill Badges:** Small, rounded borders around uppercase text (e.g., `[ Introducing LocalHype ]`) sitting just above main section headers.
* **Cards:** Use `#FFFFFF` backgrounds with thick `#000000` borders and distinct, non-blurred drop shadows (e.g., `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`) to mimic the playful, grounded look.
* **Floating Elements:** Use overlapping sections (negative margins in Tailwind, e.g., `-mt-12`) to make mobile mockups or feature cards break the boundaries of their container.

---

## 3. Page Structure & Component Breakdown

### Section 1: Navigation Bar

* **Layout:** Sticky top, slightly floating (margin top, rounded full). Background `#FFFFFF` or a semi-transparent blur.
* **Elements:**
* Left: LocalHype Logo (Font: Bricolage, Color: `#3D06B7`).
* Right: Two CTA Buttons.
* "Launch Campaign" (Solid Button: `bg-[#FA4101] text-white rounded-full`)
* "Join Community" (Outline Button: `border-2 border-black text-black rounded-full`)





### Section 2: Hero

* **Style:** Very large, centered Bricolage Grotesque text.
* **Content:** "Local Word-of-Mouth, at Scale."
* **Pill Tag:** `[ The new era of local marketing ]`
* **Visual Element:** Below the text, a floating composition of "mockups". Instead of the app UI in your reference, use floating Instagram Story mockups or stylized notification bubbles showing view counts.
* **Background:** `#FFFFFF` or a very subtle off-white pattern.

### Section 3: The Vision (Zig-Zag Layout)

* **Style:** Alternating left/right text-to-image layout.
* **Content:** "Everyone is an Influencer."
* **Design Note:** Use the deep purple (`#3D06B7`) as the background for this section, making the text white. The accompanying graphics should be simple, bold vector illustrations (like the layered boxes in the reference).

### Section 4: How It Works (Vertical Flow)

* **Style:** A centered vertical timeline or stepping layout.
* **Visual Element:** Connect the steps with a dashed line. Use large, colorful numbers (using the Lime Green `#B9E901`).
* **Content:** The 5 steps outlined previously (Choose Vibe, Setup, Activation, Hype, Insights).

### Section 5: Pricing / Packages

* **Style:** A horizontal row of cards (stacking vertically on mobile).
* **Components:** `shadcn` Card component.
* **Card Styling:**
* **Spark & Hype:** White cards, black text, black borders.
* **Buzz:** Highlighted card with a subtle Lime Green (`#B9E901`) background to make it stand out.
* **Special Reel Card:** Make this a full-width banner sitting *below* the three main pricing cards, utilizing the Orange (`#FA4101`) background with white text to separate it from the standard packages.



### Section 6: Community Section

* **Style:** High contrast. Background could be the Lime Green (`#B9E901`) with Black text and Deep Purple (`#3D06B7`) buttons.
* **Content:** "Get Paid to Explore Your City". Focus on lifestyle imagery or energetic graphics here.

### Section 7: Massive Footer (Reference Match)

* **Style:** Match the bottom of the reference image exactly.
* **Background:** Solid Orange (`#FA4101`).
* **Content:** Huge centered text ("Ready to bring the hype?"), a contrasting Lime Green CTA button (`bg-[#B9E901] text-black`), and a simple footer link row at the very bottom.

---

## 4. Mobile Responsiveness Guidelines

Since your product relies heavily on Instagram (a mobile platform), the mobile experience is paramount.

* **Typography:** Scale down `Bricolage Grotesque` headers significantly for mobile (`text-4xl` instead of `text-7xl`) to prevent word-breaking.
* **Layout:** All zig-zag layouts must collapse into a standard stack (Image on top, text on bottom) on screens smaller than `md:` (768px).
* **Pricing Cards:** Ensure the pricing cards utilize horizontal scrolling (snap scrolling) on mobile, or stack vertically with clear delineation.
* **Touch Targets:** All buttons must be at least `44px` tall for easy tapping on mobile devices.

---
