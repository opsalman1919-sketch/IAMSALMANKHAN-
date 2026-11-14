# KHANS GYPSUMCRAFT PK — Web Software

A separate business-management application, developed independently from the public website.

## Safety boundary
- The existing public website at the repository root is not edited by this project.
- All software development is restricted to the `software-development` branch and `website-software/`.
- An exact source snapshot is stored in `original-site/` for reference.
- Do not merge into `main` without the owner's explicit review and approval.

## Design direction
The software interface follows the original website's Poppins typography, warm white background, black text, and gold accent palette. The source snapshot remains unchanged.

## Development stages
1. Copy and verify the original website source — complete.
2. Align the software shell with the original website's visual identity — initial pass complete.
3. Review Firebase configuration and security rules — inspection started; security changes are not deployed.
4. Implement secure owner authentication and role checks.
5. Implement Customers and Projects.
6. Implement Quotations, Orders, Invoices, Payments, Inventory, and Reports.
7. Test responsive behavior, data access, backups, and deployment.

## Important security finding
The copied Realtime Database rules currently allow any authenticated user to read at the database root. Do not reuse or deploy these rules for the new software without a careful least-privilege review. The software must not expose customer or business records to ordinary signed-in users.

## Current state
The application is a development preview. Firebase authentication and live business data are not connected yet.

## Run locally
Open `index.html` in a modern browser. A local static server is recommended for development.
