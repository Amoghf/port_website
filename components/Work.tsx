'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import ProjectCard from "./ProjectCard"

const projectData = [
    {
        image: '/work/3.png',
        category: 'WEB_DEV',
        name: 'Nexa Website',
        description: "A responsive and user-friendly website for Nexa, focusing on modern web technologies.",
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'WEB_DEV',
        name: 'Nexa Website',
        description: "A custom website solution for Nexa, designed to enhance user experience.",
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'Java',
        name: 'Spring Boot Application',
        description: "Developed a robust backend using Spring Boot to manage complex data structures.",
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'Java',
        name: 'Spring Boot Microservices',
        description: "Implemented microservices architecture using Spring Boot for scalable applications.",
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'Other',
        name: 'Utility Script',
        description: "Created a versatile utility script to automate daily tasks, increasing productivity.",
        link: '/',
        github: '/',
    }
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/* text */}
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center 
            xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:
            items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">A showcase of my recent work, spanning web development, Java applications, and more.</p>
                <Link href="/projects">
                    <Button>All Projects</Button>
                </Link>
            </div>

            {/* slider */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper className="h-[480px]" 
                    slidesPerView={1} 
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                    }}
                    spaceBetween={30} 
                    modules={[Pagination]}
                    pagination={{clickable: true}}>
                    {/* show only the 4 project */}
                    {projectData.slice(0, 4).map((project, index) => (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work
