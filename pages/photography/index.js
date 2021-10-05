import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'

// import Cards from '../../components/photography/Card'
import Container from '../../components/Container'
import Head from 'next/head'

export default function Photography({ photos }) {
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
                            Coming soon...
                        </Heading>
                        {/* <Text fontSize={{ base: '14px', md: '16px' }}>
                            Here's an overview of my photos.
                        </Text> */}
                        <Divider />
                    </Stack>
                    {/* <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                        {photos.map((photos) => (
                                <Cards
                                key={photos.fields.title}
                                imageURL={'https:' + photos.fields.image.fields.file.url}
                                />
                        ))}
                    </SimpleGrid> */}
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
            photoOverview: data.items.reverse(),
        },
    }
}