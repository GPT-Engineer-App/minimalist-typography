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
            <Link key={index} fontSize="2xl" fontFamily="Bebas Neue" color={hovered === index ? "#E4007C" : "black"} onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)} href="#">
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
          <Image src="https://images.unsplash.com/photo-1633158832433-11a30ad1e10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb3VuZCUyMGV5ZWdsYXNzZXN8ZW58MHx8fHwxNzE3MDE4NTM4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Round Eyeglasses" boxSize="100px" />
          <Text fontSize="4xl" fontFamily="Bebas Neue">
            ]
          </Text>
          <Box as="sup" fontSize="2xl" fontFamily="Bebas Neue">
            ³
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
