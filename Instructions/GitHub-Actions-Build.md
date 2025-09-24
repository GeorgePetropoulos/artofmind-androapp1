# 🚀 Automatic APK Building with GitHub Actions

## 📋 What This Does

GitHub Actions will automatically:
- ✅ Build your APK whenever you push code changes
- ✅ Create signed APK ready for installation
- ✅ Upload APK as downloadable release
- ✅ No need for local Android development setup

---

## 🔧 Setup Steps

### Step 1: Create GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name it: `art-of-mind-app`
4. Make it **Public** (or Private if you have GitHub Pro)
5. Click "Create repository"

### Step 2: Upload Your Code
**Option A - Using GitHub Web Interface:**
1. On your new repo page, click "uploading an existing file"
2. Drag and drop ALL files from the `ArtOfMindApp` folder
3. Commit the files

**Option B - Using Git Commands:**
```bash
cd ArtOfMindApp
git remote add origin https://github.com/YOURUSERNAME/art-of-mind-app.git
git commit -m "Initial commit: Art of Mind Android App"
git push -u origin main
```

### Step 3: Create Signing Key (One-Time Setup)
Run this command in your ArtOfMindApp folder:
```bash
keytool -genkeypair -v -storetype PKCS12 -keystore artofmind-release-key.keystore -alias artofmind-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

**You'll be asked for:**
- Keystore password (remember this!)
- Key password (remember this!)
- Your name/organization details

### Step 4: Set Up GitHub Secrets
1. Go to your GitHub repo
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each:

**Required Secrets:**
- `KEYSTORE_BASE64`:
  ```bash
  # Convert keystore to base64:
  certutil -encode artofmind-release-key.keystore keystore.txt
  # Copy the base64 content (without headers) and paste as secret
  ```
- `KEY_ALIAS`: `artofmind-key-alias`
- `STORE_PASSWORD`: Your keystore password
- `KEY_PASSWORD`: Your key password

---

## 🏗️ How to Build APK

### Automatic Building:
Every time you push changes to the `main` branch, GitHub Actions will:
1. Automatically start building
2. Create a new release with APK
3. Send you an email when done

### Manual Building:
1. Go to your repo on GitHub
2. Click **Actions** tab
3. Click **Build Android APK** workflow
4. Click **Run workflow**
5. Wait 10-15 minutes for build to complete

---

## 📱 Download & Install APK

### After Build Completes:
1. Go to **Releases** section of your repo
2. Download the latest `ArtOfMind-vX.apk` file
3. Transfer to your Android phone
4. Install (make sure Unknown Sources is enabled)

### Build Status:
- ✅ **Green checkmark**: Build successful, APK ready
- ❌ **Red X**: Build failed, check the logs
- 🟡 **Yellow dot**: Currently building

---

## 🛠️ Customizing the App

### To Change App Content:
1. Edit files in your local `ArtOfMindApp` folder
2. Push changes to GitHub
3. GitHub Actions automatically builds new APK
4. Download the new APK from Releases

### Files You Can Safely Edit:
- `src/screens/HomeScreen.tsx` - App home screen content
- `src/screens/WebViewScreen.tsx` - Website URL
- `app.json` - App name and settings

---

## 🚨 Troubleshooting

### Build Fails:
1. Check **Actions** tab for error details
2. Common issues:
   - Missing secrets (KEYSTORE_BASE64, passwords)
   - Invalid base64 keystore encoding
   - Syntax errors in code

### APK Won't Install:
- Enable "Install from Unknown Sources" in Android Settings
- Check if APK file downloaded completely
- Make sure Android version is compatible (min API 21)

### Can't Download APK:
- Check if build completed successfully (green checkmark)
- Look in **Releases** section, not **Actions**
- Build artifacts expire after 30 days

---

## 💰 GitHub Costs

### Free Tier Includes:
- **Public repositories**: Unlimited builds
- **Private repositories**: 2,000 build minutes/month
- Build time: ~10-15 minutes per APK

### If You Exceed Free Tier:
- $0.008 per minute for additional build time
- Consider making repository public to get unlimited builds

---

## 🔐 Security Notes

### Your Signing Key:
- **Keep it safe!** Same key needed for Google Play updates
- **Backup the .keystore file** - if lost, you can't update the app
- **Never share** keystore passwords publicly

### Repository:
- Code is visible if repository is public
- No sensitive data is exposed in the workflow
- Secrets are encrypted by GitHub

---

## 📞 Next Steps

1. ✅ Set up GitHub repo and secrets
2. ✅ Push your code
3. ✅ Wait for first automatic build
4. ✅ Download and test APK
5. ✅ Make changes and see automatic rebuilds

**Your app will be automatically built and ready for download every time you make changes!**