import { Link } from "react-router-dom";

function HeaderApp() {

  return (
    <div className="headerApp">
      {/* <a href="http://localhost:3000" className="headerLink">
        <img  src="logo.png" alt="logo" className="headerimg" />
      </a> */}
      
      {/* <a href="http://localhost:3000" className="headerLink">

        <h1 className="headerH1">樂享大師國際音樂營</h1>
      </a> */}

      <Link to="/" className="headerLink">
      <img  src="https://i.ibb.co/ZfFJDQg/logo.png" alt="logo" className="headerimg" />
      </Link>

      <Link to="/" className="headerLink">
        <h1 className="headerH1">樂享大師國際音樂營</h1>
      </Link>

    </div>
  );
};

export default HeaderApp;