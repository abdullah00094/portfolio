'use client';

import Image from 'next/image';

export default function WhatsAppButton({ phoneNumber }) {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
    </a>
  );
}
