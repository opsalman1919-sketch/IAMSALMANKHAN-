# KHANS GYPSUMCRAFT PK — Web Software

This is a separate development area for the business management web software.

## Safety boundary
- The existing website files in the repository root are not edited by this project.
- Development happens on the `software-development` branch.
- The new application lives only in `website-software/`.
- Do not merge this branch into `main` until the owner reviews and approves it.

## Current stage
Initial frontend scaffold only. Navigation and responsive layout are present. Business modules are placeholders; no customer records, orders, invoices, payments, or Firebase operations are connected yet.

## Planned stages
1. Review the existing Firebase configuration and security rules without exposing secrets.
2. Design role-based access for owner, staff, and customers.
3. Connect authentication securely.
4. Implement and test each business module.
5. Add audit, backup, and deployment checks.

## Run locally
Open `index.html` in a modern browser. For development, a local static server is recommended.
