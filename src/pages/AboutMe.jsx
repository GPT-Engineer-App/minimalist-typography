import { Container, Text, Box, Image, VStack, HStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import { Global } from "@emotion/react";

const AboutMe = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white">
      <Global styles={`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Helvetica&display=swap');`} />
      <Navigation currentPage="about-me" />
      <HStack spacing={4} alignItems="center">
        <Text fontSize="4xl" fontFamily="Bebas Neue">
          [
        </Text>
        <Image src="/path/to/dj-image.jpg" alt="Person DJing" boxSize="150px" />
        <VStack alignItems="flex-start" spacing={4} fontFamily="Helvetica" textAlign="justify">
          <Text>SOY JOAQUÍN VERA, NACÍ EL 22 DE AGOSTO DE 2001 EN LA CIUDAD DE MÉXICO. ME ENCANTA MI CARRERA Y ESTOY APRENDIENDO MUCHO EN CENTRO. SIENTO QUE LO QUE ESTUDIO COMPLEMENTA PERFECTAMENTE MI PROYECTO PERSONAL "ZEZZIONS", QUE BUSCA CREAR UNA COMUNIDAD CREATIVA MEDIANTE EVENTOS, OFRECIENDO UNA PLATAFORMA PARA QUE TALENTOS CREATIVOS EXPONGAN SU ARTE. EN CENTRO, CADA CLASE Y PROYECTO ME BRINDAN HERRAMIENTAS VALIOSAS QUE ENRIQUECEN A "ZEZZIONS" Y MI CONOCIMIENTO Y EXPERIENCIA COMO COMUNICADOR VISUAL. CREO QUE HAY UN GRAN POTENCIAL EN EL DISEÑO GRÁFICO EN MÉXICO, Y VEO MI EDUCACIÓN COMO EL PUENTE HACIA ESE DESCUBRIMIENTO. MÉXICO ES UN PAÍS RICO EN CULTURA, Y AUNQUE A VECES LA ENVIDIA INTERNA LIMITE NUESTRA PRESENCIA GLOBAL, ESTOY CONVENCIDO DE QUE PODEMOS SUPERAR ESTOS OBSTÁCULOS Y DESTACAR EN EL ESCENARIO MUNDIAL DEL DISEÑO.</Text>
        </VStack>
        <Image src="/path/to/portrait.jpg" alt="Joaquín" boxSize="150px" />
        <Text fontSize="4xl" fontFamily="Bebas Neue">
          ]
          <Box as="sup" fontSize="lg">
            ³
          </Box>
        </Text>
      </HStack>
    </Container>
  );
};

export default AboutMe;
