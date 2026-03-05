# Lupo Motors Landing Page — Implementation Plan

## Context

Lupo Motors is a wholesale car-buying middleman in the Pacific Northwest. The owner (Drake) has 10+ years of dealer relationships, can give offers in 2-5 minutes, and covers Idaho, Oregon, Washington, Utah, NorCal, and Montana. The current website is a dead placeholder. This plan creates a high-converting landing page to receive Facebook ad traffic — mobile-first, dark premium aesthetic, optimized for speed and conversions.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 16 (App Router)** | Image optimization, static export, Script management for pixels |
| Styling | **Tailwind CSS v4** | Utility-first, fast iteration, tiny CSS bundle |
| Language | **TypeScript** | Type safety for form data and props |
| Animations | **Framer Motion** | Scroll reveals, accordion, modal transitions |
| Icons | **Lucide React** | Clean, consistent icon set |
| Forms | **React Hook Form + Zod** | Validation, multi-step state |
| Form Backend | **GoHighLevel (GHL) Webhook** | Leads route directly into GHL CRM via webhook |
| Fonts | **Inter (body) + Montserrat (headings)** via `next/font` | |
| Deployment | **Vercel** | Free tier, CDN, auto-SSL, custom domain |

---

## Brand Theme

- **Background:** `#0A0A0A` (near-black), `#111` (section alternation), `#1A1A1A` (cards)
- **Accent:** `#C0C0C0` (silver/metallic)
- **Text:** `#F5F5F5` (primary), `#999` (secondary)
- **CTA button:** White on black (`bg-white text-black`), or green accent `#4ADE80` for emphasis
- **Borders:** `#2A2A2A`, `white/10` for glass effects
- **Fonts:** Montserrat 600/700/800 (display), Inter 400/500/600 (body)
- **Glass cards:** `bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl`

---

## File Structure

```
Lupo-Motors/
├── app/
│   ├── layout.tsx              # Root layout: fonts, meta, FB Pixel, GA4
│   ├── page.tsx                # Landing page: all sections composed
│   ├── globals.css             # Tailwind + Lupo theme
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky header: logo + phone + CTA
│   │   ├── Footer.tsx          # Minimal footer
│   │   └── MobileStickyFooter.tsx  # Fixed bottom: "Call Drake" + "Get Offer"
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero with embedded VIN form
│   │   ├── TrustBar.tsx        # Stats: 2-5 min / 10+ years / 500+ cars / 6 states
│   │   ├── ProcessSteps.tsx    # 3-step: Submit → Offer → Get Paid
│   │   ├── MidCTA.tsx          # Reusable CTA block (used 3x)
│   │   ├── WhatWeBuy.tsx       # Vehicle types + price range + photo grid
│   │   ├── WhyLupo.tsx         # 5 value propositions
│   │   ├── AboutDrake.tsx      # Founder story + photo
│   │   ├── RecentPurchases.tsx # Car photo gallery
│   │   ├── TestimonialSection.tsx
│   │   ├── CoverageMap.tsx     # SVG map + state details
│   │   ├── FAQAccordion.tsx    # 10 expandable Q&As
│   │   └── FinalCTA.tsx        # Bottom CTA with repeated form
│   ├── forms/
│   │   ├── VINForm.tsx         # Step 1: VIN + Mileage
│   │   ├── LeadDetailsModal.tsx # Step 2: Details + contact info
│   │   └── FormSuccess.tsx     # Confirmation
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── StatBadge.tsx
│       └── CarCard.tsx
├── data/
│   ├── site.ts                 # Phone, email, name, URLs
│   ├── faqs.ts                 # FAQ content
│   ├── testimonials.ts
│   ├── vehicles.ts             # Recently purchased cars
│   └── coverage.ts             # Coverage area data
├── lib/
│   ├── analytics.ts            # FB Pixel + GA4 event helpers
│   └── form-validation.ts     # Zod schemas
├── public/
│   ├── logo.svg                # Placeholder until Drake provides
│   ├── cars/                   # Car photos (placeholder images)
│   ├── drake-headshot.webp     # Placeholder
│   └── pnw-map.svg            # Coverage area SVG
├── types/index.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── .env.local                  # Pixel IDs, form endpoint
```

---

## Page Flow (14 Sections)

### 1. Sticky Header
Logo left, phone number + "Get My Offer" button right. Transparent on load, solid dark `bg-black/95 backdrop-blur-md` on scroll past 100px. No navigation links (landing page — keep them on the page).

### 2. Hero Section (MOST CRITICAL)
- **Badge:** "The Pacific Northwest's Premium Car Buyer" (pill badge)
- **H1:** "Get a Real Offer on Your Car in Minutes"
- **Subhead:** "From daily drivers to exotics. $10K–$150K. Cash in hand within 24-48 hours."
- **Embedded VIN form:** VIN + Mileage + "GET MY OFFER" button (glassmorphism card)
- **Micro-trust:** "No obligation. Free. Takes 30 seconds."
- **Background:** Dark car photo with gradient overlay
- Mobile: `min-h-screen` so form visible without scrolling

### 3. Trust Bar
4 stat badges in a row: `2-5 min` (offer time) | `10+ Years` (network) | `500+` (cars) | `6 States` (coverage). Count-up animation on scroll into view.

### 4. 3-Step Process
- Step 1: Submit Your VIN — "Enter your VIN and mileage. Takes 30 seconds."
- Step 2: Get an Offer in Minutes — "We check our dealer network. Normal cars: 2-5 min."
- Step 3: Get Paid Fast — "Cashier's check or wire transfer. We handle the paperwork."

### 5. Mid-CTA #1
"Ready to See What Your Car Is Worth?" + phone button + "Get My Offer" button

### 6. What We Buy
Two-column: text left (vehicle types with checkmarks, requirements callout), photo grid right (4-6 car cards with labels). Price range: $10K–$150K. Clean CarFax, running, no junk.

### 7. Why Lupo (5 Value Props)
- Fastest Offers (2-5 min)
- $10K–$150K Range
- Talk to a Real Person (Drake)
- PNW Specialist (6 states)
- No Fees, No Games

### 8. About Drake
Photo left, story right. "10 years building the network. Now it works for you." Personal, conversational tone. Stats row below: 10+ years / 500+ cars / 6 states.

### 9. Recently Purchased
Horizontal scroll on mobile, grid on desktop. 6-8 car cards (Urus, Rivian, Raptor, diesel truck, Escalade, WRX). Placeholder images until Drake provides real photos.

### 10. Testimonials
3-5 review cards with stars, quotes, names, city, vehicle sold. Emphasis on speed and ease themes.

### 11. Coverage Map
SVG map of western US with covered states highlighted (ID, OR, WA, UT, NorCal, MT). State details list alongside.

### 12. FAQ Accordion
10 items: How it works, offer speed, what we buy, what we don't buy, payment methods, financed cars, pickup process, coverage area, fees/obligations, what info needed. Each answer ends naturally pushing toward the CTA.

### 13. Final CTA
Large section with repeated VIN form. "Get Your Offer in Minutes" headline. Phone alternative below.

### 14. Mobile Sticky Footer
`md:hidden`. "Call Drake" (outline) + "Get Offer" (solid white). Fixed bottom. Appears after 400px scroll.

---

## Form Strategy (2-Step)

**Step 1 (in hero):** VIN + Mileage → "GET MY OFFER" — Ultra-low friction (2 fields)

**Step 2 (modal after submit):**
- Price expectation (optional)
- Is it financed? (yes/no radio)
- Phone or email (required)
- Photo upload (optional, up to 5) — "Add photos for a faster, more accurate offer"

**Backend:** POST to GoHighLevel (GHL) webhook URL. JSON payload with all form fields + UTM params captured from URL. GHL handles lead routing, notifications, and follow-up automations.

**Validation:** Zod schema. VIN: 17 chars, alphanumeric (no I/O/Q). Mileage: positive number.

**GHL Webhook payload structure:**
```json
{
  "vin": "...",
  "mileage": "...",
  "price_expectation": "...",
  "is_financed": "yes/no",
  "phone": "...",
  "email": "...",
  "utm_source": "...",
  "utm_medium": "...",
  "utm_campaign": "...",
  "source": "lupo-motors-landing-page"
}
```

---

## Tracking

**Facebook Pixel events:**
- `PageView` — on load
- `Lead` — Step 1 form submit
- `CompleteRegistration` — Step 2 form submit
- `Contact` — phone link click

**GA4:** Mirror same events. Both loaded via `<Script strategy="afterInteractive">`.

**UTM handling:** Capture `utm_source`, `utm_medium`, `utm_campaign` from URL, store in hidden form fields.

---

## Build Phases

### Phase 1: Foundation
- [ ] Init Next.js + Tailwind v4 + TypeScript
- [ ] `globals.css` with Lupo theme
- [ ] `data/site.ts` with business info
- [ ] `types/index.ts` with interfaces
- [ ] `Button`, `SectionHeading` UI components
- [ ] `Header`, `MobileStickyFooter`, `Footer`
- [ ] `layout.tsx` with fonts and meta

### Phase 2: Hero + Form
- [ ] `VINForm` with React Hook Form + Zod
- [ ] `LeadDetailsModal` (Step 2)
- [ ] `FormSuccess` confirmation
- [ ] `HeroSection` with embedded form
- [ ] Wire up GHL webhook, test end-to-end

### Phase 3: Content Sections
- [ ] `TrustBar` with stat badges + count-up animation
- [ ] `ProcessSteps` (3-step visual)
- [ ] `MidCTA` (reusable, used 3x)
- [ ] `WhatWeBuy` section
- [ ] `WhyLupo` value propositions
- [ ] `AboutDrake` founder section
- [ ] Populate all `data/` files

### Phase 4: Social Proof + Supporting
- [ ] `RecentPurchases` car gallery
- [ ] `TestimonialSection`
- [ ] `CoverageMap` (SVG map)
- [ ] `FAQAccordion` with 10 items
- [ ] `FinalCTA` section

### Phase 5: Polish + Launch
- [ ] Scroll reveal animations (Framer Motion)
- [ ] FB Pixel + GA4 setup
- [ ] OG image + social meta tags
- [ ] Lighthouse audit (target 95+)
- [ ] Mobile testing (iPhone Safari + Android Chrome)
- [ ] Deploy to Vercel
- [ ] Connect lupomotors.com domain
- [ ] Verify pixel + form in production

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.5s |
| CLS | < 0.1 |
| Total page weight | < 500KB (excl. images) |

Key tactics: Next.js Image optimization (WebP/AVIF), `next/font` for zero-FOUT fonts, lazy load below-fold sections, `<Script strategy="afterInteractive">` for tracking pixels.

---

## Verification Plan

1. **Form test:** Submit real VIN + mileage → verify lead appears in GHL CRM
2. **Mobile test:** iPhone Safari + Android Chrome → form usable, sticky footer works, phone links dial
3. **FB Pixel test:** Facebook Pixel Helper extension → PageView, Lead, CompleteRegistration fire
4. **Lighthouse:** Performance 95+, Accessibility 90+
5. **Cross-browser:** Chrome, Safari, Firefox, Edge
6. **UTM test:** Load with `?utm_source=facebook&utm_campaign=test` → UTM data in form submission

---

## Content Needed from Drake

**Must-have for launch:**
1. Logo file (SVG preferred)
2. 4-6 real car photos (Urus, Rivian, Raptor, etc.)
3. Headshot/photo of Drake
4. 3-5 testimonials from recent sellers
5. Facebook Pixel ID
6. GHL webhook URL (for lead routing)

**Nice-to-have (can add post-launch):**
- GA4/GTM ID
- Hero background photo
- Process video (iPhone quality fine)

---

## Section-by-Section Detail Reference

### Hero Form Styling
```
Dark glassmorphism card:
bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8

Inputs:
bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 px-4 py-3

Submit button:
bg-white text-black font-bold py-4 rounded-lg hover:bg-white/90 text-lg full-width
```

### MidCTA Props (reusable component)
```typescript
interface MidCTAProps {
  headline: string;
  subtext: string;
  showPhone?: boolean;  // default true
  variant?: 'default' | 'accent';
}
```

### FAQ Content (10 items)
1. How does it work?
2. How fast will I get an offer?
3. What kind of cars do you buy?
4. What do you NOT buy?
5. How do I get paid?
6. What if I still owe money on the car?
7. Do I need to bring the car somewhere?
8. What areas do you serve?
9. Is there any obligation or fee?
10. What information do I need to get started?

### Value Propositions (WhyLupo)
| Icon | Title | Description |
|------|-------|-------------|
| Zap | Fastest Offers in the Market | 2-5 min normal cars, under 1 hour exotics |
| DollarSign | $10K to $150K Range | Daily drivers to Lamborghinis |
| User | Talk to a Real Person | Drake directly, no call centers |
| MapPin | PNW Specialist | ID, OR, WA, UT, NorCal, MT |
| ShieldCheck | No Fees, No Games | No hidden fees, no lowball games |

### Stat Badges (TrustBar)
| Icon | Number | Label |
|------|--------|-------|
| Clock | 2-5 min | Average Offer Time |
| Shield | 10+ Years | Dealer Network |
| Car | 500+ | Cars Purchased |
| MapPin | 6 States | PNW Coverage |

---

*Plan created: February 21, 2026*
*Reference docs: lupo-motors-master-context.md + research.md*
