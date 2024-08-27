import React from 'react';

import SubHeroSection from '@/components/subHeroSection';

const Projects: React.FC = () => {
  return (
    <div className="h-auto  flex flex-col justify-center">
      <SubHeroSection
        title={{
          firstWord: {
            text: 'OUR',
            color: '#000000',
          },
          secondWord: {
            text: 'PROJECTS',
            gradientColors: {
              from: '#d57a0e',
              to: '#e49f34',
            },
          },
          reverseColors: false,
        }}
        tabs={[
          { text: 'Web Development', active: true },
          { text: 'App Development', active: false },
          { text: 'Individual software development', active: false },
          { text: 'Database Planning & Management', active: false },
          { text: 'API development & integration', active: false },
        ]}
      />
    </div>
  );
};

export default Projects;
