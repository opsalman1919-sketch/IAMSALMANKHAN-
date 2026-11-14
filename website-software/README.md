# KHANS GYPSUMCRAFT PK — Separate Business Software

This application is being developed independently from the public website.

## Safety boundary
- All software work is on the `software-development` branch under `website-software/`.
- The original public website at the repository root is not edited.
- The `original-site/` folder is a reference snapshot only.
- Do not merge this branch into `main` without explicit owner review.

## Current development preview
The browser-local prototype includes:
- Overview dashboard and recent activity
- Customers
- Projects
- Quotations
- Orders
- Invoices
- Payments
- Inventory
- Reports, CSV exports, and JSON backup download
- Add, edit, delete, and search for module records
- Responsive desktop and mobile navigation

## Data and security limitations
- Records are currently saved in the browser's local storage on one device only.
- There is no secure owner login, server-side authorization, Firebase connection, cloud synchronization, or automated backup.
- Do not enter real or sensitive customer data in this preview.
- Existing Firebase Realtime Database rules were inspected and appear to allow any authenticated user to read at the root. Do not connect this software to the existing database or deploy copied rules until least-privilege access is designed and reviewed.
- This preview is not production-ready and is not a substitute for tested accounting software.

## Remaining production stages
1. Decide whether the software gets a separate Firebase project or an approved isolated backend.
2. Implement secure authentication and server-enforced owner/staff roles.
3. Implement validated cloud data models, audit history, backups, and access rules.
4. Add quotation/invoice printing, payment reconciliation, and business workflows.
5. Test browser, mobile, permissions, data recovery, and deployment.
6. Package Android, iOS, and Windows versions after the web app and backend are stable.

## Local preview
Open `index.html` in a modern browser. For best results, serve this folder through a local static web server.
