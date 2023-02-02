import React from "react";
import { useCurrency } from "../common/hooks/useCurrency";

const Converter = () => {
  const { amount, currencyOne, currencyTwo } = useCurrency();

  return (
    <div>
      {amount}
      {currencyOne}
      {currencyTwo}
    </div>
  );
};

export default Converter;
