NITRO APEX STUDIO WEBSITE
=========================

This is a static, multi-page website prepared for GitHub Pages and the custom
domain: https://nitroapexstudio.site

PAGES
-----
Home:          https://nitroapexstudio.site/
About:         https://nitroapexstudio.site/about/
Contact:       https://nitroapexstudio.site/contact/
Privacy:       https://nitroapexstudio.site/privacy-policy/

The requested "privacy policy" route is published as /privacy-policy/ (with a
hyphen), which is the standard URL-safe format. GitHub Pages serves the pages
from their folders' index.html files.

UPLOAD TO GITHUB PAGES
----------------------
1. Extract this ZIP file.
2. Create or open the GitHub repository you want to use for the website.
3. Upload the CONTENTS of this folder to the ROOT of the repository.
   Important: index.html, CNAME, assets/, about/, contact/, and privacy-policy/
   must be at the repository root, not nested inside another folder.
4. In GitHub, open Settings > Pages.
5. Under Build and deployment, select "Deploy from a branch".
6. Select your publishing branch (usually main) and folder "/ (root)", then Save.
7. In the Custom domain field, enter nitroapexstudio.site and save.
8. Configure DNS at your domain registrar:
   - For the apex/root domain, add these A records:
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
   - Optionally add AAAA records for IPv6:
     2606:50c0:8000::153
     2606:50c0:8001::153
     2606:50c0:8002::153
     2606:50c0:8003::153
   - For www, add a CNAME record pointing to your GitHub Pages hostname
     (YOUR-USERNAME.github.io). Replace YOUR-USERNAME with your GitHub username.
9. Wait for DNS propagation. Return to Settings > Pages and enable
   "Enforce HTTPS" when GitHub makes it available.

CONTACT EMAIL - IMPORTANT
-------------------------
The contact form opens the visitor's default email application. It does not
send messages through a server and does not store submissions.

Before publishing, open assets/script.js and replace:
  info@nitroapexstudio.site
if you need to use a different monitored email address.

PRIVACY POLICY - IMPORTANT
--------------------------
The privacy policy is a website template based on the assumption that this
static site does not itself run analytics, advertising pixels, accounts, or a
server-side contact form. Review and update it to match the actual data
practices of your Google Play apps, including SDKs, ads, analytics, crash
reporting, and other third-party services. Google Play app disclosures and
your apps' privacy policies may require additional details.

DESIGN / EDITING
----------------
- Main styling: assets/style.css
- Navigation and contact form behaviour: assets/script.js
- Site pages: index.html, about/index.html, contact/index.html,
  privacy-policy/index.html
- No build tools, package installation, or framework required.
- Google Fonts are loaded from Google Fonts; if unavailable, local system
  fallback fonts are used.

The CNAME file is included so GitHub Pages can associate the repository with
nitroapexstudio.site. DNS records must still be configured at your registrar.
