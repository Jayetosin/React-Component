import Picture from "./Picture";
import Menu from "./Menu";
import Logo from "./Logo"
import "../style/google.css"


function Header  ()  {
  return (
    <div className="app-header">
      <div className="app-header-menu">
        <Menu title={"Gmail"} /> 
        <Menu title={"Images"} />
           <Logo/>
        <Picture />
      </div>
    </div>
  );
};

export default Header;
