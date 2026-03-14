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

export const leadDetailsSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    priceExpectation: z.string().optional(),
    isFinanced: z.enum(["yes", "no"], {
      message: "Please select one",
    }),
    contactMethod: z.enum(["phone", "email", "either"], {
      message: "Please select how you'd like to be contacted",
    }),
    phone: z.string().optional(),
    email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.contactMethod === "phone" || data.contactMethod === "either") {
        return data.phone && data.phone.length >= 10;
      }
      return true;
    },
    { message: "Phone number is required", path: ["phone"] }
  )
  .refine(
    (data) => {
      if (data.contactMethod === "email" || data.contactMethod === "either") {
        return data.email && data.email.length > 0;
      }
      return true;
    },
    { message: "Email is required", path: ["email"] }
  );

export type VINFormData = z.infer<typeof vinFormSchema>;
export type LeadDetailsData = z.infer<typeof leadDetailsSchema>;
