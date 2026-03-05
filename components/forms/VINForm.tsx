"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { vinFormSchema, type VINFormData } from "@/lib/form-validation";
import { ArrowRight } from "lucide-react";

interface VINFormProps {
  onSubmit: (data: VINFormData) => void;
  compact?: boolean;
  id?: string;
}

export default function VINForm({ onSubmit, compact, id }: VINFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VINFormData>({
    resolver: zodResolver(vinFormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`glass rounded-2xl ${compact ? "p-5" : "p-6 md:p-8"}`}
      id={id || "hero-form"}
    >
      <div className="space-y-4">
        {/* VIN Field */}
        <div>
          <label
            htmlFor="vin"
            className="block text-sm font-medium text-white/80 mb-1.5"
          >
            VIN Number
          </label>
          <input
            {...register("vin")}
            id="vin"
            type="text"
            placeholder="Enter your 17-digit VIN"
            maxLength={17}
            autoComplete="off"
            className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 px-4 py-3 text-base focus:outline-none focus:border-lupo-green-light focus:ring-1 focus:ring-lupo-green/50 transition-colors"
          />
          {errors.vin && (
            <p className="mt-1 text-sm text-red-400">{errors.vin.message}</p>
          )}
        </div>

        {/* Mileage Field */}
        <div>
          <label
            htmlFor="mileage"
            className="block text-sm font-medium text-white/80 mb-1.5"
          >
            Mileage
          </label>
          <input
            {...register("mileage")}
            id="mileage"
            type="text"
            inputMode="numeric"
            placeholder="Current mileage"
            autoComplete="off"
            className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 px-4 py-3 text-base focus:outline-none focus:border-lupo-green-light focus:ring-1 focus:ring-lupo-green/50 transition-colors"
          />
          {errors.mileage && (
            <p className="mt-1 text-sm text-red-400">
              {errors.mileage.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lupo-green-light text-white font-bold py-4 rounded-lg hover:bg-lupo-green active:bg-lupo-green-dark transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "GET MY OFFER"}
          {!isSubmitting && <ArrowRight size={20} />}
        </button>
      </div>

      {/* Micro-trust */}
      <p className="mt-3 text-center text-xs text-white/40">
        No obligation &middot; Free &middot; Takes 30 seconds
      </p>
    </form>
  );
}
