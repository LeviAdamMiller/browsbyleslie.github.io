"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollHighlight from "./components/ScrollHighlight";



<meta name="color-scheme" content="light"></meta>
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


export default function Hero() {
  
  return (
    <main className="bg-white text-gray-900 scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
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
  
          <h1 className="text-4xl sm:text-5xl md:text-6xl" id="premium">
            <ScrollHighlight 
              text="Lashes & Brows by Leslie" 
              variant="color-sweep"       // ✅ This is the correct variant name
              fromColor="#817f81ff"        // Starts as light gray
              toColor="#1f2937"   
              className="leslie-font"       // Sweeps to dark gray/black
            />
          </h1>
            <a 
            href="https://instagram.com/browsbyleslie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 hover:opacity-80 transition-opacity duration-200"
          >
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" id="instagram" className="icons-social-media"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          </a>
          </div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl" id="premium">
            <ScrollHighlight 
              text="Premium lash extensions and microblading"
              variant="color-sweep"       // ✅ Correct variant
              fromColor="#6b7280"        // Starts as medium gray
              toColor="#1f2937"          // Sweeps to dark
              delay={400}
              className="leslie-font"
            />
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Luxe Primary Button */}
            <a href="https://www.vagaro.com/flashyourstyle">
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
  
  <section className="info-section">
  {/* About Me Section - Photo Left, Description Right */}

  {/* Content Container */}
  <div className="flex-container flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6" id="about-me">
      
      {/* Left side - Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        
      >
        <Image
          id="leslie"
          src="/Intro.jpeg"
          alt="Leslie doing brows"
          width={400}
          height={0}
        />
      </motion.div>
      
      {/* Right side - Description */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 space-y-6 "
      >
       
        {/* Description */}
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
              <span className="font-semibold text-pink-700" id="stunning"> Flash Your Style</span>. 
              With over 10 years of experience in the beauty industry, 
              I specialize in creating 
              <span id="stunning"> stunning lash extensions </span> 
              and precision 
              <span id="stunning"> microblading </span> 
              that enhances your 
              <span className="italic text-gray-900"> natural features</span>.
            </p>    
                            
         </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 space-y-6"
        >
          </motion.div>
        </div>
      </motion.div>
  </div>
</section>


    <section className="info-section">
 
  {/* Content Container */}
  <div className="flex-container flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6" id="powdered-brows">
  {/* Right side - Description */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 space-y-6"
      >

        <p className="description-text-heading">
        I specialize in <span id="stunning" className="font-semibold text-pink-700">microblading</span> to give you 
        <span className="font-semibold text-pink-700"> beautiful, natural-looking brows</span> that frame your face perfectly. 
        Using a <span id="stunning" className="font-semibold text-pink-700">semi-permanent technique</span>, I create 
        <span className="italic text-gray-900"> soft, hair-like strokes</span> designed to blend seamlessly with your natural brows, 
        leaving you with <span className="font-semibold text-pink-700" id="stunning">fuller, more defined results</span>
        </p>
    
      </motion.div>
{/* Left side - Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        
      >
        <Image
          id="leslie"
          src="/MB_insta.PNG"
          alt="Leslie doing brows"
          width={400}
          height={0}
        />
      </motion.div>
  </div>
</section>

  <section className="info-section">
  {/* About Me Section - Photo Left, Description Right */}

  {/* Content Container */}
  <div className="flex-container flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6" id="about-me">
      
      {/* Left side - Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        
      >
        <Image
          id="leslie"
          src="/brow_perfection.PNG"
          alt="Leslie doing brows"
          width={400}
          height={0}
        />
      </motion.div>
      
      {/* Right side - Description */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 space-y-6 "
      >
       
        {/* Description */}
        <div>
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 space-y-6"
        >
                    
        <p className="description-text-heading">
          At <span id="stunning" className="font-semibold text-pink-700">Flash Your Style</span>, we offer a variety of services to help you achieve 
          <span id="stunning" className="font-semibold text-pink-700"> perfect brows</span>, including 
          <span id="stunning" className="font-semibold text-pink-700"> powder brows</span>, 
          <span id="stunning" className="font-semibold text-pink-700"> microshading</span>, 
          <span id="stunning" className="font-semibold text-pink-700"> brow tinting</span>, and 
          <span id="stunning" className="font-semibold text-pink-700"> brow waxing</span>. 
          All services are designed to <span className="italic text-gray-900">beautifully frame your face</span> and give you 
          <span id="stunning" className="font-semibold text-pink-700"> brows you’ll love</span>.
        </p>            
         </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 space-y-6"
        >
          </motion.div>
        </div>
      </motion.div>
  </div>
</section>

  <section className="info-section">
 
  {/* Content Container */}
  <div className="flex-container flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6" id="powdered-brows">
  {/* Right side - Description */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 space-y-6"
      >

       <p className="description-text-heading">
        Boost your <span className="font-semibold text-pink-700" id="stunning">confidence</span> with 
        <span className="font-semibold text-pink-700"> beautiful lashes</span> at Flash Your Style! 
        We <span className="font-semibold text-pink-700">customize your lashes</span> to your 
        <span className="font-semibold text-pink-700"> eye shape</span>, creating 
        <span className="italic text-gray-900" id="stunning"> stunning, low-maintenance glam</span> every day. 
        Choose from <span className="font-semibold text-pink-700">Classic, Hybrid, Volume, or Mega Volume lashes </span> 
        and let your <span className="font-semibold text-pink-700">eyes do the talking</span>!
      </p>
    
      </motion.div>
{/* Left side - Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        
      >
        <Image
          id="leslie"
          src="/Lashes.jpeg"
          alt="Leslie doing brows"
          width={400}
          height={0}
        />
      </motion.div>
  </div>
</section>

        

      {/* Call to Action */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6" id="premium">
          Enhance Your Natural Beauty
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
          Ready for a luxury lash or brow experience? Book your appointment today
          and step into confidence.
        </p>
        </motion.section>
          <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white text-center"
      >
        <a href="https://www.vagaro.com/flashyourstyle">
        <button className="gradient-button">
          Book Now
        </button></a>
        </motion.section>
          <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white text-center"
      >
      <footer className="text-center w-full">
  <p className="text-sm font-medium" id="premium">
    Follow Leslie on Instagram{" "}
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
      className="hover:underline"
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