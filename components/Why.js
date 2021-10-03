import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Why() {
	return (
		<Box h="100vh" p="20">
			<VStack>
				<Text color="#1969ff" fontWeight="semibold" fontSize="lg">
					Why Forada
				</Text>
				<Text color="#2b3954" fontWeight="bold" fontSize="4xl">
					Speed, security, scalability
				</Text>
			</VStack>
		</Box>
	);
}
