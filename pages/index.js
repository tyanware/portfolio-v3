import Head from "next/head";
import { Stack } from "@chakra-ui/react";
import Container from "../components/Container";
import Introduction from "../components/Introduction";
import FeaturedProjects from "../components/FeaturedProjects";
import PhotographyHighlights from "../components/PhotographyHighlights";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";

export default function Index({ projects, photos }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>tygerxqt.</title>
          <meta name="title" content="tygerxqt" />
          <meta name="keywords" content="tygerxqt, tygerxqt website" />
          <meta
            name="description"
            content="tygerxqt, a self-taught Web/IOT Developer."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tygr.dev" />
          <meta property="og:title" content="tygerxqt." />
          <meta
            property="og:description"
            content="tygerxqt, a self-taught Web/IOT Developer"
          />
          <meta property="og:image" content="https://i.imgur.com/7hLIhHt.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tygr.dev/" />
          <meta property="twitter:title" content="tygerxqt" />
          <meta
            property="twitter:description"
            content="tygerxqt, a self-taught Web/IOT Developer."
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
          px={{ base: "5vw", md: "10vw" }}
          mt={{ base: "20vh", md: "33.75vh" }}
        >
          <Introduction />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          <PhotographyHighlights photos={photos} />
          <ContactMe />
        </Stack>
      </Container>
    </>
  );
}

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "featuredProjects",
    order: "fields.order"
  });

  let data2 = await client.getEntries({
    content_type: "photographyHighlights",
    order: "sys.updatedAt"
  });

  return {
    props: {
      projects: data.items,
      photos: data2.items.reverse()
    }
  };
}
