'use client'

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const reviewsData = [
    {
        avatar: '/reviews/dp1.png',
        name: 'Kumar Sampurn',
        job: 'Software Developer',
        review: 'Amogh’s skills in designing efficient SQL database schemas and integrating APIs were crucial in our projects. His dedication ensured quality and timely delivery.',
    },
    {
        avatar: '/reviews/dp2.png',
        name: 'Pratyush Jaishakar',
        job: 'Spring Boot Developer',
        review: 'Amogh’s knowledge of system architecture and backend development was a key factor in making our Spring MVC ticket reservation system scalable and user-friendly.',
    },
    {
        avatar: '/reviews/dp3.png',
        name: 'Archit Anand',
        job: 'Web Developer',
        review: 'Amogh’s leadership in our Next.js financial dashboard project ensured a seamless, interactive user experience with innovative data visualization.',
    },
];

const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Reviews</h2>

                {/* slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="h-[350px]"
                >
                    {reviewsData.map((person, index) => (
                        <SwiperSlide key={index}>
                            <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                                <CardHeader className="flex items-center gap-x-4">
                                    <div>
                                        {/* Image */}
                                        <Image
                                            src={person.avatar}
                                            width={70}
                                            height={70}
                                            alt={person.name}
                                            priority
                                        />

                                        {/* name */}
                                        <div className="flex flex-col">
                                            <CardTitle> {person.name}</CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardDescription className="text-lg text-muted-foreground">
                                    {person.review}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews
