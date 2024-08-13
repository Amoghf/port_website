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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/* text */}
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center 
            xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:
            items-start">
                <h2 className="section-title mb-4 text-3xl font-extrabold">Latest Projects</h2>
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
