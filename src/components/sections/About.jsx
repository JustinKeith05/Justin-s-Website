
export const About = () => {
    const frontendSkills = ["React", "Vue", "Solid", "TailwindCSS"];
    const backendSkills = ["Node", "Java", "Python", "SQLite"];
    const coursesTaken = [
        "Object-Oriented Programming", 
        "Design & Analysis: DSA", 
        "Computer Systems Fundamentals", 
        "Software Personal Process & Quality",
        "Software Design & Process", 
        "Software Inception & Elaboration",
        "Software Project & Process Management",
        "Principles of Database Management",
        "Principles of Distributed Software Systems",
        "Secure Software Systems",
        "Intro To Machine Learning",
        "Data Science For Software Engineers"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    {/* Add about me description here */}
                    <p className="text-gray-300 mb-6">
                        Hello! I'm Justin Caubang, a Software Engineer based in Chandler, AZ. I have a passion for web development and building scalable, efficient, and user-friendly applications. <br/><br/>

                        I graduated from Arizona State University with a BS in Software Engineering. <br/><br/>

                        When I am not coding, I enjoy playing the electric guitar, drums, and learning and experimenting with new technologies. I believe that learning is an ongoing process and I am always eager to learn and grow as a developer. <br/><br/>

                        Feel free to browse my portfolio, and if you'd like to connect, you can find me on LinkedIn or send me a message below!

                    </p>

                    {/* Skills Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-6">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:big-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-6">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:big-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> 

                {/* Container For Education & Work Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* Education Section */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                            <p className="mb-2 text-gray-400"> <strong className="text-white">B.S. in Software Engineer</strong>  - Arizona State University (2021-2025) </p>
                            <strong>Courses Taken</strong>
                                <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
                                    {coursesTaken.map((course, index) => (
                                        <li key={index}>{course}</li>
                                    ))}
                                </ul>
                    </div>

                    {/* Work Experience Section */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Social Media Management Intern</strong> - Nominal (Jan 2021 - May 2021)
                                </li>
                                <li>
                                    <strong>Assistant Instructor</strong> - Kumon (Aug 2018 - Present)
                                </li>
                        </ul>
                    </div>
                </div>         
            </div>

        </section>
    )
}