# Existing Firebase project connection

The software Firebase web configuration and owner UID have been populated from the existing KHANS website source.

- Project ID: `khan-sgypsumcraptpk`
- Realtime Database: `https://khan-sgypsumcraptpk-default-rtdb.firebaseio.com`
- Owner UID: `0opYFH8lt7go4jDCaQhgI4EIqRq2`

## Owner login
The owner sign-in screen uses Firebase Email/Password Authentication for this same project and checks the signed-in user's UID against the owner UID above. The owner account must already exist in this Firebase project's Authentication users. If login fails, verify that Email/Password is enabled and that the owner account is present.

## Important database security warning
The existing website's Realtime Database rules were inspected. They grant root-level reads to any authenticated user (`auth != null`). The root-level write rule is restricted to the owner UID. A root-level read grant cannot be narrowed by adding more restrictive child rules below it.

For that reason:
- Do NOT publish the software's separate `firebase/database.rules.json` or `firebase/storage.rules` over the existing website project. Those files are deny-by-default templates intended for an isolated backend and could break the original website if deployed as-is.
- Do NOT assume that the current Firebase database is safe for private business records. Existing authenticated users may be able to read data.
- The software's owner-only screen is a client-side gate, not a replacement for server-side database authorization.
- Cloud business-record sync is not enabled yet. The current 17 modules still use browser local storage.

Before storing private customer, quotation, invoice, payment, or staff data in the existing database, the complete current website data model and access requirements must be reviewed and the database rules redesigned without breaking the public website. A separate Firebase project remains the safer production choice.

Never commit service-account private keys or passwords to GitHub.
