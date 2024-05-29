import { Container, Text, VStack, HStack, Box, Link, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaSuperscript } from "react-icons/fa";
import { Global } from "@emotion/react";

const Index = () => {
  const [hovered, setHovered] = useState(null);

  const menuItems = ["ABOUT ME", "TIPOGRAFÍA", "SÍNTESIS VISUAL", "DIBUJO", "[Z]³"];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white">
      <Global styles={`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`} />
      <Box as="nav" width="100%" mb={8}>
        <HStack justifyContent="center" spacing={8}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              fontSize="2xl"
              fontFamily="Bebas Neue"
              color={hovered === index ? "#E4007C" : "black"}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              href={`/${item
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^a-z0-9-]/g, "")}`}
            >
              {item === "[Z]³" ? (
                <HStack spacing={0}>
                  <Text>[Z]</Text>
                  <Box as="sup" fontSize="lg">
                    ³
                  </Box>
                </HStack>
              ) : (
                item
              )}
            </Link>
          ))}
        </HStack>
      </Box>
      <VStack spacing={4}>
        <HStack spacing={0}>
          <Text fontSize="4xl" fontFamily="Bebas Neue">
            [
          </Text>
          <Box as="span" display="flex" alignItems="center">
            <Box as="span" width="20px" height="20px" borderRadius="50%" backgroundColor="black" display="inline-block" marginX="2px" />
            <Box as="span" width="20px" height="20px" borderRadius="50%" backgroundColor="black" display="inline-block" marginX="2px" />
          </Box>
          <Text fontSize="4xl" fontFamily="Bebas Neue">
            ]
            <Box as="sup" fontSize="lg">
              ³
            </Box>
          </Text>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
