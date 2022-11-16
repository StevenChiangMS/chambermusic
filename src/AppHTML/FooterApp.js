
function FooterApp() {
  return (
    <footer className="footerApp">



      <div>
      <h5>主辦</h5>
      台灣室內樂藝術推廣協會 <br />
      <a href="http://www.chambermusic.org.tw/index.php" target="_blank" rel="noreferrer">
        <i className="bi bi-house footerIcon" />
      </a>

      <a href="https://www.facebook.com/apstring" target="_blank" rel="noreferrer">
        <i className="bi bi-facebook footerIcon" />
      </a>
      <a href="mailto:apstring123@gmail.com" >
        <i className="bi bi-envelope footerIcon" />
      </a>
      
      <br />
      10641 台北市大安區杭州南路二段29-5號 <br />
      <a className="footerPhone" href="tel:+886233221428"><i className="bi bi-telephone-forward footerIcon phoneIcon">Tel：02-3322-1428</i></a> <br />
      Fax:02-3322-1429 <br />
      </div>

      {/* <div className="Co-organizer">
        <h5>協辦</h5>
        台灣藝術股份有限公司 <br />
        <a href="https://cn.taiwanart.org.tw/">臺灣藝術研究院</a> <br />
        含光藝術 <br />
        樂享室內樂團 <br />
        伯牙三重奏團 <br />
        柘室內樂集 <br />
      </div>


      <div className="Co-organizer">
        <h5>承辦</h5>
        藝美國際整合行銷有限公司 <br />
      </div> */}
    </footer>
  );
};

export default FooterApp;