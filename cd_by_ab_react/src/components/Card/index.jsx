import './card.css';

const Card = ({data, isPlayer}) => {

  return (
    <div className="wrapper">
      <div className="card-back">
        
      </div>
      
      {
        isPlayer ?
          <div className="card" style={{width: "18rem"}}>
            <img src={data ? data.player.photo : "..."} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{data ? data.player.name : "Title"}</h5>
              <p className="card-text">Rating: {data ? data.statistics[0].games.rating : "-"}</p>
              <p className="card-text">Goals: {data ? data.statistics[0].goals.total : "-"}</p>
              <p className="card-text">Team: <b>{data ? data.statistics[0].team.name : "-"}</b></p>
            </div>
          </div>
        : 
          <div className="card" style={{width: "18rem"}}>
            <img src={data ? data.newsImgSrc : "..."} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{data ? data.newsHead : "Title"}</h5>
              <p className="card-text">{data ? data.newsTeaser : "This works good for me. I have divided the screen into two halfs: 20% and 80%."}</p>
              <a href="#" className="btn btn-primary">Read more</a>
            </div>
          </div>
      }

    </div>

  )
}

export default Card