import { useState } from "react";
import { useLayoutEffect } from "react";
import stroke from "../../assets/details/underline-stroke.png";
import rabbit from "../../assets/images/rabbit.png";

const LevelCard = ({ level }) => {
  const [difficulty, setDifficulty] = useState(0);

  useLayoutEffect(() => {
    if (level > 4 && level <= 8) {
      setDifficulty(1);
    } else if (level > 8) {
      setDifficulty(2);
    } else {
      setDifficulty(0);
    }
  }, []);

  return (
    <div className={`card`}>
      {/* title */}
      <div className={`absolute w-full top-2 flex flex-col`}>
        <span
          className={`font-Rubik text-3xl text-center ${
            difficulty === 1 ? "text-orange-700" : difficulty === 2 ? "text-sky-700" : "text-yellow-500"
          }`}
          style={{}}
        >
          Level {level}
        </span>
        <span
          className={`w-2/3 mx-auto h-6 -translate-y-2 bg-contain bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${stroke})`,
            filter:
              difficulty === 2
                ? "invert(21%) sepia(100%) saturate(2020%) hue-rotate(183deg) brightness(96%) contrast(98%)"
                : difficulty === 1
                ? "invert(24%) sepia(34%) saturate(5196%) hue-rotate(8deg) brightness(103%) contrast(91%)"
                : "invert(73%) sepia(14%) saturate(3732%) hue-rotate(4deg) brightness(99%) contrast(94%)",
          }}
        />
      </div>

      {/* box */}
      <div
        className={`position-center w-[95%] h-[140px] mt-2 flex items-center justify-center rounded bg-gradient-to-b ${
          difficulty === 1
            ? "from-orange-700 to-sky-900"
            : difficulty === 2
            ? "from-sky-700 to-yellow-900"
            : "from-yellow-500 to-orange-900"
        }`}
      >
        <img src={rabbit} alt="rabbit" className="h-[90%] drop-shadow-[0_0_10px_white]" />
      </div>

      {/* text */}
      <p
        className={`absolute bottom-2 left-2 text-sm font-light ${
          difficulty === 1 ? "text-orange-700" : difficulty === 2 ? "text-sky-700" : "text-yellow-500"
        }`}
      >
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default LevelCard;
