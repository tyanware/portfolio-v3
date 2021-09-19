import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    useColorModeValue,
    FormHelperText,
    Text,
    chakra,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Divider
} from "@chakra-ui/react";
import { useState } from 'react'
import { supabase } from '../util/supabaseClient'
import { DividerWithText } from "./account/DividerWithText";
import { Card } from "./account/Card";
import Head from 'next/head'
import { useRouter } from "next/router";

export default function Auth() {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (email) => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Head>
                <title>Nord Account</title>
            </Head>
            <Box
                bg={useColorModeValue("gray.50", "inherit")}
                minH="100vh"
                py="12"
                px={{ base: "4", lg: "8" }}
            >
                <Box maxW="md" mx="auto">
                    <Heading textAlign="center" h={20} size="xl" fontWeight="extrabold">
                        Nord Accounts
                    </Heading>
                    <Card>
                        <chakra.form
                            onSubmit={(e) => {
                                e.preventDefault(); // login logic here
                                handleLogin(email);
                            }}
                        >
                            <Stack spacing="6">
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        isRequired
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <FormHelperText>Don't worry if you don't have an account already, we will create one for you.</FormHelperText>
                                </FormControl>
                                <SimpleGrid columns={2} spacing={4} maxWidth="md">
                                    <Button onClick={() => router.push('/')} colorScheme="blue" size="lg" fontSize="md">
                                        Go back
                                    </Button>
                                    <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                                        Sign in
                                    </Button>
                                </SimpleGrid>
                            </Stack>
                        </chakra.form>
                        <Divider />
                        <SimpleGrid mt="6" columns={1} spacing="0">
                            <Text fontSize="md" align="center">Note: This feature is in beta!</Text>
                        </SimpleGrid>
                    </Card>
                </Box>
            </Box>

            {/* <div>
                <input
                    className="inputField"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleLogin(email)
                    }}
                    className="block button"
                    disabled={loading}
                >
                    <span>{loading ? 'Loading' : 'Send magic link'}</span>
                </button>
            </div> */}
        </>
    )
}