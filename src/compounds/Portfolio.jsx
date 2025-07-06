import React from "react";
import { motion } from "framer-motion";
import Project from "../compounds/Projects";
import FoodieExpress from "../assets/image/FoodieExpress1.png";
import BDCOE from "../assets/image/BDCOE.png";
import Debattle from "../assets/image/debattle.png";

function Portfolio() {
  return (
    <div id="portfolio" className="p-6 sm:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6">
        Portfolio
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            image: FoodieExpress,
            title: "Food Delivery App",
            description: "A platform for Order Food and Delivery.",
            website: "https://food-express-sdp1.vercel.app/",
            sourceCode: "https://github.com/OmYerne17/Food_Express",
            tags: ["React", "TailwindCSS", "JavaScript", "ExpressJs", "NodeJs", "MongoDB"],
          },
          {
            image: BDCOE,
            title: "College Website",
            description: "A platform for student to get information about college and Store their data at repo form.",
            website: "https://bdcoe.vercel.app/",
            sourceCode: "https://github.com/nayanbamnote/bdcoe",
            tags: ["NextJs", "TailwindCSS", "ReactJs","PostgresSQL","Clerk","Shadcn"],
          },
          {
            image: Debattle,
            title: "Debattle-AI Debate Chatbot",
            description:
              "Debattle is an interactive platform where AI and users engage in lively debates on trending topics..",
            website: "https://debattle1.vercel.app/",
            sourceCode:
              "https://github.com/OmYerne17/Debattle",
            tags: [
              "NextJs",
              "TailwindCSS",
              "ReactJs",
              "Google Gemini",
              "Firebase",
              "Google Gemini",
              "Websocket",
            ],
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              transition: { type: "spring", stiffness: 120, damping: 15 },
            }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
