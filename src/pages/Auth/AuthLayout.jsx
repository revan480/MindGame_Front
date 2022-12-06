import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useCurrentPath from "../../hooks/useCurrentPath";
import wallpaper from "../../assets/images/wallpaper.png";

const AuthLayout = () => {
  const currentPath = useCurrentPath();
  const navigate = useNavigate();

  useEffect(() => {
    currentPath == "auth" && navigate("login");
  }, [currentPath]);

  return (
    <div className="w-full h-screen bg-gradient-radial-at-top from-lightener-100 to-transparent">
      {currentPath[1] === "login" || currentPath[1] === "register" ? (
        <div className="w-full h-full flex">
          <div className="w-3/5 relative bg-cover bg-center" style={{ backgroundImage: `url(${wallpaper})` }}>
            <h1 className="font-MontHeavy text-5xl uppercase absolute left-8 bottom-8">
              Mindgame <br /> will blow <br /> your mind
            </h1>
          </div>

          <div className="w-2/5">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="w-full h-full p-4 flex items-center justify-center">
          <div className="border-4 border-lightener-400 p-8 rounded-3xl w-[375px]">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
