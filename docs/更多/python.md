```python
pip install webdriver-helper


import time

from webdriver_helper import *

driver = get_webdriver()

driver.get("http://www.baidu.com")

time.sleep(11111)
```



```python
driver = get_webdriver()
driver.implicitly_wait(5)
driver.get("https://admtest.wesais.cn/")
driver.find_element(By.XPATH, "/html/body/div/div/form/div[2]/div/div/input").send_keys('账号')
driver.find_element(By.XPATH, "/html/body/div/div/form/div[3]/div/div/input").send_keys('密码3123213213')
driver.execute_script("arguments[0].click();",driver.find_element(By.CSS_SELECTOR,"#app > div > form > button"))
DEMOI= WebDriverWait(driver,10).until(EC.visibility_of(driver.find_element(By.CSS_SELECTOR,".el-message--error")))

print('123',DEMOI)
	
```

