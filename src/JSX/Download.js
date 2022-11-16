

function Download() {

  return (
    <div className="download">
      <h2><i className="bi bi-file-text"></i> 營隊相關檔案</h2>
      <hr />
      
      <div>
        <a className="downloadLink" href="https://drive.google.com/u/0/uc?id=1jaqULzWdZWgMuM9pbsUNc6jpQC0nuN2x&export=download" download="2020樂享大師國際音樂營 行前通知單.pdf">
          <i className="bi bi-filetype-pdf downloadLink-icon"></i>
          2020樂享大師國際音樂營 行前通知單
        </a> 
      </div>

      <div>
        <a className="downloadLink" href="https://drive.google.com/u/0/uc?id=1nNew-7N7fxLuZXzLSz2UwlKEmSBqkHvN&export=download" download="2020樂享大師國際音樂營 活動日程表.pdf">
          <i className="bi bi-filetype-pdf"></i>
          2020樂享大師國際音樂營 活動日程表
        </a>
      </div>

      <a className="downloadLink" href="https://issuu.com/apstring123/docs/__118-compressed" target="_blank" rel="noreferrer">
        <i className="bi bi-window"></i>
        樂享大師國際音樂營紀念冊
      </a>

    </div>
  );
};

export default Download;