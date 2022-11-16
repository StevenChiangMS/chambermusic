import payMoney from '../jsonData/payMoney';




function SignUpMethod() {
  const date = "2022年7月12日(一)～2022年7月17日(六)";
  const place = "日月潭青年活動中心（南投縣魚池鄉中正路101號）";


  return (
    <div className="signUpMethod">
      <h2><i className="bi bi-chat-right-text"></i> 報名辦法</h2>

      <div className="signUpMethodDiv">
        <h4>招生對象:</h4>
        <div>
          國小三年級以上、國中、高中、大學、研究所具樂器演奏能力者
        </div>
        <div>
          (依程度分組，活動依年齡分組)
        </div>        
      </div>

      <div className="signUpMethodDiv">
        <h4>時間:</h4>
        <div>
          {date}
        </div>
      </div>

      <div className="signUpMethodDiv">
        <h4>地點:</h4>
        <div>
          {place}
        </div>
        <div className="remark">
          ※父母不克接送，可由本團安排，請在報名表中勾選(專車接送交通費另計；名額有限，儘早報名)。
        </div>
      </div>



      <div className="signUpMethodDiv pay">
        <h4>費用:</h4>
        <h6>
          小提琴、中提琴、大提琴、長笛組
        </h6>
        <div>
          報名費 {payMoney.signUp.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元＋活動指導費 {payMoney.instrument.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元＝ 
          <span className="sum">{(payMoney.signUp + payMoney.instrument).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元整</span>
        </div>
        <div className="payDiv">
          指定教授費用{payMoney.appoint.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元(一堂50分鐘)＋報名費、活動指導費 {(payMoney.signUp + payMoney.instrument).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元＝ 
          <span className="sum">{(payMoney.signUp + payMoney.instrument + payMoney.appoint).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元整</span>
        </div>

        <h6>
          鋼琴組
        </h6>
        <div>
          報名費 {payMoney.signUp.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元＋活動指導費 {payMoney.piano.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元＝ 
          <span className="sum">{(payMoney.signUp + payMoney.piano).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元整</span>(含7/13-7/16每日60分鐘鋼琴琴點)
        </div>
        <div>
          指定教授費用{payMoney.appoint.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元(一堂50分鐘)＋報名費、活動指導費 {(payMoney.signUp + payMoney.piano).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元＝ 
          <span className="sum">{(payMoney.signUp + payMoney.piano + payMoney.appoint).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元整</span>
        </div>

        <ul className="signUpMethodStar">
          <li>早鳥計劃：5/31(一)前報名，每位可優惠減免{payMoney.bonus.toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}元</li>
          <li>團體計劃：五人同行可共減免{(payMoney.bonus * 5).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}  (不與早鳥計劃併行)</li>
          <ol className="signUpMethodNum">
            <li>費用包括食、宿、平安保險、課程、活動、成果發表、中英文結業證書等</li>
            <li>報到時發放紀念T-Shirt一件</li>
            <div>
              (因行前諸多費用皆已支付，完成報名手續後因故取消者，6月23日前退費1/2、營期前5天退費1/3、營期間將不退費，報名費{payMoney.signUp}元恕不退費，且活動費用不延期使用)
            </div>
          </ol>
        </ul>
      </div>

      <div className="signUpMethodDiv">
        <h4>報名期限:</h4>
        <div>
          即日起至2022年6月17日(五) (名額有限，額滿為止)
        </div>
      </div>

      <div className="signUpMethodDiv">
        <h4>報名方式:</h4>
        <ol className="signUpMode">
          <li>
            報名專區，匯款完成後請將匯款收據MAIL至cmsstring@gmail.com
          </li>

          <li>
            紙本報名，匯款完成後請將報名表及匯款收據傳真至 02-3322-1429
          </li>
          <div className="remark">※請再來電確認即完成報名手續。</div>
        </ol>
      </div>

      <div className="signUpMethodDiv">
      <h4>繳費方式:</h4>
      <h3 className="payMode">▲郵政劃撥(免手續費)</h3>
      <h3 className="payMode">帳號：50062919</h3>
      <h3 className="payMode">戶名：台灣室內樂藝術推廣協會</h3>
      <div className="remark">※溫馨提醒：郵政劃撥帳戶只能接受來自郵局帳戶的ATM轉帳，請勿以其它銀行帳戶操作轉帳。</div>
      </div>

      <div className="signUpMethodDiv">
        <h4>注意事項:</h4>
        <ol className="signUpMethodNum">
          <li>攜帶物品</li>
          {/* <li> */}
            <ul className="signUpMethodCircle">
              <li>樂器自備(鋼琴組除外)</li>
              <li>主辦單位提供樂譜、譜架、鋼琴</li>
              <li>健保卡、帽子、零用錢少許、雨具</li>
              <li>盥洗用具</li>
              <li>服裝：輕便服數套、運動鞋、禦寒外套、正式服裝乙套(發表演出用)</li>
              <li>貴重物品請自行保管</li>
            </ul>
          {/* </li> */}
          <li>7月5日前若未收到行前通知單，煩請來電02-3322-1428詢問</li>
        </ol>
      </div>

    </div>
  );
};

export default SignUpMethod;