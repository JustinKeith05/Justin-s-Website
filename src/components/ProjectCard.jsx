

export const ProjectCard = ({ title, description, technologies, link }) => {
    return (
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 mr-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <a href={link} className="text-blue-400 hover:text-blue-300 trainsition-colors mt-2">View Project →</a>
            </div>
        </div>
    );
}