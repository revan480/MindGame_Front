const NumberCard = ({ number }) => {
  return (
    <div className={`card`}>
      <span className={`absolute font-bold top-2 left-2 text-3xl text-neutral-500`}>{number}</span>
      <span className={`absolute font-bold top-2 right-2 text-3xl text-neutral-500`}>{number}</span>
      <span
        className={`position-center font-Rubik text-9xl text-black`}
        style={{ filter: "drop-shadow(0 0 15px white) drop-shadow(0 0 30px red) drop-shadow(0 0 30px blue)" }}
      >
        {number}
      </span>
      <span className={`absolute font-bold bottom-2 left-2 text-3xl text-neutral-500 rotate-180`}>{number}</span>
      <span className={`absolute font-bold bottom-2 right-2 text-3xl text-neutral-500 rotate-180`}>{number}</span>
    </div>
  );
};

export default NumberCard;
