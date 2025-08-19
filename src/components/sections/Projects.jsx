import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "Menu Optimization & Financial Projection Platform",
            description: "Full-stack web application designed to help food truck operators optimize menu pricing and forecast profts. ",
            technologies: ["SolidJS", "Node", "AWS", "DrizzleORM", "SQLite3", "BetterAuth", "TailwindCSS", "TypeScript", "Bun"],
            link: ""
        },
        {
            title: "Classi",
            description: "Refactored and rebuilt a legacy class planner into a responsive class scheduling tool tailored to user needs.",
            technologies: ["Java", "JavaSwing", "Gradle"],
            link: ""
        },
        {
            title: "How Screen Time Affects Cognitive Functions",
            description: "Conducted a research study on the impact of screen time on cognitive functions, utilizing Python for data analysis.",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
            link: "https://github.com/JustinKeith05/ser494_23fc_project"
        }
    ];
    
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                        />
                        // Can alse use <ProjectCard key={index} {...project} />
                    ))}
                    
                </div>
            </div>
        </section>
    );
}