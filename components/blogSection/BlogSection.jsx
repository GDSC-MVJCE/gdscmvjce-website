import React from "react";
import Image from "next/image";
import Typography from "../display/typography/Typography";
import Avatar from "../avatar/Avatar";
import { useTheme } from "styled-components";
import {
	MainContainer,
	CardContainer,
	BlogCard,
	TopContainer,
	BottomContainer,
	Author,
	Date
} from "./BlogSection.styled";
import Tilt from "react-parallax-tilt";

const blogs = [
	{
		image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_fMd5BWp.png",

		authorImage: "https://avatars.githubusercontent.com/u/111264028?v=4",

		title: "Getting Started With Android : Roadmap",

		author: {
			name: "Shivam Sharma",
			image: "https://avatars.githubusercontent.com/u/111264028?v=4"
		},

		date: "July 26, 2023"
	},
	{
		image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_fMd5BWp.png",

		title: "Getting Started With Android : Roadmap",

		author: {
			name: "Shivam Sharma",
			image: "https://avatars.githubusercontent.com/u/111264028?v=4"
		},

		date: "July 26, 2023"
	},
	{
		image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_fMd5BWp.png",

		title: "Getting Started With Android : Roadmap",

		author: {
			name: "Shivam Sharma",
			image: "https://avatars.githubusercontent.com/u/111264028?v=4"
		},
		date: "July 26, 2023"
	}
];

function BlogSection() {
	const theme = useTheme();

	const blogElements = blogs.map((blog, index) => (
		<Tilt key={index}>
			<BlogCard>
				<TopContainer>
					<Image
						src={blog.image}
						width={290}
						height={290}
						style={{
							borderRadius: "6px",
							margin: "0 auto"
						}}
						alt="blog image"
					/>
					<Typography variant="h5">{blog.title}</Typography>
				</TopContainer>
				<BottomContainer>
					<Author>
						<Avatar
							url={blog.author.image}
							size="xs"
							borderColor={theme?.colors.brandBlue}
							borderWidth={2}
							blur={false}
						/>
						<Typography variant="bodySmall">
							{blog.author.name}
						</Typography>
					</Author>
					<Date>
						<Typography variant="bodySmall">{blog.date}</Typography>
					</Date>
				</BottomContainer>
			</BlogCard>
		</Tilt>
	));

	return (
		<MainContainer>
			<Typography variant="h1">Blogs from GDSC MVJCE</Typography>
			<CardContainer>{blogElements}</CardContainer>
		</MainContainer>
	);
}

export default BlogSection;
