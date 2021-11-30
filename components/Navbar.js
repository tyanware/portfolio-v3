import React, { useRef } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Image
} from "@chakra-ui/react";
import NextLink from "next/link";
import useMediaQuery from "../hook/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  var navURL = "";
  var navNum = Math.floor(Math.random() * 8);

  switch (navNum) {
    case 0:
      navURL = "https://images.ctfassets.net/ibmu74c30nyl/4Nr4zKNW7ugkW6IUiwcMUv/306fb05b728afb2d66c545f0f06f63cb/1.gif";
      break;
    case 1:
      navURL = "https://images.ctfassets.net/ibmu74c30nyl/7B9RLjRPm7iaWQbApOReRX/09782ad4123a6502b766e5fba42c4e75/2.gif";
      break;
    case 2:
      navURL = "https://images.ctfassets.net/ibmu74c30nyl/30990L8lKVR1T3sTQXsqhh/c9eb858334c1be8bca3026d186aaeb48/3.gif";
      break;
    case 3:
      navURL = "https://images.ctfassets.net/ibmu74c30nyl/3xmbuPnp7uXjG1uqjSvNoM/af1256ba6fdb23edf62ec103c7aa8d97/4.gif";
      break;
    case 4:
      navURL = "https://images.ctfassets.net/ibmu74c30nyl/5dlQnAnVUFxkVumxSKXvHp/3476abd075d932efb9ada161f28334d3/5.gif";
      break;
    case 5:
      navURL = "https://images.ctfassets.net/ibmu74c30nyl/6SU2ucrLps5mUCmIg2xEjf/60b7c38dfd718ea9d55671e2f493d6e6/6.gif";
      break;
    case 6:
      navURL = "https://images.ctfassets.net/ibmu74c30nyl/5fIe6dlEztgOp8Z1iVBj0u/ad6ea60fb8ee900120186ee6c19b97e5/7.gif";
      break;
    case 7:
      navURL = "https://images.ctfassets.net/ibmu74c30nyl/5zp7CqvzuxlGlOteRvUzwb/288b5fc211403f8d92dc73daa15dca89/8.gif";
      break;  
  }

  const banner = (
    <Box zIndex="98">
      <Slide direction="top" reverse in={true} transition={{ duration: 0.5, delay: 0.01 }}>
        <Box paddingTop="72px">
          <Alert variant="solid" status="warning">
          <AlertIcon ml={7} />
          <AlertTitle>I've got a new username!</AlertTitle>
            <AlertDescription>
              <Button as="a" variant="solid" background="#F6C776" textColor="black" href="https://tygr.dev/blog/username-migration">
                Learn more -&gt;
              </Button>
            </AlertDescription>
          </Alert>
        </Box>
      </Slide>
    </Box>
  )

  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="secondary">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">tygerxqt.</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/photography" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Photography
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Blog
                </Button>
              </NextLink>
              {/* <NextLink href="/account" passHref>
                <Button as="a" variant="solid" colorScheme='blue' fontSize="16px">
                  Account
                </Button>
              </NextLink> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <>
      <Box zIndex="99">
        <Slide
          direction="top"
          reverse
          in={true}
          transition={
            enableTransition
              ? { enter: { duration: 0.5, delay: 0.01 } }
              : { enter: { duration: 0, delay: 0 } }
          }
          background="black"
        >
        <Flex
            as="nav"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            px="3vw"
            py="3"
            borderBottom="0.5px solid #1e2029"
            background="black"
          >
          <NextLink href="/" passHref>
            <Image src={navURL} alt="tygr logo" width="220px" height="60px" />
          </NextLink>
          {isLargerThan768 ? (
            <Box color="textPrimary">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/photography" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Photography
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Blog
                </Button>
              </NextLink>
              {/* <NextLink href="/account" passHref>
                <Button as="a" variant="solid" colorScheme="blue" p="4" ml="3vw" fontSize="16px">
                  Account
                </Button>
              </NextLink>{" "} */}
              </Box>
            ) : (
              <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
            )}
            
            </Flex>
          </Slide>
        <NavbarDrawer />
      </Box>
      {/* {router.asPath === "/" && isLargerThan900 ? banner : <div />} */}
    </>
  );
}
