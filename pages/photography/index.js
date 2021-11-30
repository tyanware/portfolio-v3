import { Stack, Heading, Text, SimpleGrid, Divider, Center, Box, Select, RadioGroup, Radio, List, ListItem, ListIcon } from '@chakra-ui/react'

import Cards from '../../components/PhotographyCard'
import Container from '../../components/Container'
import Head from 'next/head'
import { MdCheckCircle } from 'react-icons/md'

export default function Photography({ photos }) {
    const irl = [];
    const glitch = [];

    photos.map(x => {
        if (x.fields.category === 'irl') {
            x.fields.images.forEach((e) => {
                irl.push(e.fields.file)
            })
        }
    });

    photos.map(x => {
        if (x.fields.category === 'glitch') {
            x.fields.images.forEach((e) => {
                glitch.push(e.fields.file)
            })
        }
    });
    
    return (
        <>
            <Container>
                <Head>
                    <title>Photography</title>
                    <meta name="title" content="Photos" />
                    <meta
                        name="description"
                        content="tyger796, a self-taught Web/IOT Developer."
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.tygr.dev/photos" />
                    <meta
                        property="og:title"
                        content="tyger796"
                    />
                    <meta
                        property="og:description"
                        content="tyger796, a self-taught Web/IOT Developer."
                    />
                    <meta property="og:image" content="https://i.imgur.com/7hLIhHt.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta
                        property="twitter:url"
                        content="https://tygr.dev/photos"
                    />
                    <meta
                        property="twitter:title"
                        content="tyger796"
                    />
                    <meta
                        property="twitter:description"
                        content="tyger796, a self-taught Web/IOT Developer."
                    />
                    <meta
                        property="twitter:image"
                        content="https://i.imgur.com/7hLIhHt.png"
                    />
                </Head>
                <Stack
                    spacing={10}
                    justifyContent="center"
                    px={['5vw', '10vw']}
                    my={['15vh', '15vh', '22.5vh', '22.5vh']}
                >
                    <Stack spacing={5}>
                        {" "}
                        <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
                            Photography.
                        </Heading>
                        <Text fontSize={{ base: '14px', md: '16px' }}>
                            An overview of my photos.
                        </Text>
                        <Divider />

                        <Center paddingBottom='20px' paddingTop='20px'>
                            <Box bg='white'>
                                <Heading size='lg' color='black'>
                                    In real life.
                                </Heading>
                            </Box>
                        </Center>

                        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 16, lg: 8 }} paddingBottom='100px'>
                            {irl.map((x) => (
                                <Cards
                                    imageURL={'https:' + x.url}
                                />
                            ))}
                        </SimpleGrid>

                        <Center paddingBottom='20px' paddingTop='20px'>
                            <Box bg='white'>
                                <Heading size='lg' color='black'>
                                    Glitched into Reality.
                                </Heading>
                            </Box>
                        </Center>

                        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 16, lg: 8 }} paddingBottom='100px'>
                            {glitch.map((x) => (
                                <Cards
                                    imageURL={'https:' + x.url}
                                />
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Stack>
                <Center>
                    <Stack spacing={5} paddingBottom={20}>
                        <Heading size='md'>
                        All photos are available to be used freely.
                        </Heading>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                All photos can be downloaded and used for free
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                Commercial and non-commercial purposes
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                No permission needed (though attribution is appreciated!)
                            </ListItem>
                        </List>
                    </Stack>
                </Center>
            </Container>
        </>
    )
}

let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: 'photos',
        order: 'sys.updatedAt',
    })
    return {
        props: {
            photos: data.items.reverse(),
        },
    }
}