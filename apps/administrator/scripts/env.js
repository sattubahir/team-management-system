/**
 * Application configuration
 * Contains app-wide settings and preferences
 */
const env = {
  ENVIRONMENT: 'development',
  PLATFORM_ENVIRONMENT: 'development',
  AUTH_ENABLED: true,
  SOCIAL_LOGIN_ENABLED: false,
  PHONE_AUTH_ENABLED: false,
  FEEDBACK_ENABLED: true,
  FEEDBACK_API_KEY: 'eyJidXNpbmVzc0lkZWFJZCI6ImMwYTMxZDIyLTU3ZTktNDBkNC1hNTA0LWVjN2JlNmNkMGJjNSIsImNyZWF0ZWRBdCI6MTc2NTMxNTAyMDQ4NywiY3JlYXRlZEJ5IjoiY29kZWdlbmVzaXMifQ==',
  ASSISTANT_ENABLED: true,
  TIRAM_AI_TAG_ENABLED: true,
  CLARITY_ENABLED: false,
  app: {
    name: 'Modern Business Systems Roster Chained 1',
    logo: 'assets/imgs/logo.png',
    logoWithText: 'assets/imgs/logo-with-text.png',
    themePreset: 'default',
    navigation: 'sidenav', // Can be 'topnav' or 'sidenav'
    businessIdeaId: 'c0a31d22-57e9-40d4-a504-ec7be6cd0bc5',
    personaRole: 'Administrator',
    appType: 'business',
  },
  // this key wil be used to setup the firebase config
  FIREBASE_CONFIG: {
    
     FIREBASE_API_KEY: 'AIzaSyDTi2tuk4vsE39Pb5LaprfkDPNFb-VdWNM',
    FIREBASE_AUTH_DOMAIN: 'team-management-app-e3019.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'team-management-app-e3019',
    FIREBASE_STORAGE_BUCKET: 'team-management-app-e3019.firebasestorage.app',
    FIREBASE_MESSAGING_SENDER_ID: '667121984384',
    FIREBASE_APP_ID: '1:667121984384:web:ce07ff2694ca5ddc281765',
   // MEASUREMENT_ID: 'G-0WTW65DNJF',
   // FIRESTORE_DB_NAME: 'gen-app-db-2',
  },
  BASE_URL: 'https://qvm-api-modern-business-c0a3.azurewebsites.net/administrator',
  REFINER: {
    ENABLED: false,
    POSITION: 'bottom-right', // Can be 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    HIGHLIGHT_COLOR: '#f04a01',
  },
};

export { env };
