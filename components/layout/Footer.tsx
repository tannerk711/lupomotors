import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lupo-black border-t border-lupo-green-dark/30 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <Image
              src="/logo.png"
              alt="Lupo Motors"
              width={140}
              height={35}
              className="h-8 w-auto mx-auto md:mx-0"
            />
            <p className="text-sm text-lupo-muted mt-2">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-white hover:text-lupo-silver transition-colors font-medium"
            >
              {siteConfig.phone}
            </a>
            <p className="text-sm text-lupo-muted mt-1">
              {siteConfig.email}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-lupo-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
            Serving {siteConfig.coverageAreas.join(", ")}.
          </p>
          <a
            href="https://lupomotors.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-lupo-muted hover:text-white transition-colors mt-2 inline-block"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
