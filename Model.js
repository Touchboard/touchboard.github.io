const Model = {
	landing: [
		{
			module: `product`,
			list: [
				{
					graphic: `text`,
					title: `Text input however you want`,
					description: `Touchboard recognizes text fields and changes its layout to your favorite language`,
				},
				{
					graphic: `graphic`,
					title: `Intuitive sliders and other controls`,
					description: `Relevant control elements let you intuitively navigate through your favorite graphics editor  like Photoshop, Gimp, or Figma.`,
				},
				{
					graphic: `music`,
					title: `Pressure senstitive gestures`,
					description: `Make music with Touchboard. Use it as a MIDI controller that supports various interactions, like drumming.`,
				},
				{
					graphic: `cursor`,
					title: `A trackpad at your fingertips`,
					description: `Move the cursor, click, zoom, and navigate in 3D.`,
				},
				// {
				// 	graphic: `More`,
				// 	title: `...And so much more`,
				// 	description: `The Touchboard has endless functions and applications. Schedule a live demo today to try it out yourself!`,
				// },
			],
			about: `The highly adaptable all-in-one input device. Comfortable and intuitive for any workflow.`,
		},
		{
			module: `social`,
			message: `Want to find out more about Touchboard and support us? Get in touch!`,
			list: [
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
				{
					icon: `mail`,
					url: `mailto:${`hello`}${`@`}${`touchboard`}${`.`}${`io`}`,
				},
			],
		},
		{
			module: `text`,
			type: `wide`,
			body: `
				There are plenty of input devices, like orthogonal keyboards, MIDI instruments or even Apple's touchbar, but these only solve some of the many interaction problems of the modern desktop workflows.
				<br/>
				<br/>
				We <span class="accent">combined</span> all the best ideas and cutting edge technologies in just one single device (patent pending) that follows a simple philosophy: accessibility to all relevant controls of your frontmost desktop application at your fingertips.
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
					position: `Student of architecture`,
				},
				{
					person: `Patrick`,
					says: `Impressive. I have never experienced anything like the Touchboard before.`,
					position: `Entrepreneur`,
				},
				{
					person: `Cindy`,
					says: `It's amazing. I can adapt and arrange Touchboard to all my tasks no matter which app I am using.`,
					position: `Grafic Designer`,
				},
				{
					person: `Alena`,
					says: `I'm not a computer person at all. The Touchboard however is very visual and clear, that I'd be able to operate Excel Sheets like a pro without knowing a single shortcut.`,
					position: `Enterpreneur`,
				},
				// {
				// 	person: `Philipp Matschke`,
				// 	says: `It is going to revolutionize the interaction with the computer. Ill definetely buy it for my son`,
				// 	position: `Media Creator`,
				// },
			],
		},
		{
			module: `team`,
			about: `We are a <span class="accent">multidisciplinary</span> team, focused on maximising customer value in a resource limited environment with our state of the art technology.`,
			list: [
				{
					name: `Sergej Nejman`,
					position: `Manufacturing, R&D`,
					about: `Years of professional experience in various companies as a freelance industrial designer. Bachelor in Industrial Design.`,
					quote: `give me that puzzle`,
				},
				{
					name: `Anton Brams`,
					position: `Vision, R&D`,
					about: `Software, hardware, graphic, motion, sound, industrial and experience Designer. Master in Human-Computer Interaction and Bachelor in Industrial Design.`,
					quote: `Experience design down to zeros and ones`,
				},
				{
					name: `Philip Mewes`,
					position: `Marketing, Operational`,
					about: `International work experience with Magna Europe and Daimler in Tokyo. Master in Media Management and Bachelor in International Business.`,
					quote: `Let me make a spreadsheet for that`,
				},
			],
		},
		{
			module: `timeline`,
			list: [
				{
					date: `Aug 2016`,
					img: `butterfly`,
				},
				{
					date: `Jun 2019`,
					img: `neudeli`,
					onclick: `https://www.uni-weimar.de/de/medien/institute/neudeli/`,
				},
				{
					date: `Jun 2019`,
					img: `trip`,
					onclick: `https://trip.community`,
				},
				{
					date: `Sep 2020`,
					img: `exist`,
					onclick: `https://www.exist.de/EN/Home/home_node.html`,
				},
				{
					date: `Jan 2021`,
					img: `International Startup Campus`,
					onclick: `https://internationalstartupcampus.com/`,
				},
				{
					date: `<b>now</b> 2021`,
					note: `<div class="accent">Looking for Investors</div>`,
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
