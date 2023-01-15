import { useState } from "react";
import MGLogo from "./MGLogo";
import ProfileModal from "./ProfileModal";
import ButtonRounded from "./UI/ButtonRounded";

const NavbarAfterLogin = () => {
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <MGLogo />

          <div className="flex gap-3 items-center">
            <ButtonRounded outlined onClick={() => setIsProfileModalVisible(true)}>
              My profile
            </ButtonRounded>
            <ButtonRounded>Log out</ButtonRounded>
          </div>
        </div>
      </nav>

      <ProfileModal isVisible={isProfileModalVisible} setIsVisible={setIsProfileModalVisible} />
    </>
  );
};

export default NavbarAfterLogin;
