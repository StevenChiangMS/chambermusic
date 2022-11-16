import { Link } from "react-router-dom";
import { useState } from "react";
import NavTeacher from "../JSX/NavTeacher";


function NavApp( {instrumentValues} ) {
  const [ navCheck, setNavCheck ] = useState(false);

  const handleClick = (e) => {
    setNavCheck(!navCheck)
  }

  const clicked = (e) => {
    setNavCheck(false)
  }

  return (
    <nav className="navApp">
          <label htmlFor="burger" className="burger">☰</label>
          <input type="checkbox" id="burger" onClick={(e) => handleClick(e)} checked={navCheck} onChange={handleClick}></input>


          <ul>
    
            <li className="linkInstrument">
              <Link className="linkTop" onClick={(e) => clicked(e)}>師資簡介</Link>
              <NavTeacher instrumentValues={instrumentValues} clicked={clicked} />
            </li>
                
           
    
            <li>
                <Link to="/Movie" className="linkTop" onClick={(e) => clicked(e)}>音樂營影片</Link>
            </li>
    
            <li className="linkProgram">
              <Link className="linkTop" onClick={(e) => clicked(e)}>營隊規劃</Link>
              <ul>
                <li>
                  <Link to="/Schedule" className="link navProgram" onClick={(e) => clicked(e)}>課程安排</Link>
                </li>
                <li>
                  <Link to="/Plan" className="link navProgram" onClick={(e) => clicked(e)}>生活規劃</Link>
                </li>
              </ul>
            </li>
    
            <li>
              <Link to="/SignUpMethod" className="linkTop" onClick={(e) => clicked(e)}>報名辦法</Link>
            </li>
    
            <li className="linkSignUp">
              <Link className="linkTop" onClick={(e) => clicked(e)}>報名專區</Link>
              <ul>
                <li>
                  <Link to="/SignUp" className="link navSignUp" onClick={(e) => clicked(e)}>線上報名</Link>
                </li>
                <li>
                  <Link to="/InquireEdit" className="link navSignUp" onClick={(e) => clicked(e)}>查詢及修改</Link>
                </li>
              </ul>
            </li>
    
            <li>
              <Link to="/Download" className="linkTop" onClick={(e) => clicked(e)}>檔案下載</Link>
            </li>
    
            <li>
              <Link to="/ContactUs" className="linkTop" onClick={(e) => clicked(e)}>聯絡我們</Link>
            </li>
    
          </ul>

        </nav>
  );
};

export default NavApp;