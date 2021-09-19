import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack
} from "@chakra-ui/react";
import * as React from "react";
import { PasswordField } from "../LoginPage/PasswordField";

export const SignupForm = (props) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault(); // login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign Up
      </Button>
    </Stack>
  </chakra.form>
);
