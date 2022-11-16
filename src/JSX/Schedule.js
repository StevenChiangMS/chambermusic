
function Schedule() {
  const scheduleTr = [
    { time: "07：30～", text: "敲鑼打鼓，盥洗早餐" },
    { time: "09：00～11：40", text: "技巧教學、音樂詮釋等專業課程" },
    { time: "12：00～13：30", text: "午餐、午休" },
    { time: "14：00～15：40", text: "團合奏、室內樂等專業課程" },
    { time: "16：00～18：00", text: "筋骨舒暢、芬多精森林浴、室內樂夥伴練習時間" },
    { time: "17：30～19：00", text: "滿漢全席（學員音樂沙龍、禮儀大挑戰）" },
    { time: "19：00～20：30", text: "樂團練習、室內樂練習、教授經驗傳承音樂會、學員發表音樂會" },
    { time: "21：00～22：00", text: "用音樂交談～夥伴練習時間" },
    { time: "22：00～", text: "星光夜語、每日學習日誌、經驗分享、淋浴、就寢" },
  ];

  const schedule = [
    { title: "室內樂分組考驗", text: "依學員演奏程度測驗編組、上課指導及練習，教授將依照每一學員的狀況加強演奏實力，每一室內樂組別能夠學習及演奏新作品。" },
    { title: "樂團時光", text: "培養學員視譜、演奏、分部、合奏等各種音樂演奏的重要能力，同時培養演奏的自信心。" },
    { title: "2021樂享大師音樂節—音樂百匯系列", text: "不用到音樂廳就可以欣賞名家演出，駐營的音樂家教授們，舉行音樂會，讓學員有近距離欣賞大師的演奏。" },
    { title: "弦樂組、長笛組", text: "諸多教授指導下，以齊奏、合奏、重奏、分部與個別指導的多元方式，與不同背景的組員分工合作，一同學習新曲，在結業前完成一個至數個完整的表演節目。學員在此期間不但以樂會友，還可學習團隊合作、互相溝通協調的能力。", focus: "大班課" },
    { title: "鋼琴組", text: "針對學習鋼琴者的關鍵錯誤與盲點，以工作坊(workshop)與團體協同解決學習困境之方式，輕鬆有趣的氣氛中，幫助各種程度的同學找到解決之道。", focus: "(每位鋼琴組學生每日皆有60分鐘練琴時間，時間由主辦單位安排)" },
    { title: "指定教授", text: "針對個人做基礎、進階技巧的鞏固與加強，並提昇演奏技巧與詮釋能力。在音樂營6天中，可選擇一堂50分鐘之個別課，至多兩堂課。" },
    { title: "名額限制，選指定教授前，請先來電洽詢02-3322-1428，額滿即止(需額外付費)", text: "" },
  ];

  const trHTML = scheduleTr.map((data, index) => {
    return (
      <tr key={"tr" + index}>
        <td>{data.time}</td>
        <td>{data.text}</td>
      </tr>
    );
  });

  const summary = schedule.map((data, index) => {
    return (
      <div className="summarySchedule" key={"schedule" + index}>
        {
        data.title === "弦樂組、長笛組" ? <b><h4 className="summaryH4-4-1">{data.focus}</h4></b> : <></>
        }
        <h4 className={"summaryH4-" + index}>{data.title}</h4>
        <div className={"summaryDiv"}>{data.text}</div>
        {
        data.title === "鋼琴組" ? <b><div className="summaryPiano">{data.focus}</div></b> : <></>
        }
      </div>
    );
  });

  return (
    <div className="schedule">
      
      <div>
        <h2 className="scheduleFirstH2"><i className="bi bi-book"></i> 課程簡介</h2>
        <table className="scheduleTable">
            <thead>
                <tr>
                    <th>時間</th>
                    <th>活動內容</th>
                </tr>
            </thead>
            <tbody>
              {trHTML}
            </tbody>
        </table>
      </div>
      <div>
        {summary}
      </div>
      
    </div>
  );
};

export default Schedule;