import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Converter from "../features/converter/Converter";

function App() {
  return (
    <div>
      <Flex
        bgGradient="linear(to-t, #ae085c, #2e0656)"
        height="100vh"
        justifyContent="center"
      >
        <Converter />
      </Flex>
    </div>
  );
}

export default App;
