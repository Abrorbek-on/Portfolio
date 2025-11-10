import React from "react";
import Navbar from "../Components/Navbar";
import { FaTelegram, FaGithub, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar />

      <section className="max-w-[1400px] m-auto mt-12">
        <div className="text-center">

          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src="/assets/img.jpg"
              alt="Profil Rasmim"
              className="w-90 h-90 rounded-full object-cover border-4 border-gray-300 shadow-xl"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.strong
            className="text-[60px] block mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            Men Karimov Abror, Fullstack dasturchi.
          </motion.strong>

          <motion.div
            className="flex justify-center gap-6 text-[40px]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.8 },
              },
            }}
          >
            <motion.a
              href="https://t.me/ka0o9"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaTelegram />
            </motion.a>

            <motion.a
              href="https://github.com/Abrorbek-on"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/abrorbek-karimov-36908b385/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="mailto:abrorjonk9@gmail.com"
              whileHover={{ scale: 1.2 }}
            >
              <MdEmail />
            </motion.a>

            <motion.a
              href="https://youtube.com/@abrorbekkarimov1"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaYoutube />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <hr className="mt-45 border-gray-300" />

      <motion.footer
        className="max-w-[1400px] m-auto mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>© 2025 Karimov Abrorbek</p>
      </motion.footer>
    </>
  );
}

export default Home;
