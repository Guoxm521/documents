const pluginConf = require("./config/pluginConf.js");
const sidebar = require("./sidebar.config.json");
module.exports = {
	// theme: "vdoing",
	title: "胡萝卜菜",
	plugins: pluginConf,
	themeConfig: {
		base: "/documents/",
		logo: "/logo.png",
		lastUpdated: "更新时间",
		category:false,
		tag:false,
		archive:false,
		updateBar:{
			showToArticle:false
		},
		nav: [
			{ text: "✨css", link: "/css/" },
			{ text: "✨js", link: "/js/" },
			{
				text: "Languages",
				ariaLabel: "Language Menu",
				items: [
					{ text: "Chinese", link: "/language/chinese/" },
					{ text: "Japanese", link: "/language/japanese/" },
				],
			},
		],
		sidebar: sidebar,
	},
};
