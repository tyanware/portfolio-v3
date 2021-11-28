import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/react'
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react'
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
      <Heading size="lg" textAlign="center" h={20}>Personal Info</Heading>
      <Stack align="center" spacing={6}>
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
      </Stack>

      <SimpleGrid maxWidth="md" columns={2} spacing={4}>
        <Button onClick={() => updateProfile({ username, website, avatar_url })} disabled={loading}>{loading ? 'Loading...' : 'Update'}</Button>
        <Button onClick={() => supabase.auth.signOut()}>Log out</Button>
      </SimpleGrid>
    </>
  )
}
