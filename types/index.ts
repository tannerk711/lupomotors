export interface Testimonial {
  name: string;
  location: string;
  vehicleSold: string;
  quote: string;
  rating: number;
}

export interface Vehicle {
  name: string;
  priceRange: string;
  image: string;
  location?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CoverageState {
  name: string;
  abbreviation: string;
  isHomeBase?: boolean;
  details: string[];
}

export interface LeadFormData {
  vin: string;
  mileage: string;
  priceExpectation?: string;
  isFinanced?: string;
  phone?: string;
  email?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}
