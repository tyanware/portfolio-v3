import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { SimpleGrid, Stack, Box, Heading, HStack } from '@chakra-ui/layout'
import { SlideFade } from '@chakra-ui/transition'
import { useState, useEffect } from 'react'
import { supabase } from '../util/supabaseClient'

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
			<Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
				<SlideFade
					direction="top"
					in={true}
					transition={{ enter: { duration: 0.4, delay: 0.7 } }}
				>
					<Box position="relative">
						<Heading
							color="white"
							fontSize="lg"
							fontWeight="medium"
							whiteSpace="pre-wrap"
						>
							Account
							</Heading>
						<FormControl id="email">
							<FormLabel>Email</FormLabel>
							<Input maxWidth="lg" isDisabled value={session.user.email}></Input>
						</FormControl>

						<FormControl id="username">
							<FormLabel>Username</FormLabel>
							<Input maxWidth="lg" value={session.user.username} value={username || ''} onChange={(e) => setUsername(e.target.value)}></Input>
						</FormControl>

						<FormControl id="website">
							<FormLabel>Website</FormLabel>
							<Input maxWidth="lg" value={session.user.website} value={website || ''} onChange={(e) => setWebsite(e.target.value)}></Input>
						</FormControl>

						<HStack spacing="5">
							<Button onClick={() => updateProfile({ username, website, avatar_url })} disabled={loading}>{loading ? 'Loading...' : 'Update'}</Button>
							<Button onClick={() => supabase.auth.signOut()}>Log out</Button>
						</HStack>
					</Box>
				</SlideFade>		  
			</Stack>
    </>
  )
}
