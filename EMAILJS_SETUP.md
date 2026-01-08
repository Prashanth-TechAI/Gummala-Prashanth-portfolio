# 📧 EmailJS Visit Tracking Setup Guide

Your portfolio is now configured to send you email notifications when someone visits your website! 

## ✅ What's Already Done

- ✅ EmailJS package installed (`@emailjs/browser`)
- ✅ Visit tracker hook created
- ✅ Service ID configured: `service_iyx2t0p`
- ✅ Gmail service connected: `prashanth9701337681@gmail.com`

## 🔧 What You Need to Do

### Step 1: Create Email Template in EmailJS

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **"Email Templates"** in the left sidebar
3. Click **"Create New Template"**
4. Fill in the template details:
   - **Template Name**: `Portfolio Visit Notification`
   - **Subject**: `{{subject}}`
   - **Content/Body**:
     ```
     {{message}}
     ```
5. Click **"Save"**
6. **Copy the Template ID** (it will look like `template_xxxxxxx`)

### Step 2: Get Your Public Key

1. In EmailJS Dashboard, go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (it will look like `xxxxxxxxxxxxx`)

### Step 3: Update Configuration File

1. Open `src/config/emailjs.config.ts`
2. Replace the placeholder values:
   ```typescript
   export const emailjsConfig = {
     serviceId: 'service_iyx2t0p', // ✅ Already set
     templateId: 'YOUR_TEMPLATE_ID', // ⚠️ Replace with your Template ID from Step 1
     publicKey: 'YOUR_PUBLIC_KEY', // ⚠️ Replace with your Public Key from Step 2
     recipientEmail: 'gummalaprashanth509@gmail.com', // ✅ Already set
   };
   ```

### Step 4: Test It!

1. Run your development server: `npm run dev`
2. Open your portfolio in a browser
3. Wait 2 seconds after the page loads
4. Check your email (`gummalaprashanth509@gmail.com`) for the notification
5. Check browser console (F12) for success/error messages

## 📬 What You'll Receive

When someone visits your portfolio, you'll get an email with:
- 📅 Visit timestamp
- 🌐 Page URL
- 🔗 Referrer (where they came from)
- 💻 Device information
- 📱 Screen size
- 🌍 Timezone
- 🗣️ Language

## 🐛 Troubleshooting

**Not receiving emails?**
- Check browser console (F12) for errors
- Verify Template ID and Public Key are correct
- Make sure your Gmail service is connected in EmailJS
- Check spam folder

**Console shows warning?**
- Make sure you've updated `emailjs.config.ts` with your credentials

**Need help?**
- Check EmailJS documentation: https://www.emailjs.com/docs/

---

**Note**: Visit tracking only happens once per browser session to avoid spam. Each new visitor will trigger one email notification.

