import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";
import Room from "./Room";

const headerStyles = "text-5xl font-bold text-center mb-8";
const containerStyles = "p-8";

const Lobby = () => {
  const { register, handleSubmit, watch } = useForm();

  const createRoom = (data) => {};

  return (
    <div
      className={`w-full pt-24 min-h-screen grid grid-cols-[2fr,1fr] gap-8 grid-rows-[auto,1fr] bg-gradient-radial-at-top from-lightener-100 to-transparent`}
    >
      {/* title */}
      <h1 className={`col-span-2 font-Rubik text-7xl text-center py-8`}>Lobby</h1>

      {/* rooms */}
      <div className={`${containerStyles}`}>
        <h2 className={headerStyles}>Rooms</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((room, index) => (
            <Room key={index} room={room} />
          ))}
        </div>
      </div>

      {/* create */}
      <div className={`${containerStyles}`}>
        <h2 className={headerStyles}>Create a room</h2>
        <form onSubmit={handleSubmit(createRoom)} className="flex flex-col gap-4">
          {/* privacy checker */}
          <div className="flex items-center w-fit">
            <input type="checkbox" {...register("private")} id="private" className="cursor-pointer accent-blue-500" />
            <label htmlFor="private" className="font-medium cursor-pointer pl-2">
              Private room
            </label>
          </div>

          <InputField register={register} name="name" label="Room name" required />

          {watch("private") && (
            <InputField register={register} name="password" label="Room password" type="password" required />
          )}

          <Button>Create</Button>
        </form>
      </div>
    </div>
  );
};

export default Lobby;
