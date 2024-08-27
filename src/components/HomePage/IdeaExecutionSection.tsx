import React from 'react';

import Image from 'next/image';

import homePageIdeaBg from '../../../public/background/home-page-idea.svg';
import ContentSection from '../contentSection';

const IdeaExecutionSection = () => {
  return (
    <section>
      <ContentSection
        backgroundImage={homePageIdeaBg.src}
        imageSrc="/homepage/idea-execution.svg"
        imageAlt="Idea Execution Illustration"
        title={{
          firstPart: 'YOUR',
          highlightedPart: 'IDEA',
          lastPart: 'OUR EXECUTION',
        }}
        description={{
          firstPart:
            'Lorem ipsum dolor sit amet consectetur. Senectus amet sed gravida mauris ut sed blandit massa.',
          secondPart:
            'Condimentum vel eget arcu euismod tempus sagittis sed. Senectus amet sed gravids ut sed blandit massa. Condimentum vel eget arcu euismod tempus sagittis sed.',
        }}
        imageOnLeft={true}
      />
    </section>
  );
};

export default IdeaExecutionSection;
