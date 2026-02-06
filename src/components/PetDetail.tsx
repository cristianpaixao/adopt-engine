'use client';
import { useEffect, useState } from 'react';
import { Pet } from '@/src/types';
import { getPets } from '../data/mockData';
import { toast } from 'sonner';
import { Button } from './ui/button';
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Heart,
  Mail,
  MapPin,
  Phone,
  XCircle,
} from 'lucide-react';
import Link from 'next/link';
import ImageGallery from './ImageGallery';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import PetCard from './PetCard';

export default function PetDetail({ slug }: { slug: string }) {
  const [pet, setPet] = useState<Pet | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [similarPets, setSimilarPets] = useState<Pet[]>([]);

  useEffect(() => {
    const pets = getPets();
    const foundPet = pets.find((p) => p.id === slug);

    if (foundPet) {
      setPet(foundPet);
      const similar = pets
        .filter((p) => p.id !== slug && p.type === foundPet.type)
        .slice(0, 3);
      setSimilarPets(similar);
    }
  }, [slug]);

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-[#718096]">Pet not found</p>
      </div>
    );
  }

  const handleInterest = () => {
    setShowContact(true);
    toast.success(
      'Contact information revealed! Feel free to reach out to the owner.',
    );
  };

  const getAgeCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      puppy: 'bg-[#48BB78] text-white',
      adult: 'bg-[#4ECDC4] text-white',
      senior: 'bg-[#F6AD55] text-white',
    };
    return colors[category] || 'bg-gray-500 text-white';
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6 text-[#FF6B9D] hover:text-[#FF5A8D]"
        >
          <Link href="/pets" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ImageGallery images={pet.images} altText={pet.name} />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-[#2D3748] mb-2">
                    {pet.name}
                  </h1>
                  <p className="text-xl text-[#718096]">{pet.breed}</p>
                </div>
                <Heart className="w-8 h-8 text-[#FF6B9D] cursor-pointer hover:fill-[#FF6B9D] transition-all" />
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-[#FF6B9D] text-white rounded-full px-4 py-1 text-sm">
                  {pet.type}
                </Badge>
                <Badge
                  className={`${getAgeCategoryColor(pet.ageCategory)} rounded-full px-4 py-1 text-sm`}
                >
                  {pet.ageCategory}
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full border-[#4ECDC4] text-[#4ECDC4] px-4 py-1 text-sm"
                >
                  {pet.sex}
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full border-[#718096] text-[#718096] px-4 py-1 text-sm"
                >
                  {pet.size}
                </Badge>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-[#718096]">
                  <MapPin className="w-5 h-5 mr-3 text-[#FF6B9D]" />
                  <span>
                    {pet.city}, {pet.region}
                  </span>
                </div>
                <div className="flex items-center text-[#718096]">
                  <Calendar className="w-5 h-5 mr-3 text-[#FF6B9D]" />
                  <span>Listed on {pet.listedAt.toLocaleDateString()}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-semibold text-[#2D3748] mb-3">
                  Health Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    {pet.vaccinated ? (
                      <CheckCircle className="w-5 h-5 text-[#48BB78] mr-2" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#718096] mr-2" />
                    )}
                    <span className="text-[#718096]">
                      {pet.vaccinated ? 'Vaccinated' : 'Not vaccinated'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {pet.neutered ? (
                      <CheckCircle className="w-5 h-5 text-[#48BB78] mr-2" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#718096] mr-2" />
                    )}
                    <span className="text-[#718096]">
                      {pet.neutered ? 'Spayed/Neutered' : 'Not spayed/neutered'}
                    </span>
                  </div>
                </div>
                {pet.specialNeeds && (
                  <p className="text-[#718096] mt-3">
                    <span className="font-semibold">Special Needs:</span>{' '}
                    {pet.specialNeeds}
                  </p>
                )}
              </div>

              {!showContact ? (
                <Button
                  size="lg"
                  onClick={handleInterest}
                  className="w-full rounded-full bg-[#FF6B9D] hover:bg-[#FF5A8D] text-white shadow-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  I&apos;m Interested in Adopting
                </Button>
              ) : (
                <Card className="bg-[#FFF8F3] border-2 border-[#FF6B9D]">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#2D3748] mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="bg-[#FF6B9D] rounded-full p-2 mr-3">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-[#718096]">Email</p>
                          <p className="font-medium text-[#2D3748]">
                            {pet.ownerEmail}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-[#4ECDC4] rounded-full p-2 mr-3">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-[#718096]">Phone</p>
                          <p className="font-medium text-[#2D3748]">
                            {pet.ownerPhone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-[#2D3748] mb-4">
            About {pet.name}
          </h2>
          <p className="text-[#718096] leading-relaxed">{pet.description}</p>
        </div>

        {similarPets.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-[#2D3748] mb-6">
              Similar Pets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarPets.map((similarPet) => (
                <PetCard key={similarPet.id} pet={similarPet} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
