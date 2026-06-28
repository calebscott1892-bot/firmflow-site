import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.jsx';
import LandingPage from './components/LandingPage.jsx';
import { landingByPath } from './data/landings.js';
// Self-hosted Inter (replaces the render-blocking Google Fonts <link>).
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import './index.css';

const root = document.getElementById('root');

// A prerendered landing page tags itself via window.__LANDING_PATH__ so the
// client hydrates the matching LandingPage (interactive Nav / scroll-to-top).
const landingPath = typeof window !== 'undefined' ? window.__LANDING_PATH__ : undefined;
const landingData = landingPath ? landingByPath[landingPath] : undefined;
const tree = landingData ? <LandingPage data={landingData} /> : <App />;

// Prerendered HTML (from scripts/prerender.mjs) has real element children → hydrate.
// Dev / un-prerendered has only the <!--app-html--> comment → fresh render.
if (root.childElementCount > 0) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
