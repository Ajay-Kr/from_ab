import { useEffect, useState } from 'react';

import './fixturestable.css';

const FixturesTable = () => {
  const [fixtures, setFixtures] = useState(null);

  const fetchData = async () => {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?next=10';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      setFixtures(result.response);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  // fixtures && console.log(fixtures)


  return (
    <main>

      <div className="bg-img-2"></div>

      <div className="bg-content">
        <h1 className="heading">
          Fixtures
        </h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Home Team</th>
              <th scope="col">Away Team</th>
              <th scope="col">Schedule</th>
            </tr>
          </thead>
          <tbody>
            {
              fixtures &&
              fixtures.map((fixture, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img className='team-logo'
                        src={fixture.teams.home.logo}
                        alt="" 
                      /> <br />
                      {fixture.teams.home.name}
                    </td>
                    <td>
                      <img className='team-logo'
                        src={fixture.teams.away.logo}
                        alt="" 
                      /> <br />
                      {fixture.teams.away.name}
                    </td>
                    <td>{fixture.fixture.date} <br /> 
                        {fixture.fixture.venue.city}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default FixturesTable