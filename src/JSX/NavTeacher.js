import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context";

function NavTeacher( { instrumentValues, clicked } ) {
  const teacher = useContext(UserContext);
  
  const instrument = instrumentValues.map((data, index) => {
    return (
    <li key={index} className="instrumentLi">
      <Link className="link instrument" onClick={(e) => clicked(e)}>{data}</Link>
      <ul className="navTeacherUl">
        {teacher.map((value, valueIndex) => {
          if (value.instrument === data) {
            return (
              <li key={valueIndex}>
                <Link to={`/${value._id}`} className="link navTeacher" onClick={(e) => clicked(e)}>{value.name}</Link>
              </li>
            );
          };
          return [];
        })}
      </ul>
    </li>
    );
  });

  return (
    <ul className="instrumentUl">
      {instrument}
    </ul>
  );
};

export default NavTeacher;