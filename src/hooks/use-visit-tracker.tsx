import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs.config';

/**
 * Hook to track website visits and send a notification email via EmailJS.
 * Configuration lives in: src/config/emailjs.config.ts
 */

const isDev = import.meta.env.DEV;

const trackVisit = async () => {
  const visitData = {
    timestamp: new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    }),
    userAgent: navigator.userAgent,
    referrer: document.referrer || 'Direct visit',
    url: window.location.href,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
  };

  const message = [
    '🚀 New Visitor on Your Portfolio!',
    '',
    `📅 Visit Time: ${visitData.timestamp}`,
    `🌐 Page URL: ${visitData.url}`,
    `🔗 Referrer: ${visitData.referrer}`,
    `💻 Device: ${visitData.userAgent.substring(0, 150)}`,
    `📱 Screen: ${visitData.screenSize}`,
    `🌍 Timezone: ${visitData.timezone}`,
    `🗣️ Language: ${visitData.language}`,
  ].join('\n');

  const templateParams = {
    name: 'Portfolio Visitor',
    time: visitData.timestamp,
    message,
    email: emailjsConfig.recipientEmail,
  };

  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.templateId,
    templateParams,
    emailjsConfig.publicKey,
  );
};

export const trackVisitManually = trackVisit;

export const useVisitTracker = () => {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    if (!emailjsConfig.templateId || !emailjsConfig.publicKey) {
      if (isDev) console.warn('[visit-tracker] EmailJS not configured.');
      return;
    }

    const timer = setTimeout(() => {
      hasTracked.current = true;
      trackVisit().catch((err) => {
        if (isDev) console.warn('[visit-tracker] Failed:', err?.text ?? err);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
};
