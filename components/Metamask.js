import Mtm from "../assets/Metamask.png";
import Image from "next/image";
import React from "react";
import { Button } from "@chakra-ui/react";

export default function Metamask() {
	return (
		<>
			<Button
				disabled={true}
				rounded={"lg"}
				bg="#175fe6"
				color={"white"}
				_hover={{
					bg: "#1969ff",
				}}
				onClick={async () => {
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
				}}
			>
				<Image src={Mtm} alt="" width="20px" height="20px" /> &nbsp; Add to
				Metamask
			</Button>
		</>
	);
}
