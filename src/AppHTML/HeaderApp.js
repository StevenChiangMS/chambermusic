import { Link } from "react-router-dom";

function HeaderApp() {

  return (
    <div className="headerApp">

      <Link to="/" className="headerLink">
      <img  src="logo.PNG" alt="logo" className="headerimg" />
      </Link>

      <Link to="/" className="headerLink">
        <h1 className="headerH1">樂享大師國際音樂營</h1>
      </Link>

    </div>
  );
};

export default HeaderApp;