import type { CoverageState } from "@/types";

export const coverageStates: CoverageState[] = [
  {
    name: "Idaho",
    abbreviation: "ID",
    isHomeBase: true,
    details: [
      "Same-day pickup available (depending on city)",
      "Cashier's check in hand",
    ],
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    details: [
      "Portland area coverage",
      "Trusted inspection contacts",
      "24-48 hour turnaround",
    ],
  },
  {
    name: "Washington",
    abbreviation: "WA",
    details: [
      "Seattle / Puget Sound area",
      "Partner network on the ground",
      "24-48 hour turnaround",
    ],
  },
  {
    name: "Utah",
    abbreviation: "UT",
    details: [
      "Salt Lake City area",
      "Exotic car specialty contacts",
      "24-48 hour turnaround",
    ],
  },
  {
    name: "Northern California",
    abbreviation: "CA",
    details: ["Sacramento & north", "24-48 hour turnaround"],
  },
  {
    name: "Montana",
    abbreviation: "MT",
    details: ["Coverage available", "24-48 hour turnaround"],
  },
];
