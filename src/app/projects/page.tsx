'use client';
import React, { useState } from 'react';

import CustomCarousel from '@/components/CustomCarousel';
import ProjectsGrid from '@/components/projectGrid';
import SubContactSection from '@/components/subContactSection';
import SubHeroSection from '@/components/subHeroSection';
import GradientText from '@/components/ui/GradientText';
import { projectsData, Project } from '@/lib/project-data';

const carouselItems = [
  {
    name: 'JORDYN CURTIS',
    image: '/avatars/placeholder.png',
    description:
      'Nulla nibh amet ac augue enim mauris. Nulla massa suspendisse risus nibh hendrerit. A viverra tincidunt sagittis tincidunt. Fermentum massa.',
    logo: '',
  },
  {
    name: 'JORDYN CURTIS',
    image: '/avatars/placeholder.png',
    description:
      'Nulla nibh amet ac augue enim mauris. Nulla massa suspendisse risus nibh hendrerit. A viverra tincidunt sagittis tincidunt. Fermentum massa sagittis tincidunt. Fermentum massa.',
    logo: '',
  },
  {
    name: 'JORDYN CURTIS',
    image: '/avatars/placeholder.png',
    description:
      'Nulla nibh amet ac augue enim mauris. Nulla massa suspendisse risus nibh hendrerit. A viverra tincidunt sagittis tincidunt. Fermentum mass sagittis tincidunt. Fermentum massa.',
    logo: '',
  },
  {
    name: 'JORDYN CURTIS',
    image: '/avatars/placeholder.png',
    description:
      'Nulla nibh amet ac augue enim mauris. Nulla massa suspendisse risus nibh hendrerit. A viverra tincidunt sagittis tincidunt. Fermentum massa.',
    logo: '',
  },
  {
    name: 'JORDYN CURTIS',
    image: '/avatars/placeholder.png',
    description:
      'Nulla nibh amet ac augue enim mauris. Nulla massa suspendisse risus nibh hendrerit. A viverra tincidunt sagittis tincidunt. Fermentum massa.',
    logo: '',
  },
  {
    name: 'JORDYN CURTIS',
    image: '/avatars/placeholder.png',
    description:
      'Nulla nibh amet ac augue enim mauris. Nulla massa suspendisse risus nibh hendrerit. A viverra tincidunt sagittis tincidunt. Fermentum mass sagittis tincidunt. Fermentum massa.',
    logo: '',
  },
  {
    name: 'JORDYN CURTIS',
    image: '/avatars/placeholder.png',
    description:
      'Nulla nibh amet ac augue enim mauris. Nulla massa suspendisse risus nibh hendrerit. A viverra tincidunt sagittis tincidunt. Fermentum massa.',
    logo: '',
  },
  {
    name: 'JORDYN CURTIS',
    image: '/avatars/placeholder.png',
    description:
      'Nulla nibh amet ac augue enim mauris. Nulla massa suspendisse risus nibh hendrerit. A viverra tincidunt sagittis tincidunt. Fermentum massa.',
    logo: '',
  },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  const tabs = [
    {
      text: 'Web Development',
      active: activeTab === 'Web Development',
    },
    {
      text: 'App Development',
      active: activeTab === 'App Development',
    },
    {
      text: 'Individual software development',
      active: activeTab === 'Individual software development',
    },
    {
      text: 'Database Planning & Management',
      active: activeTab === 'Database Planning & Management',
    },
    {
      text: 'API development & integration',
      active: activeTab === 'API development & integration',
    },
  ];

  const handleTabClick = (tabText: string) => {
    setActiveTab(tabText);
  };

  return (
    <div className="min-h-screen bg-white">
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
        tabs={tabs}
        onTabClick={handleTabClick}
      />
      <div className="container mx-auto px-4 py-16">
        <ProjectsGrid projects={projectsData[activeTab] || []} />
      </div>
      <section className="container mx-auto py-16">
        <p className="w-full text-center text-4xl font-bold">
          WHAT OUR
          <span>
            <GradientText gradientColors={['#d57a0e', '#e49f34']}>
              &nbsp; CLIENTS &nbsp;
            </GradientText>
          </span>
          SAY
        </p>

        <CustomCarousel items={carouselItems} />
      </section>
      <SubContactSection />
    </div>
  );
};

export default Projects;
