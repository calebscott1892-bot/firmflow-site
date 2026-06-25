/**
 * FirmFlow — single source of truth for this site.
 *
 * ⚠️  PRICING & COPY MIRRORED VERBATIM FROM THE C4 MARKETING REPO:
 *     calebscott1892-bot/C4 → src/components/software/productData.js  (slug: 'firmflow')
 *     Never hardcode a price or link anywhere else — import from here.
 */

export const SUITE_APP_URL = 'https://c4-saas-suite.vercel.app';

export const SUITE_BUNDLE = {
  price: 149,
  href: `${SUITE_APP_URL}?ref=firmflow-suite`,
  blurb: 'Every C4 product — ReviewLoop, ReturnDesk, Complia, FirmFlow and more — in one subscription.',
};

export const product = {
  slug: 'firmflow',
  name: 'FirmFlow',
  status: 'Live',
  logo: '/firmflow-logo.png',
  oneLiner: 'AI content engine for professional services.',
  summary:
    'FirmFlow helps accountants, lawyers and consultants stay visible — generating on-brand posts, newsletters and client emails from your own source material, with risk controls built in.',
  features: [
    {
      icon: 'document',
      title: 'LinkedIn posts, newsletters, client emails',
      body: 'One source, every format your firm needs to stay in front of clients — drafted in seconds.',
    },
    {
      icon: 'shield',
      title: 'Source-first content generation',
      body: 'FirmFlow only writes from material you provide — no invented facts, no hallucinated figures.',
    },
    {
      icon: 'checklist',
      title: 'Built-in disclaimer and risk controls',
      body: 'The disclaimers your industry requires are baked into every draft, so output stays lower-risk.',
    },
    {
      icon: 'feather',
      title: 'Trained on your firm’s voice',
      body: 'Content comes out sounding like your firm — not like a generic chatbot.',
    },
  ],
  highlights: [
    { stat: 'Source', label: 'first — no hallucinated facts' },
    { stat: 'On-brand', label: 'in your firm’s voice' },
    { stat: 'Safe', label: 'disclaimers built in' },
  ],
  problem:
    'Professional-services firms know content drives trust, but partners do not have time to write it — and generic AI tools produce risky, off-brand fluff.',
  solution:
    'FirmFlow grounds every piece in your own approved material, keeps your voice, and bakes in the disclaimers your industry requires.',
  howItWorks: [
    {
      step: '01',
      title: 'Add your source material',
      body: 'Paste an article, update or note you want to talk about. FirmFlow only works from material you give it.',
    },
    {
      step: '02',
      title: 'Generate on-brand content',
      body: 'Get LinkedIn posts, newsletters and client emails in your firm’s voice — grounded in your source, not invented.',
    },
    {
      step: '03',
      title: 'Review and publish',
      body: 'Required disclaimers are built in. Check it, tweak it, and ship it.',
    },
  ],
  faqs: [
    {
      q: 'Will it make up facts or figures?',
      a: 'No. FirmFlow is source-first — it writes from the material you provide rather than hallucinating claims.',
    },
    {
      q: 'Is it safe for regulated industries?',
      a: 'It bakes in the disclaimers your industry requires and keeps to your approved source material, so output stays on-brand and lower-risk.',
    },
    {
      q: 'Who is it for?',
      a: 'Accountants, lawyers, consultants and other professional-services firms that need a steady stream of trustworthy content.',
    },
    {
      q: 'Does it replace my own review?',
      a: 'No. FirmFlow produces drafts for you to review and approve — you always have the final say before anything is published.',
    },
  ],
  tiers: [
    {
      label: 'Starter',
      price: 39,
      tagline: 'A steady stream of on-brand content from your own material.',
      includes: [
        'Posts, newsletters and client emails',
        'Source-first generation',
        'Built-in disclaimers',
        'Your firm’s voice',
      ],
    },
    {
      label: 'Pro',
      price: 89,
      featured: true,
      tagline: 'For firms publishing across channels, at volume.',
      includes: [
        'Everything in Starter',
        'Higher volume + more formats',
        'Saved brand voice and templates',
        'Priority support',
      ],
    },
  ],
  // Matches C4 productData lifetime.href — routes to the suite app, which handles
  // lifetime checkout + grants access on payment. (Raw Stripe LIFETIME_LINKS are archived.)
  lifetime: { price: 890, href: `${SUITE_APP_URL}?ref=firmflow-lifetime` },
  pricing: 'Starter $39/mo · Pro $89/mo. Start free — paid plans unlock inside the app.',

  ctaHref: `${SUITE_APP_URL}?ref=firmflow`,
  ctaLabel: 'Start free',

  c4Url: 'https://c4studios.com.au',
  siteUrl: 'https://firmflow.c4studios.com.au',

  // REQUIRED disclaimer — FirmFlow produces drafts for review.
  caveat:
    'FirmFlow produces drafts for your review, grounded in the source material you provide with required disclaimers built in. Always review before publishing — it does not replace professional judgement.',
};

export const content = {
  heroBadge: 'Content in your firm’s voice — without the risk',
  heroLead: 'The AI content engine for',
  heroAccent: 'professional firms',
  heroTrail: '.',
  heroNote: 'Start free · source-grounded · disclaimers built in',
  heroMetaTag: 'Source-grounded',

  problemEyebrow: 'The reality',
  problemHeadline: 'Your expertise builds trust — if anyone ever sees it.',
  withoutTitle: 'Without FirmFlow',
  without: [
    'Partners are too busy to write content',
    'Generic AI invents risky, off-brand claims',
    'Your best thinking never leaves the office',
    'Compliance worries kill the post before it ships',
  ],
  withTitle: 'With FirmFlow',
  with: [
    'Posts, newsletters and emails in your voice',
    'Grounded only in source you provide',
    'Required disclaimers built into every draft',
    'You review and publish — minutes, not hours',
  ],

  howHeadline: 'Three steps from source to on-brand draft.',
  howSub: 'Give FirmFlow your source material, generate content in your firm’s voice, then review and publish.',

  featuresHeadline: 'Everything that keeps you visible — and on the right side of compliance.',
  featuresSub: 'Source-grounded, on-brand and disclaimed — content your firm can actually publish.',

  outcomesHeadline: 'Staying visible shouldn’t mean staying up late.',
  outcomesSub:
    'FirmFlow turns the material you already have into a steady stream of trustworthy content — in your voice, with the guardrails your industry needs.',

  socialHeadline: 'Built for firms that win on trust',
  // Flip to true + add a real `name` to each testimonial below to ship real social proof.
  testimonialsAreReal: false,
  testimonials: [
    { quote: 'I paste in an ATO update and get a LinkedIn post in our voice. What took an hour takes two minutes.', role: 'Accounting partner' },
    { quote: 'The source-first part is why I trust it. It won’t invent a case or a figure — it only uses what I give it.', role: 'Law firm principal' },
    { quote: 'Disclaimers are handled, so I’m not nervous hitting publish. That alone got me writing again.', role: 'Independent consultant' },
  ],

  finalHeadline: 'Turn your expertise into content clients actually read.',
  finalSub: 'Start free. Paste your source material and get an on-brand draft in minutes.',

  footerTagline: 'Drafts for your review. Disclaimers built in.',
};

export const seo = {
  title: 'FirmFlow — AI content engine for professional services',
  description:
    'FirmFlow generates on-brand LinkedIn posts, newsletters and client emails for accounting, legal and consulting firms — grounded in your own source material, in your voice, with disclaimers built in. A C4 Studios product.',
  url: product.siteUrl,
  ogImage: `${product.siteUrl}/og.png`,
  themeColor: '#0f1115',
};
