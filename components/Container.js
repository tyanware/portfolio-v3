import React, { useEffect } from "react";
import { Flex, Stack, Text, Link } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Container = ({ enableTransition, children }) => {
  return (
    <>
      <Navbar enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Stack alignItems="center" mt={10} mb={5}>
        <Text textAlign="center" fontSize="sm">
          Designed and Developed by @tygerxqt
          <br />
          Profile Picture by{" "}
          <Link
            href="https://www.instagram.com/klxrka/"
            fontWeight="semibold"
            color="button1"
          >
            @klxrka 
          </Link>
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
