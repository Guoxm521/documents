(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(t,s,n){"use strict";n.r(s);var a=n(10),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("pip install webdriver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("helper\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" webdriver_helper "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\ndriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.baidu.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11111")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("by "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" By\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WebDriverWait\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" webdriver_helper "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" get_webdriver\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" expected_conditions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" EC\n\ndriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("implicitly_wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://admtest.wesais.cn/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XPATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/html/body/div/div/form/div[2]/div/div/input"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XPATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/html/body/div/div/form/div[3]/div/div/input"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute_script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments[0].click();"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CSS_SELECTOR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app > div > form > button"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 错误提示  捕获  element message")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# DEMOI= WebDriverWait(driver,10).until(EC.visibility_of(driver.find_element(By.CSS_SELECTOR,".el-message--error")))')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print('123',DEMOI)")]),t._v("\n\n\n\ndemo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CSS_SELECTOR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".el-scrollbar a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute_script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arguments[0].click();"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Y_%m_%d_%H_%M_%S'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.png'")]),t._v("\n    path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E:/demo/images/'")]),t._v("\n    path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_screenshot_as_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# href = item.get_attribute('href')")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# driver.save_screenshot(href+'.png')")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"执行完毕"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);