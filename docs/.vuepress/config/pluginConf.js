const moment = require("moment");
module.exports = [
	[
		"@vuepress/last-updated",
		{
			transformer: (timestamp) => {
				const moment = require("moment");
				moment.locale("zh-cn");
				return moment(timestamp).fromNow('LLLL');
			},
		},
	],
];
