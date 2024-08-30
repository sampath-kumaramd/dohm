import React from 'react';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import SubContactSection from '@/components/subContactSection';
import GradientText from '@/components/ui/GradientText';
import { projectsData } from '@/lib/project-data';

import projectDetails from '../../../../../public/background/project-details.svg';

interface ProjectDetailPageProps {
  params: {
    category: string;
    id: string;
  };
}

export async function generateStaticParams() {
  const paths = Object.entries(projectsData).flatMap(([category, projects]) =>
    projects.map((project) => ({
      category: category.replace(/\s+/g, '-'),
      id: project.id.toString(),
    }))
  );
  return paths;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params }) => {
  const { category, id } = params;

  const normalizedUrlCategory = category.replace(/-/g, ' ').toLowerCase();

  const projectCategory = Object.keys(projectsData).find((key) =>
    key.toLowerCase().startsWith(normalizedUrlCategory)
  );

  if (!projectCategory) {
    notFound();
  }

  const project = projectsData[projectCategory].find(
    (p) => p.id.toString() === id
  );

  if (!project) {
    notFound();
  }

  return (
   <div className="relative w-full">
      <div className="relative sm:h-[80vh] h-[30vh] w-full">
        <Image
          src={projectDetails}
          alt="Card background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="container mx-auto px-4 py-8 relative sm:-top-[70vh] -top-[30vh]">
      <div className="relative mx-8 sm:mx-20 md:mx-36 overflow-hidden py-10 sm:py-24 space-y-5 sm:space-y-10">
        <h1 className="sm:text-7xl text-4xl sm:pb-8 pb-4 w-full text-center font-bold mb-4">
          {project.title}
        </h1>
        <Image
          src={project.image1}
          alt={project.title}
          width={600}
          height={200}
          className="w-full rounded-xl mb-6"
        />
        <div className="text-base text-gray-500 space-y-3">
          <p>{project.description1?.firstPart}</p>
          <p>{project.description1?.secondPart}</p>
        </div>
        <div className="bg-[#FAF0E6] p-5 rounded-xl space-y-5">
          <div className="relative w-10 h-10">
            <Image
              src="/icons/quatation-mark.svg"
              alt="Arrow"
              width={42}
              height={42}
              className="group-hover:animate-pulse"
            />
          </div>
          <p className=" italic text-lg text-black">{project.testimonials}</p>
          <div className="flex items-center">
            <Image
              src={project.author.avatar}
              alt={project.author.name}
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-bold">{project.author.name}</p>
              <p>{project.author.role}</p>
            </div>
          </div>
        </div>
        {project.image2 ? (
          <Image
            src={project.image2}
            alt={project.title || 'Project image'}
            width={600}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="rounded-xl mb-6"
          />
        ) : (
          <div className="w-full h-[200px] bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
            <p>No image available</p>
          </div>
        )}
        <div className="text-base text-gray-500 space-y-3">
          <p>{project.description2?.firstPart}</p>
          <p>{project.description2?.secondPart}</p>
        </div>
        <div className="flex">
          <div className="flex justify-end space-x-2 mb-4">
            {project.logos.map((logo, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-white border border-gray-400 rounded-full flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Technology ${index + 1}`}
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
          <a
            href={project.liveAppLink}
            className="text-orange-500 font-semibold flex items-center mb-4 ms-5"
          >
            <GradientText
              gradientColors={['#d57a0e', '#e49f34']}
              className="group-hover:hidden text-lg font-bold"
            >
              VISIT LIVE APP
            </GradientText>
            <div className="relative w-5 h-5 ml-1">
              <Image
                src="/icons/up-arrow.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="group-hover:animate-pulse"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
      <SubContactSection />
    </div>
  );
};

export default ProjectDetailPage;
