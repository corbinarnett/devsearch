import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [dev, setDev] = useState("octocat");

  useEffect(() => {
    requestDev();
  }, []);

  async function requestDev() {
    const res = await fetch(`https://api.github.com/users/${dev}`);
    const json = await res.json();
    // console.log(json);
    setDev(json);
  }
  console.log(dev);
  return (
    <div className="flex container mx-auto justify-between md:max-w-[730px] md:max-h-[36px] mt-9 px-6 md:px-0">
      <input className="flex w-full relative h-16 rounded-lg shadow-xl" />
    </div>
  );
};

export default SearchParams;
