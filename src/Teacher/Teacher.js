import { useState, useContext } from "react";
import { UserContext } from "../context";

function Teacher( { num }) {
  const [ bigImg, setBigImg ] = useState(false);
  const teacher = useContext(UserContext);
  return (
    <div className="teacherCard">
      <div className="smImgDiv">
        <img 
          id='base64image' 
          className="base64image"
          src={'data:image/jpeg;base64,' + teacher[num].image}
          alt={teacher[num].name}
          onClick={() => {
            setBigImg(true);
        }}/>
      </div>
      {bigImg ? 
        <div className="bigImgDiv">
          <img 
            className="bigImg"
            src={'data:image/jpeg;base64,' + teacher[num].image}
            alt={teacher[num].name}
          />
          <div 
            className="close" 
            onClick={() => {
            setBigImg(false);
          }}>
            <i className="bi bi-x-lg"></i>
          </div>
        </div>
         : <></>
      }
      <div className="teacherMessage">
        <h5 className="teacherInstrument">{teacher[num].instrument}</h5>
        <h2 className="teacherName">{teacher[num].name}</h2>
        {teacher[num].name === "巫明俐" ? 
          <b className="teacherIntroduction">
            <i><div>法文報 La Voix Du Cantal ─</div>
            <div className="bDiv">〝完美的藝術家！令人讚嘆的演出！〞</div><br /><br />
            </i></b>
          :<></>}
        <p className="teacherIntroduction">{teacher[num].introduction}</p>
      </div>
    </div>
  );
};

export default Teacher;