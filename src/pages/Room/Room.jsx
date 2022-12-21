import React from "react";
import LevelCard from "../../components/Cards/LevelCard";
import NumberCard from "../../components/Cards/NumberCard";

const Room = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-wrap">
      <div className="flex gap-16">
        <NumberCard number={5} />
        <NumberCard number={31} />
        <NumberCard number={69} />
        <NumberCard number={100} />
      </div>
      <div className="flex gap-16">
        <LevelCard level={3} />
        <LevelCard level={7} />
        <LevelCard level={12} />
      </div>
    </div>
  );
};

export default Room;
