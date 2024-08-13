import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Creating visually appealing, user-friendly, and responsive website designs tailored to your brand's identity and user experience needs.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Building robust, scalable, and efficient websites and web applications using the latest technologies and best practices in web development.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Spring MVC Developer",
    description:
      "Specializing in developing Java-based enterprise applications using the Spring MVC framework, ensuring high performance and maintainability.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>

        {/* grid */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[420px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div
                    className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center"
                  >
                    {item.icon}
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
