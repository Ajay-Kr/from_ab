import Card from 'components/Card';

import { useEffect, useState } from 'react';

import './newsContainer.css';
import AddCard from 'components/AddCard';

const NewsContainer = () => {
  const [news, setNews] = useState(null);
  
  const fetchData = async () => {
    
    try {
      const response = await fetch('http://localhost:3003/data');
      const result = await response.json();

      setNews(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  // news && console.log(news);


  
  return (
    <main>

      <div className="bg-img-2"></div>

      <div className="bg-content">
        <h1 className="heading">
          RECENT NEWS
        </h1>

        <div className="container text-center">
          <div className="row news">
              {
                news && 
                news.map((elm, index) => {
                  return (
                    <div className="col" key={index}>
                      <Card data={elm} />
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

export default NewsContainer