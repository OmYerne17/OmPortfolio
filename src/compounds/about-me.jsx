import React from "react";
import { motion } from "framer-motion"; // Importing motion
import image from "../assets/image/Om Image.jpg";

function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between rounded-lg shadow-lg p-6 md:p-10  sm:p-12 w-full"
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 h-64 md:h-96 flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} // Trigger animation once when the image enters the viewport
        transition={{ duration: 5.0, type: "spring", stiffness: 50 }}
      >
        <img
          src={image}
          alt="Om Yerane"
          className="w-auto h-full rounded-lg"
        />
      </motion.div>

      {/* About Me Text Section */}
      <motion.div
        className="w-full md:w-1/2 md:ml-8 text-center md:text-left mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} // Trigger animation once when the text enters the viewport
        transition={{ duration: 5.0, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          About Me
        </h1>
        <div className="text-base md:text-lg lg:text-xl">
          <p className="mb-4">
            Hi, I’m Om Yerane, a passionate Full Stack Web Developer with
            expertise in React and Next.js frameworks. With over 1 years of
            hands-on experience in the IT industry, I specialize in building
            scalable, high-performance web applications and delivering
            user-focused, modern digital solutions.
          </p>
          <h2 className="text-2xl text-orange-500 font-bold mb-4">
            My Journey
          </h2>
          <p className="mb-4">
            I am currently pursuing a Bachelor of Technology (B.Tech) in
            Computer Engineering, and I am in my third year of study. Throughout
            my academic journey, I have gained strong knowledge in core computer
            science subjects such as Data Structures, Algorithms, Database
            Management, and Web Technologies. Additionally, I have completed two
            industry internships, which helped me gain practical experience in
            software development and teamwork in real-world projects.
          </p>
          <p className="mb-4">
            I am a lifelong learner, always seeking to expand my knowledge and
            skills in the ever-evolving field of technology.
          </p>
          <h2 className="text-2xl text-orange-500 font-bold mb-4">
            Let’s Connect!
          </h2>
          <p className="mb-4">
            📬 Open to collaborations, freelance work, and networking
            opportunities! <br /> 🌐{" "}
            <a href="https://omportfolio-self.vercel.app/">omportfolio</a>{" "}
            <br />
            📧{" "}
            <a href="mailto:omyerane2004@gmail.com">
              omyerane2004@gmail.com
            </a>{" "}
            <br />
            🔗{" "}
            <a href="https://www.linkedin.com/in/om-yerane-1083382a0/">
              LinkedIn - Om Yerane
            </a>
            <br />
            🔗 <a href="https://github.com/OmYerne17">GitHub - OmYerne17</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
