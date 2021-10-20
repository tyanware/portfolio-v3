import { Stack, ScaleFade, Text, Link } from '@chakra-ui/react'
import GoCloudDownload from 'react-icons/go'
import Image from '../ChakraNextImage'

export default function CategoryCard({ imageURL, title, slug }) {
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
				<Link href={"/photography" + slug}>
					<Image
						width={1250}
						height={600}
						w="auto"
						h="auto"
						src={imageURL}
						transition="0.3s"
						placeholder="blur"
						_hover=""
						borderRadius="10px 10px 0px 0px"
						placeholder="blur"
						alt="project image"
					></Image>
				</Link>
				<Stack px={4} py={2}>
					<Stack isInline justifyContent="space-between" alignItems="center">
						<Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor">
							{title}
						</Text>
					</Stack>
				</Stack>
			</ScaleFade>
		</Stack>
	)
}