"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadDetailsSchema, type LeadDetailsData } from "@/lib/form-validation";
import { X } from "lucide-react";

interface LeadDetailsModalProps {
  vinData: { vin: string; mileage: string };
  onSubmit: (data: LeadDetailsData) => void;
  onClose: () => void;
  isSubmitting: boolean;
}

export default function LeadDetailsModal({
  vinData,
  onSubmit,
  onClose,
  isSubmitting,
}: LeadDetailsModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadDetailsData>({
    resolver: zodResolver(leadDetailsSchema),
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Complete your vehicle details">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg glass rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-lupo-silver font-medium">
              Step 2 of 2
            </span>
            <span className="text-xs text-white/40">Almost done!</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full">
            <div className="w-full h-full bg-lupo-green-light rounded-full" />
          </div>
        </div>

        {/* VIN summary */}
        <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-xs text-white/50 mb-1">Your vehicle</p>
          <p className="text-sm text-white font-medium">
            VIN: {vinData.vin} &middot; {vinData.mileage} miles
          </p>
        </div>

        <h3 className="font-display text-xl font-bold text-white mb-5">
          A Few More Details
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">
              Full name
            </label>
            <input
              {...register("fullName")}
              type="text"
              placeholder="John Smith"
              className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 px-4 py-3 text-base focus:outline-none focus:border-lupo-green-light focus:ring-1 focus:ring-lupo-green/50 transition-colors"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Price Expectation */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">
              What are you hoping to get?{" "}
              <span className="text-white/40">(optional)</span>
            </label>
            <input
              {...register("priceExpectation")}
              type="text"
              placeholder="e.g., $35,000"
              className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 px-4 py-3 text-base focus:outline-none focus:border-lupo-green-light focus:ring-1 focus:ring-lupo-green/50 transition-colors"
            />
          </div>

          {/* Is Financed */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Is the vehicle financed?
            </label>
            <div className="flex gap-3">
              <label className="flex-1 cursor-pointer">
                <input
                  {...register("isFinanced")}
                  type="radio"
                  value="no"
                  className="peer sr-only"
                />
                <div className="text-center py-3 rounded-lg border border-white/20 text-white/70 text-sm font-medium peer-checked:border-lupo-green-light peer-checked:text-white peer-checked:bg-lupo-green/10 transition-all">
                  Owned Outright
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input
                  {...register("isFinanced")}
                  type="radio"
                  value="yes"
                  className="peer sr-only"
                />
                <div className="text-center py-3 rounded-lg border border-white/20 text-white/70 text-sm font-medium peer-checked:border-lupo-green-light peer-checked:text-white peer-checked:bg-lupo-green/10 transition-all">
                  Still Making Payments
                </div>
              </label>
            </div>
            {errors.isFinanced && (
              <p className="mt-1 text-sm text-red-400">
                {errors.isFinanced.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">
              Phone number
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="(208) 555-0123"
              className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 px-4 py-3 text-base focus:outline-none focus:border-lupo-green-light focus:ring-1 focus:ring-lupo-green/50 transition-colors"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-lupo-green-light text-white font-bold py-4 rounded-lg hover:bg-lupo-green active:bg-lupo-green-dark transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Submit & Get My Offer"}
          </button>

          <p className="text-center text-xs text-white/40">
            Your information is private and never shared with third parties.
          </p>
        </form>
      </div>
    </div>
  );
}
