import { Stack, ScaleFade } from '@chakra-ui/react'
import Image from '../ChakraNextImage'

export default function Cards({ imageURL }) {
    return (
        <Stack
            bg="secondary"
            borderRadius="10px"
            minH="320px"
            maxH="500px"
            border="1px"
            borderColor={{ base: '#333', md: 'borderColor' }}
        >
            <ScaleFade in={true} transition={{ duration: 1 }}>
                <Image
                    width={6016}
                    height={4000}
                    w="auto"
                    h="auto"
                    src={imageURL}
                    transition="0.3s"
                    borderRadius="10px"
                    alt="project image"
                ></Image>
            </ScaleFade>
        </Stack>
    )
}
