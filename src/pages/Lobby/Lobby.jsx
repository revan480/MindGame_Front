import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";
import User from "./User";

const Lobby = () => {
  const [activeContent, setActiveContent] = useState(0);

  const { register, handleSubmit } = useForm();

  return (
    <div className="">
      <h1 className="font-Rubik text-7xl text-center py-8">Lobby</h1>

      <div className="flex justify-center h-full w-full">
        <div className="flex flex-col w-[450px] gap-8 mt-16 justify-between items-center border border-lightener-200 rounded-xl hover:border-lightener-400 duration-300 px-4 py-8">
          {activeContent === 0 && (
            <>
              <h2 className="text-2xl font-bold">Hello, Rafig Hajili!</h2>

              <div className="grid grid-cols-2 gap-4 w-full">
                <Button onClick={() => setActiveContent(1)}>Join a room</Button>
                <Button onClick={() => setActiveContent(2)} className="bg-green-500">
                  Create a room
                </Button>
              </div>
            </>
          )}

          {activeContent === 1 && (
            <>
              <InputField label="Enter room ID" name="room" register={register} required />

              <div className="grid grid-cols-2 gap-4 w-full">
                <Button onClick={() => setActiveContent(0)} className="bg-red-500">
                  Leave
                </Button>
                <Button onClick={() => {}}>Join</Button>
              </div>
            </>
          )}

          {activeContent === 2 && (
            <>
              <div className="w-full">
                <User />
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <Button onClick={() => setActiveContent(0)} className="bg-red-500">
                  Leave
                </Button>
                <Button onClick={() => {}}>Start game</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Lobby;
