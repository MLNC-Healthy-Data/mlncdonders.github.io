
function NewsCard() {
  const imgUrl =
    "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200";

  return (
    <div
     className="news-card"
    >
      <img
        style={{
          width: "100%", 
          height: "100%",
          objectFit: "cover",
          borderRadius: "4px", 
          position: "absolute",
        }}
        src={imgUrl}
        alt="News Image"
      />
      <div
      className="news-card-text-area"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: "1vh 2vw",
          backgroundColor: "#000000ab",
          color: "white",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <div>News Title</div>
        <div>Small Desc</div>
      </div>
    </div>
  );
}

export default NewsCard;
