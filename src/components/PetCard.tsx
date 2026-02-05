import Link from 'next/link';
import { Pet } from '../types';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image';
import { Heart, MapPin } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  const getAgeCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      puppy: 'bg-[#48BB78] text-white',
      adult: 'bg-[#4ECDC4] text-white',
      senior: 'bg-[#F6AD55] text-white',
    };
    return colors[category] || 'bg-gray-500 text-white';
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      dog: 'bg-[#FF6B9D] text-white',
      cat: 'bg-[#FFA07A] text-white',
      bird: 'bg-[#4ECDC4] text-white',
      fish: 'bg-blue-500 text-white',
      rabbit: 'bg-purple-500 text-white',
      hamster: 'bg-yellow-500 text-white',
      other: 'bg-gray-500 text-white',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Link href={`/pets/${pet.id}`} className="block">
      <Card className="p-0 gap-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer rounded-2xl border-0 h-full flex flex-col">
        <div className="relative w-full h-96 overflow-hidden shrink-0">
          <Image
            src={pet.images[0]}
            alt={pet.name}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <Heart />
            </div>
          </div>
        </div>

        <CardContent className="p-5 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-[#2D3748] line-clamp-1">
              {pet.name}
            </h3>
            <Badge
              className={`${getTypeColor(pet.type)} rounded-full px-3 shrink-0`}
            >
              {pet.type}
            </Badge>
          </div>

          <p className="text-sm text-[#718096] mb-3 line-clamp-1">
            {pet.breed}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            <Badge
              className={`${getAgeCategoryColor(
                pet.ageCategory,
              )} border-0 rounded-full`}
            >
              {pet.ageCategory}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full border-[#4ECDC4] text-[#4ECDC4]"
            >
              {pet.sex}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full border-[#718096] text-[#718096]"
            >
              {pet.size}
            </Badge>
          </div>

          <div className="flex items-center text-sm text-[#718096] mt-auto">
            <MapPin className="w-4 h-4 mr-1 shrink-0" />
            <span className="line-clamp-1">
              {pet.city}, {pet.region}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
