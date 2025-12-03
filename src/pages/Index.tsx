import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import HeroSection from '@/components/sections/HeroSection';
import ServicesAndPricing from '@/components/sections/ServicesAndPricing';
import ReviewsAndAbout from '@/components/sections/ReviewsAndAbout';
import ContactAndFooter from '@/components/sections/ContactAndFooter';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesAndPricing setSelectedImage={setSelectedImage} />
      <ReviewsAndAbout />
      <ContactAndFooter />

      {selectedImage && (
        <Dialog open={true} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Фотография</DialogTitle>
            </DialogHeader>
            <img 
              src={selectedImage}
              alt="Увеличенное изображение"
              className="w-full rounded-lg"
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
