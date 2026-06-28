/**
 * Programmatic-SEO landing pages for FirmFlow.
 *
 * Each entry prerenders to its own static file: dist/<path>/index.html
 * (see scripts/prerender.mjs). High-intent, audience-specific pages that reuse
 * the shared Nav / Footer / primitives and link back to product.ctaHref.
 *
 * NEVER hardcode prices here — pricing copy lives in src/data/product.js and is
 * referenced via the shared components / product object.
 */

export const landings = [
  {
    path: 'content-for-accountants',
    audience: 'accountants',
    breadcrumbName: 'Content for accountants',
    eyebrow: 'For accounting firms',
    title: 'Content for accountants — on-brand posts, newsletters & client emails',
    metaDescription:
      'FirmFlow turns ATO updates, budget changes and your own technical notes into LinkedIn posts, client newsletters and emails — in your firm’s voice, grounded in your source, with disclaimers built in.',
    h1: 'Content for accountants, grounded in your own source material',
    lead:
      'Accounting partners know that staying visible wins work — but between lodgement deadlines and client meetings, content is the first thing to fall off the list. FirmFlow turns the technical material you already produce into a steady stream of trustworthy, on-brand content.',
    sections: [
      {
        heading: 'Turn ATO and legislative updates into client-ready content',
        body:
          'Every tax season brings a wave of changes — ATO rulings, Federal Budget measures, Division 7A tweaks, super guarantee rate rises, instant asset write-off thresholds. Your clients want to know what it means for them, and a timely LinkedIn post or newsletter is how trust gets built. Paste the update or your file note into FirmFlow and get a plain-English post, a client email and a newsletter section back in minutes — each one grounded only in the source you provided, never in invented figures.',
      },
      {
        heading: 'Source-first, so it never invents a figure or a deadline',
        body:
          'Generic AI tools are dangerous for accountants because they confidently make up thresholds, dates and rates. FirmFlow is built the other way around: it writes only from the material you give it. If a number is not in your source, it will not appear in the draft. That is what makes it safe to hand technical content to AI in a regulated profession.',
      },
      {
        heading: 'Disclaimers built into every draft',
        body:
          'General-advice warnings and "this is not personal tax advice" disclaimers are not optional in accounting communications. FirmFlow bakes the disclaimers your firm requires into every draft, so a busy partner is not relying on memory to stay compliant. You still review and approve everything before it is published — FirmFlow produces drafts, not final published advice.',
      },
      {
        heading: 'In your firm’s voice, across every channel',
        body:
          'Whether you publish on LinkedIn, send a monthly client newsletter, or email a specific client about a change that affects them, FirmFlow keeps a consistent voice that sounds like your firm — not like a generic chatbot. One source becomes a post, an email and a newsletter blurb, each shaped for where it is going.',
      },
    ],
    faqs: [
      {
        q: 'Will FirmFlow make up tax figures or deadlines?',
        a: 'No. FirmFlow is source-first — it writes only from the material you provide. If a rate, threshold or deadline is not in your source, it will not appear in the draft.',
      },
      {
        q: 'Is it safe to use in an accounting practice?',
        a: 'Yes. It stays grounded in your approved source material and bakes in the disclaimers your communications require, so output stays on-brand and lower-risk. You always review before publishing.',
      },
      {
        q: 'What can I generate from one ATO update?',
        a: 'A LinkedIn post, a client newsletter section and a client email — each grounded in the same source and written in your firm’s voice.',
      },
      {
        q: 'Does it replace my professional review?',
        a: 'No. FirmFlow produces drafts for you to review and approve. You always have the final say before anything is published.',
      },
    ],
  },
  {
    path: 'content-for-law-firms',
    audience: 'law firms',
    breadcrumbName: 'Content for law firms',
    eyebrow: 'For legal practices',
    title: 'Content for law firms — thought leadership without the risk',
    metaDescription:
      'FirmFlow helps law firms publish client alerts, LinkedIn posts and newsletters grounded in your own case notes and updates — in your firm’s voice, with disclaimers built in, never inventing case law.',
    h1: 'Content for law firms, grounded in your own material',
    lead:
      'For a law firm, content is reputation — and reputation is the whole business. But the same caution that makes a good lawyer makes publishing slow: nobody wants to hit "post" on something that invents a case or oversteps into advice. FirmFlow lets you publish consistently while keeping you on the right side of that line.',
    sections: [
      {
        heading: 'Client alerts and updates, drafted from your own notes',
        body:
          'A legislative change, a notable judgment, a new compliance obligation — your clients look to you to interpret it. Paste your file note, case summary or the source material into FirmFlow and get a client alert, a LinkedIn post and a newsletter section back, each grounded strictly in what you provided. No invented citations, no hallucinated holdings.',
      },
      {
        heading: 'It will not invent a case or a citation',
        body:
          'The single biggest risk of using AI in law is fabricated case law — courts have sanctioned firms for filing AI-invented citations. FirmFlow is source-first by design: it writes only from the material you give it and does not reach for facts, cases or figures that are not in your source. That is the difference between a tool you can trust with marketing content and one you cannot.',
      },
      {
        heading: 'Disclaimers and "not legal advice" language built in',
        body:
          'Marketing content from a law firm needs the right guardrails — general-information disclaimers, "this does not constitute legal advice" language, and no statements that could be read as creating a retainer. FirmFlow bakes the disclaimers your firm requires into every draft, so the safe version is the default version. You review and approve before anything goes out.',
      },
      {
        heading: 'Consistent voice across practice groups',
        body:
          'Whether the content comes from your litigation team, your commercial group or your private-client practice, FirmFlow keeps a consistent firm voice while reflecting the substance of each source. One update becomes a post, an alert and an email — all sounding like your firm.',
      },
    ],
    faqs: [
      {
        q: 'Will FirmFlow invent case law or citations?',
        a: 'No. FirmFlow writes only from the source material you provide. It will not introduce cases, citations or facts that are not in your source — eliminating the fabricated-citation risk.',
      },
      {
        q: 'Can it produce content that reads as legal advice?',
        a: 'FirmFlow bakes in "not legal advice" and general-information disclaimers, and you review every draft before publishing, so content stays in the marketing-and-information lane.',
      },
      {
        q: 'What can I create from one client update?',
        a: 'A client alert, a LinkedIn post and a newsletter section — each grounded in your source and written in your firm’s voice.',
      },
      {
        q: 'Do I still need to review the output?',
        a: 'Yes. FirmFlow produces drafts for your review and approval. Nothing is published without a lawyer signing off.',
      },
    ],
  },
  {
    path: 'content-for-consultants',
    audience: 'consultants',
    breadcrumbName: 'Content for consultants',
    eyebrow: 'For consulting firms',
    title: 'Content for consultants — turn your expertise into a pipeline',
    metaDescription:
      'FirmFlow helps independent consultants and advisory firms publish LinkedIn posts, newsletters and client emails grounded in their own frameworks and project notes — in their voice, drafted in minutes.',
    h1: 'Content for consultants, drawn from your own expertise',
    lead:
      'For consultants, visibility is the pipeline. The people who post consistently win the inbound conversations — but the work that makes you worth hiring is exactly what eats the time you would need to write. FirmFlow turns the thinking you already do into content that keeps you top of mind.',
    sections: [
      {
        heading: 'Turn frameworks and project notes into posts',
        body:
          'You have frameworks, playbooks, client debriefs and a point of view that took years to build. Paste a framework outline, a sanitised project note or your rough thinking into FirmFlow and get a LinkedIn post, a newsletter section and a follow-up email back — each grounded in your own material, not generic management-speak scraped from the web.',
      },
      {
        heading: 'Sounds like you, not like a generic chatbot',
        body:
          'The fastest way to lose credibility as a consultant is to post content that sounds like everyone else’s AI output. FirmFlow learns your firm’s voice so the drafts read like you wrote them — your phrasing, your level of directness, your point of view. It is your expertise, packaged faster, not replaced.',
      },
      {
        heading: 'Stay consistent without staying up late',
        body:
          'The hard part of content is not any single post — it is showing up week after week while delivering client work. FirmFlow makes the marginal cost of a post small enough that consistency becomes realistic. One source becomes a week of content across the channels where your buyers actually are.',
      },
      {
        heading: 'Grounded and reviewable, so you stay credible',
        body:
          'Because FirmFlow only writes from the material you provide, it will not attribute a claim or a statistic to you that you did not make. Disclaimers your engagements require are built in, and every piece is a draft you review and approve before it goes out — so what you publish always holds up.',
      },
    ],
    faqs: [
      {
        q: 'Will the content sound generic?',
        a: 'No. FirmFlow is trained on your firm’s voice and writes only from your source material, so drafts read like your thinking — not like generic AI output.',
      },
      {
        q: 'What do I feed it?',
        a: 'A framework, a sanitised project note, a rough outline or any source you want to talk about. FirmFlow only works from material you give it.',
      },
      {
        q: 'How much content can I get from one source?',
        a: 'A LinkedIn post, a newsletter section and a follow-up email — enough to stay visible across channels from a single input.',
      },
      {
        q: 'Is the output ready to publish as-is?',
        a: 'It is a draft for your review. FirmFlow builds in any disclaimers you need, and you approve everything before it goes out.',
      },
    ],
  },
];

export const landingByPath = Object.fromEntries(landings.map((l) => [l.path, l]));
