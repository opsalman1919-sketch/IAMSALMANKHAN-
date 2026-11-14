# KHANS GYPSUMCRAFT PK — Separate Business Software

A separate business-management application. The public website at the repository root is not edited by this project.

## Safety boundary
- All software development is restricted to the `software-development` branch and `website-software/`.
- `original-site/` is a reference snapshot only.
- Do not merge into `main` without explicit owner review.

## Development build
The responsive Poppins / white / black / gold workspace includes:
- Overview and recent activity
- Customers, Projects, Quotations, Orders, Invoices, Payments
- Inventory, Expenses, Appointments, Leads / CRM, Team
- Daily Site Logs, Saved Designs, Gallery Manager, Testimonials
- Notifications and Business Settings
- Reports, CSV exports, JSON backup download and local backup restore
- Add, edit, delete, and search for records
- PWA manifest and static app-shell service worker

## Data and security status
- Current records are stored in browser local storage on one device.
- There is no connected cloud database, secure owner login, server-side role enforcement, or remote backup yet.
- Do not enter real or sensitive customer data in this preview.
- The existing Firebase Realtime Database rules were found to permit authenticated root reads. This project does not reuse or deploy those rules.
- Proposed owner-scoped Realtime Database and Storage rules are in `firebase/`. They are drafts for a separate backend and have not been deployed or tested against a live Firebase project.
- PWA caching only caches static app files; it does not secure or synchronize local records.
- This build is not production-ready.

## Production work remaining
1. Set up a separate Firebase project or another isolated backend.
2. Confirm the owner account in that backend and test authentication.
3. Deploy reviewed least-privilege rules and implement server-enforced owner / staff roles.
4. Move records from local storage to validated cloud data models with audit history and remote backups.
5. Finish quotation / invoice print layouts, payment reconciliation, and workflow validation.
6. Test security, responsive layouts, recovery, and deployment.
7. Package Android, iOS, and Windows apps after the web version is stable.

## Preview
Open `index.html` locally or serve this folder through a static server. PWA installation requires HTTPS.
