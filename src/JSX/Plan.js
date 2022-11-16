
function Plan() {

  const starText = [
    "四人套房。", 
    "腹地優美，活動場域設備加級完善，讓學員放心安靜休息。", 
    "每日巡房，隨時注意學員安全，加強營區全面之消毒與環境衛生。"
  ];

  const starLi = starText.map((data, index) => {
    return (
        <li className="eighth" key={"starLi" + index}>{data}</li>
    );
  });

  const text = [
    "為了落實健康生活， 本次活動將全程宣導學員勤洗手。", 
    "活動期間備有消毒酒精、洗手用品供學員使用。", 
    "音樂營期間實行每日體溫量測。"
  ];

  const li = text.map((data, index) => {
    return (
        <li className="quarter" key={"li" + index}>{data}</li>
    );
  });

  return (
    <div className="plan">
      <h2><i className="bi bi-calendar-week"></i> 生活規劃</h2>
        <ul className="planChild">
          {starLi}
        </ul>

        <ul className="planChild two">

          <li className="beamed-eighth"><strong>筋骨活暢</strong></li>
          <ul>
            <li className="beamed-sixteenth">沉淨於渡假村生態活動， 讓學員舒展身心運動的時間。</li>
          </ul>
            
          <li className="beamed-eighth"><strong>腹生活Clean Clear</strong></li>
          <ul>
            <li className="beamed-sixteenth">台風、膽識、人際關係各種生活常規訓練…等各類重要禮儀。</li>
          </ul>

          <li className="beamed-eighth"><strong>早餐</strong></li>
          <ul>
            <li className="beamed-sixteenth">田園早餐</li>
          </ul>

          <li className="beamed-eighth"><strong>午晚餐</strong></li>
          <ul>
          <li className="beamed-sixteenth">中、西式餐點。 (可安排素食)</li>
          </ul>
        </ul>

        <ul className="planChild">
          {li}
        </ul>

    </div>
  );
};

export default Plan;