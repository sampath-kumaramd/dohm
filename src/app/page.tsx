import HeroSection from '@/components/HomePage/heroSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
