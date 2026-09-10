# TeraRobots India — Modern Static Website

A high-performance, memory-efficient static website built for **TeraRobots India**, designed according to the modern SaaS/Industry 4.0 UI specification.

The site is built with pure semantic HTML5, modern CSS3, and lightweight vanilla JavaScript — zero runtime overhead, highly optimized WebP assets, and ready for instant deployment on **GitHub Pages** with built-in **Meta Business Verification**.

---

## 🔑 Meta Business Domain Verification

The site is pre-configured for Meta (Facebook) Business Manager Domain Verification.

### How to add your Meta Verification Key:

1. Open `index.html` and find the verification meta tag near line 13:
   ```html
   <meta name="facebook-domain-verification" content="YOUR_META_BUSINESS_VERIFICATION_KEY" />
   ```
2. Replace `YOUR_META_BUSINESS_VERIFICATION_KEY` with your code from **Meta Business Suite** (e.g. `d71g9...`).
3. *(Optional)* You can also update the key in `assets/js/config.js`:
   ```javascript
   window.SITE_CONFIG = {
     META_VERIFICATION_KEY: "YOUR_META_BUSINESS_VERIFICATION_KEY",
     ...
   };
   ```
4. Commit and push your changes to GitHub.
5. In **Meta Business Suite > Business Settings > Brand Safety > Domains**, click **Verify Domain**.

---

## 🚀 GitHub Pages Deployment Guide

This repository is optimized for GitHub Pages:
- Contains `.nojekyll` to bypass Jekyll builds and serve assets directly.
- Uses relative asset paths (`./assets/...`) so it works on both custom domains (e.g., `terarobots.in`) and standard GitHub Pages URLs (`username.github.io/repo-name/`).

### Steps to Deploy:
1. Push this code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Rebuild TeraRobots website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to your repository on GitHub:
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
3. Your website will be live in 1–2 minutes!

---

## ⚡ Memory & Performance Efficiency

- **Total Page Weight**: ~650 KB (including all 41 WebP images, fonts, CSS, and JS).
- **Zero Heavy Frameworks**: Pure HTML5, CSS3 variables, and vanilla JavaScript.
- **Responsive**: Fully responsive across mobile, tablet, and ultra-wide screens.
- **Authentic Assets**: Reuses original brand assets, service icons, and partner logos scraped from [terarobots.in](https://terarobots.in/).

---

## 📁 Project Structure

```
terarobots_website/
├── index.html               # Main landing page with Meta Verification tag
├── .nojekyll                # Disables Jekyll processing for GitHub Pages
├── README.md                # Documentation and deployment instructions
└── assets/
    ├── css/
    │   └── style.css        # Responsive styling matching reference UI
    ├── js/
    │   ├── config.js        # Meta verification & company constants
    │   └── main.js          # Interactive tabs, chart animation, FAQ accordion
    └── images/              # Optimized WebP brand images from terarobots.in
```
