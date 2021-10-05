import {
    Link,
    Stack,
    Heading,
    Text,
    SimpleGrid,
    Box,
} from '@chakra-ui/layout'
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
                                Photography highlights 📸
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
                            Here's some of my projects that I have worked on.
                        </Text>
                        {/* <NextLink href="/photography">
                            <Link>
                                <Text
                                    display={{ base: 'none', md: 'block' }}
                                    fontSize={{ base: 'md', md: 'xl' }}
                                >
                                    Explore more &rarr;
                                </Text>
                            </Link>
                        </NextLink> */}
                    </Stack>
                </SlideUpWhenVisible>
                <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
                    <SlideUpWhenVisible threshold={0.5}>
                        <Cards
                            imageURL={'https:' + photos[0].fields.image.fields.file.url}
                        />
                    </SlideUpWhenVisible>
                    <SlideUpWhenVisible threshold={0.5}>
                        <Box>
                            <Cards
                                imageURL={'https:' + photos[1].fields.image.fields.file.url}

                            />
                        </Box>
                    </SlideUpWhenVisible>
                    <SlideUpWhenVisible threshold={0.5}>
                        <Cards
                            imageURL={'https:' + photos[2].fields.image.fields.file.url}
                        />
                    </SlideUpWhenVisible>
                    <SlideUpWhenVisible threshold={0.5}>
                        <Box>
                            <Cards
                                imageURL={'https:' + photos[3].fields.image.fields.file.url}

                            />
                        </Box>
                    </SlideUpWhenVisible>
                </SimpleGrid>
            </Stack>
        </>
    )
}
