import MGLogo from "../../components/MGLogo";
import ButtonRounded from "../../components/UI/ButtonRounded";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <MGLogo />

        <div className="flex gap-3 items-center">
          <ButtonRounded outlined>My account</ButtonRounded>
          <ButtonRounded>Log out</ButtonRounded>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
