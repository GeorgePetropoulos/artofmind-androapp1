# 📱 Art of Mind Android App - Installation Guide

## 📥 How to Install the App on Your Phone

### Method 1: Direct APK Install (RECOMMENDED)

#### Step 1: Enable Unknown Sources
1. Open **Settings** on your Android phone
2. Go to **Security** → **Unknown Sources** (turn it ON)
   - OR go to **Apps** → **Special Access** → **Install Unknown Apps**
3. This allows installing apps from outside Google Play Store

#### Step 2: Get the APK File
1. The APK file needs to be built first (see APK-Build-Guide.md)
2. Once built, transfer the `.apk` file to your phone:
   - Via USB cable
   - Via email attachment
   - Via cloud storage (Google Drive, Dropbox)
   - Via messaging app

#### Step 3: Install
1. On your phone, find the `.apk` file
2. Tap on it
3. Click **Install**
4. Wait for installation to complete
5. The app will appear in your app drawer as "Art of Mind"

### Method 2: Development Install (Technical)
**Only if you have Android development setup:**
1. Connect phone via USB with Developer Mode enabled
2. Run: `cd ArtOfMindApp && npx react-native run-android`

---

## 🏪 Publishing to Google Play Store

### Requirements:
- **Google Play Developer Account** ($25 one-time registration fee)
- **Signed APK/AAB** (production version)
- **App Icons** (various sizes)
- **Screenshots** (phone & tablet)
- **Privacy Policy** (mandatory)
- **App Description**

### Steps:
1. **Create Google Play Console Account**
   - Go to: https://play.google.com/console
   - Pay $25 registration fee
   - Verify identity

2. **Prepare App Materials**
   - App icon (512x512 PNG)
   - Feature graphic (1024x500 PNG)
   - Screenshots (phone: 320-3840px wide)
   - Short description (80 characters max)
   - Full description (4000 characters max)
   - Privacy Policy URL

3. **Upload & Submit**
   - Create new app in Play Console
   - Upload signed AAB file
   - Fill all required information
   - Submit for review
   - **Review time: 1-3 days typically**

### Ongoing Requirements:
- **Target API Level**: Must meet Google's requirements (updated yearly)
- **Updates**: Regular updates recommended
- **Policy Compliance**: Must follow Google Play policies

---

## ❓ Troubleshooting

### App Won't Install:
- Check if "Unknown Sources" is enabled
- Make sure APK file isn't corrupted
- Clear Downloads app cache

### App Crashes:
- Check internet connection
- Restart phone
- Reinstall app

### Website Won't Load:
- Check internet connection
- Try refreshing by pulling down on the page
- Check if artofmind.gr is accessible in browser

---

## 📞 Support

For technical issues with this specific app:
- Check APK-Build-Guide.md for building issues
- Verify all files in the project are complete
- Ensure React Native environment is set up correctly

**Note**: This app is currently configured specifically for artofmind.gr website. To use it for other websites, see the "Other Websites" folder for customization instructions.