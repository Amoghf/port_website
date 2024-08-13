import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className="container mx-auto ">
        <div className="flex justify-between gap-x-8">
          {/* {text} */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'> 
              Software Developer
            </div>
            <h1 className='text-4xl font-bold'>Hello, my name is Amogh Firke</h1>
            <p className='text-lg max-w-[490px] mx-auto xl:mx-0'>
              Brief description with insights into myself, my vocation journey,
              and what I engage in professionally.
            </p>

            {/* {button} */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a
                href="/resumes/resume11.pdf"
                download
                className="flex items-center gap-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
              >
                Download CV <Download size={18} />
              </a>
            </div>

            {/* socials */}
            <div className="mt-8 flex justify-center">
              <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" 
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all" />
            </div>
          </div>

          {/* {image and badges} */}
          <div className="hidden xl:flex relative z-10">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[20%] -left-[2rem] z-20 p-4 bg-white shadow-md rounded-lg"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of Experience"
            />

            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[50%] -left-[4rem] z-20 p-4 bg-white shadow-md rounded-lg"
              icon={<RiTodoFill />}
              endCountNum={12}
              endCountText="+"
              badgeText="Finished Projects"
            />

            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[30%] -right-[5rem] z-20 p-4 bg-white shadow-md rounded-lg"
              icon={<RiTeamFill />}
              endCountNum={500}
              endCountText="+"
              badgeText="LinkedIn Connections"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 z-0"></div>
            <DevImg 
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom z-0" 
              imgSrc="/hero/developer2.png"
            />
          </div>
        </div>

        <div>
          {/* {icon} */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 transform -translate-x-2/4 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
