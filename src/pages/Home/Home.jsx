import "./Home.css";
import HomeDivLink from "../../components/HomeDivLink/HomeDivLink";

const Home = () => {
  return (
    <section className="home">
      <HomeDivLink linkName="All Beers" imgSrc="./src/assets/all.png" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. " />
      <HomeDivLink linkName="Random Beers" imgSrc="./src/assets/random.png" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. " />
    </section>
  );
};

export default Home;
