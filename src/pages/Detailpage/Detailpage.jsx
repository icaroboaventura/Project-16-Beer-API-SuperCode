import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [dataPage, setDataPage] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi))
      .catch((err) => console.error("Fehler :-(", err));
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));
    setDataPage(find);
  }, [data]);

  console.log(dataPage);

  return (
    <section className="product">
      {dataPage ? (
        <>
          <img src={dataPage.image_url} alt={dataPage.name} />
          <div className="product-info-out">
            <h3>{dataPage.name}</h3>
            <h4>{dataPage.tagline}</h4>
            <p>Created by: {dataPage.name}</p>
            <div className="product-info-in">
              <div>
                <p>First brewed: {dataPage.first_brewed}</p>
                <p>Attenuation level: {dataPage.attenuation_level}</p>
              </div>
            </div>
            <p>{dataPage.description}</p>
            <Link to={`/all`}>Back</Link>
          </div>
        </>
      ) : (
        <p>Laden...</p>
      )}
    </section>
  );
};

export default DetailPage;
