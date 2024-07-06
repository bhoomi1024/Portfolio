import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import jobExperiences from "../constants/jobExperiences.json";
import nonDevExperiences from "../constants/nonDevExperience.json";

const JobExperienceCard = ({ experience, onClick }) => (
  <VerticalTimelineElement
    icon={
      <img
        src={experience.img}
        alt={experience.title}
        className="h-full w-full rounded-full block"
      />
    }
    contentStyle={{ background: "#F3F4F6", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    date={<span className="text-gray-600">{experience.timePeriod}</span>}
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
    <p className="text-xl text-gray-800 italic mb-4">{experience.company}</p>
    <div className="flex justify-between items-center">
      <button
        className="text-gray-800 font-bold hover:text-gold-500"
        onClick={onClick}
      >
        Read more...
      </button>
    </div>
  </VerticalTimelineElement>
);

const NonDevExperienceCard = ({ experience, onClick }) => (
  <VerticalTimelineElement
    icon={
      <img
        src={experience.img}
        alt={experience.title}
        className="h-full w-full rounded-full block"
      />
    }
    contentStyle={{ background: "#F3F4F6", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    date={<span className="text-gray-600">{experience.timePeriod}</span>}
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
    <p className="text-xl text-gray-800 italic mb-2">{experience.company}</p>
    <div className="flex justify-between items-center">
      <button
        className="text-gray-800 font-bold hover:text-gold-500"
        onClick={onClick}
      >
        Read more...
      </button>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <div
      id="experience"
      className="bg-gray-900 p-8 rounded-lg shadow-lg w-full mx-auto mt-12 text-gray-100"
    >
      <h2 className="text-4xl font-bold text-gray-100 mb-4 text-center">
        Developer Experience
      </h2>
      <VerticalTimeline>
        {jobExperiences.map((experience, index) => (
          <JobExperienceCard
            key={index}
            experience={experience}
            onClick={() => setModalContent(experience)}
          />
        ))}
      </VerticalTimeline>

      <h2 className="text-4xl font-bold text-gray-100 mt-6 mb-4 text-center">
        Non Dev Experience
      </h2>
      <VerticalTimeline>
        {nonDevExperiences.map((experience) => (
          <NonDevExperienceCard
            key={experience.id}
            experience={experience}
            onClick={() => setModalContent(experience)}
          />
        ))}
      </VerticalTimeline>

      <Modal
        isOpen={!!modalContent}
        onRequestClose={() => setModalContent(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
      >
        <div className="bg-gray-200 p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 md:space-y-0 max-w-md max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => setModalContent(null)}
            className="absolute top-2 right-2 text-gray-900 hover:text-gold-500"
          >
            <FaTimesCircle size={32} />
          </button>
          <div>
            <h3 className="text-gray-900 text-2xl font-bold mb-4">
              {modalContent?.title}
            </h3>
            <p className="text-gray-800 mb-4">{modalContent?.company}</p>
            <p className="text-gray-800 mb-4">{modalContent?.description}</p>
            <p className="text-gray-800 font-bold">
              {modalContent?.timePeriod}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Experience;
