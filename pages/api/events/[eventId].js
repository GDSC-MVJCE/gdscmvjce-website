async function handler(req, res) {
	if (req.method !== "GET") return res.status(405).end();

	try {
		const eventData = {
			eventId: 89264982,
			bannerImg:
				"https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww&w=1000&q=80",
			title: "Flutter Festival 2023 - Learn Android Development",
			description:
				"Android Study Jams, hosted by Google Developer Student Clubs (GDSC) chapters across the globe and in India, leverage peer-to-peer teaching to train a new generation of student Android developers. The program aims to help student developers build their careers and put them on a solid path towards earning an Associate Android Developers Certification. Three students from the GDSC community in India, Amsavarthan Lv, Rishi Balamurugan, and Sanjay S. went the extra kilometer to earn their certifications.Android Study Jams, hosted by Google Developer Student Clubs (GDSC) chapters across the globe and in India, leverage peer-to-peer teaching to train a new generation of student Android developers. The program aims to help student developers build their careers and put them on a solid path towards earning an Associate Android Developers Certification. Three students from the GDSC community in India, Aishwarya Lv, Rishi Balamurugan, and Sanjay S. went the extra kilometer to earn their certifications.",
			schedule: [
				{
					time: {
						start: Date.now(),
						end: Date.now()
					},
					sessionName: "Registration open",
					sessionDate: Date.now()
				},
				{
					time: {
						start: Date.now(),
						end: Date.now()
					},
					sessionName: "Day-1 Registration closed",
					sessionDate: Date.now()
				},
				{
					time: {
						start: Date.now(),
						end: Date.now()
					},
					sessionName: "Registration closed",
					sessionDate: Date.now()
				}
			],
			speakers: [
				{
					id: 96986984,
					image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/clayton_cook.jpg",
					name: "Shivam Sharma",
					title: "Technical Lead, GDSC",
					description:
						"Basics of Three.js and why he loves it. hello world, lorem ipsum , prisma , schema, python , hello world",
					profileLink: "https://chat.openai.com/"
				},
				{
					id: 96986982,
					image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/clayton_cook.jpg",
					name: "Shivam Sharma",
					title: "Technical Lead, GDSC",
					description:
						"Basics of Three.js and why he loves it. hello world, lorem ipsum , prisma , schema, python , hello world",
					profileLink: "https://chat.openai.com/"
				},
				{
					id: 96986981,
					image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/clayton_cook.jpg",
					name: "Shivam Sharma",
					title: "Technical Lead, GDSC",
					description:
						"Basics of Three.js and why he loves it. hello world, lorem ipsum , prisma , schema, python , hello world",
					profileLink: "https://chat.openai.com/"
				}
			],
			date: {
				start: Date.now(),
				end: Date.now()
			},
			venue: "Rajalakshmi Seminar Hall, MVJCE",
			status: "Open",
			registrationLink: "https://chat.openai.com/"
		};

		return res.status(200).json(eventData);
	} catch (error) {
		console.log(error);
		return res.status(400).end();
	}
}

export default handler;
