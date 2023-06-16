import './sidebar.css';

const Sidebar = ({activeNav, setActiveNav}) => {
  
  return (
    <div className="container text-center sidebar-div">
      <div className="row row-cols-1">
        <div className="col">
          <h2 className="sidebar-heading" >Items</h2>
        </div>
        <div className="nav-div">
          <div className="col nav-btn-div">
            <button className={activeNav === "news" ? "nav-link nav-active": "nav-link"} 
              onClick={() => setActiveNav("news")} 
            >NEWS</button>
          </div>
          <div className="col nav-btn-div">
            <button className={activeNav === "fixtures" ? "nav-link nav-active": "nav-link"} 
              onClick={() => setActiveNav("fixtures")}
            >Fixtures</button>
          </div>
          <div className="col nav-btn-div">
            <button className={activeNav === "players" ? "nav-link nav-active": "nav-link"} 
              onClick={() => setActiveNav("players")}
            >Players</button>
          </div>
          <div className="col nav-btn-div">
            <button className={activeNav === "other" ? "nav-link nav-active": "nav-link"} 
              onClick={() => setActiveNav("other")}
            >Other</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar