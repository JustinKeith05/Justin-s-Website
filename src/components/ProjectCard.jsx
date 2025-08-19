

export const ProjectCard = ({ title, description, technologies, link }) => {
    return (
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between h-full">
            {/* Title */}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            
            {/* Description */}
            <p className="text-gray-400 mb-4">{description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, key) => (
                    <span 
                        key={key} 
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Project Link */}
            <div className="flex justify-between items-center mt-auto">
                <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors mt-2">
                    {link ? "View Project →" : ""}
                </a>
            </div>
        </div>
    );
};