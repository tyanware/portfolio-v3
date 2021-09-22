import { useState, useEffect } from 'react'
import { supabase } from '../../util/supabaseClient'
import Auth from '../../components/Auth'
import Account from '../../components/Account'
import Container from "../../components/account/Container"
import { Stack } from '@chakra-ui/layout'

export default function Home() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <>
            <Container>
                <Stack
                    as="main"
                    spacing="144px"
                    justifyContent="center"
                    alignItems="flex-start"
                    px={{ base: '5vw', md: '10vw' }}
                    mt={{ base: '15vh', md: '22.5vh' }}
                >
                        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
                </Stack>
            </Container>
        </>
    )
}