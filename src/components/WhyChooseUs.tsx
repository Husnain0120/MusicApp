"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"; // Assuming StickyScroll is correctly imported
import musicSchool from "../data/music_school.json"; // Correct path to the JSON file
// Assuming style.css is in the components directory

const WhyChooseUs = () => {
  const musicSchoolContent = musicSchool.musicSchoolClass; // Ensure key matches JSON structure
  return (
    <div>
      {" "}
      {/* Adding classes to hide scrollbars */}
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
