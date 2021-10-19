import Head from "next/head";
import Hero from "../components/Hero";
import Why from "../components/Why";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Timeline from "../components/Timeline";
import HowToBuy from "../components/HowToBuy";
import Seo from "../components/Seo";

export default function Home() {
	return (
		<>
			<Seo />
			<Hero />
			<Why />
			<About />
			<Tokenomics />
			<Timeline />
			<HowToBuy />
		</>
	);
}
