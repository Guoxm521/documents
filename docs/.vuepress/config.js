const pluginConf = require("./config/pluginConf.js");
const sidebar = require("./sidebar.config.json");
module.exports = {
	base: "/",
	title: "胡萝卜菜",
	// plugins: pluginConf,
	themeConfig: {
		logo: "/logo.png",
		lastUpdated: "更新时间",
		nav: [
			{ text: "css", link: "/css/" },
			{ text: "js", link: "/js/" },
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
