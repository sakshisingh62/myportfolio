# Portfolio Website Setup Guide

## 📧 Email Notification Setup (Contact Form)

Your contact form is configured to send email notifications when someone submits the form. Follow these steps:

### Option 1: Web3Forms (Recommended - FREE)

1. **Get Your Access Key:**
   - Go to [https://web3forms.com](https://web3forms.com)
   - Click "Create Access Key"
   - Enter your email address (where you want to receive notifications)
   - Verify your email
   - Copy your Access Key

2. **Update Your Portfolio:**
   - Open `index.html`
   - Find line: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">`
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
   - Example: `value="a1b2c3d4-e5f6-7890-abcd-ef1234567890"`

3. **Test:**
   - Open your portfolio
   - Fill out the contact form
   - Submit it
   - Check your email inbox for the notification!

### Option 2: Formspree (Alternative - FREE)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🚀 Project Links Setup

Update your deployed project URLs in `index.html`:

### Current Placeholder Links (Replace These):
```html
<!-- Line ~177 -->
<a href="https://your-weather-app.netlify.app" ...>View Project →</a>

<!-- Line ~189 -->
<a href="https://your-doctor-app.netlify.app" ...>View Project →</a>

<!-- Line ~201 -->
<a href="https://your-ecommerce-app.netlify.app" ...>View Project →</a>
```

### How to Add Your Real Links:

1. **Deploy your projects** to:
   - Netlify: https://netlify.com
   - Vercel: https://vercel.com
   - GitHub Pages: https://pages.github.com
   - Render: https://render.com

2. **Get deployment URLs** after deploying

3. **Replace in `index.html`:**
   ```html
   <!-- Example: Weather App -->
   <a href="https://my-weather-app.netlify.app" target="_blank" rel="noopener noreferrer" class="btn-project">View Project →</a>
   
   <!-- Example: Doctor App -->
   <a href="https://my-doctor-appointment.vercel.app" target="_blank" rel="noopener noreferrer" class="btn-project">View Project →</a>
   
   <!-- Example: E-commerce -->
   <a href="https://my-ecommerce-site.netlify.app" target="_blank" rel="noopener noreferrer" class="btn-project">View Project →</a>
   ```

---

## 📝 Quick Customization Checklist

- [ ] Set up Web3Forms access key for email notifications
- [ ] Replace project URLs with your deployed project links
- [ ] Update profile image (`index.html` line ~38)
- [ ] Update your email address (`index.html` line ~249)
- [ ] Update resume link (`index.html` line ~22, ~40)
- [ ] Update social media links (LinkedIn, GitHub)
- [ ] Update your name and details throughout the site

---

## 🌐 Deployment

Deploy your portfolio to:

### Netlify (Easiest):
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /home/sama/myportfolio
netlify deploy --prod
```

### Or drag and drop:
1. Go to https://app.netlify.com/drop
2. Drag your `myportfolio` folder
3. Done! You'll get a live URL

---

## 📧 Email Notification Features

When someone submits your contact form, you'll receive:
- ✅ Sender's name
- ✅ Sender's email address
- ✅ Subject line
- ✅ Message content
- ✅ Timestamp
- ✅ Notification directly to your inbox

---

## 🔧 Troubleshooting

### Email notifications not working?
1. Check if you added the correct Access Key
2. Verify your email address in Web3Forms dashboard
3. Check spam folder
4. Open browser console (F12) to see any errors

### Projects links not working?
1. Make sure URLs start with `https://`
2. Check if projects are actually deployed
3. Verify links open in new tab

---

## 📞 Support

If you need help:
- Web3Forms Documentation: https://docs.web3forms.com
- Netlify Documentation: https://docs.netlify.com

---

**Good luck with your portfolio! 🚀**
