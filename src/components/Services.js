/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services
const services = [
  {
    name: "Frontend Development with React",
    description:
      "As an intern, I gained valuable experience in React and frontend development. I contributed to building responsive and interactive user interfaces for web applications, learning to work with modern frontend technologies.",
    link: "View React projects",
  },
  {
    name: "Rest API",
    description:
      "My internship exposed me to designing and implementing RESTful APIs. I contributed to creating scalable, secure, and efficient APIs to facilitate smooth communication between different components of web applications.",
    link: "Learn about API work",
  },
  {
    name: "Express",
    description:
      "During my internship, I worked with Express.js to build server-side applications. I learned to create RESTful APIs, handle middleware, and optimize server performance as part of my responsibilities.",
    link: "Discover Express projects",
  },
  {
    name: "MongoDB",
    description:
      "As an intern, I became familiar with MongoDB and its use in web applications. I contributed to designing database schemas aligned with the requirements of modern applications, gaining practical experience in NoSQL databases.",
    link: "See MongoDB implementations",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          {/* text and images */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 ">What I Do.</h2>
            <h3 className="h3 mb-12 max-w-[455px]">
              "I've one year of web development experience gained through an
              internship at Enut Technologies.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* services list */}
            <div className="flex-1">
              {services.map((service, index) => {
                // destructure data
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[142px] mb-[36px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex  flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        {" "}
                        <BsArrowUpRight />{" "}
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
