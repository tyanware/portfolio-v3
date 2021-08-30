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
  position,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800)
  const isLargerThan900 = useMediaQuery(900)
  const isLargerThan1200 = useMediaQuery(1200)
  let imageSize = isLargerThan1200 ? '450px' : '250px'
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
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
                filter="invert(0.1)"
                w={{ base: '70px', md: '150px' }}
                position="absolute"
                top={{ base: '0', md: '-15' }}
                left={{ base: '-5', md: '-10' }}
                zIndex={0}
                alt=""
              ></Image>
              <Text
                color="button1"
                fontSize="display2"
                fontWeight="medium"
                position="relative"
                zIndex={1}
              >
                Hey there!, I'm-
              </Text>
            </Box>
            <Heading
              color="textPrimary"
              fontSize="display"
              lineHeight={'95%'}
              fontSize="display"
              color="displayColor"
              letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
              position="relative"
              zIndex={1}
            >
              tyger796.
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
                <Box>
                  Currently a Student from the UK.
                </Box>
              </Stack>
            </Text>
          </SlideFade>
          <SlideFade
            direction="top"
            in={true}
            transition={{ enter: { duration: 0.4, delay: 1.0 } }}
          >
            <Stack isInline spacing={4}>
              <Link href="https://github.com/tyger796" isExternal>
                <Button
                  leftIcon={<FaGithub color="#81A1C1" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                  onClick={() => handleClick('introduction_github')}
                >
                  Github
                </Button>
              </Link>
              <Link href="https://dsc.gg/tyger" isExternal>
                <Button
                  leftIcon={<FaDiscord color="#81A1C1" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                  onClick={() => handleClick('introduction_discord')}
                >
                  Discord
                </Button>
              </Link>
              <Link href="mailto:hello@tygr.dev" isExternal>
                <Button
                  leftIcon={<FaEnvelope fill="#81A1C1" />}
                  transition="0.3s"
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                  onClick={() => handleClick('introduction_email')}
                >
                  Email
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
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: imageSize, lg: '500px' }}
              maxH={{ base: imageSize, lg: '500px' }}
            >
              <Image
                src={isLargerThan900 ? "https://secure.gravatar.com/avatar/996bb6f3b26080c346c4a8745b9525fe?s=500" : ""}
                w="100%"
                h="100%"
                maxW={{ base: imageSize, lg: '500px' }}
                maxH={{ base: imageSize, lg: '500px' }}
                borderRadius="50"
                alt={isLargerThan900 ? "tyger796" : ""}
                pos="intrinsic"
              />
            </Box>
          </Flex>
        </SlideFade>
      </SimpleGrid>
    </>
  )
}
