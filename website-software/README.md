# KHANS GYPSUMCRAFT PK — Separate Business Software

This is a separate business-management application. It is being developed without editing the public website at the repository root.

## Safety boundary
- All software work is on the `software-development` branch under `website-software/`.
- The original public website at the repository root is not edited.
- The `original-site/` folder is a reference snapshot only.
- Do not merge this branch into `main` without explicit owner review.

## Current development build
The responsive, Poppins / white / black / gold workspace currently includes:
- Overview dashboard and recent activity
- Customers and Projects
- Quotations, Orders, Invoices, and Payments
- Inventory and Expenses
- Appointments and Leads / CRM
- Team directory and Daily Site Logs
- Saved Designs, Gallery Manager, and Testimonials
- Notifications and local Business Settings
- Reports, CSV exports, and JSON backup download
- Add, edit, delete, and search for records
- Installable PWA manifest and app-shell service worker

## Data and security limitations
- Records are currently saved in this browser's local storage on one device only.
- There is no secure owner login, server-side authorization, Firebase connection, cloud synchronization, or automated remote backup.
- Do not enter real or sensitive customer information in this preview.
- Existing Firebase Realtime Database rules were inspected and appear to allow any authenticated user to read at the root. Do not connect this software to the existing database or deploy copied rules until least-privilege access is designed and reviewed.
- The PWA app shell can cache static files; this does not make local records cloud-synced or protected.
- This build is not production-ready and is not a substitute for tested accounting software.

## Remaining production stages
1. Choose a separate Firebase project or another isolated backend for the software.
2. Implement secure authentication and server-enforced owner / staff roles.
3. Implement validated cloud data models, audit history, backups, and access rules.
4. Add quotation / invoice printing, payment reconciliation, and full business workflows.
5. Test permissions, mobile behavior, data recovery, and deployment.
6. Package Android, iOS, and Windows versions after the web app and backend are stable.

## Local preview
Open `index.html` in a modern browser, or serve this folder through a local static web server. PWA installation requires HTTPS (for example, a correctly configured GitHub Pages deployment).
