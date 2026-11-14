// Existing KHANS website Firebase project configuration.
// Firebase web config is public client configuration; never add service-account secrets here.
export const firebaseConfig = {
  apiKey: "AIzaSyAOZQKkqeDHC81KW3aQSHGVuW4ckncmMo8",
  authDomain: "khan-sgypsumcraptpk.firebaseapp.com",
  databaseURL: "https://khan-sgypsumcraptpk-default-rtdb.firebaseio.com",
  projectId: "khan-sgypsumcraptpk",
  storageBucket: "khan-sgypsumcraptpk.firebasestorage.app",
  messagingSenderId: "82454361678",
  appId: "1:82454361678:web:ec6f56190fe6cc68fe751f"
};

// Owner UID extracted from the existing website's Firebase configuration.
// Authentication must already have this UID in the SAME Firebase project.
export const OWNER_UID = "0opYFH8lt7go4jDCaQhgI4EIqRq2";
export const isFirebaseConfigured = () =>
  Object.values(firebaseConfig).every(v => typeof v === "string" && v.length > 0) &&
  OWNER_UID.length > 0;
