import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context";
import Home from "../JSX/Home";
import Teacher from "../Teacher/Teacher";
import Movie from "../JSX/Movie";
import Schedule from "../JSX/Schedule";
import Plan from "../JSX/Plan";
import SignUpMethod from "../JSX/SignUpMethod";
import SignUp from "../JSX/SignUp";
import InquireEdit from "../JSX/InquireEdit";
import Download from "../JSX/Download";
import ContactUs from "../JSX/ContactUs";

function MainApp( {instrumentValues} ) {
  const teacher = useContext(UserContext);
  const teacherName = teacher.map((data) => data._id);
  const teacheRoute = teacherName.map((data, index) => 
      <Route key={index} path={`/${data}`} element={<Teacher num={index} />} />
    );
    
  return (
    <div className="mainApp">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {teacheRoute}
        <Route path="/movie" element={<Movie />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/SignUpMethod" element={<SignUpMethod />} />
        <Route path="/SignUp" element={<SignUp instrumentValues={instrumentValues} />} />
        <Route path="/InquireEdit" element={<InquireEdit instrumentValues={instrumentValues} />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default MainApp;