"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollHighlight from "./components/ScrollHighlight";

<meta name="color-scheme" content="light"></meta>;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <main className="bg-white text-gray-900 scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-pink-200 via-pink-100 to-rose-50">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl"
          id="top-section"
        >
          {/* Title with Instagram Button */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <h1 className="text-4xl sm:text-5xl md:text-6xl" id="premium">
              <ScrollHighlight
                text="Lashes & Brows by Leslie"
                variant="color-sweep" // ✅ Correct variant
                fromColor="#817f81ff"
                toColor="#1f2937"
                className="leslie-font"
              />
            </h1>
            <a
              href="https://instagram.com/browsbyleslie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 hover:opacity-80 transition-opacity duration-200"
            >
              <svg
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                id="instagram"
                className="icons-social-media"
              >
                <path d="M224.1 141c-63.6 ..."></path>
              </svg>
            </a>
          </div>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl" id="premium">
            <ScrollHighlight
              text="Premium lash extensions and microblading"
              variant="color-sweep"
              fromColor="#6b7280"
              toColor="#1f2937"
              delay={400}
              className="leslie-font"
            />
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="https://www.vagaro.com/flashyourstyle">
              <button className="gradient-button">Book Now</button>
            </a>
          <button
          onClick={() => {
            const section = document.getElementById("about-me");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="gradient-button inline-block px-8 py-3 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 no-underline"
          >
          Learn More
        </button>
          </div>
        </motion.div>
      </section>

      {/* Info Section 1 */}
      <section className="info-section" id="about-me">
        <div className="flex-container flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6" >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image id="leslie" src="/Intro.jpeg" alt="Leslie doing brows" width={400} height={0} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 space-y-6"
              >
                <p className="description-text-heading">
                  Hi, I&apos;m Leslie! Along with my sisters, I co-own
                  <span className="font-semibold text-pink-700" id="stunning"> Flash Your Style</span>. With over 10
                  years of experience in the beauty industry, I specialize in creating
                  <span id="stunning"> stunning lash extensions </span>
                  and precision <span id="stunning"> microblading </span> that enhances your
                  <span className="italic text-gray-900"> natural features</span>.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section 2 */}
      <section className="info-section">
        <div className="flex-container flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6" id="powdered-brows">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 space-y-6"
          >
            <p className="description-text-heading">
              I specialize in <span className="font-semibold text-pink-700" id="stunning">microblading</span> to give you
              <span className="font-semibold text-pink-700"> beautiful, natural-looking brows</span> that frame your face
              perfectly. Using a <span className="font-semibold text-pink-700" id="stunning">semi-permanent technique</span>, I
              create <span className="italic text-gray-900"> soft, hair-like strokes</span> designed to blend seamlessly
              with your natural brows, leaving you with
              <span className="font-semibold text-pink-700" id="stunning"> fuller, more defined results</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image id="leslie" src="/MB_insta.PNG" alt="Leslie doing brows" width={400} height={0} />
          </motion.div>
        </div>
      </section>

      {/* Info Section 3 */}
      <section className="info-section">
        <div className="flex-container flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6" id="about-me">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image id="leslie" src="/brow_perfection.PNG" alt="Leslie doing brows" width={400} height={0} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 space-y-6"
              >
                <p className="description-text-heading">
                  At <span className="font-semibold text-pink-700" id="stunning">Flash Your Style</span>, we offer a
                  variety of services to help you achieve
                  <span className="font-semibold text-pink-700" id="stunning"> perfect brows</span>, including
                  <span className="font-semibold text-pink-700" id="stunning"> powder brows</span>,
                  <span className="font-semibold text-pink-700" id="stunning"> microshading</span>,
                  <span className="font-semibold text-pink-700" id="stunning"> brow tinting</span>, and
                  <span className="font-semibold text-pink-700" id="stunning"> brow waxing</span>. All services are
                  designed to <span className="italic text-gray-900">beautifully frame your face</span> and give you
                  <span className="font-semibold text-pink-700" id="stunning"> brows you’ll love</span>.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section 4 */}
      <section className="info-section">
        <div className="flex-container flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6" id="powdered-brows">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 space-y-6"
          >
            <p className="description-text-heading">
              Boost your <span className="font-semibold text-pink-700" id="stunning">confidence</span> with
              <span className="font-semibold text-pink-700"> beautiful lashes</span> at Flash Your Style! We
              <span className="font-semibold text-pink-700"> customize your lashes</span> to your
              <span className="font-semibold text-pink-700"> eye shape</span>, creating
              <span className="italic text-gray-900" id="stunning"> stunning, low-maintenance glam</span> every day.
              Choose from <span className="font-semibold text-pink-700">Classic, Hybrid, Volume, or Mega Volume lashes,</span> designed to 
              <span className="font-semibold text-pink-700"> complement your unique style</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image id="leslie" src="/Lashes.jpeg" alt="Leslie doing brows" width={400} height={0} />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Sections */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6" id="premium">
          <ScrollHighlight
            text="Enhance Your Natural Beauty"
            variant="color-sweep"
            fromColor="#817f81ff"
            toColor="#1f2937"
            className="leslie-font"
          />
        </h2>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white text-center"
      >
        <p className="max-w-xl mx-auto text-base sm:text-lg mb-6 sm:mb-8" id="premium">
          <ScrollHighlight
            text="Ready for a luxury lash or brow experience? Book your appointment today and step into confidence."
            variant="color-sweep"
            fromColor="#817f81ff"
            toColor="#1f2937"
          />
        </p>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white text-center"
        id="bottom-book-now"
      >
        <a href="https://www.vagaro.com/flashyourstyle">
          <button className="gradient-button">Book Now</button>
        </a>
      </motion.section>

      {/* Footer */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white text-center"
      >
        <footer className="text-center w-full">
          <p className="text-sm font-medium footer-text" id="premium">
            Follow Brows By Leslie{" "}
            <a
              href="https://www.instagram.com/browsbyleslie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @browsbyleslie
            </a>{" "}
            | Follow Flash Your Style{" "}
            <a
              href="https://www.instagram.com/flashyourstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline color"
            >
              @flashyourstyle
            </a>{" "}
            | Built and Designed by{" "}
            <a
              href="https://www.linkedin.com/in/levi-miller-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Levi Miller
            </a>
          </p>
        </footer>
      </motion.section>
    </main>
  );
}
