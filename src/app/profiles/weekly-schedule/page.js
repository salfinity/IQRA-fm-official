"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";
import ScheduleItem from "./ScheduleItem";
import DropdownMenu from "./DropdownMenu";
import { scheduleData } from "/lib/data";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

export const metadata = {
  title: "Weekly Schedule | Iqra FM",
  description: "Here are some details about Our programmes on a weekly basis.",
};

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SchedulePage = () => {
  const [activeDay, setActiveDay] = useState(0);

  const handleDayChange = (dayIndex) => {
    setActiveDay(dayIndex);
  };

  // Use the ScheduleItemData interface to define the type of scheduleData

  return (
    <div className="container max-w-7xl mx-auto">
      <h1 className="font-serif md:text-4xl text-2xl text-center mt-2 mb-8">
        <span
          className="underline decoration-6 
       decoration-orange-400 "
        >
          WEEKLY
        </span>{" "}
        SCHEDULE
      </h1>
      <div className="hidden md:block">
        <Navigation
          days={daysOfWeek}
          activeDay={activeDay}
          onDayChange={handleDayChange}
        />
      </div>

      {/* Dropdown menu for small screens */}
      <DropdownMenu
        days={daysOfWeek}
        activeDay={activeDay}
        onDayChange={handleDayChange}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-8">
        {scheduleData
          .filter((item) => item.day === daysOfWeek[activeDay])
          .map((item, index) => (
            <ScheduleItem key={index} {...item} />
          ))}
      </div>
      <button className="border-4 dark:border-white border-black rounded-full px-4 py-2">
        <Link href="/">
          <p className="underline text-black dark:text-white cursor-pointer items-center flex pl-16 gap-2">
            <RiArrowGoBackFill className="text-bold" /> Back
          </p>
        </Link>
      </button>
    </div>
  );
};

export default SchedulePage;
