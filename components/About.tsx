import DevImg from "./DevImg"
import Image from "next/image"
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'





import {User2
    ,MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
Briefcase,
Mail,
University}  from 'lucide-react'
import { title } from "process"


const infoData=[
    {
        icon: <User2 size={20}/>,
        text:'Amogh Firke'
    },
    {
        icon: <PhoneCall size={20}/>,
        text:'9373627322'
    },
    {
        icon: <Mail size={20}/>,
        text:'amogh.firke@gmail.com'
    },
    {
        icon: <Calendar size={20}/>,
        text:'Born on 2 Feb 2003'
    },
    {
        icon: <GraduationCap size={20}/>,
        text:'Bachelor in Computer Science'
    },
    {
        icon: <HomeIcon size={20}/>,
        text:'Bangalore , India'
    },

]

const qualificationData=[
    {
        title:'Education',
        data:[
            {
                University:"PES University",
                qualification:"Bachelor of Technology CSE",
                years:'2021-present',
            },
            // {
            //     University:"PES University",
            //     qualification:"Bachelor of Technology CSE",
            //     years:'2021-present',
            // }
        ]
    },
    {
        title:'Experience',
        data:[
            {
                Company:"Taiyo Kagaku PVT lmt",
                qualification:"Supply Chain Intern",
                years:'2024 June - 2024 July',
            },
            {
                Company:"Sports Technology And Analytics Research Centre(STARC)",
                qualification:"Research Intern",
                years:'2023 May - 2023 July',
            }
            
        ]
    }

]

const skillData=[

    {
        title:'skills',
        data:[
            {
                name:'Java , Python , Javascript, MOJO',
            },
            {
                name:'HTML , CSS , NextJS ,React JS',
            },
            {
                name:'Machine Learning,Spring Boot ',
            },
            {
                name:'SQL,Mongo DB, Neo4js',
            }
        ]
    },
    {
        title:'tools',
        data:[
            {
                imgPath:'/about/vscode.svg',
            },
            {
                imgPath:'/about/figma.svg',
            },
            {
                imgPath:'/about/notion.svg',
            },
            {
                imgPath:'/about/wordpress.svg',
            }
        ]
    }


];



const About = () => {

    // const getData = (arr,title)=>{
    //     return arr.find((item)=>item.title===title);
    // };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">  About Me</h2>

            

            <div className="flex flex-col xl:flex-row" >
                   {/* Image */}
                   <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                    imgSrc="/about/developer.png"/>
                    </div>  

                    {/* tabs */}

                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList>
                                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger value="skills">Skills</TabsTrigger>
                            </TabsList>

                            {/* tasbcontetn */}

                           

                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value="personal">
                                        Personal Info
                                </TabsContent>
                                <TabsContent value="qualifications">
                                        Qualifications
                                </TabsContent>
                                <TabsContent value="skills">
                                        Skills
                                </TabsContent>
                            </div>
                        </Tabs>

                    </div>

            </div>
        </div>
      
    </section>
  )
}

export default About
