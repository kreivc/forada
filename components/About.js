import {
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	useBreakpointValue,
	Box,
} from "@chakra-ui/react";
import Image from "next/image";
// import AboutPic from "../assets/Adaconda.png";
import Metamask from "../components/Metamask";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function SplitScreen() {
	const container = useRef();
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../assets/fletter.json"),
		});
	}, []);

	return (
		<Box>
			<Stack
				id="about"
				align="center"
				minH={"100vh"}
				direction={{ base: "column", md: "row" }}
				bg="#f6f9fc"
			>
				<Flex
					p={8}
					flex={1}
					align={"center"}
					justify={"center"}
					data-aos="zoom-in-left"
				>
					<Stack spacing={5} w={"full"} maxW={"lg"}>
						<Text color="#1969ff" fontWeight="semibold" fontSize="xl">
							Forada Token
						</Text>
						<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
							<Text color="#2b3954">A new DeFi experience</Text>
						</Heading>
						<Text fontSize={{ base: "md", lg: "lg" }} color={"#516172"}>
							Forada is a community based token, which means the development of
							the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform.
						</Text>
						<Stack direction={{ base: "column", md: "row" }} spacing={4}>
							<Button
								as="a"
								rounded={"lg"}
								bg="#175fe6"
								color={"white"}
								_hover={{
									bg: "#1969ff",
								}}
								href="https://t.me/Adaconda"
								target="_blank"
							>
								Join Telegram
							</Button>
							<Metamask />
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1} data-aos="slide-right">
					<Box
						w={{ base: "300px", lg: "500px" }}
						h={{ base: "300px", lg: "500px" }}
						d="flex"
						alignItems="center"
					>
						{/* <Image alt={"Login Image"} objectFit={"cover"} src={AboutPic} /> */}
						<Box ref={container} w={{ base: "400px", md: "500px" }} />
					</Box>
				</Flex>
			</Stack>
		</Box>
	);
}
