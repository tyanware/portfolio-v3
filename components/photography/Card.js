import { Stack, ScaleFade } from '@chakra-ui/react'
import Image from '../ChakraNextImage'

export default function Cards({ imageURL }) {
    return (
        <Stack
            bg="secondary"
            borderRadius="10px"
        >
            <ScaleFade in={true} transition={{ duration: 1 }}>
                <Image
                    width={6016}
                    height={4000}
                    placeholder="blur"
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
