import ContentSection from '@/components/contentSection';
import SubHeroSection from '@/components/subHeroSection';

import AboutUsMobileBg from '../../../public/background/about-us-background-mobile.svg';
import AboutUsBg from '../../../public/background/about-us-background.svg';

function page() {
  return (
    <div>
      <SubHeroSection
        title={{
          firstWord: {
            text: 'ABOUT',
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
      <ContentSection
        backgroundImage={{
          desktop: AboutUsBg.src,
          mobile: AboutUsMobileBg.src,
        }}
        imageSrc="/aboutUsPage/about-us-illustration.svg"
        imageAlt="Idea Execution Illustration"
        title={{
          firstPart: 'ENSURING',
          highlightedPart: 'QUALITY',
          lastPart: '& EXCELLENCE',
        }}
        description={{
          firstPart:
            'Lorem ipsum dolor sit amet consectetur. Gravida at consequat malesuada in et vel quam turpis facilisis. Gravida gravida massa euismod id vehicula. Sagittis tempor ut pellentesque et. Leo elementum quis leo aliquet. Commodo sed in ac feugiat aliquam. Fusce donec ultrices tincidunt praesent.',
          secondPart:
            'Blandit nulla nunc sapien non sit ultrices ut. Dignissim aliquet lectus acdum sed ultrices semper sed sed turpis. Venenatis vel sed convallis quis volutpat.',
          thirdPart:
            'Eu a orci cras felis nulla malesuada porta commodo. Nisi rhoncus molestie sed gravida vel at augue. Egestas urna vitae magnis eget. Sit odio et est nulla egestas integer nunc condimentum. Vitae turpis magna aliquam aliquam.',
        }}
        imageOnLeft={true}
      />
    </div>
  );
}

export default page;
