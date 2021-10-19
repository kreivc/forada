import TimelineElement from "./TimelineElement";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Heading, Text, Box } from "@chakra-ui/react";

export default function Timeline() {
	const Number = ({ id }) => {
		return <div>{id}</div>;
	};

	return (
		<div className="timeline" id="timeline" style={{ overflowX: "hidden" }}>
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
					fill="white"
					fillOpacity="1"
				></path>
			</svg>
			<h1 className="title">Roadmap</h1>
			<VerticalTimeline>
				{TimelineElement.map((element) => {
					let isSuccessIcon = element.icon === "success";
					let showButton =
						element.buttonText !== undefined &&
						element.buttonText !== null &&
						element.buttonText !== "";

					return (
						<VerticalTimelineElement
							key={element.key}
							date={element.date}
							dateClassName="date"
							iconStyle={{
								backgroundColor: `${isSuccessIcon ? "#01bf71" : "#1969ff"}`,
							}}
							icon={<Number id={element.id} />}
							iconClassName="iconQ"
						>
							<Heading className="vertical-timeline-element-title">
								{element.end}
							</Heading>
							<Heading className="vertical-timeline-element-title title3">
								{element.title}
							</Heading>
							<Heading className="vertical-timeline-element-subtitle">
								{element.location}
							</Heading>
							<Text id="description">{element.description}</Text>
							<Text id="descriptionR">{element.description1}</Text>
							<Text id="descriptionR">{element.description2}</Text>
							<Text id="descriptionR">{element.description3}</Text>
							<Text id="descriptionRE">{element.description4}</Text>
							{showButton && (
								<Box
									as="span"
									className={`${
										isSuccessIcon ? "button success" : "button cms"
									}`}
								>
									{element.buttonText}
								</Box>
							)}
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
}
