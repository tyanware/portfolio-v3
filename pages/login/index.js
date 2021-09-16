import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden
} from "@chakra-ui/react";
import * as React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Card } from "../../components/SignupPage/Card";
import { DividerWithText } from "../../components/LoginPage/DividerWithText";
import { Link } from "../../components/LoginPage/Link";
import { LoginForm } from "../../components/LoginPage/LoginForm";
import Head from 'next/head';

export const LogInPage = () => (
  <>
    <Head>
      <title>Log In</title>
    </Head>
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Sign in
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Don&apos;t have an account?</Text>
          <Link href="/signup">Sign up</Link>
        </Text>
        <Card>
          <LoginForm />
          <DividerWithText mt="6">or continue with</DividerWithText>
          <SimpleGrid mt="6" columns={2} spacing="2">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Discord</VisuallyHidden>
              <FaDiscord />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub />
            </Button>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  </>
);

export default LogInPage;
