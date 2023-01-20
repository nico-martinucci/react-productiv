import React, { useState } from "react";
import "./Quote.css";
import axios from "axios";

const BASE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
/** Renders an inspirational quote from the Inspo Quote API */

function Quote() {

  const [quote, setQuote] = useState({ text: "", author: "" });
  const [button, setButton] = useState("Click here for an inspirational quote!");

  /** requests quote from quote API
   */
  async function getQuote() {
    const response1 = await axios.get(BASE_URL);
    const response2 = await axios.get(BASE_URL);

    setQuote(curr => ({text: response1.data.quote.text, author: response2.data.quote.author}));
    setButton("Nü quøte");
  }


  return (
    <div className="Quote">
      {quote.text && <p className="Quote-text">{`"${quote.text}" -${quote.author}`}</p>}
      <button className="Quote-button" onClick={getQuote}>{button}</button>
    </div>
  );
};

export default Quote;