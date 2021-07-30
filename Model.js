const Model = {
	landing: [
		{
			module: `product`,
			about: `The highly adaptable all-in-one input device. Comfortable and intuitive for any workflow.`,
			list: [
				{
					graphic: `text`,
					title: `Text input however you want`,
					description: `Touchboard recognizes text fields and changes its layout to your favorite language`,
				},
				{
					graphic: `graphic`,
					title: `Intuitive sliders and other controls`,
					description: `Relevant control elements let you intuitively navigate through your favorite graphics editor  like Photoshop, Sketch, or Figma.`,
				},
				{
					graphic: `music`,
					title: `Pressure sensitive gestures`,
					description: `Make music with Touchboard. Use it as a MIDI controller that supports various interactions, like drumming.`,
				},
				{
					graphic: `cursor`,
					title: `A trackpad at your fingertips`,
					description: `Move the cursor, click, zoom, and navigate in 3D.`,
				},
				{
					graphic: `more`,
					title: `...and so much more`,
					description: `The Touchboard has endless functions and applications. Schedule a live demo today to try it out yourself!`,
				},
			],
		},
		{
			module: `social`,
			message: `Want to find out more about Touchboard and support us? Get in touch!`,
			list: [
				{
					icon: `mail`,
					url: `mailto:${`hello`}${`@`}${`touchboard`}${`.`}${`io`}`,
				},
				{
					icon: `instagram`,
					url: `https://www.instagram.com/butterfly.touchboard/`,
				},
				{
					icon: `facebook`,
					url: `https://www.facebook.com/Buttefly.Touchboard/`,
				},
				{
					icon: `youtube`,
					url: `https://www.youtube.com/channel/UCiD0hQn301SiPhWJ1WZNQ0A/featured`,
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
				// {
				// 	person: `Philipp`,
				// 	says: `It is going to revolutionize the interaction with the computer. Ill definetely buy it for my son`,
				// 	position: `Media Creator`,
				// },
				// {
				// 	person: `Tobias`,
				// 	says: `Touchboard is not just for media creators like mzself. It is going to be an input device for everz aspect of the PC.`,
				// 	position: `Entrepreneur`,
				// },
				// 	person: `Alexandra`,
				// 	says: `Wow. This'll make you rich`,
				// 	position: 'UX Designer'`,
				// },
				// 	person: `Justus`,
				// 	says: `Even as a patent lawyer I don't see such revolutionary technologies often.`,
				// 	position: 'Patent lawyer'`,
				// },
			],
		},
		{
			module: `team`,
			about: `We are a <span class="accent">multidisciplinary</span> team, focused on maximizing customer value in a resource-limited environment with our state-of-the-art technology.`,
			list: [
				{
					name: `Sergej Nejman`,
					position: `Manufacturing, R&D`,
					about: `Years of professional experience in various companies as a freelance industrial designer. Bachelor in Industrial Design.`,
					quote: `Give me that puzzle`,
				},
				{
					name: `Anton Brams`,
					position: `Vision, R&D`,
					about: `Software, hardware, graphic, motion, sound, industrial and experience designer. Master in Human-Computer Interaction and Bachelor in Industrial Design.`,
					quote: `Experience design down to zeros and ones`,
				},
				{
					name: `Philip Mewes`,
					position: `Marketing, Operations`,
					about: `International work experience with Magna Europe and Daimler in Tokyo. Master in Media Management and Bachelor in International Business.`,
					quote: `Let me make a spreadsheet for that`,
				},
			],
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
			list: [
				{body: `impressum`, onclick: `/impressum`},
				{body: `made by`, onclick: `http://antonbrams.io`},
				{
					body: `Copyright © 2021 Buttefly Company GbR. All rights reserved`,
				},
			],
		},
	],
}
