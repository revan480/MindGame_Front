import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useCurrentPath from "../../hooks/useCurrentPath";

const AuthLayout = () => {
  const currentPath = useCurrentPath();
  const navigate = useNavigate();

  useEffect(() => {
    currentPath == "auth" && navigate("login");
  }, [currentPath]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
