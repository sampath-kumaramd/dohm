import React from 'react';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import { projectsData } from '@/lib/project-data';

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

  console.log('Params:', params); // Debugging log

  // Normalize the category from the URL
  const normalizedUrlCategory = category.replace(/-/g, ' ').toLowerCase();

  console.log('Normalized URL category:', normalizedUrlCategory); // Debugging log

  // Find the matching category in projectsData
  const projectCategory = Object.keys(projectsData).find((key) =>
    key.toLowerCase().startsWith(normalizedUrlCategory)
  );

  console.log('Matched project category:', projectCategory); // Debugging log

  if (!projectCategory) {
    console.log('Category not found'); // Debugging log
    notFound();
  }

  const project = projectsData[projectCategory].find(
    (p) => p.id.toString() === id
  );

  console.log('Found project:', project); // Debugging log

  if (!project) {
    console.log('Project not found'); // Debugging log
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl p-6 shadow-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="w-full rounded-xl mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl mb-6">{project.testimonials}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
            <p>
              <strong>Category:</strong> {project.category}
            </p>
            <p>
              <strong>Live App:</strong>{' '}
              <a
                href={project.liveAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {project.liveAppLink}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
            <div className="flex space-x-2">
              {project.logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Technology ${index + 1}`}
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
          <div className="flex items-center">
            <Image
              src={project.author.avatar}
              alt={project.author.name}
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{project.author.name}</p>
              <p>{project.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
