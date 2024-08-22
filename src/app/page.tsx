import ClientTestimonialsCarousel from '@/components/HomePage/ClientTestimonialsCarousel';
import DeveloperBookingForm from '@/components/HomePage/DeveloperBookingForm';
import HeroSection from '@/components/HomePage/heroSection';
import HowWeWorkSection from '@/components/HomePage/HowWeWorkSection';
import IdeaExecutionSection from '@/components/HomePage/IdeaExecutionSection';
import ServicesSection from '@/components/HomePage/ServicesSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <IdeaExecutionSection />
        <ServicesSection />
        <HowWeWorkSection />
        <ClientTestimonialsCarousel />
        <DeveloperBookingForm />
      </main>
    </div>
  );
}
