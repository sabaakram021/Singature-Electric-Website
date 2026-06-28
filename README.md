# Signature Electric Co. — Website

A production-ready, fully responsive static website for **Signature Electric Co.**,
an HVAC contractor based in Ranchi, Jharkhand, specializing in Mitsubishi Electric
VRF, split, cassette and ducted air conditioning, ventilation, cold-chain and AMC
services. Built for deployment on Hostinger or any Apache-based static host.

## What's in this build
- Real photos from the company profile (VRF outdoors, indoor units, diffusers,
  cold rooms, AHUs, and 6 completed project case studies) — no stock imagery.
- Content rewritten from `signature_electric_co.pdf` / `.docx` (mission, services,
  objectives, business registration details).
- Filterable Products/Systems gallery (VRF & Outdoor / Indoor Units / Air
  Distribution / Specialty Solutions).
- Project case-study cards (client, type, capacity, system, location).
- Contact section with click-to-call, click-to-WhatsApp, email, embedded Google
  Map, and a front-end-validated enquiry form.
- Floating WhatsApp button site-wide.
- SEO: meta description/keywords, Open Graph tags, canonical URL, and a
  `HVACBusiness` JSON-LD schema block for local search.
- Fully responsive from large desktops down to small phones, with a mobile
  hamburger nav, keyboard-accessible controls and `prefers-reduced-motion` support.

## Features
- Responsive design (mobile, tablet, desktop)
- Mitsubishi-inspired navy/gold brand colour scheme, carried over and extended
- Semantic HTML5, CSS3, vanilla JavaScript — no build step, no frameworks
- Fast, accessible, and easy to maintain by hand

## File structure
```
index.html
styles.css
script.js
.htaccess
robots.txt
sitemap.xml
assets/
  img/
    logo.jpeg
    hero/        (hero photo + about photo)
    gallery/      (23 product/system photos)
    projects/     (6 project case-study photos)
```

## Before you deploy — please check these
1. **Domain name.** The canonical URL, Open Graph tags, JSON-LD, `robots.txt`
   and `sitemap.xml` currently use `https://www.signatureelectric.in/` as a
   placeholder (based on the email domain in your materials). Update all of
   these to your **actual** Hostinger domain once it's confirmed.
2. **`.htaccess`.** This file must be uploaded with the leading dot
   (`.htaccess`), not `_htaccess`. Some upload tools strip the dot — rename it
   after uploading if your file manager shows `_htaccess`.
3. **Contact form.** This is a static site with no backend, so the form
   currently only validates fields in the browser and shows a thank-you
   message — it does **not** email you the enquiry yet. Before relying on it
   for real leads, connect it to a form service (e.g. a Hostinger-hosted PHP
   mail script, Formspree, or similar) — happy to help wire this up.
2. **Map embed.** The Google Map currently searches by address text (no API
   key required). For a pinpoint marker, swap in your verified Google Maps
   "Embed a map" link once you've claimed your Google Business Profile.
4. **Two email addresses** (`sales@` and `sahil@signatureelectric.in`) and the
   phone number `8002583052` are used throughout — update if anything has
   changed since the company profile was prepared.

## Deployment Instructions (Hostinger)
1. Upload everything in this folder — `index.html`, `styles.css`, `script.js`,
   `.htaccess`, `robots.txt`, `sitemap.xml`, and the `assets/` folder — to your
   Hostinger `public_html` directory, preserving the folder structure.
2. Confirm `.htaccess` is present and enabled (see note above).
3. Update `sitemap.xml`, `robots.txt`, and the canonical/OG tags in
   `index.html` with your live domain.
4. No build step required — the site is static and ready to use as-is.

## Customization
- Update business details directly in `index.html`.
- Brand colours, spacing and breakpoints all live in `styles.css` under the
  `:root` variables at the top of the file.
- Gallery and project photos are plain `<img>` tags — swap any file in
  `assets/img/` with a same-named replacement to update a photo without
  touching the HTML.

## Support
For issues or questions, contact: sales@signatureelectric.in
