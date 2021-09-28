const Model = {
	landing: [
		{
			module: `loader`,
		},
		{
			module: `cookies`,
			accept: {
				message: `Can we use third-party cookies to give you the best experience on our website?`,
				button: `I agree`,
			},
			reject: {
				message: `If you tired from third-party cookies, just tell us:`,
				button: `Stop tracking`,
			},
		},
		{
			module: `landing`,
			about: `The most advanced all-in-one human input device in the world!`,
			portrait: `NmiezBxf7Fg`,
			landscape: `TA_t3FcigRw`,
		},

		{
			module: `title`,
			title: `You like Touchboard?`,
			sub: `Or you want to test the Prototype? Add yourself to the waitlist to tell us what you think, make an appointment or receive news!`,
		},

		{
			module: `preorder`,
			message: 'Join the Waitlist',
			url: `https://docs.google.com/forms/d/e/1FAIpQLSff-NAfUUdyCItetuKiIK4aBEf5LOWDTUZkuwCjOo5Bd0mo1A/viewform?usp=sf_link`,
		},

		// {
		// 	module: `product`,
		// 	app: 'context',
		// 	length: 5,
		// },
		//
		// {
		// 	module: `product`,
		// 	app: 'spotify',
		// 	length: 6,
		// },
		//
		// {
		// 	module: `product`,
		// 	app: 'mail',
		// 	length: 6,
		// },
		//
		// {
		// 	module: `product`,
		// 	app: 'photoshop',
		// 	length: 4,
		// },
		//
		// {
		// 	module: `product`,
		// 	app: 'live',
		// 	length: 1,
		// },

		// {
		// 	module: `title`,
		// 	title: `People say about Touchboard`,
		// 	sub: `These people tested our prototype and were thrilled.`,
		// },

		{
			module: `quotes`,
			list: [
				{
					person: `Nhung`,
					says: `AutoCAD has way too many functions and options. Touchboard would make it so much easier for me to navigate through my daily workflow.`,
					position: `Architecture student`,
				},
				{
					person: `Patrick`,
					says: `Impressive. I have never experienced anything like the Touchboard before.`,
					position: `Entrepreneur`,
				},
				{
					person: `Cindy`,
					says: `It's amazing. I can adapt and arrange Touchboard to all my tasks no matter which app I am using.`,
					position: `Graphic Designer`,
				},
				{
					person: `Alena`,
					says: `I'm not a computer person at all. The Touchboard however is very visual and clear, that I'd be able to operate Excel Sheets like a pro without knowing a single shortcut.`,
					position: `Entrepreneur`,
				},
			],
		},
		// {
		// 	module: `title`,
		// 	title: `You like Touchboard?`,
		// 	sub: `Or you want to test the Prototype? Add yourself to the waitlist to tell us what you think, make an appointment or receive news!`,
		// },
		// {
		// 	module: `preorder`,
		// 	message: 'Join the Waitlist',
		// 	url: `https://docs.google.com/forms/d/e/1FAIpQLSff-NAfUUdyCItetuKiIK4aBEf5LOWDTUZkuwCjOo5Bd0mo1A/viewform?usp=sf_link`,
		// },
		{
			module: `title`,
			title: `You might ask...`,
			sub: `These are some frequently asked questions.`,
		},
		{
			module: 'questions',
			list: [
				[
					`Why can't I just use my iPad instead?`,
					`With iPad you cannot feel where you type and your fingers will press keys if you just rest them on the surface. Touchboards ergonomic surface allows you to find all the keys blindly and you can feel the keystroke due to the haptic feedback.`,
				],
				[
					`But I already own a keyboard?`,
					`Touchboard is much more than a keyboard. Text input is just one of the many layouts Touchboard offers. In every application you have hundreds of hidden shorcuts and functions that Touchboard visualizes for you. And just look how sexy Touchboard is!`,
				],
				[
					`Won't resting my fingers trigger the keys?`,
					`No. Touchboards force sensitive input allows you to type only by applying force (i.e. press) on the key. Moreover this technology gives you additional interactions like typing uppercase letters by pressing harder.`,
				],
				[
					`How long does it take to learn all these new interactions?`,
					`Minutes. In our tests people memorized the most important functions just after a few minutes of use. Moreover, in case you forget where the functions are, you can just look at your Touchboard.`,
				],
				[
					`Can I use it for serious text input like coding?`,
					`Touchboard was invented by a coder. And we used it to code this website. Touchboard is shaped to access all the nessessary text-functions in milliseconds.`,
				],
				[
					`I think Speech-To-Text or Mid-Air-Gestures like in Minority Report are the future!`,
					`Modern PCs already have speech-to-text but it’s not suited for quick and precise tasks. Imagine playing a shooter game by screaming "left, left, jump, shoot". Our finger movements are just faster than spoken commands. Mid-Air-Gestures look spectacular in movies but in reality you have to hold your hands in the air 8 hours a day, executing precise gestures. After 10 minutes you will want to rest your hands on the table. We don't see these technologies in use not because they aren't possible, but because interactions with physical buttons on the table are just the optimal way.`,
				],
				[
					`Why does it have so few buttons?`,
					`Touchboard is optimized for fast input. We removed distant keys that force you to jump around the keyboard. Now they are moved to other layouts directly to your finger tipps.`,
				],
				[
					`Are layouts just printed on keys in the final product?`,
					`Not at all. Touchboard has displays! They will change depending on the frontmost application. What you see is what you get!`,
				],
				[`Is Touchboard really that great?`, `Yes.`],
			],
		},
	],
	relations: [
		// {
		// 	module: `product`,
		// 	about: `The highly adaptable all-in-one input device. Comfortable and intuitive for any workflow.`,
		// 	list: [
		// 		{
		// 			graphic: `text`,
		// 			title: `Text input however you want`,
		// 			description: `Touchboard recognizes text fields and changes its layout to your favorite language`,
		// 		},
		// 		{
		// 			graphic: `graphic`,
		// 			title: `Intuitive sliders and other controls`,
		// 			description: `Relevant control elements let you intuitively navigate through your favorite graphics editor  like Photoshop, Sketch, or Figma.`,
		// 		},
		// 		{
		// 			graphic: `music`,
		// 			title: `Pressure sensitive gestures`,
		// 			description: `Make music with Touchboard. Use it as a MIDI controller that supports various interactions, like drumming.`,
		// 		},
		// 		{
		// 			graphic: `cursor`,
		// 			title: `A trackpad at your fingertips`,
		// 			description: `Move the cursor, click, zoom, and navigate in 3D.`,
		// 		},
		// 		{
		// 			graphic: `more`,
		// 			title: `...and so much more`,
		// 			description: `The Touchboard has endless functions and applications. Schedule a live demo today to try it out yourself!`,
		// 		},
		// 	],
		// },
		// {
		// 	module: `social`,
		// 	message: `Want to find out more about Touchboard and support us? Get in touch!`,
		// 	list: [
		// 		{
		// 			icon: `mail`,
		// 			url: `mailto:${`hello`}${`@`}${`touchboard`}${`.`}${`io`}`,
		// 		},
		// 		{
		// 			icon: `instagram`,
		// 			url: `https://www.instagram.com/butterfly.touchboard/`,
		// 		},
		// 		{
		// 			icon: `facebook`,
		// 			url: `https://www.facebook.com/Buttefly.Touchboard/`,
		// 		},
		// 		{
		// 			icon: `youtube`,
		// 			url: `https://www.youtube.com/channel/UCiD0hQn301SiPhWJ1WZNQ0A/featured`,
		// 		},
		// 	],
		// },
		{
			module: `team`,
			about: `We are a <span class="accent">multidisciplinary</span> team, focused on maximizing customer value in a resource-limited environment with our state-of-the-art technology.`,
			list: [
				{
					name: `Sergej Nejman`,
					position: `Manufacturing, R&D`,
					about: `Years of professional experience in various companies as a freelance industrial designer. Bachelor in Industrial Design.`,
				},
				{
					name: `Anton Brams`,
					position: `Vision, R&D`,
					about: `Software, hardware, graphic, motion, sound, industrial and experience designer. Master in Human-Computer Interaction and Bachelor in Industrial Design.`,
				},
				{
					name: `Philip Mewes`,
					position: `Marketing, Operations`,
					about: `International work experience with Magna Europe and Daimler in Tokyo. Master in Media Management and Bachelor in International Business.`,
				},
			],
		},
		{
			module: `text`,
			type: `wide`,
			body: `
				There are plenty of input devices, like orthogonal keyboards, MIDI instruments or even Apple's touch bar, but these only solve some of the many interaction problems of the modern desktop workflows.
				<br/>
				<br/>
				We <span class="accent">combined</span> all the best ideas and cutting-edge technologies in just one single device (patent pending) that follows a simple philosophy: accessibility to all relevant controls of your frontmost desktop application at your fingertips.
				<br/>
				<br/>
				Besides typing, executing shortcuts and controlling the cursor, our interface also allows novel interactions the world has never seen before. All of this without the need to move within or between devices.
			`,
		},
		{
			module: `title`,
			title: `Our path`,
			sub: `Thanks to all the networks for helping us!`,
		},
		{
			module: `timeline`,
			list: [
				{
					date: `2016`,
					img: `butterfly`,
					description: `Birth of the original idea followed by years of research of different interaction concepts`,
				},
				{
					date: `Jun 2019`,
					img: `neudeli`,
					onclick: `https://www.uni-weimar.de/de/medien/institute/neudeli/`,
					description: `Startupo incubator of the Bauhaus-Universität Weimar. Development of first proof of concept.`,
				},
				{
					date: `Nov 2019`,
					img: `trip`,
					onclick: `https://trip.community`,
					description: `Thuringian Regional Innovation Program (TRIP) startup accelerator`,
				},
				{
					date: `Oct 2019`,
					img: `bauhaus`,
					description: `First extensive usability tests in Anton Brams' Masterthesis`,
				},
				{
					big: true,
					date: `Sep 2020`,
					img: `exist`,
					onclick: `https://www.exist.de/EN/Home/home_node.html`,
					description: `One year startup program by the German Federal Ministry for Economic Affairs and Energy. Completion of a full working prototype and conduction of user tests.`,
				},
				{
					date: `Jan 2021`,
					img: `International Startup Campus`,
					onclick: `https://internationalstartupcampus.com/`,
					description: `Startup program for startup internationalization. Focus on expansion to the Asian market for manufacturing and sales.`,
				},
				{
					date: `now`,
					marked: true,
					note: `<b>Looking for Investors! </br> Click here to write us!</b>`,
					onclick: `mailto:${`hello`}${`@`}${`touchboard`}${`.`}${`io`}`,
				},
			],
		},
	],
	impressum: [
		{
			module: `text`,
			size: `small`,
			body: `
				Butterfly Company GbR<br/>
				<br/>
				Anton Brams<br/>
				Himmelgeister Str. 157<br/>
				40225 Düsseldorf<br/>
				<br/>
				E-Mail: ${`hello`}${`@`}${`touchboard`}${`.`}${`tech`}<br/>
				Geschäftsführer: Anton Brams, Sergej Nejman, Philip Mewes
			`,
		},
	],
	global: [
		{
			module: `logo`,
			onclick: `/landing`,
		},
		{
			module: 'footer',
			list: {
				Sitemap: [
					['Main Page', '/landing'],
					[
						'Waitlist',
						`https://docs.google.com/forms/d/e/1FAIpQLSff-NAfUUdyCItetuKiIK4aBEf5LOWDTUZkuwCjOo5Bd0mo1A/viewform?usp=sf_link`,
					],
					['Investor Relations', '/relations'],
					['News', 'https://twitter.com/btouchboard'],
					['Impressum', '/impressum'],
				],
				// News: [
				// 	['Trip', `https://trip.community/en/start-ups/`],
				// 	[
				// 		'Exist',
				// 		`https://www.exist.de/DE/Programm/Exist-Gruenderstipendium/Vorhabenkarte/EGSVorhaben/03EGSTH121.html`,
				// 	],
				// 	['Team', `/relations`],
				// ],
				Contact: [
					[
						'E-Mail',
						`mailto:${`hello`}${`@`}${`touchboard`}${`.`}${`io`}`,
					],
					[
						'Feedback',
						`https://docs.google.com/forms/d/e/1FAIpQLSff-NAfUUdyCItetuKiIK4aBEf5LOWDTUZkuwCjOo5Bd0mo1A/viewform?usp=sf_link`,
					],
				],
				Social: [
					[
						'Instagram',
						`https://www.instagram.com/butterfly.touchboard/`,
					],
					[
						'Facebook',
						`https://www.facebook.com/butterfly.touchboard`,
					],
					[
						'YouTube',
						`https://www.youtube.com/channel/UCiD0hQn301SiPhWJ1WZNQ0A/featured`,
					],
				],
				Education: [
					[
						'Concept Video',
						`https://www.youtube.com/channel/UCiD0hQn301SiPhWJ1WZNQ0A/featured`,
					],
					[
						'Tutorials',
						`https://www.youtube.com/channel/UCiD0hQn301SiPhWJ1WZNQ0A/featured`,
					],
					[
						'Shortcuts',
						`https://www.instagram.com/butterfly.touchboard/`,
					],
				],
				Career: [
					[
						'Full-Time',
						`mailto:${`hello`}${`@`}${`touchboard`}${`.`}${`io`}`,
					],
					[
						'Internship',
						`mailto:${`hello`}${`@`}${`touchboard`}${`.`}${`io`}`,
					],
				],
				Copyright: [
					[
						`© 2021 Butterfly Company GbR. All rights reserved`,
						`http://antonbrams.io`,
					],
				],
			},
		},
	],
}
