# Our Family Christmas Village 🎄

A free React + Vite Christmas homepage designed for GitHub Pages.

## Run locally

1. Install Node.js 18 or newer (Node.js 20+ recommended).
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL shown in the terminal.
4. Edit the `FAMILY_NAME`, `LAUNCH_DATE`, and `CHRISTMAS_YEAR` constants near the top of `src/main.jsx`.

## Publish on GitHub Pages (no paid services)

1. Create a **public** GitHub repository, for example `family-christmas-village`.
2. Upload/push these files to its `main` branch.
3. In the repository open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Create `.github/workflows/deploy.yml` from the included file, or push the repository with the workflow already included.
5. After the workflow succeeds, find your site URL in **Settings → Pages**. Usually `https://YOUR_USERNAME.github.io/family-christmas-village/`.

The Vite `base: './'` configuration supports a project repository path without hardcoding the repo name.

## Notes

- Countdown uses midnight Eastern Standard Time on December 25, 2026. Relatives in other time zones will see the same instant counted down; change the target in `getCountdown` if you'd prefer a different time zone.
- The countdown updates every second while the page is open.
- Snowfall respects reduced-motion accessibility settings.
- No backend, accounts, or paid API are needed for this version.
- Avoid publishing private family information on a public GitHub Pages site.
