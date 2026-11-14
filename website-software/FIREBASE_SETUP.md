# Separate Firebase backend setup

This backend must be a NEW Firebase project. Do not reuse the existing public website Firebase project.

1. Create a new Firebase project and register a Web app. Copy its web config into `firebase-config.js`.
2. In Authentication → Sign-in method, enable Email/Password. Create the owner account in the Firebase console; public sign-up is not provided.
3. Copy the new owner's UID into `OWNER_UID` in `firebase-config.js`.
4. Create Realtime Database. Replace the UID placeholder in `database.rules.json` with that exact UID and publish the rules. The rules deny root access and grant access only to the owner under `/business`. Do not publish placeholder rules.
5. If using Storage for project images, replace the UID in `storage.rules` and publish those rules. All other paths remain denied.
6. Add the deployment hostname to Authentication → Settings → Authorized domains and deploy over HTTPS.

## Current implementation boundary
The sign-in screen and Firebase Authentication integration are wired, but sign-in stays disabled until a new project configuration and owner UID are supplied. The 17 business modules still store records in this browser's local storage. Cloud data migration, live database synchronization, remote backups, and security testing are not yet implemented. Do not enter real customer data until those steps are complete.

Never put a Firebase service-account private key in frontend code or GitHub. Server-side staff-role provisioning must use a trusted server.
