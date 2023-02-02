import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const ConverterInput = ({ value, onAmountChange }) => {
  return (
    <div>
      <FormLabel htmlFor="amount" color="purple.300">
        Amount
      </FormLabel>
      <Input
        id="amount"
        size="lg"
        type="number"
        value={value}
        min={0}
        onChange={(e) => onAmountChange(e.target.value)}
      />
    </div>
  );
};

export default ConverterInput;
