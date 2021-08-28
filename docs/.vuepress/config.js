const pluginConf = require("./config/pluginConf.js");
const head = require("./config/headConfig");
const nav = require("./config/navConfig");
const sidebar = require("./config/sidebarConfig");
module.exports = {
	// theme: "vdoing",
	title: "胡萝卜菜",
	plugins: pluginConf,
	themeConfig: {
		base: "/documents/",
		logo: "/logo.png",
		// displayAllHeaders: true, // 默认值：false
		lastUpdated: "更新时间",
		category: false,
		tag: false,
		archive: false,
		updateBar: {
			showToArticle: false,
		},
		nav: nav,
		sidebar: sidebar,

		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
		repo: "Guoxm521/documents",

		repoLabel: "GitHub",
	},
};
