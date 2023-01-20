import React, { useState } from "react";
import axios from "axios";
const BASE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
/** Renders an inspirational quote from the Inspo Quote API */

function Quote() {

  const [quote, setQuote] = useState({ text: "", author: "" });
  const [button, setButton] = useState("Click here for an inspirational quote!");

  /** requests quote from quote API
   */
  async function getQuote() {
    const response = await axios.get(BASE_URL);

    setQuote(curr => response.data.quote);
    setButton("Nü quøte");
  }


  return (
    <div className="align-items-end">
      {quote.text && <p >{`"${quote.text}" -${quote.author}`}</p>}
      <button onClick={getQuote}>{button}</button>
    </div>
  );
};

export default Quote;