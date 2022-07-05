import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "../WeaponsCards/style.module.scss";

function Cards(props) {
  const [selector, setSelector] = useState(props.select);
  const [incomingData, setIncomingData] = useState([{}]);
  useEffect(() => {
    function ApiCall() {
      axios
        .get(`https://eldenring.fanapis.com/api/${selector + "?limit=100"}`)
        .then(function (response) {
          setIncomingData(response.data.data);
        });
    }
    ApiCall();
  }, []);

  console.log(incomingData);
  return (
    <div className={style.Cards}>
      {incomingData.map((e, i) => (
        <div key={i} className={style.Card}>
          <img src={e.image ? e.image : null} alt="Img not found...Sorry" />
          <h4>
            <b>{e.name}</b>
          </h4>
          <h5>{e.category ? e.category : null}</h5>
          <h5>{e.location ? e.location : null}</h5>
          <p>
            <i>{e.description}</i>
          </p>
          <p>{"Weight:" + e.weight ? e.weight : null}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
