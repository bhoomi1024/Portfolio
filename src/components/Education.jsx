import React from "react";
import schools from "../constants/schools.json";
import { useSpring, animated, useTrail } from "react-spring";

const School = ({ school, imageStyle }) => (
  <div className="mb-4 flex items-center">
    <animated.img
      style={imageStyle}
      src={school.img}
      alt={school.university}
      className="h-12 w-auto mr-4  shadow-md"
    />
    <div>
      <h3 className="text-xl font-semibold text-goldDesert">{school.degree}</h3>
      <p className="text-lg text-white">{school.university}</p>
      <p className="text-white">{school.timePeriod}</p>
    </div>
  </div>
);

export default function Education() {
  const educationSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const imageTrails = useTrail(schools.length, {
    from: { transform: "translate3d(-100%,0,0) rotate(-360deg)", opacity: 0 },
    to: { transform: "translate3d(0%,0,0) rotate(0deg)", opacity: 1 },
  });

  return (
    <animated.section
      id="education"
      className="bg-gray-900 p-8  shadow-md w-full mx-auto flex flex-col items-center justify-center min-h-screen py-12 px-4 lg:px-0 lg:pt-16 lg:mt-12 pt-24"
      style={educationSpring}
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-white   mb-8 text-center">Education</h2>
        {schools.map((school, index) => (
          <School
            key={school.id}
            school={school}
            imageStyle={imageTrails[index]}
          />
        ))}
      </div>
    </animated.section>
  );
}
