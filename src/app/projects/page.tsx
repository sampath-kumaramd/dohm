'use client';
import React, { useState } from 'react';

import ProjectsGrid from '@/components/projectGrid';
import SubContactSection from '@/components/subContactSection';
import SubHeroSection from '@/components/subHeroSection';
import { projectsData, Project } from '@/lib/project-data';

const slides = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
  { id: 4, content: 'Slide 4' },
  { id: 5, content: 'Slide 5' },
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
      <SubContactSection />
    </div>
  );
};

export default Projects;
