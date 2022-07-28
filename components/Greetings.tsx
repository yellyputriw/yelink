import React, { useEffect, useState } from "react";

const Greetings = () => {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    let hours = new Date().getHours();

    if (hours < 12) {
      setGreeting("Ohayou Gozaimasu");
    } else if (hours >= 12 && hours <= 17) {
      setGreeting("Konnichiwa");
    } else {
      setGreeting("Konbanwa");
    }
  }, []);

  return (
    <div className="mt-3 flex flex-col items-center px-4 text-center">
      <h1 className="text-3xl font-['Patrick Hand'] mb-1">{greeting}</h1>
      <p className="text-[14px] font-['Rancho']">
        Hi! My name is Yelly. Self-taught Frontend Developer <br />
        Connect with me on Github or reach me out on the other links!
      </p>
    </div>
  );
};

export default Greetings;
