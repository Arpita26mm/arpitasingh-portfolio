import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "💻 C++", level: 95, category: "Languages" },
  { name: "🐍 Python", level: 80, category: "Languages" },
  { name: "🛢️ SQL", level: 90, category: "Languages" },

  { name: "🌐 HTML/CSS", level: 90, category: "Development" },
  { name: "🟨 JavaScript", level: 85, category: "Development" },
  { name: "⚛️ React", level: 85, category: "Development" },
  { name: "🎨 Tailwind/Bootstrap", level: 75, category: "Development" },
  { name: "🟩 Node.js", level: 90, category: "Development" },
  { name: "🚏 Express", level: 85, category: "Development" },

  { name: "☁️ Azure", level: 80, category: "Clouds & Databases" },
  { name: "☁️ AWS", level: 75, category: "Clouds & Databases" },
  { name: "🍃 MongoDB", level: 85, category: "Clouds & Databases" },
  { name: "🧩 MySQL", level: 85, category: "Clouds & Databases" },

  { name: "🔧 Git/GitHub", level: 90, category: "Devops & tools" },
  { name: "🐳 Docker", level: 85, category: "Devops & tools" },
  { name: "☸️ Kubernetes", level: 85, category: "Devops & tools" },
  { name: "📬 Postman", level: 85, category: "Devops & tools" },
  { name: "🐧 Linux CLI", level: 90, category: "Devops & tools" },
  { name: "📝 VS Code", level: 95, category: "Devops & tools" },
  { name: "📘 IntelliJ", level: 85, category: "Devops & tools" },

  { name: "❄️ Snowflake", level: 90, category: "Data Engineering" },
  { name: "🔥 PySpark", level: 90, category: "Data Engineering" },
  { name: "🧵 Airflow", level: 85, category: "Data Engineering" },
  { name: "📊 MS Fabric", level: 85, category: "Data Engineering" },
];

const categories = [
  "all",
  "Languages",
  "Clouds & Databases",
  "Development",
  "Devops & tools",
  "Data Engineering",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 px-4 relative bg-secondary/30 overflow-x-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm transition-colors duration-300 capitalize whitespace-nowrap",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-cyan-400/30 shadow-[0_0_12px_2px_rgba(34,211,238,0.15)] hover:shadow-cyan-500/40 transition-transform duration-300 hover:scale-[1.03] flex flex-col justify-between"
            >
              <div className="text-left mb-2">
                <h3 className="font-semibold text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent truncate">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1.5 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
