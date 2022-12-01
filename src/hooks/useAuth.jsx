import { useRecoilState } from "recoil";
import { authState } from "../recoil/Auth";

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);
  return { auth, setAuth };
};

export default useAuth;
