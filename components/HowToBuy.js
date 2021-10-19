import React from "react";
import {
	Box,
	Container,
	SimpleGrid,
	Stack,
	Heading,
	Text,
	Flex,
	Image,
	Button,
} from "@chakra-ui/react";

export default function HowToBuy() {
	return (
		<Box bg="white" id="howtobuy">
			<Container maxW={"5xl"} py={12}>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					<Stack
						spacing={4}
						d="flex"
						flexDir="column"
						alignItems="flex-start"
						justifyContent="center"
						data-aos="fade-down-right"
					>
						<Heading color="#1969ff" fontSize="6xl" fontWeight="extrabold">
							How to buy?
						</Heading>
						<Text color={"#516172"} fontSize={"lg"}>
							Dont forget to connect your wallet to Pancakeswap, then copy
							Adaconda address on the landing page above and swap. Just hold and
							enjoy a huge cumulative gain.
						</Text>
						<Flex
							gridGap="4"
							flexDir={{ base: "column", md: "row" }}
							w={{ base: "full", md: "auto" }}
						>
							<Button
								fontSize="xl"
								p="7"
								color="#2b3954"
								as="a"
								href="https://pancakeswap.finance/"
								target="_blank"
								_focus={{ outline: "none" }}
							>
								Buy Now
							</Button>
							<Button
								fontSize="xl"
								p="7"
								color="#2b3954"
								as="a"
								href="https://poocoin.app/"
								target="_blank"
								_focus={{ outline: "none" }}
							>
								Chart
							</Button>
						</Flex>
					</Stack>
					<Box
						d="flex"
						alignItems="center"
						justifyContent="center"
						data-aos="flip-left"
					>
						<Image src="/Howtobuy_mockup.png" alt="logo_howto" w="300px" />
					</Box>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
