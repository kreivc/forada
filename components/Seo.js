import Head from "next/head";

export default function Seo() {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="shortcut icon" href="./flet.png" />

			{/* <!-- Primary Meta Tags --> */}
			<title>ForAda</title>
			<meta name="title" content="ForAda" />
			<meta
				name="description"
				content="ForAda is a community based token, which means the development of
							the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
			/>

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://forada.us/" />
			<meta property="og:title" content="ForAda" />
			<meta
				property="og:description"
				content="ForAda is a community based token, which means the development of
							the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
			/>
			<meta property="og:image" content="https://i.ibb.co/cyj8HqD/flet.png" />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://forada.us/" />
			<meta property="twitter:title" content="ForAda" />
			<meta
				property="twitter:description"
				content="ForAda is a community based token, which means the development of
							the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
			/>
			<meta
				property="twitter:image"
				content="https://i.ibb.co/cyj8HqD/flet.png"
			/>
		</Head>
	);
}
