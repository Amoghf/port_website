'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@radix-ui/react-tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/3.png',
    category: 'WEB_DEV',
    name: 'Nexa Website',
    description: 'A responsive and user-friendly website for Nexa, focusing on modern web technologies.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'WEB_DEV',
    name: 'E-commerce Platform',
    description: 'An e-commerce website with modern features and a user-friendly interface.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Java',
    name: 'Spring Boot Application',
    description: 'Developed a robust backend using Spring Boot to manage complex data structures.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Java',
    name: 'Spring Boot Microservices',
    description: 'Implemented microservices architecture using Spring Boot for scalable applications.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Other',
    name: 'Utility Script',
    description: 'Created a versatile utility script to automate daily tasks, increasing productivity.',
    link: '/',
    github: '/',
  },
];

const uniqueCategories = [
  'all projects',
  ...Array.from(new Set(projectData.map((item) => item.category))),
];

const Projects = () => {
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) =>
    category === 'all projects' ? true : project.category === category
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:-16 text-center mx-auto">
          My Projects
        </h2>

        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto">
            {uniqueCategories.map((cat, index) => (
              <TabsTrigger
                onClick={() => setCategory(cat)}
                value={cat}
                key={index}
                className={`capitalize w-[162px] md:w-auto p-3 text-center rounded-lg shadow-md transition-all duration-300
                  ${category === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 shadow-sm'}
                  hover:bg-peach-300 hover:text-white hover:shadow-md`}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
