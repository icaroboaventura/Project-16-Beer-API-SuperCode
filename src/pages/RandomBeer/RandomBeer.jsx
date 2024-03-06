import "./RandomBeer.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomBeer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi))
      .catch((err) => console.error("Fehler :-(", err));
  }, []);

  console.log(data);

  return (
    <section className="product">
      {data ? (
        <>
          <img src={data.image_url} alt={data.name} />
          <div className="product-info-out">
            <h3>{data.name}</h3>
            <h4>{data.tagline}</h4>
            <p>Created by: {data.name}</p>
            <div className="product-info-in">
              <div>
                <p>First brewed: {data.first_brewed}</p>
                <p>Attenuation level: {data.attenuation_level}</p>
              </div>
            </div>
            <p>{data.description}</p>
            <Link to={`/`}>Back</Link>
          </div>
        </>
      ) : (
        <p>Laden...</p>
      )}
    </section>
  );
};

export default RandomBeer;
