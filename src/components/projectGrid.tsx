import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import GradientText from '@/components/ui/GradientText';

import CustomButton from './customButton';

interface Project {
  id: number;
  category: string;
  title: string;
  testimonials: string;
  image1: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  logos: string[];
  liveAppLink: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-3xl p-6 shadow-lg overflow-hidden"
        >
          <div className="bg-gray-200 rounded-2xl mb-6">
            <Image
              src={project.image1}
              alt={project.title}
              width={400}
              height={200}
              className="w-full rounded-xl"
            />
          </div>
          <div className="grid grid-cols-3 mb-5">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-2 uppercase">
                {project.title}
              </h3>
              <a
                href={project.liveAppLink}
                className="text-orange-500 font-semibold flex items-center mb-4"
              >
                <GradientText
                  gradientColors={['#d57a0e', '#e49f34']}
                  className="group-hover:hidden text-md font-bold"
                >
                  VISIT LIVE APP
                </GradientText>
                <div className="relative w-4 h-4 ml-1">
                  <Image
                    src="/icons/up-arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="group-hover:animate-pulse"
                  />
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <div className="flex justify-end space-x-2 mb-4">
                {project.logos.map((logo, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 bg-white border border-gray-400 rounded-full flex items-center justify-center"
                  >
                    <Image
                      src={logo}
                      alt={`Technology ${index + 1}`}
                      width={24}
                      height={24}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 italic mb-6">{project.testimonials}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                src={project.author.avatar}
                alt={project.author.name}
                width={48}
                height={48}
                className="rounded-full mr-3 border border-gray-400"
              />
              <div>
                <p className="font-semibold">{project.author.name}</p>
                <p className="text-sm text-gray-600">{project.author.role}</p>
              </div>
            </div>
            <Link href={`/projects/${project.category}/${project.id}`} passHref>
              <CustomButton className="bg-orange-500 hover:bg-orange-600 text-white">
                Learn more
              </CustomButton>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
