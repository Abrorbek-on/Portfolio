import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";

function Skills() {
    const skills = [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Express.js",
        "NestJS",
        "Docker",
        "AWS",
        "React.js",
        "Next.js",
        "Javascript",
        "Typescript",
        "GraphQL",
        "CI/CD,",
        "Socket.io",
        "React Native",
        "HTML/CSS",
        "Tailwind CSS",
        "Python",
        "REST API",
        "Git/Github",
        "C",
    ];

    return (
        <>
            <Navbar />

            <section className="max-w-[1100px] m-auto mt-12">
                <div className="text-center mb-10">
                    <motion.strong
                        className="text-[40px] block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Ko'nikmalar
                    </motion.strong>

                    <motion.p
                        className="text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Quyidagi texnologiyalar bo‘yicha tajribam bor.
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-wrap justify-center gap-4 px-6 mt-[20px]"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.08 },
                        },
                    }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="px-5 py-3 rounded-xl shadow-md border border-gray-200 text-sm font-medium hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.8 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { duration: 0.4, ease: "easeOut" },
                                },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <hr className="mt-106 border-gray-300" />

            <motion.footer
                className="max-w-[1400px] m-auto mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <p>© 2025 Karimov Abrorbek</p>
            </motion.footer>
        </>
    );
}

export default Skills;
