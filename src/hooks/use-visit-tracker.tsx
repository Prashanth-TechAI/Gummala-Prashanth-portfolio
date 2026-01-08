import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs.config';

/**
 * Hook to track website visits and send email notifications via EmailJS
 * 
 * This hook automatically tracks when someone visits your portfolio
 * and sends you an email notification with visitor details.
 * 
 * Configuration is managed in: src/config/emailjs.config.ts
 */

// Function to track visit (exported for manual testing)
const trackVisit = async () => {
  try {
    console.log('📊 Collecting visit data...');
    
    // Collect visit information
    const visitData = {
      timestamp: new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      }),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'Direct visit',
      url: window.location.href,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
    };

    console.log('📋 Visit Data:', visitData);

    // Prepare email content - formatted for "Contact Us" template
    // The template expects: {{name}}, {{time}}, {{message}}, {{email}}
    const emailContent = `
🚀 New Visitor on Your Portfolio!

📅 Visit Time: ${visitData.timestamp}
🌐 Page URL: ${visitData.url}
🔗 Referrer: ${visitData.referrer}
💻 Device Info: ${visitData.userAgent.substring(0, 150)}
📱 Screen Size: ${visitData.screenSize}
🌍 Timezone: ${visitData.timezone}
🗣️ Language: ${visitData.language}

---
This is an automated notification from your portfolio website.
    `.trim();

    // Map to "Contact Us" template variables
    // Template expects: {{name}}, {{time}}, {{message}}, {{email}}
    const templateParams = {
      name: 'Portfolio Visitor', // Visitor identifier
      time: visitData.timestamp, // Visit timestamp
      message: emailContent, // Full visit details
      email: emailjsConfig.recipientEmail, // Recipient email for reply-to
    };

    console.log('📧 Sending email via EmailJS...');
    console.log('📝 Template Params:', {
      name: templateParams.name,
      time: templateParams.time,
      message: templateParams.message.substring(0, 50) + '...',
      email: templateParams.email,
    });
    console.log('🔑 Using:', {
      serviceId: emailjsConfig.serviceId,
      templateId: emailjsConfig.templateId,
      publicKey: emailjsConfig.publicKey ? '***' + emailjsConfig.publicKey.slice(-4) : 'MISSING',
    });

    // Send email via EmailJS
    console.log('🔑 Verifying credentials before send...');
    console.log('Service ID:', emailjsConfig.serviceId);
    console.log('Template ID:', emailjsConfig.templateId);
    console.log('Public Key (full):', emailjsConfig.publicKey);
    console.log('Public Key length:', emailjsConfig.publicKey?.length);
    
    // Try the standard format: send(serviceId, templateId, params, publicKey)
    // This is the most reliable format that works across versions
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey // Pass publicKey as 4th parameter (string)
    );
    
    console.log('✅ Visit tracked and notification sent successfully!');
    console.log('📬 EmailJS Response:', response);
    console.log('📧 Check your email:', emailjsConfig.recipientEmail);
    return response;
  } catch (error: any) {
    console.error('❌ Failed to track visit:', error);
    console.error('❌ Error details:', {
      message: error?.message,
      text: error?.text,
      status: error?.status,
      response: error?.response,
    });
    
    // Provide helpful error messages
    if (error?.text) {
      console.error('📋 EmailJS Error:', error.text);
    }
    if (error?.status) {
      console.error('📊 HTTP Status:', error.status);
    }
    
    throw error; // Re-throw for manual testing
  }
};

// Export for manual testing
export const trackVisitManually = trackVisit;

// Main hook
export const useVisitTracker = () => {
  const hasTracked = useRef(false);

  useEffect(() => {
    // Only track once per session to avoid spam
    if (hasTracked.current) {
      console.log('🔄 Visit already tracked in this session');
      return;
    }
    
    // Check if EmailJS is properly configured
    if (!emailjsConfig.templateId || !emailjsConfig.publicKey) {
      console.warn('⚠️ EmailJS not configured. Please check src/config/emailjs.config.ts');
      console.warn('Current config:', emailjsConfig);
      return;
    }
    
    console.log('🚀 Visit tracker initialized. Will track in 2 seconds...');
    console.log('📧 EmailJS Config:', {
      serviceId: emailjsConfig.serviceId,
      templateId: emailjsConfig.templateId,
      publicKey: emailjsConfig.publicKey ? '***' + emailjsConfig.publicKey.slice(-4) : 'MISSING',
    });
    
    // Track after a short delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      console.log('⏰ Timer fired, tracking visit now...');
      trackVisit().catch(err => {
        // Error already logged in trackVisit
      });
      hasTracked.current = true;
    }, 2000); // Wait 2 seconds after page load

    return () => clearTimeout(timer);
  }, []);
};
