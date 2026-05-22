import Image from "next/image";
import { WHATSAPP_URL } from "../lib/whatsapp";

export const metadata = {
  title: "Under Construction | Abdullah Portfolio",
  description: "This site is being updated. Check back soon.",
};

export default function UnderConstructionPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-100 text-center">
      <div className="max-w-lg space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Abdullah Ibraheem
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Site under construction
        </h1>
        <p className="text-lg text-gray-600">
          I&apos;m rebuilding my portfolio. The full site will be back online
          soon — thank you for your patience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            <Image
              src="/whatsapp.svg"
              alt=""
              width={22}
              height={22}
              aria-hidden
            />
            Contact me on WhatsApp
          </a>
        </div>
        <p className="text-sm text-gray-500 pt-4">
          &copy; {new Date().getFullYear()} Abdullah Ibraheem
        </p>
      </div>
    </main>
  );
}
