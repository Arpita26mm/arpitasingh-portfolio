import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Codify",
    description: "An online coding platform which facilitates problem solving in different coding languages",
    image: "/projects/img1.png",
    tags: ["AWS","React", "NodeJs", "Express", "Docker", "MongoDB"],
    demoUrl: "https://www.loom.com/share/a60a9611fb13429db35c6d4690c4d596?sid=5f954430-6059-4cb6-9586-852e2585610b",
    githubUrl: "https://github.com/Arpita26mm/Codify",
  },
    {
    id: 2,
    title: "My Portfolio Website",
    description: "Personal portfolio built with React.js and TailwindCSS",
    image: "/projects/img7.png",
    tags: ["React.js", "TailwindCSS"],
    demoUrl: "https://arpitasingh.netlify.app/",
    githubUrl: "https://github.com/Arpita26mm/ArpitaPortfolio",
  },
  {
    id: 3,
    title: "Azure Medallion Pipeline",
    description:
      "Built an Azure data pipeline using Medallion Architecture to transform raw data into refined, analytics-ready layers",
    image: "/projects/img8.jpg",
    tags: ["Azure Data Factory", "ADLS", "Databricks", "Synapse", "Medallion Architecture"],
    // demoUrl: "#",
    // githubUrl: "#",
  },
   {
    id: 4,
    title: "MS Fabric Project",
    description:
      "A no-code data pipeline in Microsoft Fabric that automates CSV ingestion, transformation, and storage for analytics-ready output",
    image: "/projects/img.png",
    tags: ["MS Fabric", "One Lake"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Arpita26mm/MS-Fabric-Project",
  },
  
  {
    id: 5,
    title: "FS App",
    description:
      "A file-sharing application designed to facilitate the easy transfer of files between devices",
    image: "/projects/img2.png",
    tags: ["React", "NodeJs", "Express", "MongoDB"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Arpita26mm/FS-THE_FILE_SHARING_APP",
  },
 

  {
    id: 6,
    title: "Fitzone Gym",
    description: "Fitzone Fitness offers a sleek interface to explore workout plans, bootcamps, a BMI calculator, and a contact form",
    image: "/projects/img4.png",
    tags: ["React.js", "NodeJs", "Express", "NodeMailer"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Arpita26mm/Fitzone_Fitness_gym",
  },
  {
    id: 7,
    title: "ToDoX",
    description: "TODOX is a minimalist to-do list app that lets you manage, edit, and delete daily tasks with ease",
    image: "/projects/img5.png",
    tags: ["HTML", "CSS", "Javascript"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Arpita26mm/To-Do-List",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
       
       
        {/* Scroll hint for mobile */}
        <div className="flex justify-end items-center mb-2 md:hidden">
  <span className="text-sm text-muted-foreground mr-1">Scroll</span>
  <ArrowRight
    className="w-4 h-4 text-muted-foreground"
    style={{
      animation: 'bounce-x 1s infinite',
    }}
  />
  <style>
    {`
      @keyframes bounce-x {
        0%, 100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(6px);
        }
      }
    `}
  </style>
</div>


        {/* Scrollable container */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 md:gap-8 w-max px-1">
            {projects.map((project, key) => (
              <div
                key={key}
                className="min-w-[300px] md:min-w-[340px] lg:min-w-[360px] max-w-[360px] bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-transform duration-300 hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Arpita26mm"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
