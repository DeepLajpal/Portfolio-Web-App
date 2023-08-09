import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import {
  list,
  fullStackPortfolio,
  htmlcssPortfolio,
  reactjsPortfolio,
  featuredPortfolio,
  emptyData,
} from "../../data";

const setEmptyData = (emptyData) => {
  let tempData = [];
  for (let i = 0; i < 6; i++) {
    tempData.push({...emptyData[0], id : i})
  }
  return tempData;
};

export default function Portfolio({progress, setProgress}) {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const isEmpty = (categoryData) => {
    if (categoryData.length === 0) {
      setData(setEmptyData(emptyData));
    } else {
      setData(categoryData);
    }
  };

  useEffect(()=>{
    console.log("iam from portfolio");
    setProgress(75);
  },[setProgress, progress]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        return isEmpty(featuredPortfolio);
      case "reactJS":
        return isEmpty(reactjsPortfolio);
      case "htmlcss":
        return isEmpty(htmlcssPortfolio);
      case "full-Stack":
        return isEmpty(fullStackPortfolio);
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
