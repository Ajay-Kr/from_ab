import { useEffect, useState } from 'react';
import './players.css';
import Card from 'components/Card';
import AddCard from 'components/AddCard';

const Players = () => {
  const [players, setPlayers] = useState(null);

  const fetchData = async () => {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020';
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

      setPlayers(result.response);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  // players && console.log(players)


  return (
    <main>
      <div className="bg-img-2"></div>

      <div className="bg-content">
        <h1 className="heading">
          TOP PLAYERS 
        </h1>

        <div className="container text-center">
          <div className="row news">
              {
                players && 
                players.map((elm, index) => {
                  return (
                    <div className="col" key={index}>
                      <Card data={elm} isPlayer />
                    </div>
                  );
                })
              }
          </div>

          
          <div className="row add">
            <div className="col">
              <AddCard />
            </div>
            <div className="col">
              <AddCard />
            </div>
            <div className="col">
              <AddCard />
            </div>
            <div className="col">
              <AddCard />
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}

export default Players