import React from "react";
import style from "../MainQuotes/style.module.scss";
import { useState } from "react";

function Quotes() {
  const [indexQuote, setIndexQuote] = useState(0);
  const [Quotes, setQuotes] = useState([
    { quote: "Oh, Elden Ring", person: "Narrator" },
    { quote: "I'll Soon Birth Thee Anew", person: "Rennala" },
    { quote: "I Command Thee, Kneel!", person: "Godrick" },
    { quote: "...You Are Maidenless", person: "Varré" },
    { quote: "Someone Must Extinguish Thy Flame", person: "Margit" },
    { quote: ".....", person: "The EverBrilliant GoldMask" },
  ]);

  setTimeout(() => {
    if (indexQuote < 3) {
      setIndexQuote(indexQuote + 1);
    } else setIndexQuote(0);
  }, 5000);

  return (
    <div className={style.Quotes}>
      <blockquote className={style.BlockQuotes}>
        <h3 className={style.QuoteText}>
          <i>{Quotes[indexQuote].quote}</i>
        </h3>
        <p className={style.QuotePerson}>
          <i>{Quotes[indexQuote].person}</i>
        </p>
      </blockquote>
    </div>
  );
}

export default Quotes;
