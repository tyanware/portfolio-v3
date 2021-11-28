import {
    Link,
    Stack,
    Heading,
    Text,
    SimpleGrid,
    Box,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Cards from './photography/Card'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function PhotographyHighlights({ photos }) {
    return (
        <>
            <Stack spacing={8} w="full">
                <SlideUpWhenVisible threshold={0.1}>
                    <Stack spacing={1}>
                        <Stack
                            isInline
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Heading
                                fontSize={{ base: 'xl', md: '2xl' }}
                                color="displayColor"
                            >
                                Photography.
                            </Heading>
                            <NextLink href="/projects" passHref>
                                <Link>
                                    <Text
                                        display={{ base: 'block', md: 'none' }}
                                        fontSize={{ base: 'sm', md: 'xl' }}
                                        color="button1"
                                        _hover={{ color: 'button2' }}
                                    >
                                        {' '}
                                        Explore &rarr;
                                    </Text>
                                </Link>
                            </NextLink>
                        </Stack>
                        <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
                            Here's some of my photos I have taken.
                        </Text>
                        <NextLink href="/photography">
                            <Link>
                                <Text
                                    display={{ base: 'none', md: 'block' }}
                                    fontSize={{ base: 'md', md: 'xl' }}
                                >
                                    Explore more &rarr;
                                </Text>
                            </Link>
                        </NextLink>
                    </Stack>
                </SlideUpWhenVisible>
                <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
                    <SlideUpWhenVisible threshold={0.5}>
                        <Cards
                            imageURL={'https://images.ctfassets.net/ibmu74c30nyl/1ywsrdqy3h57uTkBvv6ylg/fdeb9a209086e00f0544ca949174384e/DSC_0042.JPG'}
                        />
                    </SlideUpWhenVisible>
                    <SlideUpWhenVisible threshold={0.5}>
                        <Box>
                            <Cards
                                imageURL={'https://images.ctfassets.net/ibmu74c30nyl/2FEPfg5JLE9ZT01Q0gVKqh/e9efe15d13c1b45538b8e5248b03f971/DSC_0041.JPG'}
                            />
                        </Box>
                    </SlideUpWhenVisible>
                    <SlideUpWhenVisible threshold={0.5}>
                        <Cards
                            imageURL={'https://images.ctfassets.net/ibmu74c30nyl/6BXw4039Zxd8ekNo3YL6PG/9fbc1be44e909b836952b83f260d3a38/DSC_0006.JPG'}
                        />
                    </SlideUpWhenVisible>
                    <SlideUpWhenVisible threshold={0.5}>
                        <Box>
                            <Cards
                                imageURL={'https://images.ctfassets.net/ibmu74c30nyl/1II4T8jnPGmJZOBPUdKeEG/cd1d47720531cbed2a8e16fc16bc1438/Apature.png'}
                            />
                        </Box>
                    </SlideUpWhenVisible>
                </SimpleGrid>
            </Stack>
        </>
    )
}
