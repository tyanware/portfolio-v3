import { Stack, ScaleFade, Box } from '@chakra-ui/react'
import Image from '../ChakraNextImage'

export default function Cards({ imageURL }) {
    return (
        <Stack
            borderRadius="10px"
        >
            <ScaleFade in={true} transition={{ duration: 1 }}>
                <Box>
                    <Image
                        width={6016}
                        height={4000}
                        placeholder="blur"
                        w="auto"
                        h="auto"
                        src={imageURL}
                        borderRadius="10px"
                        alt="image"
                    ></Image>
                </Box>
            </ScaleFade>
        </Stack>
    )
}
