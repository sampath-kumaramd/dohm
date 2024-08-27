'use client';
import React, { useState } from 'react';

import ProjectsGrid from '@/components/projectGrid';
import SubHeroSection from '@/components/subHeroSection';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  logos: string[];
  liveAppLink: string;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  const tabs = [
    { text: 'Web Development', active: activeTab === 'Web Development' },
    { text: 'App Development', active: activeTab === 'App Development' },
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

  // Mock data for projects (replace with actual data fetching logic)
  const projectsData: { [key: string]: Project[] } = {
    'Web Development': [
      {
        id: 1,
        title: 'Mobile App for Fitness',
        description:
          'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
        image: '/projects/webDevelopment/WA-image1.jpg',
        author: {
          name: 'Stephen Smith',
          role: 'CEO',
          avatar: '/projects/webDevelopment/people1.png',
        },
        logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
        liveAppLink: 'https://healthio-app.com',
      },
      {
        id: 2,
        title: 'Mobile App for Fitness',
        description:
          'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
        image: '/projects/webDevelopment/WA-image1.jpg',
        author: {
          name: 'Stephen Smith',
          role: 'CEO',
          avatar: '/projects/webDevelopment/people1.png',
        },
        logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
        liveAppLink: 'https://healthio-app.com',
      },
      // Add more web development projects
    ],
    'App Development': [
      {
        id: 1,
        title: 'Mobile App for Fitness',
        description:
          'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
        image: '/projects/webDevelopment/WA-image1.jpg',
        author: {
          name: 'Stephen Smith',
          role: 'CEO',
          avatar: '/projects/webDevelopment/people1.png',
        },
        logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
        liveAppLink: 'https://healthio-app.com',
      },
      // Add more app development projects
    ],
    'Individual software development': [
      {
        id: 1,
        title: 'Mobile App for Fitness',
        description:
          'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
        image: '/projects/webDevelopment/WA-image1.jpg',
        author: {
          name: 'Stephen Smith',
          role: 'CEO',
          avatar: '/projects/webDevelopment/people1.png',
        },
        logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
        liveAppLink: 'https://healthio-app.com',
      },
      {
        id: 2,
        title: 'Mobile App for Fitness',
        description:
          'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
        image: '/projects/webDevelopment/WA-image1.jpg',
        author: {
          name: 'Stephen Smith',
          role: 'CEO',
          avatar: '/projects/webDevelopment/people1.png',
        },
        logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
        liveAppLink: 'https://healthio-app.com',
      },
      {
        id: 3,
        title: 'Mobile App for Fitness',
        description:
          'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
        image: '/projects/webDevelopment/WA-image1.jpg',
        author: {
          name: 'Stephen Smith',
          role: 'CEO',
          avatar: '/projects/webDevelopment/people1.png',
        },
        logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
        liveAppLink: 'https://healthio-app.com',
      },
      // Add more app development projects
    ],
    'Database Planning & Management': [
      {
        id: 1,
        title: 'Mobile App for Fitness',
        description:
          'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
        image: '/projects/webDevelopment/WA-image1.jpg',
        author: {
          name: 'Stephen Smith',
          role: 'CEO',
          avatar: '/projects/webDevelopment/people1.png',
        },
        logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
        liveAppLink: 'https://healthio-app.com',
      },
      // Add more app development projects
    ],
    'API development & integration': [
      {
        id: 1,
        title: 'Mobile App for Fitness',
        description:
          'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
        image: '/projects/webDevelopment/WA-image1.jpg',
        author: {
          name: 'Stephen Smith',
          role: 'CEO',
          avatar: '/projects/webDevelopment/people1.png',
        },
        logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
        liveAppLink: 'https://healthio-app.com',
      },
      // Add more app development projects
    ],
  };

  const handleTabClick = (tabText: string) => {
    setActiveTab(tabText);
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
      <div className="container mx-auto px-4 py-8">
        <ProjectsGrid projects={projectsData[activeTab] || []} />
      </div>
    </div>
  );
};

export default Projects;
