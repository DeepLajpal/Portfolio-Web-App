import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import {
  list,
  contentPortfolio,
  mobilePortfolio,
  reactjsPortfolio,
  featuredPortfolio,
  emptyData,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const isEmpty = (categoryData) => {
    if (categoryData.length === 0) {
      setData(emptyData);
    } else {
      setData(categoryData);
    }
  };

  useEffect(() => {
    switch (selected) {
      case "featured":
        return isEmpty(featuredPortfolio);
      case "reactJS":
        return isEmpty(reactjsPortfolio);
      case "mern":
        return isEmpty(mobilePortfolio);
      case "full-Stack":
        return isEmpty(contentPortfolio);
      default:
        return isEmpty(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt={item.title + "image"} />
            <h3>
              <a href={item.projectURL} rel="noreferrer" target="_blank">
                {item.title}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
