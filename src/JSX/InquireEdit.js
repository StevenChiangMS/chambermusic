import { useState } from "react";
import TwCitySelector from 'tw-city-selector';
import payMoney from '../jsonData/payMoney';

function InquireEdit( { instrumentValues } ) {

  let today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  today = yyyy + "-" + mm + "-" + dd;
  
  const [ id, setId ] = useState("");
  const [ state, setState ] = useState("");
  const [ isWriting, setIsWriting ] = useState(true);
  const [ inquire, setInquire ] = useState({
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
  });
  const inquireText = async () => {
    if (id === "" || id.length < 10) {
      return alert("身分證錯誤")
    };
    fetch("/api/signUp/inquire/" + id)
    .then((res) => {return res.json()})
    .then((data) => {
      if (data === "無資料") return alert(data);
      alert("已送出");
      setState(data[0]);
      setInquire((prev) => {
        return {
          ...prev, 
          payCheckbox: data[0].payCheckbox, 
          massageCheckbox: data[0].massageCheckbox}
      });
      new TwCitySelector({
        el: '.city-selector-set-has-value',
        elCounty: '.county',
        elDistrict: '.district',
        elZipcode: '.zipcode',
      }); 
      
    })
    .catch((err) => console.log("error:", err));
  };

  const outputText = async () => {

    state.addressZip = element[0].value;

    fetch("/api/update/" + id, {
      method: "PUT",
      body: JSON.stringify({
        state: state
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {return res.json()})
    .then((data) => {
      alert("已送出");
    })
    .catch((err) => console.log("error:", err));
  };

  const idText = (e) => {
    setId(e.target.value)
  }

  const reReadOnly = (e) => {
    setIsWriting(!isWriting);
  }

  const pay = (e) => {
    setInquire((prev) => {
      return { 
        ...prev, 
        payRender: !inquire.payRender
      };
    });

    setState((prev) => {
      return { 
        ...prev, 
        payCheckbox: inquire.payCheckbox
      };
    });

    if (e.target.id[e.target.id.length - 1] === "0") {
      if (e.target.id[e.target.id.length - 3] === "1") {
        inquire.payCheckbox[0][0] = !inquire.payCheckbox[0][0];
      }else {
        inquire.payCheckbox[0][1] = !inquire.payCheckbox[0][1];
      }
    }else if (e.target.id[e.target.id.length - 3] === "1") {
      inquire.payCheckbox[e.target.id[e.target.id.length - 1]][0] = !inquire.payCheckbox[e.target.id[e.target.id.length - 1]][0];
    }else {
      inquire.payCheckbox[e.target.id[e.target.id.length - 1]][1] = !inquire.payCheckbox[e.target.id[e.target.id.length - 1]][1];
    }

  };

  const massage = (e) => {
    setInquire((prev) => {
      return { 
        ...prev, 
        massageRender: !inquire.massageRender
      };
    });
    setState((prev) => {
      return { 
        ...prev, 
        massageCheckbox: inquire.massageCheckbox
      };
    });
    return inquire.massageCheckbox[e.target.id] = !inquire.massageCheckbox[e.target.id];
  };

  const instrument = instrumentValues.map((data, index) => <option key={"instrument" + index} value={data} >{data}</option>)

  let element= document.getElementsByClassName('zipcode');
  
  const addressDiv = (
    <div className="city-selector-set-has-value">
        <select 
          data-value={state.addressCounty}
          className="county changeSelect addressSelect"
          disabled={isWriting} 
          onChange={(e) => {
            setState((prev) => {
              return {...prev, addressCounty: e.target.value}
            })
          }}
        ></select>
        <select 
          data-value={state.addressDistrict}
          className="district changeSelect addressSelect" 
          disabled={isWriting} 
          
          onChange={(e) => {
          setState((prev) => {
              return {...prev, addressDistrict: e.target.value}
            })
          }}
        ></select>

        <input 
          disabled={isWriting} 
          className="zipcode changeSelect addressSelect" 
          type="text" size="7" 
          maxLength="3"
          readOnly 
          placeholder="郵遞區號" />

    </div>
  )

  let level = [ "一年級", "二年級", "三年級", "四年級", "五年級", "六年級" ];
  const gradeMap = level.map((data, index) => {
    
    if (state.grade === "國小") {
      return <option key={"國小" + index} name="graded" value={data}>{data}</option>
    }else if ((state.grade === "國中" && index < 3) || (state.grade === "高中" && index < 3)) {
      if ((state.grade === "國中" && index < 3)) {
        return <option key={"國中" + index} name="graded" value={data}>{data}</option>
      }
      return <option key={"高中" + index} name="graded" value={data}>{data}</option>
    }else if ((state.grade === "大學" && index < 4 )|| (state.grade === "高中" && index < 3)) {
      return <option key={"大學" + index} name="graded" value={data}>{data}</option>
    }else return null
  });

  const payTeamInstrument = inquire.payTeam.map((data, index) => {
    return (
      index <= 1 ? 
        <div key={index} className="checkboxDiv changepayTeam">
          <input 
            type="checkbox" 
            id={"pay1-" + index}
            name={"pay1-" + (index + 1)}
            disabled={isWriting}
            checked = {inquire.payCheckbox[index][0]}
            onChange = {(e) => pay(e)}
          />
          <label htmlFor={"pay1-" + index}>{data[0]}</label>
        </div>
      :
        <div key={index} className="checkboxDiv changepayTeam">
          <input 
            type="checkbox" 
            id={"pay1-" + index}
            name={"pay1-" + (index + 1)}
            disabled={isWriting} 
            checked = {inquire.payCheckbox[index][0]}
            onChange = {(e) => pay(e)}
          />
          <label htmlFor={"pay1-" + index}>{data}</label>
        </div>
  )});
  
  const payTeamPiano = inquire.payTeam.map((data, index) => {
    return (
       index <= 1 ?  
      <div key={index} className="checkboxDiv changepayTeam">
      <input 
        type="checkbox" 
        id={"pay2-" + index}
        name={"pay2-" + (index + 1)}
        disabled={isWriting} 
        checked = {inquire.payCheckbox[index][1]}
        onChange = {(e) => pay(e)}
      />
      <label htmlFor={"pay2-" + index}>{data[1]}</label>
    </div>
    :
    <div key={index} className="checkboxDiv changepayTeam">
      <input 
        type="checkbox" 
        id={"pay2-" + index}
        name={"pay2-" + (index + 1)}
        disabled={isWriting} 
        checked = {inquire.payCheckbox[index][1]}
        onChange = {(e) => pay(e)}
      />
      <label htmlFor={"pay2-" + index}>{data}</label>
    </div>
  )});

  const diseaseTureFalse = state.diseaseVerify === "是" ? 
  <div>
    若有特殊疾病，請詳細說明：
    <textarea 
      value={state.disease}
      className="inputText reqText" 
      name="disease" 
      required={true}
      disabled={isWriting} 
      onChange={(e) => setState((prev) => {
        return {...prev, disease: e.target.value}
    })} />
  </div> : <></>

const massageJsx = inquire.massageText.map((data, index) => {
  return (
  <div key={index} className="checkboxDiv changepayTeam">
    <input 
      type="checkbox" 
      id={index}
      name="massage"
      disabled={isWriting} 
      checked = {inquire.massageCheckbox[index]}
      onChange = {(e) => massage(e)}
    />
    <label htmlFor={index} required={true}>{data}</label>
  </div>
)});


  return (
    <div className="inquireEdit">
      <h2><i className="bi bi-search"></i> 查詢報名資料</h2>
      <form className="inquireEditForm">

      <div className="checkDB">
        <label><h4>身分證字號： </h4></label>
        <input type="text" name="id" maxLength="10" size="10" value={id} onChange={(e) => idText(e)} required={true} />
      </div>


      <input className="inputText" type="button" name="submit" value="查詢" onClick={inquireText} />
      {
        state === "" ?
        <div></div>
        :
        // inquireForm
        <div>
          <input className="inputText changeButton" type="button" id="name" name="changeButton" value="更改" onClick={reReadOnly} />

            <div type="text" disabled={true} >申請年份： {state.reqCode}</div>
            <div className="inquireFormDate" type="text" disabled={true} >填單日期： {state.date}</div>

          <div>
            姓名：
            <input 
              type="text"
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.name} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, name: e.target.value}
                });
            }} />
          </div>
          
          <div>
            性別： 
            <input className="inputText notChangeInput" type="text" disabled={true} value={state.gender}  />
          </div> 

          <div>
            Email： 
              <input 
                type="text" 
                className="inputText changeInput"
                required={true}
                disabled={isWriting} 
                value={state.email} 
                onChange={(e) => {
                  setState((prev) => {
                    return {...prev, email: e.target.value}
                  });
              }} />
          </div>

          <div>
            生日： 
            <input 
              className="inputText changeInput" 
              required={true}
              disabled={isWriting} 
              value={state.birthday} 
              type="date" 
              name="birthday" 
              max={today}
              onChange={(e) => setState((prev) => {
                return {...prev, birthday: e.target.value}
            })} />
          </div>

          地址： 
          <div className="address">
            {addressDiv}
            <input 
              type="text" 
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.address} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, address: e.target.value}
                });
            }} />
          </div>

          <div>
            身分證字號： 
            <input className="inputText notChangeInput" type="text" disabled={true} value={state.id}  />
          </div> 

          <div>
            護照拼音： 
            <input 
              type="text" 
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.roman} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, roman: e.target.value}
                });
            }} />
          </div>

          <div>
            就讀學校： 
            <input 
              type="text" 
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.school} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, school: e.target.value}
                });
            }} />
          </div>

          <div>
            年級： 
              <div>
                <select 
                  className="changeSelect changeGrade"
                  name="grade"
                  value={state.grade}
                  required={true} 
                  disabled={isWriting} 
                  onChange={(e) => {
                        
                    setState((prev) => {
                      return {...prev, grade: e.target.value}
                    })
                  }}>
                  <option name="grade" value="國小">國小</option>
                  <option name="grade" value="國中">國中</option>
                  <option name="grade" value="高中">高中</option>
                  <option name="grade" value="大學">大學</option>
                </select>
                <select 
                  className="changeSelect changeGrade"
                  name="graded"
                  value={state.graded}
                  required={true} 
                  disabled={isWriting} 
                  onChange={(e) => {      
                    setState((prev) => {
                      return {...prev, graded: e.target.value}
                    })
                  }}>
                  {gradeMap}
              </select>
            </div>
          </div>

          <div>
            家裡電話： 
            <input 
              type="text" 
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.phone} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, phone: e.target.value}
                });
            }} />
          </div>

          <div>
            父親姓名： 
            <input 
              type="text" 
              className="inputText changeInput"
              disabled={isWriting} 
              value={state.fatherName} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, fatherName: e.target.value}
                });
            }} />
          </div>

          <div>
            父親手機： 
            <input 
              type="text" 
              className="inputText changeInput"
              disabled={isWriting} 
              value={state.fatherPhone} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, fatherPhone: e.target.value}
                });
            }} />
          </div>

          <div>
            母親姓名： 
            <input 
              type="text" 
              className="inputText changeInput"
              disabled={isWriting} 
              value={state.matherName} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, matherName: e.target.value}
                });
            }} />
          </div>

          <div>
            母親手機： 
            <input 
              type="text" 
              className="inputText changeInput"
              disabled={isWriting} 
              value={state.matherPhone} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, matherPhone: e.target.value}
                });
            }} />
          </div>

          <div>
            學生手機： 
            <input 
              type="text" 
              className="inputText changeInput"
              disabled={isWriting} 
              value={state.studentPhone} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, studentPhone: e.target.value}
                });
            }} />
          </div>

          <div>
            介紹人： 
            <input 
              type="text" 
              className="inputText changeInput"
              disabled={isWriting} 
              value={state.introducer} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, introducer: e.target.value}
                });
            }} />
          </div>

          <div>
            參加項目： 
            {/* <input 
              type="text" 
              className="changeInput"
              disabled={isWriting} 
              value={state.instrument} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, instrument: e.target.value}
                });
            }} /> */}
            <div className="changeInput">
            <select 
              className="changeSelect"
              name="instrument"
              required={true}
              disabled={isWriting} 
              value={state.instrument}
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, instrument: e.target.value}
                })
              }}>
              {instrument}
            </select>
          </div>
          </div>

          <div>
            學習經驗： 
            <input 
              type="text" 
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.experience} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, experience: e.target.value}
                });
            }} />
          </div>

          <div>
            目前學的曲目： 
            <input 
              type="text" 
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.track} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, track: e.target.value}
                });
            }} />
          </div>

          <div>
            指定個別課教授： 
            <input 
              type="text" 
              className="inputText changeInput"
              disabled={isWriting} 
              value={state.specify} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, specify: e.target.value}
                });
            }} />
          </div>
          
          <div className="changeInput">
          繳費項目-樂器組：
          {payTeamInstrument}
          </div>

          <div className="changeInput">
          繳費項目-鋼琴組：
          {payTeamPiano}
          </div>

          <div >
            我想和好朋友住：
          </div> 
          <div className="first">
            1. <input 
              type="text"
              className="inputText changeFirend" 
              disabled={isWriting} 
              value={state.friend1} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, friend1: e.target.value}
                });
            }} />
          </div>           

          2. <input 
              type="text" 
              className="inputText changeFirend"
              disabled={isWriting} 
              value={state.friend2} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, friend2: e.target.value}
                });
            }} />
          3. <input 
              type="text" 
              className="inputText changeFirend"
              disabled={isWriting} 
              value={state.friend3} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, friend3: e.target.value}
                });
            }} />

          <div className="changeInput">
            是否有過敏或藥物治療中：
            <div className="remark">若填是，請於下方詳細說明</div>
            <div className="inputText disease" name="diseaseVerify">
              <select 
                className="changeSelect"
                value={state.diseaseVerify}
                required={true} 
                disabled={isWriting} 
                name="diseaseVerify" 
                onChange={(e) => {
                  setState((prev) => {
                    return {...prev, diseaseVerify: e.target.value}
                  })
                  if(e.target.value === "否") {
                    setState((prev) => {
                      return {...prev, disease: ""}
                    })
                  }
                }}>
                <option name="diseaseVerify" value="是">是</option>
                <option name="diseaseVerify" value="否">否</option>
              </select>
            </div>
            {diseaseTureFalse}
          </div>


          
          飲食：
          <div className="changeInput">
            <select 
              className="changeSelect"
              required={true} 
              disabled={isWriting} 
              value={state.food} 
              name="food" 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, food: e.target.value}
                })
              }}>
              <option value="一般">一般</option>
              <option value="不吃牛肉">不吃牛肉</option>
              <option value="不吃海鮮">不吃海鮮</option>
              <option value="全素食">全素食</option>
              <option value="蛋奶素">蛋奶素</option>
            </select>
          </div>

          <div>
            身高： 
            <input 
              type="text" 
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.height} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, height: e.target.value}
                });
            }} />
          </div>

          <div>
            體重： 
            <input 
              type="text"
              className="inputText changeInput"
              required={true}
              disabled={isWriting} 
              value={state.weight} 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, weight: e.target.value}
                });
            }} />
          </div>

          
            衣服尺寸：
          <div className="changeInput">
            <select 
              className="changeSelect"
              value={state.TShirtSize}
              required={true} 
              disabled={isWriting} 
              name="T-ShirtSize" 
              onChange={(e) => {
                setState((prev) => {
                  return {...prev, TShirtSize: e.target.value}
                })
              }}>
              <option name="T-ShirtSize" value="S">S</option>
              <option name="T-ShirtSize" value="M">M</option>
              <option name="T-ShirtSize" value="L">L</option>
              <option name="T-ShirtSize" value="XL">XL</option>
              <option name="T-ShirtSize" value="2L">2L</option>
            </select>
          </div>

          <div className="changeInput">
            如何得知：
            {massageJsx}
          </div>

        <input className="inputText" type="button" name="submit" value="提交" onClick={outputText} />
        </div>
        
        
      }
      
      
      </form>
    </div>
  );
};

export default InquireEdit;