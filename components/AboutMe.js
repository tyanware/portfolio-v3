import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'


export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const isLargerThan1200 = useMediaQuery(1200)

  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover trigger="hover" placement="right">
            <PopoverTrigger>
              <chakra.span
                color="button1"
                cursor="help"
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="textSecondary" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              About Me.
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hi! I'm tyger, I've been close to a computer since an
              early age, and been passionate about it ever since. <br />
              <br />
              I really liked to build stuff using
              <MoreInfo
                text="no-code tools"
                content="I used to make games without code using Scratch, and build simple websites with Wix back in primary school."
              />
              back in 2013, and from that, I self-taught myself how to code.
              Fast-forward to today, I program in various languages like {' '}
              <MoreInfo
                text="JavaScript,"
                content="JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat."
              />
              <MoreInfo
                text="HTML, CSS"
                content="The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
              />
              and
              <MoreInfo
                text="Python."
                content="Python is an interpreted high-level general-purpose programming language."
              /> 
              <br />
              I'm interested in building something helpful and
              automate tasks with code, currently focused on
              <MoreInfo
                text="Web Development,"
                content="Building web-apps using Javascript Frameworks (React.js and Next.js)"
              />
              <MoreInfo
                text="Discord bots,"
                content="Making bots to help protect my servers and make it more interesting for members with fun and economy commands (NodeJS and discord.js)"
              />
              and I anticipate entering the game development area soon as well!
              <br />
              <br />
              When I'm not working on projects, I play video games,
              watch some anime, or if the weather's good, I go out on a bike ride with my friends!
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        {/* <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://i.imgur.com/WTmPP32.jpg"
                w="100%"
                maxW={{ base: '300px', lg: '350px' }}
                maxH={{ base: '300px', lg: '350px' }}
                borderRadius="50"
                alt="tyger796"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible> */}
      </SimpleGrid>
    </>
  )
}
