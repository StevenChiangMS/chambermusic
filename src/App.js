
// import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderApp from "./AppHTML/HeaderApp";
import NavApp from "./AppHTML/NavApp"; 
import MainApp from "./AppHTML/MainApp";
import FooterApp from "./AppHTML/FooterApp";


import React, { useState, useEffect } from "react";
import { ReactComponent as LoadingIcon } from "./images/loading.svg";
import { HashRouter } from "react-router-dom";
import { UserContext } from "./context";



function App() {
  const [ teacher, setTeacher ] = useState([]);
  const [ state, setState ] = useState({
    isLoading: true,
  });
  // GET teacher database-----------------
  useEffect(() => {
    if (state.isLoading) {
    fetch("/api/instrument")
    .then((res) => res.json())
    .then((data) => {
      setTeacher(data);
      setState({isLoading: false,});
    });
    };
  }, [state]);
  //----------------------------------

  let x = teacher;
  const instrumentCheck = [];  
  const instrumentValues = teacher
    .map((data) => {
      if (instrumentCheck.indexOf(data.instrument) === -1) {
        instrumentCheck.push(data.instrument);
        return data.instrument;
      }
      return false;
    })
    .filter((value) => value);
  
  

  return (
    <UserContext.Provider value={x}>
      <div className="test">
      {/* {console.log("Loading is ", state.isLoading)} */}
      <div className="redoIconContainer">
        {state.isLoading ? (<div className="teacherLoading"><div>師資資訊載入中</div><LoadingIcon className="redoIcon"></LoadingIcon></div>) : <></>}
      </div>
      {state.isLoading ? <></> : 
        <div className="routerContainer">
          <div className="mainContainer">

          
          <HashRouter>
            <HeaderApp />
            <NavApp instrumentValues={instrumentValues} />
            <MainApp instrumentValues={instrumentValues} />
          </HashRouter>
          </div>
        <div>
          <FooterApp />
          </div>
        </div>  
      }
      </div>
    </UserContext.Provider>

    
  );
}


export default App;
