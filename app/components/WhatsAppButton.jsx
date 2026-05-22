'use client';

import Image from 'next/image';
import { WHATSAPP_URL } from '../lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
    </a>
  );
}
