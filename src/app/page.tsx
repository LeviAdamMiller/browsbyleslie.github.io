"use client";

import { motion } from "framer-motion";
import Image from "next/image";

<meta name="color-scheme" content="light"></meta>
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


export default function Hero() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-pink-200 via-pink-100 to-rose-50">
        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl"
        >
          {/* Title with Instagram Button */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              Lashes & Brows by Leslie 
            </h1>
            <a 
            href="https://instagram.com/browsbyleslie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 hover:opacity-80 transition-opacity duration-200"
          >
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" id="instagram" className="icons-social-media"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          </a></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700">
            Premium lash extensions and microblading to enhance your natural beauty
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Luxe Primary Button */}
            <a href="https://www.vagaro.com/flashyourstyle/book-now">
            <button className="gradient-button">
              Book Now
            </button></a>

            {/* Styled Learn More Button */}
            <button className="gradient-button inline-block px-8 py-3 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 no-underline">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>
      {/* About Preview */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 text-center bg-gray-50"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
       I&#39;ve been Lashing & doing Brows(PMU) since 2009 🗓
Book Lashes, Microblading, Microshading, Powder Ombre Brows and Fibroblasting! Book Online 24/7
        </p>
        <button className=" gradient-button inline-block mt-4 sm:mt-6 text-gray-900 underline">
          Read more →
        </button>
      </motion.section>

      {/* Featured Services */}
           {/* Services Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-white"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-8 sm:mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Ombre Brows */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
            <Image
              id="ombre"
              src="/Powdered_brows.png"
              alt="Ombre Brows"
              width={350} // intrinsic width
              height={400} // intrinsic height
              className="h-48 object-cover sm:h-56 lg:w-80 lg:h-72 lg:mx-auto"
              />
               <Image
              id="ombre"
              src="/PwBr2.png"
              alt="Ombre Brows"
              width={350} // intrinsic width
              height={400} // intrinsic height
              className="h-48 object-cover sm:h-56 lg:w-80 lg:h-72 lg:mx-auto"
              />
              <Image
              id="ombre"
              src="/PwBr3.png"
              alt="Ombre Brows"
              width={350} // intrinsic width
              height={400} // intrinsic height
              className="h-48 object-cover sm:h-56 lg:w-80 lg:h-72 lg:mx-auto"
              />
            <h3 className="text-xl sm:text-2xl font-serif mb-2">Ombre Brows</h3>
            <p className="text-gray-600 text-sm sm:text-base">
            Soft, natural-looking brows with a gentle shaded effect. Fully customizable and long lasting, up to 3 years. Can be combined with microblading for a hybrid look. 💕✨
            </p>
          </motion.div>

          {/* Microblading */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 text-center"
          >
            <Image
              src="/microblading.jpg"
              alt="Microblading"
              width={500}       // intrinsic width
              height={400}      // intrinsic height
              className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4 sm:mb-6"
            />
            <h3 className="text-xl sm:text-2xl font-serif mb-2">Microblading</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Fine, hair-like strokes that mimic natural brows. Perfect for
              clients who want definition while keeping a soft, realistic finish.
            </p>
          </motion.div>

          {/* Lash Extensions */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 text-center"
          >
            <Image
              src="/lash-service.jpg"
              alt="Lash Extensions"
              width={500}       // intrinsic width
              height={400}      // intrinsic height
              className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4 sm:mb-6"
            />
            <h3 className="text-xl sm:text-2xl font-serif mb-2">Lash Extensions</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Classic, hybrid, or volume sets designed to enhance your eye shape
              and style. Get a customized lash look from natural elegance to full glam.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Preview */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-8 sm:mb-12">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          <motion.img
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="/gallery1.jpg"
            alt="Work sample 1"
            className="rounded-lg shadow object-cover w-full h-40 sm:h-56"
          />
          <motion.img
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            src="/gallery2.jpg"
            alt="Work sample 2"
            className="rounded-lg shadow object-cover w-full h-40 sm:h-56"
          />
          <motion.img
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            src="/gallery3.jpg"
            alt="Work sample 3"
            className="rounded-lg shadow object-cover w-full h-40 sm:h-56"
          />
          <motion.img
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            src="/gallery4.jpg"
            alt="Work sample 4"
            className="rounded-lg shadow object-cover w-full h-40 sm:h-56"
          />
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <button className="gradient-button">
            View Full Gallery
          </button>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">
          Enhance Your Natural Beauty
        </h2>
        <p className="max-w-xl mx-auto text-base sm:text-lg mb-6 sm:mb-8">
          Ready for a luxury lash or brow experience? Book your appointment today
          and step into confidence.
        </p>
        <a href="https://www.vagaro.com/flashyourstyle/book-now">
        <button className="gradient-button">
          Book Now
        </button></a>
        <footer>
        <p className="text-sm font-medium">
          ✨ Book your appointment today! ✨
        </p>
      </footer>
      </motion.section>
    </main>
  );
}
