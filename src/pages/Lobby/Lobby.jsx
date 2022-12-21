import React from "react";

const Lobby = () => {
  return (
    <div className={`w-full min-h-screen grid grid-cols-[3fr,1fr]`}>
      {/* title */}
      <h1 className={``}>Lobby</h1>

      <div className={`bg-red-500`}></div>
      <div className={`bg-green-500`}></div>
    </div>
  );
};

export default Lobby;
