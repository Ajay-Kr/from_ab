import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import FixturesTable from 'components/FixturesTable';
import NewsContainer from 'components/NewsContainer';

import { useState } from 'react';
import Players from 'components/Players';

const Fixtures = () => {
  const [activeNav, setActiveNav] = useState("players");

  // console.log(activeNav);

  return (
    <div>
      <Header />

      <div className="">
        <div className="row">
          <div className="col-2">
            <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
          </div>

          <div className="col">
            {activeNav === "news" && <NewsContainer />}
            {activeNav === "fixtures" && <FixturesTable />}
            {activeNav === "players" && <Players />}
            {activeNav === "other" && <> Some others</>}
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Fixtures