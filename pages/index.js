import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import PhotographyHighlights from '../components/PhotographyHighlights'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

export default function Index({ projects, photos }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>tyger796.</title>
          <meta name="title" content="tyger796" />
          <meta name="keywords" content="tyger796, tyger796 website" />
          <meta
            name="description"
            content="tyger796, a self-taught Web/IOT Developer learning JavaScript and Python."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tygr.dev" />
          <meta
            property="og:title"
            content="tyger796."
          />
          <meta
            property="og:description"
            content="tyger796, a self-taught Web/IOT Developer learning JavaScript and Python."
          />
          <meta property="og:image" content="https://i.imgur.com/7hLIhHt.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tygr.dev/" />
          <meta
            property="twitter:title"
            content="tyger796"
          />
          <meta
            property="twitter:description"
            content="tyger796, a self-taught Web/IOT Developer learning JavaScript and Python."
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/7hLIhHt.png"
          />
          
        </Head>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          <PhotographyHighlights photos={photos} />
          <ContactMe />
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
    content_type: 'featuredProjects',
    order: 'fields.order',
  })

  let data2 = await client.getEntries({
    content_type: 'photographyHighlights',
    order: 'sys.updatedAt',
  })

  return {
    props: {
      projects: data.items,
      photos: data2.items.reverse(),
    },
  }
}
