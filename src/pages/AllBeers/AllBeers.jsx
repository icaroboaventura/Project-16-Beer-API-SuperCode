import "./AllBeers.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi))
      .catch((err) => console.error("Fehler :-(", err));
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <h2>All Beers</h2>
        <Link to={`/`}>Back</Link>
      </div>
      <section className="products">
        {data ? (
          data.map((beer, index) => (
            <article key={index}>
              <img src={beer.image_url} alt={beer.name} />
              <div>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>Created by: {beer.name}</p>
                <Link to={`/all/${beer.id}`}>Details</Link>
              </div>
            </article>
          ))
        ) : (
          <p>Laden...</p>
        )}
      </section>
    </>
  );
};

export default AllBeers;
