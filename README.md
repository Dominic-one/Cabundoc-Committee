# Committee — UI/UX Showcase (Version 0.5)

The simplified, presentation-only edition of the Committee Task Monitoring and Attendance System. Built in **Ionic 9 + Angular 21** with the same visual style as the fuller prototype.

This is the requested "50% version": a UI/UX milestone with representative screens and simple presentation interactions. It does not represent a measured 50% of production functionality.

## Run on Windows / PowerShell

Use **Node.js 22.18+ in the 22.x line, or Node.js 24.x**. Extract the ZIP, open a terminal in the `committee-ui-showcase` folder containing `package.json`, and run:

```powershell
npm.cmd install --include=dev
npx.cmd ionic serve
```

If you already have a global Ionic CLI, the second command can be:

```powershell
ionic.cmd serve
```

Using `.cmd` avoids the PowerShell `.ps1` execution-policy error. Wait until dependency installation finishes successfully before starting Ionic; the local Angular CLI is installed with the development dependencies.

Alternatively, double-click **START-WINDOWS.cmd**. It installs dependencies if the local Angular CLI is missing, then starts the showcase. The batch file is a convenience launcher; it does not change Windows execution policies or install Node.js.

Open the URL printed by Ionic, normally **http://localhost:8100**. Keep the terminal open while presenting.

## Run on macOS / Linux

```bash
npm install --include=dev
npx ionic serve
```

## Which account do I use?

**No account or password is required.** On the opening screen, choose:

- **Member** — personal tasks, proof-upload layout, scan screen, attendance history, committees, and profile.
- **Head** — overview, task-assignment form, approval/return layouts, events, manual-attendance form, committees, and reports.
- **Admin web** — dashboard, account-management layout, committees, task monitoring, event records, reports, and review/audit layouts.

The ID/password fields are visual examples only. **Enter member preview** opens the member interface without checking the fields. The names and institutional IDs displayed elsewhere are fictional sample labels, not login accounts.

Use **UI showcase** in the top bar or **More → Back to preview views** to change roles. No sign-out, cache clearing, or synchronization is needed.

## What works in this edition?

| Included          | Presentation behavior                                                          |
| ----------------- | ------------------------------------------------------------------------------ |
| Navigation        | Screen links, back links, sidebar and mobile bottom navigation                 |
| Role views        | Separate member, head, and administrator presentation layouts                  |
| Task list/details | Fixed sample titles, progress badges, proof illustration, and timeline         |
| Sample data       | Read-only in-memory fixtures provided by an Angular service                    |
| Forms             | Native inputs/dropdowns and sample modal layouts; values are not read or saved |
| Preview actions   | Clearly labeled informational dialogs; no changes are applied                  |
| QR screen         | Static scan-frame artwork and example result state; no camera access           |
| Event QR          | A bundled SVG image containing a showcase label, not an attendance token       |
| Reports           | Static metric cards, chart bars, tables, and export-button previews            |
| Sync screen       | Fixed connected/pending/conflict examples; no sync process                     |
| Responsive design | Desktop layout and mobile navigation with the same design tokens               |

Search boxes, status tabs, date controls, and filter dropdowns are layout elements. They **do not filter or calculate** the sample content. Head/admin action buttons open a preview or form; they do not show a fake saved/synchronized result.

## A short presentation walkthrough

1. Choose **Member** from the opening screen.
2. Show the dashboard, then open **Tasks → Prepare the venue checklist**.
3. Click the photo area or **Submit for review** to demonstrate the preview dialog.
4. Open **Scan** to show the camera-frame design and illustrative result panel. No permissions are requested.
5. Return to preview views and choose **Head**.
6. Open **Tasks → Assign task** to show the form layout. Submitting shows a preview notice; no task appears in the list.
7. Open **Organize attendance materials** to display sample proof and the approval/return controls. The **Return with feedback** action opens a sample feedback form.
8. Open **Events → Committee coordination session → Manual entry** to show the manual-attendance layout.
9. Open **Reports**. PDF/CSV buttons show a preview notice and do not download anything.
10. Choose **Admin web** and show **Accounts → Create account**, **Committees → Create committee**, and **Review & audit**.

All records and statuses remain unchanged throughout the walkthrough. Dates are fixed presentation examples, so an "Open now" label does not expire based on the current time.

## Intentionally removed

- Authentication, sessions, passwords, and role-access enforcement.
- State/store services, reducers, business validation, task transitions, and mutable records.
- IndexedDB, Ionic Storage, localStorage, sessionStorage, and databases.
- Offline queues, conflict resolution, synchronization, network monitoring, timers, and automatic retries.
- Camera access, permissions, QR decoding, native Capacitor integrations, file picking, and image processing.
- PDF/CSV generation, downloads, API calls, remote uploads, and backend configuration.

Angular routing, Ionic components, modal open/close state, and normal HTML input behavior remain because they are presentation interactions. The ordinary development server/HMR may use framework-internal requests; there is no application backend traffic or business processing.

The administrator view is included in the same source project for a single-command presentation. Role-specific navigation illustrates the proposed product; this edition has no security/access-control implementation.

## Files to edit

```text
src/global.scss                    Shared visual styles and responsive rules
src/app/services/preview-data.service.ts  Read-only sample records for the showcase
src/app/services/preview-dialog.ts Reusable visual-action dialog component
src/app/services/task-card.ts      Reusable task-row presentation component
src/app/services/ui.ts             Shared Ionic imports and role helper
src/app/pages/                     Screen components and matching templates
src/app/services/                  Shared read-only data services
src/app/routes.ts                  Screen navigation
src/assets/                       Local logo, proof illustration and QR artwork
```

All showcase assets are local. No image/font service, database, account, or API key is required.

## Other commands

```powershell
npm.cmd start             # Angular dev server on port 8100
npm.cmd run build         # Production build to www/
npm.cmd run format        # Prettier formatting
```

Use `npx.cmd ionic serve --port 8101` if port 8100 is busy. A clean exact installation can use `npm.cmd ci --include=dev` with the provided lockfile.

## Troubleshooting

- **`ng` is not recognized:** run `npm.cmd install --include=dev` successfully inside this project folder first.
- **`ionic.ps1` is blocked:** use `npx.cmd ionic serve` or `ionic.cmd serve`.
- **No `package.json`:** enter the extracted `committee-ui-showcase` folder.
- **A button doesn't change records:** that is intentional; this edition is presentation only.
- **The sample dates are old:** edit the fixture values in `preview-data.service.ts` if you want other dates.

The full interactive prototype is a separate project. Nothing in this showcase modifies its files or its browser data.
