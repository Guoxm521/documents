(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(t,s,n){"use strict";n.r(s);var a=n(10),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("pip install webdriver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("helper\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" webdriver_helper "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\ndriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.baidu.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11111")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("driver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("implicitly_wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://admtest.wesais.cn/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XPATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/html/body/div/div/form/div[2]/div/div/input"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'账号'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XPATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/html/body/div/div/form/div[3]/div/div/input"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码3123213213'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute_script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments[0].click();"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CSS_SELECTOR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app > div > form > button"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nDEMOI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WebDriverWait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("until"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibility_of"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CSS_SELECTOR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".el-message--error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DEMOI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);