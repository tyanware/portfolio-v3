import React, { useEffect } from "react";
import { Flex, Stack, Text, chakra, Link } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ReactGA from "react-ga";

const Container = ({ enableTransition, children }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_UA_CODE);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navbar enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Stack alignItems="center" mt={10} mb={5}>
        <Text textAlign="center" fontSize="sm">
          Designed and Developed by tyger796.
          <br />
          Built with{" "}
          <Link
            href="https://nextjs.org/"
            fontWeight="semibold"
            color="button1"
          >
            Next.js
          </Link>{" "}
          &{" "}
          <Link
            href="https://chakra-ui.com/"
            fontWeight="semibold"
            color="button1"
          >
            Chakra UI
          </Link>
          . Hosted on{" "}
          <Link
            href="https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=banner&utm_campaign=next-website"
            fontWeight="semibold"
            color="button1"
          >
            Vercel
          </Link>
          .
        </Text>
      </Stack>
    </>
  );
};

export default Container;
