import {
	Container,
	SimpleGrid,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
	Box,
} from "@chakra-ui/react";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { IoWalletSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { GiPresent } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { CgEditBlackPoint } from "react-icons/cg";

const Feature = ({ text, icon, iconBg }) => {
	return (
		<Stack direction={"row"} align={"center"}>
			<Flex
				w={8}
				h={8}
				align={"center"}
				justify={"center"}
				rounded={"full"}
				bg={iconBg}
			>
				{icon}
			</Flex>
			<Text fontWeight={600} color="#2b3954">
				{text}
			</Text>
		</Stack>
	);
};

export default function SplitWithImage() {
	const container = useRef();

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../assets/Coinfall.json"),
		});
	}, []);
	return (
		<Box bg="white">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				height="60px"
				width="100%"
			>
				<path
					d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
					className="shape-fill"
					fill="#f6f9fc"
					fillOpacity="1"
				></path>
			</svg>
			<Container maxW={"5xl"} py={12} id="tokenomics">
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					<Stack spacing={4} data-aos="fade-right">
						<Heading color="#1969ff">How About Tokenomics?</Heading>
						<Text color={"#516172"} fontSize={"lg"}>
							We know everyone wants to make a profit, so we created the best
							tokenomics. This way holders can get the maximum out of it.
						</Text>
						<Stack
							spacing={4}
							divider={
								<StackDivider
									borderColor={useColorModeValue("gray.100", "gray.700")}
								/>
							}
						>
							<Feature
								icon={
									<Icon as={IoWalletSharp} color={"yellow.500"} w={5} h={5} />
								}
								iconBg={useColorModeValue("yellow.100", "yellow.900")}
								text={"5% Maximum Wallet"}
							/>
							<Feature
								icon={
									<Icon as={GrTransaction} color={"green.500"} w={5} h={5} />
								}
								iconBg={useColorModeValue("green.100", "green.900")}
								text={"3% Maximum Transaction"}
							/>
							<Feature
								icon={<Icon as={GiPresent} color={"purple.500"} w={5} h={5} />}
								iconBg={useColorModeValue("purple.100", "purple.900")}
								text={"6% ADA Rewards"}
							/>
							<Feature
								icon={
									<Icon as={HiSpeakerphone} color={"blue.500"} w={5} h={5} />
								}
								iconBg={useColorModeValue("blue.100", "blue.900")}
								text={"4% Marketing Fee"}
							/>
							<Feature
								icon={
									<Icon as={CgEditBlackPoint} color={"red.500"} w={5} h={5} />
								}
								iconBg={useColorModeValue("red.100", "red.900")}
								text={"3% Liquidity Provider"}
							/>
						</Stack>
					</Stack>
					<Flex data-aos="flip-right">
						<div className="container" ref={container}></div>
					</Flex>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
