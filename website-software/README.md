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
- Owner sign-in screen integrated with Firebase Email/Password Authentication
- Owner UID check in the client before showing the workspace
- Deny-by-default Realtime Database and Storage rules drafts for a separate project

## Data and security status
- Firebase sign-in is wired but intentionally disabled until a NEW Firebase project config and its owner UID are supplied in `firebase-config.js`.
- The owner-only rules in `firebase/database.rules.json` and `firebase/storage.rules` contain a UID placeholder. Replace it with the new project's owner UID before deploying. Placeholder rules are not ready to publish.
- Rules have not been deployed and no live Firebase project has been connected or security-tested.
- Client-side owner gating is not a replacement for server-enforced Firebase rules.
- The 17 modules still store records in browser local storage on one device. Cloud database synchronization, migration, and remote backups are not yet implemented.
- Do not enter real or sensitive customer information in this preview.
- The existing website Firebase project is not reused. Its old rules were found to allow authenticated root reads.
- PWA caching only caches static app files; it does not secure or synchronize business records.
- This build is not production-ready.

## Firebase setup
Follow `FIREBASE_SETUP.md`. Create a separate Firebase project, enable Email/Password, create the owner account, configure the web app, and replace the owner UID placeholders. Never commit a service-account private key.

## Production work remaining
1. Complete separate Firebase project setup and verify owner sign-in.
2. Deploy and test least-privilege database and Storage rules.
3. Connect all module CRUD operations to the cloud database with validation and audit history.
4. Add remote backups and safe local-to-cloud migration.
5. Finish quotation / invoice print layouts and payment reconciliation.
6. Test authorization, data recovery, responsive layouts, and deployment.
7. Package Android, iOS, and Windows apps after the web version is stable.

## Preview
Open `index.html` locally or serve this folder through a static server. Firebase Authentication and ES modules require HTTPS or localhost. PWA installation requires HTTPS.
