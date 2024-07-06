import React, { memo, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiPerplexity } from "react-icons/si";
import { GITHUB_URL, LINKEDIN_URL, PERPLEXITY_URL, RESUME_URL } from "../constants";
import "./style.css"; // Ensure this path is correct

// Function to generate star positions
const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    stars.push({ left, top });
  }
  return stars;
};

const stars = generateStars(100); // Generate 100 stars

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  // Name animation effect
  const nameSpring = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(-20px)" },
    delay: 500,
    config: config.wobbly,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="relative container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center bg-gray-900 min-h-screen py-12 px-4 lg:px-0 lg:pt-16 lg:mt-12 pt-24"
    >
      {/* Background animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent overflow-hidden z-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDuration: `${35 + (index % 15)}s`,
            }}
          />
        ))}
      </div>

      <animated.div style={slideUp} className="lg:w-1/2 lg:pr-16 mt-8 lg:mt-0 lg:pt-19">
        <animated.h1
          style={nameSpring}
          className="text-4xl font-bold text-goldDesert mb-4 text-center lg:text-left"
        >
          Bhoomi Verma
        </animated.h1>
        <p className="text-lg text-gray-300 mb-4 text-center lg:text-left">
          Hello! I'm a highly motivated and skilled full-stack developer
          specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
          Currently, I am an intern at HCLTech, where I apply my passion for
          developing innovative software solutions.
        </p>
        <p className="text-lg text-gray-300 mb-4 text-center lg:text-left">
          With a background in Computer Science, I have a proven track record of
          creating consumer-focused websites using JavaScript and various
          frameworks. I possess a strong understanding of best practices in web
          design, user experience, and performance optimization.
        </p>
        <p className="text-lg text-gray-300 mb-4 text-center lg:text-left">
          As a collaborative team player, I consistently deliver high-quality
          work and achieve exceptional results. I thrive in dynamic environments
          and am committed to continuous learning and skill enhancement to stay
          at the forefront of the tech industry.
        </p>
        <p className="text-lg text-gray-300 mb-4 text-center lg:text-left">
          Thank you for visiting my portfolio. I look forward to connecting and
          potentially collaborating on exciting projects!
        </p>
        <div className="flex justify-center lg:justify-start items-center pb-8">
          <Anchor href={GITHUB_URL}>
            <FaGithub size={32} />
          </Anchor>
          <Anchor href={LINKEDIN_URL}>
            <FaLinkedin size={32} />
          </Anchor>
          <Anchor href={PERPLEXITY_URL}>
            <SiPerplexity size={32} />
          </Anchor>
          <Anchor href={RESUME_URL}>
            <FaFileAlt size={32} />
          </Anchor>
        </div>
      </animated.div>
      <animated.img
        style={{ ...springProps }}
        src="images/profile.jpg"
        alt="Bhoomi"
        className="rounded-full w-64 h-64 border-4 border-goldDesert object-cover mb-8 lg:mb-0 lg:ml-12"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      />
    </animated.div>
  );
};

export default memo(About);
