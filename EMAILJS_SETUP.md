# Email.js Setup Guide

To enable the contact form functionality, you need to set up Email.js:

## Step 1: Create an Email.js Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## Step 2: Add Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - User's name
   - `{{from_email}}` - User's email
   - `{{message}}` - User's message
4. Save the template and note your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**

## Step 5: Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Troubleshooting

- Make sure all environment variables are prefixed with `NEXT_PUBLIC_`
- Restart your development server after adding environment variables
- Check the browser console for any error messages
- Verify your Email.js service is active and verified

