import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import "./Currency.css";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_fPMaQAvx7pNsKAhpEyCFCRYc5y137RZlNsELb0lE";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
    console.log(result);
  };

  return (
    <div>
      <div className="currency-div">
        <div className="header">
          <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        <div className="currency">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="amount"
          />

          <select
            onChange={(e) => setFromCurrency(e.target.value)}
            className="from-currency-option"
            value={fromCurrency}
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>
          <HiArrowCircleRight
            style={{
              fontSize: "35px",
              marginRight: "10px",
              marginTop: "-5px",
            }}
          />
          <input type="number" className="result" value={result} />
          <select
            onChange={(e) => setToCurrency(e.target.value)}
            className="to-currency-option"
            value={toCurrency}
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>
        </div>
        <button onClick={exchange}>Çevir</button>
      </div>
    </div>
  );
}

export default Currency;
