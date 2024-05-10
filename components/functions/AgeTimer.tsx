"use client";

import React, { useState, useEffect } from "react";
import { intervalToDuration } from "date-fns";

const birthDate = new Date(2002, 2, 27);

export default function AgeTimer() {
  const [age, setAge] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = intervalToDuration({
        start: birthDate,
        end: new Date(),
      });
      const formattedAge = `${duration.years || 0}y ${duration.months || 0}m ${
        duration.days || 0
      }d ${duration.hours || 0}h ${duration.minutes || 0}m ${
        duration.seconds || 0
      }s`;
      setAge(formattedAge);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return <span>{age}</span>;
}
