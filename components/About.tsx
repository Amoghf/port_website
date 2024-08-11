import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  PhoneCall,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  Mail,
} from "lucide-react";

// Defining types for infoData, qualificationData, and skillData

interface InfoData {
  icon: JSX.Element;
  text: string;
}

interface QualificationData {
  title: string;
  data: {
    company?: string;
    role?: string;
    years: string;
    university?: string;
    qualification?: string;
  }[];
}

interface SkillData {
  title: string;
  data: {
    name?: string;
    imgPath?: string;
  }[];
}

const infoData: InfoData[] = [
  {
    icon: <User2 size={20} />,
    text: "Amogh Firke",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "9373627322",
  },
  {
    icon: <Mail size={20} />,
    text: "amogh.firke@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 2 Feb 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bangalore, India",
  },
];

const qualificationData: QualificationData[] = [
  {
    title: "Education",
    data: [
      {
        university: "PES University",
        qualification: "Bachelor of Technology CSE",
        years: "2021-present",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Taiyo Kagaku PVT lmt",
        role: "Supply Chain Intern",
        years: "2024 June - 2024 July",
      },
      {
        company: "Sports Technology And Analytics Research Centre (STARC)",
        role: " Machine Learning Research Intern",
        years: "2023 May - 2023 July",
      },
    ],
  },
];

const skillData: SkillData[] = [
  {
    title: "skills",
    data: [
      { name: "Java, Python, Javascript, MOJO" },
      { name: "HTML, CSS, NextJS, React JS" },
      { name: "Machine Learning, Spring Boot" },
      { name: "SQL, Mongo DB, Neo4js" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
    ],
  },
];

const getQualificationData = (arr: QualificationData[], title: string) => {
  return arr.find((item) => item.title === title);
};

const getSkillData = (arr: SkillData[], title: string) => {
  return arr.find((item) => item.title === title);
};

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer2.png"
            />
          </div>

          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Passionate Software Developer</h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in building innovative solutions using
                      advanced technologies in machine learning, computer
                      vision, and full-stack development, consistently
                      delivering optimized and high-quality code.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div className="container">
                        English, Hindi, Marathi
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div className="container">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* Experience and Education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getQualificationData(
                              qualificationData,
                              "Experience"
                            )?.title}
                          </h4>
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getQualificationData(
                            qualificationData,
                            "Experience"
                          )?.data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group " key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px]  transition-all duration-500"></div>
                                </div>
                                <div className="font-semibold text-xl leading-none mb-2">
                                  {company}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {role}
                                </div>
                                <div className="text-base font-medium">
                                  {years}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getQualificationData(
                              qualificationData,
                              "Education"
                            )?.title}
                          </h4>
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getQualificationData(
                            qualificationData,
                            "Education"
                          )?.data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group " key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px]  transition-all duration-500"></div>
                                </div>
                                <div className="font-semibold text-xl leading-none mb-2">
                                  {university}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {qualification}
                                </div>
                                <div className="text-base font-medium">
                                  {years}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value="skills">
                  <div className="container">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Skills
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Skills */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getSkillData(skillData, "skills")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getSkillData(skillData, "skills")?.data.map(
                            (item, index) => {
                              return (
                                <div className="text-base font-medium" key={index}>
                                  {item.name}
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Tools */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getSkillData(skillData, "tools")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getSkillData(skillData, "tools")?.data.map(
                            (item, index) => {
                              return (
                                <div className="text-base font-medium" key={index}>
                                  <img src={item.imgPath} alt={item.name} className="w-8 h-8" />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
