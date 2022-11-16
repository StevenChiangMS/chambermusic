
// const url = "https://www.youtube-nocookie.com/embed/RrUQYiJt3HQ";
const url = "https://www.youtube.com/embed/RrUQYiJt3HQ";
function Movie() {

  return (
    <div className="movie">
      
        <h2><i className="bi bi-youtube"></i> 營隊影片</h2>

        <iframe width="969" height="545" src={url} data-cookieconsent="marketing" title="2020樂享大師國際音樂營—精華片段" allowFullScreen={true}></iframe>


        
    </div>
  );
};

export default Movie;