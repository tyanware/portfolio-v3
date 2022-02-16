import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";
import useMediaQuery from "../hook/useMediaQuery";

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800);
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
          <SlideFade
            direction="top"
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.7 } }}
          >
            <Box position="relative">
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                placeholder="blur"
                filter="invert(0.1)"
                w={{ base: "70px", md: "150px" }}
                position="absolute"
                top={{ base: "0", md: "-15" }}
                left={{ base: "-5", md: "-10" }}
                alt=""
              ></Image>
              <Text
                color="button1"
                fontSize="display2"
                fontWeight="medium"
                position="relative"
              >
                Hey there!, I'm-
              </Text>
            </Box>
            <Heading
              color="displayColor"
              fontSize="display"
              lineHeight={"95%"}
              letterSpacing={{ sm: "-1.2px", md: "-1.8px" }}
              position="relative"
            >
              tygerxqt.
            </Heading>
          </SlideFade>

          <SlideFade
            direction="top"
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.8 } }}
          >
            <Heading
              color="textSecondary"
              fontSize="display2"
              fontWeight="medium"
              whiteSpace="pre-wrap"
              letterSpacing="-1.6px"
            >
              <Box color="displayColor" as="span">
                A self-taught Web/IOT Developer.
              </Box>
            </Heading>
          </SlideFade>

          <SlideFade
            direction="top"
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.9 } }}
          >
            <Text fontSize="display3" color="textSecondary">
              💻 Making Discord Bots and Web applications.
              <br />
              <Stack isInline spacing={1}>
                <Box>🎓</Box>
                <Box>Currently a Student from the UK.</Box>
              </Stack>
            </Text>
          </SlideFade>
          <SlideFade
            direction="top"
            in={true}
            transition={{ enter: { duration: 0.4, delay: 1.0 } }}
          >
            <Stack isInline spacing={4}>
              <Link href="/blog/an-update">
                <Button
                  leftIcon={<AiFillInfoCircle fill="#F8C8DC" />}
                  transition="0.3s"
                  position="static"
                  size={isLargerThan800 ? "md" : "sm"}
                  bgColor="secondary"
                  color="white"
                  _hover={{ backgroundColor: '#292929' }}
                >
                  An Update
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  leftIcon={<AiFillInfoCircle fill="#F8C8DC" />}
                  transition="0.3s"
                  position="static"
                  size={isLargerThan800 ? "md" : "sm"}
                  bgColor="secondary"
                  color="white"
                  _hover={{ backgroundColor: '#292929' }}
                >
                  Donate
                </Button>
              </Link>
            </Stack>
          </SlideFade>
        </Stack>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.2 } }}
        >
          <Flex
            marginLeft={{ base: 100, md: 150, lg: 300 }}
            alignItems="normal"
            justifyContent="center"
            position="relative"
          >
            <Box
              maxW={{ base: "312px", md: "412px", lg: "412px" }}
              maxH={{ base: "312px", md: "412px", lg: "412px" }}
            >
              <Image
                src={
                  isLargerThan800
                    ? "https://i.imgur.com/7kNnaBE.png"
                    : ""
                }
                w="100%"
                h="100%"
                placeholder="blur"
                maxW={{ base: "312px", md: "452px", lg: "612px" }}
                maxH={{ base: "312px", md: "452px", lg: "612px" }}
                alt={isLargerThan800 ? "tygerxqt" : ""}
                pos="intrinsic"
              />
            </Box>
          </Flex>
        </SlideFade>
      </SimpleGrid>
    </>
  );
}
