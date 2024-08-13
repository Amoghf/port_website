'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@radix-ui/react-tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  // ... (your project data as provided)
  {
    image: '/work/1.png',
    category: 'WEB_DEV',
    name: 'Portfolio Website',
    description: "Built a dynamic portfolio site using Next.js, Framer Motion, and TypeScript, with interactive features and responsive design.",
    link: 'https://github.com/Amoghf/port_website.git',
    github: 'https://github.com/Amoghf/port_website.git',
},
{
    image: '/work/2.png',
    category: 'WEB_DEV',
    name: 'Finance Banking App',
    description: "Developed a banking app clone with Plaid API for fund transfers and Sentry API for error tracking.",
    link: 'https://github.com/Amoghf/fintech.git',
    github: 'https://github.com/Amoghf/fintech.git',
},
{
    image: '/work/3.png',
    category: 'Other',
    name: 'Criminal Management System',
    description: "Created a robust criminal management system using Spring Boot and SQL for efficient data handling.",
    link: 'https://github.com/Amoghf/Criminal-Management-System.git',
    github: 'https://github.com/Amoghf/Criminal-Management-System.git',
},
{
    image: '/work/4.png',
    category: 'Java',
    name: 'Spring Boot Bus Reservation',
    description: "Implemented a scalable bus reservation system with Spring Boot, using advanced Java design patterns to enhance maintainability and reduce development time.",
    link: 'https://github.com/Amoghf/Bus-Reservation-System-.git',
    github: 'https://github.com/Amoghf/Bus-Reservation-System-.git',
},
{
    image: '/work/5.png',
    category: 'Other',
    name: 'Key-Value Database Pair Utility',
    description: "Developed a utility for managing key-value data pairs efficiently, improving data handling and performance.",
    link: 'https://github.com/Amoghf/Cloud_Key_Value_Pair_3.git',
    github: 'https://github.com/Amoghf/Cloud_Key_Value_Pair_3.git',
},
{
    image: '/work/6.png',
    category: 'Other',
    name: 'Olympic Tokyo 2020 Data Analysis',
    description: "Built an interactive data analysis app using Streamlit and Python, with advanced visualizations and scalable user access.",
    link: 'https://github.com/Amoghf/Olympic_Data_Analysis.git',
    github: 'https://github.com/Amoghf/Olympic_Data_Analysis.git',
}
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
        {/* Updated Heading */}
        <h2 className="text-4xl font-bold text-center mb-8 xl:mb-16 text-gray-800 dark:text-gray-200">
          My Projects
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto">
            {uniqueCategories.map((cat, index) => (
              <TabsTrigger
                onClick={() => setCategory(cat)}
                value={cat}
                key={index}
                className={`capitalize w-[162px] md:w-auto p-3 text-center rounded-lg shadow-md transition-all duration-300
                  ${category === cat ? 'bg-primary text-white shadow-lg' : 'bg-light text-dark shadow-sm'}
                  hover:bg-primary hover:text-white hover:shadow-md`}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tabs Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
