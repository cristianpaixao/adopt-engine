import Link from 'next/link';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

import { PawPrint, List, LogOut, PlusCircle } from 'lucide-react';

export default function Navbar() {
  const isAuthenticated = false;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="w-8 h-8 text-[#FF6B9D] fill-[#FF6B9D]" />
            <span className="text-2xl font-bold text-[#2D3748]">
              Adopt Engine
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/pets"
              className="text-[#2D3748] hover:text-[#FF6B9D] font-medium transition-colors"
            >
              Browse Pets
            </Link>
            <Link
              href="/let-me-know"
              className="text-[#2D3748] hover:text-[#FF6B9D] font-medium transition-colors"
            >
              Let me Know
            </Link>
            {isAuthenticated && (
              <Link
                href="/list-pet"
                className="text-[#2D3748] hover:text-[#FF6B9D] font-medium transition-colors"
              >
                List Pet
              </Link>
            )}
          </div>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full border-2 border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white"
                  >
                    username here
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <List className="w-4 h-4 mr-2" />
                    My Listings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add New Pet
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-[#FF6B9D] bg-[#FF6B9D] hover:bg-[#FF5A8D] text-white shadow-md"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
