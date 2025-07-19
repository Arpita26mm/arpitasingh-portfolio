import { ArrowUp } from "lucide-react";

export const JourneySection = () => {
  const journey = [
    {
      title: "SDE Trainee @ Sigmoid",
      time: "July 2025 - Present",
      description:
        "Working on building scalable and optimized data engineering pipelines, automation and analytics frameworks",
    },
    {
      title: "Data Engineer Intern @ Sigmoid",
      time: "Jan 2025 – Jun 2025",
      description:
        "Built pipelines, automated data flows, and worked on data cleansing & transformation logic with modern tools",
    },
    {
      title: "SDE Intern @ AlgoUniversity",
      time: "May 2024 - July 2024",
      description:
        "Built a scalable full-stack system with efficient backend architecture, containerized environments, and robust routing logic for seamless task execution",
    },
    {
      title: "NIT Raipur – B.Tech",
      time: "2021 – 2025",
      description:
        "Graduated from NIT Raipur, where I kickstarted my coding journey—building impactful projects, solving numerous DSA problems, and evolving as a developer",
    },
  ];

  return (
    <section id="journey" className="relative py-16 px-4 sm:px-8 lg:px-16">
      <div className="flex justify-center items-center mb-8 animate-bounce">
        <ArrowUp className="h-6 w-6 text-primary" />
      </div>
      <h2 className="text-3xl font-bold text-center mb-16">My <span className="text-primary">Journey</span></h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30" />

        {/* Timeline Cards */}
        {journey.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex justify-${index % 2 === 0 ? "start" : "end"} relative`}
          >
            <div
              className={`w-full sm:w-1/2 p-4 bg-background border border-border rounded-2xl shadow-md ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              }`}
            >
              <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
              <span className="text-sm text-muted-foreground">{item.time}</span>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
