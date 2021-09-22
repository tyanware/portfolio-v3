import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    useColorModeValue,
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
            alert('Success! Please check your email.')
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
                                </FormControl>
                                <SimpleGrid columns={2} spacing={4} maxWidth="md">
                                    <Button onClick={() => router.push('/')} colorScheme="blue" size="lg" fontSize="md">
                                        Go back
                                    </Button>
                                    <Button type="submit" disabled={loading} colorScheme="blue" size="lg" fontSize="md">
                                        {loading ? 'Loading...' : 'Continue'}
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
        </>
    )
}