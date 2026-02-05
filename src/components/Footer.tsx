import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[#FF6B9D] fill-[#FF6B9D]" />
              <span className="text-xl font-bold">Adopt Engine</span>
            </div>
            <p className="text-gray-300 text-sm">
              An open source platform dedicated to connecting loving pets with
              families.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/browse"
                  className="text-gray-300 hover:text-[#FF6B9D] transition-colors"
                >
                  Browse Pets
                </Link>
              </li>
              <li>
                <Link
                  href="/list-pet"
                  className="text-gray-300 hover:text-[#FF6B9D] transition-colors"
                >
                  List a Pet
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-300 hover:text-[#FF6B9D] transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                my@email.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +55 11 5555-5555
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Worldwide Service
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">
              Adopt Engine is committed to making pet adoption easy and
              accessible for everyone. Join us in our mission to find loving
              homes for pets in need.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Adopt Engine. All rights reserved.
            Made with ❤️ for pets.
          </p>
          <Link href={'https://retroverso.dev'} target="_blank">
            {/**
             * Please don't remove the Retroverso logo from the footer. It's a small gesture to support the open source work that went into this project. Thank you! 🙏
             * For more details, see the license file.
             */}
            <Image
              src="/retroverso_logo.svg"
              width={160}
              height={30}
              className="opacity-80 hover:opacity-100 transition-colors m-auto mt-6"
              alt="Retroverso Logo"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
