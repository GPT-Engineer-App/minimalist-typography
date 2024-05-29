import { Link } from "react-router-dom";
import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState("");

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <Box bg="white" p={4}>
      <Flex justify="space-between" align="center">
        <Link to="/" onClick={() => handleClick("HOME")}>
          <Text fontFamily="Bebas Neue" color={active === "HOME" ? "#E4007C" : "black"} _hover={{ color: "#E4007C" }}>
            <HStack spacing={0}>
              <Text>[Z]</Text>
              <Box as="sup" fontSize="lg">
                ³
              </Box>
            </HStack>
          </Text>
        </Link>
        <Link to="/about-me" onClick={() => handleClick("ABOUT ME")}>
          <Text fontFamily="Bebas Neue" color="black" _hover={{ color: "#E4007C" }}>
            ABOUT ME
          </Text>
        </Link>
        <Link to="/tipografia" onClick={() => handleClick("TIPOGRAFÍA")}>
          <Text fontFamily="Bebas Neue" color={active === "TIPOGRAFÍA" ? "#E4007C" : "black"} _hover={{ color: "#E4007C" }}>
            TIPOGRAFÍA
          </Text>
        </Link>
        <Link to="/sintesis-visual" onClick={() => handleClick("SÍNTESIS VISUAL")}>
          <Text fontFamily="Bebas Neue" color={active === "SÍNTESIS VISUAL" ? "#E4007C" : "black"} _hover={{ color: "#E4007C" }}>
            SÍNTESIS VISUAL
          </Text>
        </Link>
        <Link to="/dibujo" onClick={() => handleClick("DIBUJO")}>
          <Text fontFamily="Bebas Neue" color={active === "DIBUJO" ? "#E4007C" : "black"} _hover={{ color: "#E4007C" }}>
            DIBUJO
          </Text>
        </Link>
        <Link to="/zcubed" onClick={() => handleClick("[Z]³")}>
          <Text fontFamily="Bebas Neue" color={active === "[Z]³" ? "#E4007C" : "black"} _hover={{ color: "#E4007C" }}>
            [Z]³
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
