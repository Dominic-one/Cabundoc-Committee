# Showcase scope and verification

## Presentation milestone

Version 0.5 is a UI/UX-only showcase, corresponding to the requested simplified "50% version". It preserves the visual direction and representative member/head/admin screens while removing all business behavior from the earlier prototype. It is a separate project and archive.

## Included screens

- Opening/sign-in mockup with three preview-role links.
- Member/head/admin home layouts.
- Task list and detail states, assignment form, photo area, and approval/return layouts.
- Event cards, event detail, static QR artwork, and manual-entry form.
- Static scanner artwork and illustrative success panel.
- Attendance-history table.
- Committee cards and membership/creation modal layouts.
- Reports with static summary/chart/table examples and export-button previews.
- Administrator account-management table and sample creation form.
- Static sync/queue/conflict layout.
- Profile/More and explanatory help content.

## Deliberately absent

No authentication, route security, account validation, business rules, mutable records, storage, offline queue, synchronization, conflict handling, API access, network monitoring, timers, image upload, file selection, camera access, QR decoding, report calculations, PDF/CSV generation, downloads, or native plugins.

`PreviewDataService` provides the fixed sample records to the screens from memory only. It does not mutate data, access an API, or persist anything.

Navigation, role-specific screen composition, native input behavior, and modal open/close state are presentation interactions. They do not alter the fixed fixtures provided by `PreviewDataService`.

## Build and source inspection

- Installed dependencies from the included package manifest/lockfile.
- Verified the Angular production build.
- Verified `ionic serve` startup through the locally installed CLI.
- Inspected application source to confirm there are no storage, API/network, camera, timer, store/reducer, or synchronization implementations.
- Static assets are bundled SVG files; no remote images/fonts are used.
- Source formatted with Prettier.

## Browser verification: 18 passing checks

Tested against the Ionic development server in headless Chromium:

1. Member view opens without credentials.
2. Member home fits a 390px viewport.
3. Submission opens only a preview and leaves task status unchanged.
4. Scanner preview never invokes camera access.
5. Member history, committees, profile, and sync-layout routes render.
6. Head view opens without credentials.
7. Assignment form does not create a task.
8. Head return-feedback layout leaves the sample state unchanged.
9. Manual-entry preview leaves the sample attendance row count unchanged.
10. Export preview does not download a file.
11. Membership-management modal is presentation only.
12. Administrator account form leaves the fixed account table unchanged.
13. Administrator committee form leaves the fixed cards unchanged.
14. Remaining administrator/head navigation routes render.
15. Home fits 360px, 390px, 768px, and 1280px without document overflow.
16. No localStorage, sessionStorage, or IndexedDB database was created in a fresh browser context.
17. No external network request was made. Only local development-server resources were loaded.
18. No uncaught browser runtime exception occurred.

Desktop and mobile screen captures were visually reviewed. Screenshots are not included in the source archive.

## Delivery notes

The ZIP contains project source/configuration, a dependency lockfile, README instructions, and a Windows convenience launcher. Dependencies (`node_modules`), build caches, and generated bundles are excluded. Install dependencies before running the showcase.

The Windows launcher is supplied as source with CRLF line endings. It was inspected but not executed on Windows in the creation environment; the application build and browser checks ran on Linux. There is no APK or native-device verification because this edition intentionally has no native integration.
