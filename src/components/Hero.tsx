import { Heart, Search } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <div className="relative h-150 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-black/20"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-[#FF6B9D] fill-[#FF6B9D] animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Find your friend on{' '}
          <span className="text-[#FF6B9D]">Adopt Engine</span>
        </h1>

        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          An open source platform dedicated to connecting loving pets with
          families. Start your adoption journey today and change a life forever.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full bg-[#FF6B9D] hover:bg-[#FF5A8D] text-white shadow-lg text-lg px-8 py-6 hover:cursor-pointer"
          >
            <Search className="w-5 h-5 mr-2" />
            Browse Pets
          </Button>
          <Button
            size="lg"
            className="rounded-full bg-transparent text-white hover:bg-white hover:text-[#FF6B9D] text-lg px-8 py-6 hover:cursor-pointer transition-all"
          >
            <Heart className="w-5 h-5 mr-2" />
            List a Pet
          </Button>
        </div>
      </div>
    </div>
  );
}
