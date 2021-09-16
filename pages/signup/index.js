import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Card } from "../../components/SignupPage/Card";
import { Link } from "../../components/LoginPage/Link";
import { SignupForm } from "../../components/SignupPage/SignupForm";
import Head from "next/head"

export const SignUpPage = () => (
  <>
    <Head>
      <title>Sign Up</title>
    </Head>
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Create an account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Already have an account?</Text>
          <Link href="/login">Log in</Link>
        </Text>
        <Card>
          <SignupForm />
        </Card>
      </Box>
      </Box>
    </>
);

export default SignUpPage;
