import ServiceCard from '@/components/serviceCard';
import SubContactSection from '@/components/subContactSection';
import SubHeroSection from '@/components/subHeroSection';

import ServiceBG from '../../../public/background/service-background.svg';

const servicesData = [
  {
    title: 'WEB DEVELOPMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    iconSrc: '/icons/web-development-icon.svg',
    iconType: 'web',
  },
  {
    title: 'APP DEVELOPMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    iconSrc: '/icons/app-development-icon.svg',
    iconType: 'App',
  },
  {
    title: 'INDIVIDUAL SOFTWARE DEVELOPMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    iconSrc: '/icons/software-development-icon.svg',
    iconType: 'Software',
  },
  {
    title: 'DATABASE PLANNING & MANAGEMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    iconSrc: '/icons/database-icon.svg',
    iconType: 'Database',
  },
  {
    title: 'API DEVELOPMENT & INTEGRATION',
    description:
      'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis.',
    iconSrc: '/icons/api-icon.svg',
    iconType: 'API',
  },
];

const Service: React.FC = () => {
  return (
    <div className="h-auto">
      <SubHeroSection
        title={{
          firstWord: {
            text: 'SERVICES',
            gradientColors: {
              from: '#d57a0e',
              to: '#e49f34',
            },
          },
          secondWord: {
            text: 'WE OFFER',
            color: '#000000',
          },
          reverseColors: false,
        }}
        subtitle="Lorem ipsum dolor sit amet consectetur. Senectus amet sed gravida mauris ut sed blandit massa."
      />
      <section className="relative min-h-[50vh] justify-center items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: ServiceBG.src,
          }}
        />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 flex items-center justify-center sm:py-24 py-12">
            <div className="grid grid-cols-1 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  iconSrc={service.iconSrc}
                  iconType={service.iconType}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
      <SubContactSection />
    </div>
  );
};
export default Service;
