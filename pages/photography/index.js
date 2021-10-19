import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'

import Container from '../../components/Container'
import Head from 'next/head'
import ReactPlayer from 'react-player'
import useMediaQuery from '../../hook/useMediaQuery'
import Category from '../../components/photography/CategoryCard'

export default function Photography({ photos }) {
    const isLargerThan750 = useMediaQuery(750);
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
                        {' '}
                        <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
                            Photography.
                        </Heading>
                        <Text fontSize={{ base: '14px', md: '16px' }}>
                            Here's an overview of my photos.
                        </Text>
                        <Divider />
                        <SimpleGrid columns={{ sm: 1, md: 2 }}>
                            {/* <Category
                                imageURL="https://images.ctfassets.net/ibmu74c30nyl/6BXw4039Zxd8ekNo3YL6PG/9fbc1be44e909b836952b83f260d3a38/DSC_0006.JPG"
                                text="/nature"
                            /> */}
                        </SimpleGrid>
                    </Stack>
                </Stack>
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