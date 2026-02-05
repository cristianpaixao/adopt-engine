export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'bird' | 'fish' | 'rabbit' | 'hamster' | 'other';
  breed: string;
  age: number;
  ageCategory: 'puppy' | 'adult' | 'senior';
  sex: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  description: string;
  images: string[];
  region: string;
  city: string;
  distance?: number;
  ownerId: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  listedAt: Date;
  vaccinated: boolean;
  neutered: boolean;
  specialNeeds?: string;
}
