import Image from "next/image";

interface CarCardProps {
  name: string;
  priceRange: string;
  image: string;
  location?: string;
}

export default function CarCard({
  name,
  priceRange,
  image,
  location,
}: CarCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-lupo-card transition-all duration-300 hover:border-lupo-green-muted/40">
      <div className="relative aspect-[4/3] bg-lupo-dark overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 280px, 400px"
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-white text-base">{name}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-lupo-silver">{priceRange}</p>
          {location && (
            <p className="text-sm text-lupo-muted">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
}
