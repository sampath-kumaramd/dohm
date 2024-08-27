import React from 'react';

import DeveloperBookingForm from '@/components/HomePage/DeveloperBookingForm';
import SubHeroSection from '@/components/subHeroSection';

const ContactUs: React.FC = () => {
  return (
    <div className="h-auto min-h-screen flex flex-col justify-center">
      <SubHeroSection
        title={{
          firstWord: {
            text: 'CONTACT',
            gradientColors: {
              from: '#d57a0e',
              to: '#e49f34',
            },
          },
          secondWord: {
            text: 'US',
            color: '#000000',
          },
          reverseColors: false,
        }}
        subtitle="Lorem ipsum dolor sit amet consectetur. Senectus amet sed gravida mauris ut sed blandit massa."
      />
      <DeveloperBookingForm showSelectionButtons={true} />
    </div>
  );
};

export default ContactUs;
