// ===========================================
// 📱 ART OF MIND APP CONFIGURATION
// ===========================================
//
// This file controls what your app shows.
// You can edit these settings in plain English!
//
// After making changes:
// 1. Save this file
// 2. Push to GitHub (or upload the changed file)
// 3. GitHub Actions will build a new APK automatically
//
// ===========================================

const AppConfig = {

  // 🌐 WEBSITE URL
  // This is the webpage that loads when users tap "Visit Website"
  // Change this to any page on your website:
  websiteUrl: 'https://artofmind.gr/el/',

  // Examples you can use instead:
  // websiteUrl: 'https://artofmind.gr/el/services',
  // websiteUrl: 'https://artofmind.gr/el/contact',
  // websiteUrl: 'https://artofmind.gr/el/mobile-landing',

  // 📱 APP INFORMATION
  appName: 'Art of Mind',

  // 🎨 COLORS (use your website's exact colors)
  colors: {
    primary: '#1676a4',      // Main blue color
    secondary: '#155e85',    // Darker blue
    background: '#f2f2f2',   // Light gray background
    text: '#222222'          // Dark text color
  },

  // 🏠 HOME SCREEN CONTENT
  // This is the welcome screen users see first
  homeScreen: {
    welcomeTitle: 'Καλώς ήρθατε',
    welcomeText: 'Το Art of Mind είναι ένα κέντρο ψυχικής υγείας που παρέχει υπηρεσίες ψυχοθεραπείας και συμβουλευτικής στην Πάτρα.',

    // 📋 SERVICES TO SHOW
    services: [
      {
        title: 'Online Συνεδρίες',
        description: '45λεπτες συνεδρίες ψυχοθεραπείας μέσω βιντεοκλήσης',
        price: '€36-€45 ανά συνεδρία'
      },
      {
        title: 'Ατομική Ψυχοθεραπεία',
        description: 'Εξατομικευμένη προσέγγιση με σύγχρονες θεραπευτικές μεθόδους',
        price: null // No price shown
      },
      {
        title: 'Ομαδική Θεραπεία',
        description: 'Θεραπευτικές ομάδες για διάφορα θέματα ψυχικής υγείας',
        price: null
      }
    ],

    // 📞 CONTACT INFORMATION
    contact: {
      location: 'Πάτρα, Ελλάδα',
      website: 'artofmind.gr',
      // Add more contact info here:
      // phone: '+30 123 456 7890',
      // email: 'info@artofmind.gr',
    }
  }
};

// Don't change this line - it makes the config available to the app
export default AppConfig;