import React, { useEffect } from 'react'
import { Flex, Stack, Text } from '@chakra-ui/react'
import Navbar from './NavBar'
import ReactGA from 'react-ga'

const Container = ({ enableTransition, children }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_UA_CODE)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <Navbar enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
        <Text textAlign="center" align="end" fontSize="sm">
          Made by tyger796
        </Text>
    </>
  )
}

export default Container
