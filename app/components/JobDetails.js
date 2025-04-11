"use client";

import { useState } from "react";

const JobDetails = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-sm">
      <h1 className="cursor-pointer font-bold" onClick={toggleDetails}>
        Job Details
      </h1>
      {isOpen && (
        <p className="text-gray-500 w-full-important">
          {experience.jobDetails}
        </p>
      )}
    </div>
  );
};

export default JobDetails;
