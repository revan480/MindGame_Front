import React from "react";

const HowToPlay = () => {
  return (
    <section id="howtoplay" className="px-64 py-32">
      <h1 className="text-center text-5xl font-medium mb-8">How to play</h1>

      <div className="grid grid-cols-2 gap-8">
        <Card
          title="asdasd"
          text="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptate nobis? Tempore esse saepe
          tenetur dolore eum eveniet, dolor necessitatibus labore sit ducimus, atque rem ullam sunt omnis vero quasi
          laborum, eligendi quam dicta? Earum reprehenderit at totam sequi iste?"
        />

        <Card
          title="asdasd"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptate nobis?"
        />

        <Card
          title="asdasd"
          text="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptate nobis? Tempore esse saepe
          tenetur dolore eum eveniet, dolor necessitatibus labore sit ducimus, atque rem ullam sunt omnis vero quasi
          laborum, eligendi quam dicta? Earum reprehenderit at totam sequi iste?"
        />

        <Card
          title="asdasd"
          text="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptate nobis? Tempore esse saepe
          tenetur dolore eum eveniet, dolor necessitatibus labore sit ducimus, atque rem ullam sunt omnis vero quasi
          laborum, eligendi quam dicta? Earum reprehenderit at totam sequi iste?"
        />
      </div>
    </section>
  );
};

export default HowToPlay;

const Card = ({ title, text }) => {
  return (
    <div className="bg-lightener-200 rounded-3xl p-12 hover:bg-lightener-250 duration-300">
      <h2 className="text-3xl font-medium mb-2">{title}</h2>
      <p>{text}</p>
    </div>
  );
};
