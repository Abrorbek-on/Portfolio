import React from "react";
import Navbar from "../Components/Navbar";
import { FaGithub } from "react-icons/fa";

function Project() {
    const projects = [
        {
            title: "Play market Clone",
            description: "...",
            tech: ["React", "Tailwind css"],
            code: "https://github.com/Abrorbek-on/Play-market-frontend-.git",
        },
        {
            title: "E-commerce",
            description:
                "...",
            tech: ["React", "REST API", "Tailwind css"],
            code: "https://github.com/Abrorbek-on/e-commerce.git",
        }
    ];

    return (
        <>
            <Navbar />

            <section className="py-10">
                <h2 className="text-3xl font-bold text-center mb-10">Loyihalarim</h2>

                <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((item, i) => (
                                    <span
                                        key={i}
                                        className="bg-purple-700 px-3 py-1 rounded-md text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaGithub /> Code
                            </a>
                        </div>
                    ))}
                </div>
            </section><hr className='mt-105 border-gray-300' />

            <footer className='max-w-[1400px] m-auto mt-8 text-center'>
                <p>© 2025 Karimov Abrorbek</p>
            </footer>


        </>
    );
}

export default Project;
