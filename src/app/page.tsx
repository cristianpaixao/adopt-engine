'use client';

import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { getPets } from '../data/mockData';
import { Pet } from '../types';
import PetCard from '../components/PetCard';
import { Button } from '@/src/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [featuredPets, setFeaturedPets] = useState<Pet[]>([]);

  useEffect(() => {
    const pets = getPets();
    setFeaturedPets(pets.slice(0, 6)); // Temporary mock
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      <Hero />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center m-12">
          <h2 className="text-4xl font-bold text-[#2D3748] mb-4">
            Featured Pets
          </h2>
          <p className="text-[#718096]text-lg max-w-2xl mx-auto">
            Meet some of our adorable pets waiting for their forever homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPets.map((pet, index) => (
            <PetCard key={index} pet={pet} />
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-full bg-[#FF6B9D] hover:bg-[#FF5A8D] text-white shadow-lg text-lg px-8 py-6 hover:cursor-pointer">
            View All Pets
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/1.png"
                alt="happy adoption"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#2D3748] mb-6">
                Why Adopt?
              </h2>
              <div className="space-y-4 text-[#718096]">
                <p className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-[#FF6B9D] shrink-0 mt-1" />
                  <span>
                    Save a life and gain a loyal companion who will love you
                    unconditionally
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-[#FF6B9D] shrink-0 mt-1" />
                  <span>
                    Adopting is more affordable than buying from breeders or pet
                    stores
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-[#FF6B9D] shrink-0 mt-1" />
                  <span>
                    Help fight against puppy mills and unethical breeding
                    practices
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-[#FF6B9D] shrink-0 mt-1" />
                  <span>
                    Many shelter pets are already trained and socialized
                  </span>
                </p>
              </div>
              <Button
                size="lg"
                className="rounded-full bg-[#FF6B9D] hover:bg-[#FF5A8D] text-white shadow-lg text-lg px-8 py-6 mt-8 hover:cursor-pointer"
              >
                Browse Pets
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
