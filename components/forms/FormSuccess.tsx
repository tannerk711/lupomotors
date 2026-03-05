import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function FormSuccess() {
  return (
    <div className="glass rounded-2xl p-8 text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle size={56} className="text-lupo-green-light" />
      </div>
      <h3 className="font-display text-2xl font-bold text-white mb-2">
        We Got Your Info!
      </h3>
      <p className="text-white/70 mb-6 max-w-sm mx-auto">
        Drake is reviewing your vehicle now. Expect an offer within minutes for
        standard vehicles, or up to 1 hour for exotics.
      </p>
      <div className="border-t border-white/10 pt-4">
        <p className="text-sm text-white/50 mb-2">Want to speed things up?</p>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center gap-2 text-white font-semibold hover:text-lupo-silver transition-colors"
        >
          Call or text Drake: {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
