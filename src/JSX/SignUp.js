// import { useState, useRef } from "react";
import { useState, useEffect } from "react";
import TwCitySelector from 'tw-city-selector';
import payMoney from '../jsonData/payMoney';

const reqC = "2022";
let today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
today = yyyy + "-" + mm + "-" + dd;


function SignUp( { instrumentValues } ) {

  useEffect(() => {
    new TwCitySelector({
      el: '.city-selector-set',
      elCounty: '.county',
      elDistrict: '.district',
      elZipcode: '.zipcode',
    }); 
  }, []);
 
  const [ state, setState ] = useState({
    gender: true,
    genderMale: true,
    genderFemale: false,
    addressCounty: "",
    payTeam: [
      [ "鋼琴組請勾選此選項並跳至下一欄", "樂器組請勾選此選項並跳至下一欄" ],
      [ "報名費、活動指導費" + (payMoney.signUp + payMoney.instrument).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"), "報名費、活動指導費" + (payMoney.signUp + payMoney.piano).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,") ],
      "一堂:指定教授費" + payMoney.appoint.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,") + "(一堂，50分鐘)",
      "二堂:指定教授費" + (payMoney.appoint * 2).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,") + "(二堂，各50分鐘)",
      "早鳥優惠或五人團體優惠(二擇一)-" + payMoney.bonus.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"),
      "交通費-去" + payMoney.car.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"),
      "交通費-回" + payMoney.car.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"),
      "家長住宿，電話洽詢02-33221428",
    ],
    payCheckbox: [
      [ false, false],
      [ false, false],
      [ false, false],
      [ false, false],
      [ false, false],
      [ false, false],
      [ false, false],
      [ false, false],
    ],
    payRender: false,
    massageCheckbox: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    massageRender: false,
    massageText: [
      "樂享大師國際音樂營－官網",
      "樂享大師國際音樂營－FB",
      "台灣室內樂藝術推廣協會－FB",
      "教授－FB",
      "海報文宣",
      "朋友同學推薦",
      "教授推薦",
      "以前參加過",
    ],
    agreeCheckbox: false,
  });

  const gender = (e) => {
      setState((prev) => {
        return { 
          ...prev, 
          gender: !state.gender,
        };
      });
  };

  const [ value, setValue ] = useState({
    name: "",
    email: "",
    birthday: "",
    addressCounty: "",
    addressDistrict: "",
    zipCode: "",
    address: "",
    id: "",
    roman: "",
    school: "",
    grade: "",
    graded: "",
    phone: "",
    fatherName: "",
    fatherPhone: "",
    matherName: "",
    matherPhone: "",
    studentPhone: "",
    introducer: "",
    instrument: "",
    experience: "",
    track: "",
    specify: "",
    friend1: "",
    friend2: "",
    friend3: "",
    diseaseVerify: "",
    disease: "",
    food: "",
    height: "",
    weight: "",
    TShirtSize: "",
    signUpReqCode: reqC,
  });


  const signUpText = () => {
    // if (value.name === "" || value.gender === "" || value.email === "" || 
    //     value.birthday === "" || (element[0].value === "" && value.address === "") || 
    //     value.id === "" || value.roman === "" || value.school === "" || 
    //     value.graded === "" || value.phone === "" || value.instrument === "" || 
    //     value.experience === "" || state.payCheckbox.map((data) => data[0]) === "" || state.payCheckbox.map((data) => data[1]) || value.diseaseVerify === "" || value.food === "" || value.height === "" ||  value.weight === "" || 
    //     value.TShirtSize === "" || value.massageCheckbox === "" || value.agreeCheckbox === ""
    //    ) return []
    if (!state.agreeCheckbox) return alert("活動同意書尚未勾選");

    fetch("/api/signUp", {
      method: "POST",
      body: JSON.stringify({
        name: value.name,
        gender: state.gender ? "男" : "女",
        email: value.email,
        birthday: value.birthday,
        address: value.address,
        addressCounty: value.addressCounty,
        addressDistrict: value.addressDistrict,
        addressZip: element[0].value,
        id: value.id,
        roman: value.roman,
        school: value.school,
        grade: value.grade,
        graded: value.graded,
        phone: value.phone,
        fatherName: value.fatherName,
        fatherPhone: value.fatherPhone,
        matherName: value.matherName,
        matherPhone: value.matherPhone,
        studentPhone: value.studentPhone,
        introducer: value.introducer,
        instrument: value.instrument,
        experience: value.experience,
        track: value.track,
        specify: value.specify,
        payCheckbox: state.payCheckbox,
        friend1: value.friend1,
        friend2: value.friend2,
        friend3: value.friend3,
        diseaseVerify: value.diseaseVerify,
        disease: value.disease,
        food: value.food,
        height: value.height,
        weight: value.weight,
        TShirtSize: value.TShirtSize,
        massageCheckbox: state.massageCheckbox,
        agree: state.agreeCheckbox,
        reqCode: reqElement[0].value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {return res.json()})
    .then((data) => alert(data))
    .catch((err) => console.log("error:", err));
  }
  const pay = (e) => {
    setState((prev) => {
      return { 
        ...prev, 
        payRender: !state.payRender
      };
    });
    if (e.target.id[e.target.id.length - 1] === "0") {
      if (e.target.id[e.target.id.length - 3] === "1") {
        return state.payCheckbox[0][0] = !state.payCheckbox[0][0];
      }
      return state.payCheckbox[0][1] = !state.payCheckbox[0][1];
    }else if (e.target.id[e.target.id.length - 3] === "1") {
      return state.payCheckbox[e.target.id[e.target.id.length - 1]][0] = !state.payCheckbox[e.target.id[e.target.id.length - 1]][0];
    }
    return state.payCheckbox[e.target.id[e.target.id.length - 1]][1] = !state.payCheckbox[e.target.id[e.target.id.length - 1]][1];
  };

  const massage = (e) => {
    setState((prev) => {
      return { 
        ...prev, 
        massageRender: !state.massageRender
      };
    });
    return state.massageCheckbox[e.target.id] = !state.massageCheckbox[e.target.id];
  };

  const agree = () => {
    setState((prev) => {
      return { 
        ...prev, 
        agreeCheckbox: !state.agreeCheckbox 
      };
    });
  };

  const instrument = instrumentValues.map((data, index) => <option key={"instrument" + index} value={data}>{data}</option>)

  // const addressDiv = (<div role="tw-city-selector" data-has-zipcode data-hidden-zipcode 
  
  // onChange={(e) => {
  //   if (e.target.name === "county") {
  //     // console.log("if county");
  //     setValue((prev) => {
  //       return {...prev, addressCounty: e.target.value}
  //     })
  //   } else if (e.target.name === "district") {
  //     // console.log("else district");
  //     setValue((prev) => {
  //       return {...prev, addressDistrict: e.target.value}
  //     })
  //   };
  // }} />) 

  const addressDiv = (
    
    <div className="city-selector-set">
        <select className="county changeSelect addressSelect" 
        onChange={(e) => {
            setValue((prev) => {
              return {...prev, addressCounty: e.target.value}
            })
          }}
        ></select>

        <select className="district changeSelect addressSelect" 
        onChange={(e) => {
            setValue((prev) => {
              return {...prev, addressDistrict: e.target.value}
            })
          }}
        ></select>

        <input className="zipcode changeSelect addressSelect" type="text" size="7" maxLength="3" readOnly placeholder="郵遞區號" />

    </div>
  )
  let element= document.getElementsByClassName('zipcode');
  const reqElement= document.getElementsByClassName('reqCode');

  let level = [ "一年級", "二年級", "三年級", "四年級", "五年級", "六年級" ];
  const gradeMap = level.map((data, index) => {
    if (value.grade === "國小") {
      return <option key={index} name="graded" value={data}>{data}</option>
    }else if ((value.grade === "國中" && index < 3) || (value.grade === "高中" && index < 3)) {
      return <option key={index} name="graded" value={data}>{data}</option>
    }else if ((value.grade === "大學" && index < 4 )|| (value.grade === "高中" && index < 3)) {
      return <option key={index} name="graded" value={data}>{data}</option>
    }else return null
  });
  
  const payTeamInstrument = state.payTeam.map((data, index) => {
    return (
      index <= 1 ? 
    <div key={index} className="checkboxDiv paysize">
      <input 
        type="checkbox" 
        id={"pay1-" + index}
        name={"pay1-" + (index + 1)}
        checked = {state.payCheckbox[index][0]}
        onChange = {(e) => pay(e)}
      />
      <label htmlFor={"pay1-" + index}>{data[0]}</label>
    </div>
    :
    <div key={index} className="checkboxDiv paysize">
      <input 
        type="checkbox" 
        id={"pay1-" + index}
        name={"pay1-" + (index + 1)}
        checked = {state.payCheckbox[index][0]}
        onChange = {(e) => pay(e)}
      />
      <label htmlFor={"pay1-" + index}>{data}</label>
    </div>
  )});

  const payTeamPiano = state.payTeam.map((data, index) => {
    return (
      index <= 1 ?  
      <div key={index} className="checkboxDiv paysize">
      <input 
        type="checkbox" 
        id={"pay2-" + index}
        name={"pay2-" + (index + 1)}
        checked = {state.payCheckbox[index][1]}
        onChange = {(e) => pay(e)}
      />
      <label htmlFor={"pay2-" + index}>{data[1]}</label>
    </div>
    :
    <div key={index} className="checkboxDiv paysize">
      <input 
        type="checkbox" 
        id={"pay2-" + index}
        name={"pay2-" + (index + 1)}
        checked = {state.payCheckbox[index][1]}
        onChange = {(e) => pay(e)}
      />
      <label htmlFor={"pay2-" + index}>{data}</label>
    </div>
  )});

  const diseaseTureFalse = value.diseaseVerify === "是" ? 
      <div>
        <label><h4><p>*</p> 若有特殊疾病，請詳細說明：</h4></label>
        <textarea 
          className="inputText reqText" 
          name="disease" 
          required={true}
          onChange={(e) => setValue((prev) => {
            return {...prev, disease: e.target.value}
        })} />
      </div> : <></>
  
  const massageJsx = state.massageText.map((data, index) => {
    return (
    <div key={index} className="paysize">
      <input 
        type="checkbox" 
        id={index}
        name="massage"
        checked = {state.massageCheckbox[index]}
        onChange = {(e) => massage(e)}
      />
      <label htmlFor={index}>{data}</label>
    </div>
  )});

  return (
    <div className="signUp">
      <h2><i className="bi bi-person-plus"></i> 線上報名系統</h2>
      <form className="signUpForm">

        <label><h4><p>*</p> 姓名：</h4></label>
        <div>
          <input className="inputText" type="text" name="name" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, name: e.target.value}
          })} />
        </div>
        
        <label><h4><p>*</p> 性別：</h4></label>
        <div className="gender">
          <input 
            type="radio" 
            id="Male" 
            name="gender" 
            value="男" 
            required={true} 
            onChange={gender} 
            checked={state.gender} 
          />
          <label className="gender" htmlFor="Male">男</label>
          <input 
            type="radio" 
            id="Female" 
            name="gender" 
            value="女" 
            required={true} 
            onChange={(e) => gender(e)} 
            checked={!state.gender} 
          />
          <label className="gender" htmlFor="Female">女</label>
        </div>

        <label><h4><p>*</p> Email：</h4></label>
        <input className="inputText" type="email" name="email" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, email: e.target.value}
          })} />

        <label><h4><p>*</p> 生日：</h4></label>
        <input className="inputText" type="date" name="birthday" max={today} required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, birthday: e.target.value}
          })} />

        <label><h4><p>*</p> 地址：</h4></label>
        
          <div className="inputText address">
            {addressDiv}
            <input className="inputText" type="text" name="address" required={true} 
            value={value.address}
            onChange={(e) => setValue((prev) => {
              return {...prev, address: e.target.value}
          })} />
          </div>
          

        <label><h4><p>*</p> 身分證字號：</h4></label>
        <input className="inputText"  type="text" name="id" maxLength="10" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, id: e.target.value}
          })} />

        <label><h4><p>*</p> 護照拼音：</h4></label>
        <input className="inputText"  type="text" name="roman" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, roman: e.target.value}
          })} />

        <label><h4><p>*</p> 就讀學校：</h4></label>
        <div className="remark">請填寫升上去的學校，若未確定，請填寫舊有學校</div>
        <input className="inputText"  type="text" name="school" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, school: e.target.value}
          })} />

        <label><h4><p>*</p> 年級：</h4></label>
        {/* <div className="remark">請填寫XX年級升XX年級，填寫範例:小六升國一</div> */}
        <div className="gradeDiv">
          <select 
                className="changeSelect changeGrade"
                name="grade"
                required={true} 
                onChange={(e) => {
                  
                  setValue((prev) => {
                    return {...prev, grade: e.target.value}
                  })
                }}>
            <option name="grade" value="">請選擇</option>
            <option name="grade" value="國小">國小</option>
            <option name="grade" value="國中">國中</option>
            <option name="grade" value="高中">高中</option>
            <option name="grade" value="大學">大學</option>
          </select>
          <select 
                className="changeSelect changeGrade"
                name="graded"
                required={true} 
                onChange={(e) => {
                  
                  setValue((prev) => {
                    return {...prev, graded: e.target.value}
                  })
                }}>
            <option name="graded" value="">請選擇</option>
            {gradeMap}
          </select>
        </div>

        {/* <input className="inputText"  type="text" name="grade" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, grade: e.target.value}
          })} /> */}

        <label><h4><p>*</p> 家裡電話：</h4></label>
        <input className="inputText" type="tel" name="phone" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, phone: e.target.value}
          })} />

        <label><h4>父親姓名：</h4></label>
        <input className="inputText" type="text" name="fatherName" 
          onChange={(e) => setValue((prev) => {
            return {...prev, fatherName: e.target.value}
          })} />

        <label><h4>父親手機：</h4></label>
        <input className="inputText" type="tel" name="fatherPhone" 
          onChange={(e) => setValue((prev) => {
            return {...prev, fatherPhone: e.target.value}
          })} />

        <label><h4>母親姓名：</h4></label>
        <input className="inputText" type="text" name="matherName" 
          onChange={(e) => setValue((prev) => {
            return {...prev, matherName: e.target.value}
          })} />

        <label><h4>母親手機：</h4></label>
        <input className="inputText" type="tel" name="matherPhone" 
          onChange={(e) => setValue((prev) => {
            return {...prev, matherPhone: e.target.value}
          })} />

        <label><h4>學生手機：</h4></label>
        <input className="inputText" type="tel" name="studentPhone" 
          onChange={(e) => setValue((prev) => {
            return {...prev, studentPhone: e.target.value}
          })} />

        <label><h4>介紹人：</h4></label>
        <input className="inputText" type="text" name="introducer" 
          onChange={(e) => setValue((prev) => {
            return {...prev, introducer: e.target.value}
          })} />

        <label><h4><p>*</p> 參加項目：</h4></label>
          <div className="inputText instrument ">
            <select 
              className="changeSelect"
              name="instrument"
              required={true} 
              onChange={(e) => {
                setValue((prev) => {
                  return {...prev, instrument: e.target.value}
                })
              }}>
              <option value="">請選擇樂器</option>
              {instrument}
            </select>
          </div>

        <label><h4><p>*</p> 學習經驗：</h4></label>
        <div className="remark">年</div>
        <input className="inputText"  type="text" name="experience" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, experience: e.target.value}
          })} />

        <label><h4><p>*</p> 目前學的曲目：</h4></label>
        <div className="remark">請列舉兩首</div>
        <input className="inputText"  type="text" name="track" required={true} 
          onChange={(e) => setValue((prev) => {
            return {...prev, track: e.target.value}
          })} />

        <label><h4>指定個別課教授：</h4></label>
        <div className="remark">至多兩堂課。名額限制，指定教授前，請先來電洽詢02-33221428</div>
        <input className="inputText"  type="text" name="specify" 
          onChange={(e) => setValue((prev) => {
            return {...prev, specify: e.target.value}
          })} />


        <label><h4><p>*</p> 繳費項目-樂器組：</h4></label>
        {payTeamInstrument}
        
        <label><h4><p>*</p> 繳費項目-鋼琴組：</h4></label>
        {payTeamPiano}

        <label><h4>我想和好朋友住：</h4></label>
        <div className="remark">鋼琴組由主辦單位安排</div>
        <div className="first">
          1.
          <input type="text" name="friend1" 
          className="inputText changeFirend"
          onChange={(e) => setValue((prev) => {
            return {...prev, friend1: e.target.value}
          })} />
        </div>
          2.
          <input type="text" name="friend2" 
          className="inputText changeFirend"
          onChange={(e) => setValue((prev) => {
            return {...prev, friend2: e.target.value}
          })} />
          3.
          <input type="text" name="friend3" 
          className="inputText changeFirend"
          onChange={(e) => setValue((prev) => {
            return {...prev, friend3: e.target.value}
          })} />

        <label><h4><p>*</p> 是否有過敏或藥物治療中：</h4></label>
        <div className="remark">若填是，請於下方詳細說明</div>
        <div className="inputText disease" name="diseaseVerify">
            <select 
              className="changeSelect"
              required={true} 
              name="diseaseVerify" 
              onChange={(e) => {
                setValue((prev) => {
                  return {...prev, diseaseVerify: e.target.value}
                })
              }}>
              <option value="">請選擇</option>
              <option name="diseaseVerify" value="是">是</option>
              <option name="diseaseVerify" value="否">否</option>
            </select>
        </div>
        {diseaseTureFalse}
        

        <label><h4><p>*</p> 飲食：</h4></label>
        <div className="inputText food" name="food">
            <select 
              className="changeSelect"
              required={true} 
              name="food" 
              onChange={(e) => {
                setValue((prev) => {
                  return {...prev, food: e.target.value}
                })
              }}>
              <option value="">請選擇</option>
              <option value="一般">一般</option>
              <option value="不吃牛肉">不吃牛肉</option>
              <option value="不吃海鮮">不吃海鮮</option>
              <option value="全素食">全素食</option>
              <option value="蛋奶素">蛋奶素</option>
            </select>
        </div>


        <label><h4><p>*</p> 身高：</h4></label>
        <input className="inputText"  type="text" name="height" 
          onChange={(e) => setValue((prev) => {
            return {...prev, height: e.target.value}
          })} />

        <label><h4><p>*</p> 體重：</h4></label>
        <input className="inputText"  type="text" name="weight" 
          onChange={(e) => setValue((prev) => {
            return {...prev, weight: e.target.value}
          })} />


        <label><h4><p>*</p> 衣服尺寸：</h4></label>
        <div className="inputText T-ShirtSize" name="T-ShirtSize">
            <select 
              className="changeSelect"
              required={true} 
              name="T-ShirtSize" 
              onChange={(e) => {
                setValue((prev) => {
                  return {...prev, TShirtSize: e.target.value}
                })
              }}>
              <option value="">請選擇</option>
              <option name="T-ShirtSize" value="S">S</option>
              <option name="T-ShirtSize" value="M">M</option>
              <option name="T-ShirtSize" value="L">L</option>
              <option name="T-ShirtSize" value="XL">XL</option>
              <option name="T-ShirtSize" value="2L">2L</option>
            </select>
        </div>

        <label><h4><p>*</p> 如何得知：</h4></label>
        {massageJsx}

        <label><h4><p>*</p> 活動同意書：</h4></label>
        <div className="agree">
          <input 
            type="checkbox" 
            id="agree" 
            name="agree" 
            required={true}
            checked = {state.agreeCheckbox}
            onChange = {agree}
          />
          <label className="remark last" htmlFor="agree">
            本人已充分了解此報名表所有內容，並於參加期間遵守營隊規則；若需緊急醫療救急時，我同意主辦單位採取適當的措施，同時健康資料及特殊需求等資料之記載均屬實。
          </label>
          
        </div>

        <div>
        <input className="reqCode" type="hidden" name="reqCode" readOnly={true} value={reqC}></input>
        </div>

        <div className="submitDiv">
          <input className="inputText" type="button" name="submit" value="提交" onClick={signUpText} />
          {/* <input className="inputText" type="submit" name="submit" value="提交" onClick={signUpText} /> */}
        </div>
        

      </form>
    </div>
  );
};

export default SignUp;