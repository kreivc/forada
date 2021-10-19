import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function Footer() {
	return (
		<Flex
			h={{ base: "15vh", md: "10vh" }}
			bg="#1969ff"
			color="white"
			alignItems="center"
			justifyContent="space-evenly"
			flexDir={{ base: "column", md: "row" }}
		>
			<Flex gridGap={7} alignItems="center">
				<HStack>
					<Image
						src={"/flet2.png"}
						alt={"logoForada"}
						width="140"
						height="50"
						objectFit="cover"
					/>
					<Text fontSize="lg" fontWeight="bold" color="white">
						ForAda
					</Text>
				</HStack>
				<Text fontWeight="semibold" fontSize="sm">
					&copy; Copyright {new Date().getFullYear()}, Forada
				</Text>
			</Flex>

			<HStack spacing="5" display="flex">
				<Link
					to="about"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					style={{ cursor: "pointer" }}
				>
					About
				</Link>
				<Link
					to="tokenomics"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					style={{ cursor: "pointer" }}
				>
					Tokenomics
				</Link>
				<Link
					to="timeline"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					style={{ cursor: "pointer" }}
				>
					Roadmap
				</Link>
				<Link
					to="howtobuy"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					style={{ cursor: "pointer" }}
				>
					How To Buy
				</Link>
			</HStack>
		</Flex>
	);
}
