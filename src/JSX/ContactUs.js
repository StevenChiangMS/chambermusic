import { useState } from "react";


function ContactUs() {
  const [ value, setValue ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reqText: "",
    isProcessing: true,
    reqCode: true,
  });
  const contactUsText = () => {
    if (value.firstName === "" || value.lastName === "" || value.email === "" || value.phone === "" || value.reqText === "") return
    fetch("/api/contactUs", {
      method: "POST",
      body: JSON.stringify({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        phone: value.phone,
        reqText: value.reqText,
        isProcessing: value.isProcessing,
        reqCode: value.reqCode,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then(alert("已送出"))
    .catch((err) => console.log("error:", err));
  };

  return (
    <div className="contactUs">
      <h2><i className="bi bi-telephone"></i> 聯絡我們</h2>
      {/* <form className="contactUsForm" action="/api/contactUs" method="post"> */}
      <form className="contactUsForm">

          <label><h4>姓名：</h4></label>
        <div>
          <input className="inputText firstName" type="text" name="firstName" placeholder="名字" required={true} onChange={
            (e) => setValue((prev) => {
              return {...prev, firstName: e.target.value}
          })}>

          </input>
          <input className="inputText" type="text" name="lastName" placeholder="姓氏" required={true} onChange={
            (e) => setValue((prev) => {
              return {...prev, lastName: e.target.value}
          })}>
            
          </input>
        </div>

          <label><h4>Email：</h4></label>
          <input className="inputText" type="email" name="email" placeholder="電子信箱" required={true} onChange={
            (e) => setValue((prev) => {
              return {...prev, email: e.target.value}
          })}>
          </input>


        <label><h4>電話：</h4></label>
        <input className="inputText" type="tel" name="phone" placeholder="電話" required={true} onChange={
          (e) => setValue((prev) => {
            return {...prev, phone: e.target.value}
         })}>
        </input>          



        <label><h4>內容：</h4></label>
        <textarea className="inputText reqText" name="reqText" placeholder="內容..." required={true} onChange={
          (e) => setValue((prev) => {
            return {...prev, reqText: e.target.value}
          })}>
        </textarea> 

        <div>
        <input type="hidden" name="reqCode" readOnly={true} value="reqCode"></input>
        </div>

        
        <input className="inputText" type="button" name="submit" value="提交" onClick={contactUsText}></input>
        
        
      </form>
    </div>
  );
};

export default ContactUs;