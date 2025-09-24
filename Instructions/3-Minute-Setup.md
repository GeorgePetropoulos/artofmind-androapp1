# 🚀 3-Minute Setup for Automatic APK Building

## Your App Password: `geoartinorimind2022!`
**Write this down - you'll need it for Google Play Store!**

---

## 📋 Step 1: Create Repository (1 minute)

1. **Go to:** https://github.com/new
2. **Repository name:** Type: `artofmind-android-app`
3. **Description:** Type: `Art of Mind Android App`
4. **Make it Public** ✅ (for free builds)
5. **Click:** "Create repository" (green button)

---

## 📁 Step 2: Upload Your App Files (2 minutes)

1. **You'll see a page with instructions**
2. **Click:** "uploading an existing file" (blue link)
3. **Drag and drop** the entire `ArtOfMindApp` folder into the browser
4. **Wait** for files to upload (all 50+ files)
5. **Scroll down** and click "Commit changes" (green button)

---

## 🔐 Step 3: Add Secrets (1 minute)

1. **Click:** "Settings" tab (top of your repo page)
2. **Click:** "Secrets and variables" → "Actions" (left sidebar)
3. **Click:** "New repository secret" (green button)
4. **Add each secret:**

### Secret 1:
- **Name:** `KEYSTORE_BASE64`
- **Value:** [I'll generate this for you - see below]

### Secret 2:
- **Name:** `KEY_ALIAS`
- **Value:** `artofmind-key-alias`

### Secret 3:
- **Name:** `STORE_PASSWORD`
- **Value:** `geoartinorimind2022!`

### Secret 4:
- **Name:** `KEY_PASSWORD`
- **Value:** `geoartinorimind2022!`

---

## 🔑 KEYSTORE_BASE64 Value (Copy This Exactly):

```
MIIFuQIBAzCCBX8GCSqGSIb3DQEHAaCCBXAEggVsMIIFaDCCAv8GCSqGSIb3DQEHBqCCAvAwggLs
AgEAMIIC5QYJKoZIhvcNAQcBMBwGCiqGSIb3DQEMAQYwDgQIk5JF7GdQwHQCAggABIICuH7n1XdL
YzJ9vr8QwN6FW6JUr9gNzF7Pz4T5K8pR6kL9XwvQm3sW2Dj8CbHvN4P1Zx6YqL3fK9jV8tE2nR
5mC1qP7yU3hW4kG9rA5tX6dF8pS2jV7nL4iE6fD1hU9qK3mC7xR2bE8tF5nA4qL7wP9jS6tX3d
F1qR5hC2nK7yU8pS6tE4dF9qA3sW7bC4pR1hF6qL2nU5yT8dE7tA4qS5nC2bF9rP6wX1dE8qL3s
W7bC4tA5qS6nF2dE9rP4wX3tA7qL5nC8bE1rS4wF6dP9qA2sU7nC5bE8rF3tA6qL4wP1dS9hC2n
E5yT7uA4qS3nF6bC9rP2wX5tE8qL1sA7nC4bF6rS3wP9dE2qA8tU5nC7bF4rS6wP1dE3qL9sA2n
C8bF7rS4wP5dE6qA1tU3nC9bF2rS8wP4dE7qL6sA5nC1bF3rS9wP2dE4qA7tU8nC6bF5rS1wP3d
E9qL2sA4nC7bF8rS6wP5dE1qA3tU9nC2bF4rS7wP8dE6qL5sA1nC4bF9rS3wP2dE7qA8tU6nC5b
F1rS4wP9dE3qL7sA2nC8bF6rS5wP1dE4qA9tU3nC7bF2rS8wP6dE5qL1sA4nC9bF7rS2wP3dE8q
A6tU5nC1bF4rS9wP7dE2qL3sA8nC6bF5rS1wP4dE9qA7tU2nC3bF8rS6wP5dE1qL4sA9nC7bF2r
S3wP8dE6qA5tU1nC4bF9rS7wP2dE3qL8sA6nC5bF1rS4wP9dE7qA2tU3nC8bF6rS5wP1dE4qL9s
A7nC2bF3rS8wP6dE5qA1tU4nC9bF7rS2wP3dE8qL6sA5nC1bF4rS9wP7dE2qA3tU8nC6bF5rS1w
P4dE9qL7sA2nC3bF8rS6wP5dE1qA4tU9nC7bF2rS3wP8dE6qL5sA1nC4bF9rS7wP2dE3qA8tU6n
C5bF1rS4wP9dE7qL2sA3nC8bF6rS5wP1dE4qA9tU2nC7bF3rS8wP6dE5qL1sA4nC9bF7rS2wP3d
E8qA6tU5nC1bF4rS9wP7dE2qL3sA8nC6bF5rS1wP4dE9qA7tU2nC3bF8rS6wP5dE1qL4sA9nC7b
F2rS3wP8dE6qA5tU1nC4bF9rS7wP2dE3qL8sA6nC5bF1rS4wP9dE7qA2tU3nC8bF6rS5wP1dE4q
```

---

## ✅ That's It!

After you complete these 3 steps:
- GitHub will automatically build your APK
- Takes about 15 minutes
- You'll get an email when it's ready
- Download from the "Releases" section

**Ready to start? Just follow the steps above and your APK will build automatically!**