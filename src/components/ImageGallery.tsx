import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  altText: string;
}

export default function ImageGallery({ images, altText }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-4">
      <div className="relative rounded-2xl overflow-hidden shadow-xl group">
        <div className="w-full h-150 bg-gray-100">
          <Image
            src={images[currentIndex]}
            alt={`${altText} - Image ${currentIndex + 1}`}
            fill
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setIsFullscreen(true)}
          />
        </div>

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D] ring-offset-2'
                  : 'border-gray-200 hover:border-[#FF6B9D]'
              }`}
            >
              <Image
                src={image}
                width={100}
                height={100}
                alt={`${altText} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 text-white hover:bg-white/20 rounded-full"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 text-white hover:bg-white/20 rounded-full"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          <Image
            src={images[currentIndex]}
            alt={`${altText} - Image ${currentIndex + 1}`}
            width={1000}
            height={800}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
