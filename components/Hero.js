import {
	chakra,
	Box,
	Button,
	Stack,
	Text,
	Icon,
	Center,
	Flex,
	VStack,
	Circle,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { HiCursorClick } from "react-icons/hi";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-scroll";

export default function Hero() {
	const metamaskBtn = false;
	return (
		<Box
			bg="url('/bg-hero.svg') no-repeat center"
			bgSize="cover"
			h="100vh"
			d="flex"
			alignItems="center"
			id="home"
			pos="relative"
			flexDir="column"
		>
			<Box px={8} mx="auto" pos="absolute" top={{ base: "6", md: "36" }}>
				<Box
					w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
					mt="20"
					mx="auto"
					textAlign={{ base: "left", md: "center" }}
					data-aos="fade-up"
				>
					<chakra.h1
						mb={6}
						fontSize={{ base: "4xl", md: "6xl" }}
						fontWeight="bold"
						lineHeight="none"
						letterSpacing={{ base: "normal", md: "tight" }}
						color={"white"}
					>
						{/* All your{" "} */}
						<Text
							display={{ base: "block", lg: "inline" }}
							w="full"
							bgClip="text"
							bgGradient="linear(to-r, #4CBFF8, #41DFFF)"
							fontWeight="extrabold"
						>
							$ForAda,
						</Text>{" "}
						because forever doesn´t mean a thing.
					</chakra.h1>
					<chakra.p
						px={{ base: 0, lg: 24 }}
						mb={6}
						fontSize={{ base: "lg", md: "xl" }}
						color={"white"}
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
						modi nihil tempore ullam aliquid facilis nisi voluptatum odio amet,
						quam dolore odit nesciunt.
					</chakra.p>
					<Stack
						direction={{ base: "column", sm: "row" }}
						mb={{ base: 4, md: 8 }}
						spacing={2}
						justifyContent={{ sm: "left", md: "center" }}
					>
						<Link to="why" smooth={true} duration={500} spy={true} exact="true">
							<Button
								as="a"
								variant="solid"
								colorScheme="brand"
								display="inline-flex"
								alignItems="center"
								justifyContent="center"
								w={{ base: "full", sm: "auto" }}
								mb={{ base: 2, sm: 0 }}
								size="lg"
								cursor="pointer"
							>
								Get Started
								<Icon
									boxSize={5}
									ml={1}
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<ImArrowRight2 />
								</Icon>
							</Button>
						</Link>
						<Button
							as="a"
							colorScheme="gray"
							display="inline-flex"
							alignItems="center"
							justifyContent="center"
							w={{ base: "full", sm: "auto" }}
							mb={{ base: 2, sm: 0 }}
							size="lg"
							cursor="pointer"
						>
							Not Released yet
							<Icon boxSize={5} ml={1} viewBox="0 0 20 20" fill="currentColor">
								<HiCursorClick />
							</Icon>
						</Button>
					</Stack>
				</Box>
				<Box
					w={{ base: "full", md: 10 / 12 }}
					mx="auto"
					mt={20}
					textAlign="center"
				></Box>
			</Box>
			{/* -------- */}
			<Center
				pos="absolute"
				bottom={{ base: "10", md: "9" }}
				px={8}
				color="white"
				gridGap="5"
				flexDirection={{ base: "column", md: "row" }}
				w="max"
			>
				<Button
					rounded="full"
					bg="whiteAlpha.300"
					p="7"
					_hover={{ bg: "whiteAlpha.300" }}
				>
					<Flex
						alignItems="center"
						justifyContent="space-between"
						w={{ base: "250px", md: "220px" }}
						as="a"
						href="https://twitter.com/ForAdaBSC"
						target="_blank"
					>
						<VStack color="white" spacing="0" alignItems="flex-start">
							<Text>Twitter</Text>
							<Text>Follow for more update</Text>
						</VStack>
						<Circle fontSize="xl" p="3" bg="white" color="gray.800">
							<FiChevronRight />
						</Circle>
					</Flex>
				</Button>
				<Button
					rounded="full"
					bg="whiteAlpha.300"
					p="7"
					_hover={{ bg: "whiteAlpha.300" }}
				>
					<Flex
						alignItems="center"
						justifyContent="space-between"
						w={{ base: "250px", md: "220px" }}
					>
						<VStack color="white" alignItems="flex-start">
							<Text>Telegram</Text>
							<Text>Join for ICO info</Text>
						</VStack>
						<Circle fontSize="xl" p="3" bg="white" color="gray.800">
							<FiChevronRight />
						</Circle>
					</Flex>
				</Button>
				<Button
					rounded="full"
					bg="whiteAlpha.300"
					p="7"
					_hover={{ bg: "whiteAlpha.300" }}
					disabled={!metamaskBtn}
				>
					<Flex
						alignItems="center"
						justifyContent="space-between"
						w={{ base: "250px", md: "220px" }}
						onClick={async () => {
							if (metamaskBtn) {
								const provider = window.web3.currentProvider;
								provider.sendAsync(
									{
										method: "metamask_watchAsset",
										params: {
											type: "ERC20",
											options: {
												address: "0x301dfc30734c583d0049b0773e3edce94416690f",
												symbol: "Adaconda",
												decimals: 4,
												image: "https://i.ibb.co/twGcK9L/Anaconda-flipped.png",
											},
										},
										id: Math.round(Math.random() * 100000),
									},
									(err, added) => {
										console.log("provider returned", err, added);
										if (err || "error" in added) {
											this.setState({
												errorMessage: "There was a problem adding the token.",
												message: "",
											});
											return;
										}
										console.log("token added");
									}
								);
							}
						}}
					>
						<VStack color="white" alignItems="flex-start">
							<Text>Metamask</Text>
							<Text>Add to Metamask</Text>
						</VStack>
						<Circle fontSize="xl" p="3" bg="white" color="gray.800">
							<FiChevronRight />
						</Circle>
					</Flex>
				</Button>
			</Center>
		</Box>
	);
}
