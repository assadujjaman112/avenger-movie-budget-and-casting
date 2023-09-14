import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectedActors = (actor) => {
    const isExist = selectedActors.find((item) => item.id === actor.id);
    let count = actor.salary;
    if (isExist) {
      return alert("Hero already selected");
    } else {
      selectedActors.forEach((item) => {
        count = count + item.salary;
      });
      
      const totalRemaining = 20000 - count;
      if (count > 20000) {
        return alert("Insufficient Balance");
      } else {
        setRemaining(totalRemaining);
        setTotalCost(count);
        setSelectedActors([...selectedActors, actor]);
      }
    }
  };

  return (
    <div className="container">
      <h1>Course Registration</h1>
      <div className="home-container">
        <div className="card-container">
          {allActors.map((actor) => (
            // eslint-disable-next-line react/jsx-key
            <div key={actor.id} className="card">
              <div className="card-img">
                <img src={actor.image} alt="" className="photo" />
              </div>
              <h2>{actor.name} </h2>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, laborum?
                </small>
              </p>
              <div className="info">
                <p>Salary : {actor.salary} </p>
                <p>{actor.role} </p>
              </div>
              <button
                onClick={() => handleSelectedActors(actor)}
                className="card-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="selected-container">
          <Cart
            selectedActors={selectedActors}
            totalCost={totalCost}
            remaining={remaining}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
