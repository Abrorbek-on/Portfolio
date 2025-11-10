import React from 'react';
import Navbar from '../Components/Navbar';
import { motion } from "framer-motion";
import { FaFileAlt } from 'react-icons/fa';

function About() {
    return (
        <>
            <Navbar />

            <section className="max-w-[1100px] m-auto mt-12 px-4">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-lg text-gray-600 mb-4"
                >
                    Assalomu alaykum
                </motion.p>

                <motion.strong
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-[60px] sm:text-4xl md:text-5xl lg:text-[60px] block mb-6 text-gradient font-extrabold"
                >
                    Men Karimov Abror, Fullstack dasturchiman.
                </motion.strong>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-gray-700 text-lg sm:text-base md:text-lg leading-relaxed"
                >
                    ExpressJs, Nest, React, Next va zamonaviy veb texnologiyalar yordamida foydalanuvchi uchun qulay va tezkor veb sahifalar yarataman. Har bir loyihada sifat, interaktivlik va tezlikni birinchi o‘ringa qo‘yaman.
                </motion.span>
                <div>

                    <a
                        href="https://drive.google.com/your-resume-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-600 text-white px-5 py-2 rounded-xl hover:bg-gray-700 transition-all duration-300 mt-5"
                    >
                        <FaFileAlt className="text-xl" />
                        Resume
                    </a>
                </div>

            </section><hr className='mt-103 border-gray-300' />

            <footer className='max-w-[1400px] m-auto mt-8 text-center'>
                <p>© 2025 Karimov Abrorbek</p>
            </footer>
        </>
    )
}

export default About;
