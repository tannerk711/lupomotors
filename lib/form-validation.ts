import { z } from "zod";

export const vinFormSchema = z.object({
  vin: z
    .string()
    .min(17, "VIN must be exactly 17 characters")
    .max(17, "VIN must be exactly 17 characters")
    .regex(
      /^[A-HJ-NPR-Z0-9]{17}$/i,
      "Please enter a valid VIN (letters and numbers, no I, O, or Q)"
    ),
  mileage: z
    .string()
    .min(1, "Mileage is required")
    .regex(/^\d{1,6}$/, "Please enter a valid mileage"),
});

export const leadDetailsSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  priceExpectation: z.string().optional(),
  isFinanced: z.enum(["yes", "no"], {
    message: "Please select one",
  }),
  phone: z.string().min(10, "Phone number is required"),
});

export type VINFormData = z.infer<typeof vinFormSchema>;
export type LeadDetailsData = z.infer<typeof leadDetailsSchema>;
