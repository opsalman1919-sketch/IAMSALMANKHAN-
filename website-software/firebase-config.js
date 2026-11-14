// Firebase web configuration for the NEW, isolated KHANS software project.
// These are public client identifiers, not server secrets. Replace all placeholders.
// Never put a Firebase service-account private key in this file.
export const firebaseConfig = {
  apiKey: "REPLACE_WITH_NEW_PROJECT_WEB_API_KEY",
  authDomain: "REPLACE_WITH_NEW_PROJECT.firebaseapp.com",
  databaseURL: "https://REPLACE_WITH_NEW_PROJECT-default-rtdb.firebaseio.com",
  projectId: "REPLACE_WITH_NEW_PROJECT",
  storageBucket: "REPLACE_WITH_NEW_PROJECT.appspot.com",
  messagingSenderId: "REPLACE_WITH_SENDER_ID",
  appId: "REPLACE_WITH_WEB_APP_ID"
};
// Create the owner in the NEW project's Firebase Authentication and paste that new UID.
export const OWNER_UID = "REPLACE_WITH_NEW_OWNER_AUTH_UID";
export const isFirebaseConfigured = () =>
  Object.values(firebaseConfig).every(v => typeof v === "string" && v.length > 0 && !v.includes("REPLACE_WITH")) &&
  OWNER_UID.length > 0 && !OWNER_UID.includes("REPLACE_WITH");
