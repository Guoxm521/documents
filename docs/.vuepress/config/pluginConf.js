const moment = require("moment");
module.exports = [
	[
		"@vuepress/last-updated",
		{
			transformer: (timestamp) => {
				const moment = require("moment");
				moment.locale("zh-cn");
				return moment(timestamp).format("YYYY/MM/DD dddd  hh:mm:ss");
			},
		},
	],
	["@vuepress/back-to-top"],
	["@vuepress/medium-zoom"],
	["one-click-copy"],
	[
		"@vuepress/search",
		{
			searchMaxSuggestions: 10,
		},
	],
];
