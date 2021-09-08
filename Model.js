const Model = {
	landing: [
		{
			module: `loader`,
		},
		{
			module: `landing`,
			about: `The most advanced all-in-one human input device in the world!`,
			intro: `xfspSw90OOI`,
			button: `Join the Waitlist!`,
			preorder: `https://docs.google.com/forms/d/e/1FAIpQLSff-NAfUUdyCItetuKiIK4aBEf5LOWDTUZkuwCjOo5Bd0mo1A/viewform?usp=sf_link`,
		},
		{
			module: `title`,
			title: `Explore Touchboard's Interaction`,
			sub: `With these examplary layouts`,
		},
		{
			module: `explore`,
			list: {
				photoshop: {
					$compliment: [
						['mouse', 40, -4, 595, 639],
						['tablet', 70, -15, 1192, 968],
					],
					top: [
						{go: 'tools', x: -11.1, y: 7},
						{go: 'numpad', x: -4.8, y: 7.3},
					],
					tools: [{x: -11.1, y: 7}],
					numpad: [{x: -4.8, y: 7.3}],
				},
				mail: {
					top: [
						{go: 'split', x: 0, y: -6.5},
						{go: 'ru', x: 9.3, y: 6.3},
						{go: 'symbols', x: 9.3, y: 12.2},
					],
					split: [{x: 0, y: -6.5}],
					ru: [{x: 9.3, y: 6.3}],
					symbols: [{x: 9.3, y: 12.2}],
				},
				spotify: {
					top: [
						{go: `mouse`, x: 2.9, y: 12.1},
						{go: 'commands', x: -3.3, y: 12.1},
						{go: 'media', x: -9.2, y: 12.1},
					],
					mouse: [{x: 2.9, y: 12.1}],
					commands: [{x: -3.3, y: 12.1}],
					media: [{x: -9.2, y: 12.1}],
				},
				safari: {
					top: [
						{
							go: 'text',
							x: 9.3,
							y: -6.2,
							stay: true,
							app: 'focused',
						},
					],
					text: [
						{
							go: 'top',
							x: 34,
							y: -6.2,
							stay: true,
							app: 'app',
						},
					],
				},
				live: {top: []},
			},
		},
		{
			module: `title`,
			title: `Versatility at its Core`,
			sub: `Touchboard is not just a device, it's a system`,
		},
		{
			module: `features`,
			list: [
				['all-in-one', true],
				['context aware'],
				['pressure sensitive gestures', true],
				['easy to find keys'],
				['intuitive ui', true],
				['multitouch'],
				['controls under favorite fingers', true],
				['refined ergonomy'],
				['wireless'],
				['motion efficient'],
				['haptic feedback'],
				// ['touchboard studio'],
				// ['cloud'],
				['work from anywhere'],
			],
		},
		{
			module: `title`,
			title: `Wanna try out the Prototype?`,
		},
		{
			module: `preorder`,
			message: 'Get in Touch!',
			url: `mailto:${`hello`}${`@`}${`touchboard`}${`.`}${`io`}`,
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
		// {
		// 	module: `title`,
		// 	title: `You might ask..`,
		// },
		// {
		// 	module: 'questions',
		// 	list: [
		// 		[
		// 			`Why i should by it, i love my keyboard already?`,
		// 			`You have no idea how many nice features you are missing without Touchboard. We've analyzed various workflows and find out that you lose a lot of time by just using conventional keyboard and mouse. And just look how sexy Touchboard is!!!`,
		// 		],
		// 		[
		// 			`Why i can't just use my iPad instead?`,
		// 			`Did you try to type on the iPad without to pay attention on your fingers? iPad surface is flat and also if you relax your fingers and put on the surface like on a keyboard, you will trigger keys. Touchboard's surface is curved for blind text input, and additionally it has a force feedback system allowing you to put your fingers on the surface and use it as a physical button.`,
		// 		],
		// 		[
		// 			`Will Touchboard change it's graphics on the fly or the final product will be just black?`,
		// 			`Touchboard will have displays so you will see what you get!`,
		// 		],
		// 		[
		// 			`Why it has so few buttons?`,
		// 			`Touchboard is optimized for fast input, therefore we moved all remote keys to other layouts that are easily accessible with your thumbs`,
		// 		],
		// 		[`Can i extend it somehow?`, `Maybe? ;)`],
		// 		[
		// 			`Is it easy to get use to all the interactions?`,
		// 			`Of course! In our tests people memorize most important functions just after one minute of use. Moreover, in case you've forgott, where the function is, you can just look at Touchboard's displays.`,
		// 		],
		// 		[
		// 			`Can i use it for serious text input like in coding?`,
		// 			`The need for Touchboard has appeared while coding. This device is shaped to access all the nessessary textual functions in milliseconds.`,
		// 		],
		// 	],
		// },
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
