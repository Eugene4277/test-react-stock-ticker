import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

function Ticker(props) {
  const [prevTicker, setPrevTicker] = useState({});
  const { ticker } = props;

  useEffect(() => {
    return () => {
      setPrevTicker(ticker);
    };
  }, [ticker]);

  console.log("prev", prevTicker.price, "\ncurrent", ticker.price);

  const textColor = () => {
    if (ticker.price > prevTicker.price) return "green";
    else if (ticker.price < prevTicker.price) return "red";
    else if (ticker.price === prevTicker.price) return "grey";
    else return null;
  };
  return (
    <div>
      <h3>Ticker</h3>
      <p>
        {ticker.ticker}{" "}
        <span style={{ color: textColor() }}>
          {ticker.price}{" "}
          {textColor() ? (
            textColor() === "green" ? (
              <i className="fas fa-arrow-up"></i>
            ) : (
              <i className="fas fa-arrow-down"></i>
            )
          ) : null}
        </span>
      </p>

      {/* <p>Previous {prevTicker.price}</p> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ticker: state.stockTicker,
  };
};

export default connect(mapStateToProps)(Ticker);
