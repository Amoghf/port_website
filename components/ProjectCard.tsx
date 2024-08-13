import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from './ui/card';
import { Badge } from "lucide-react";
import { Github as GithubIcon, Link2 as Link2Icon } from 'lucide-react';

interface Project {
    image: string;
    category: string;
    name: string;
    description: string;
    link: string;
    github: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative bg-card text-card-foreground">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-secondary dark:bg-secondary xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt={project.name}
            priority
          />
          {/* buttons */}
          <div className="flex gap-x-4 absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <Link href={project.link} passHref>
              <div className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center cursor-pointer">
                <Link2Icon className="text-primary-foreground" />
              </div>
            </Link>
            <Link href={project.github} passHref>
              <div className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center cursor-pointer">
                <GithubIcon className="text-primary-foreground" />
              </div>
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6 relative">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1 text-center">{project.name}</h4> {/* Centered the heading */}
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;




//  i am done re baba with evrything