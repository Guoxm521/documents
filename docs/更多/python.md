```python
pip install webdriver-helper


import time

from webdriver_helper import *

driver = get_webdriver()

driver.get("http://www.baidu.com")

time.sleep(11111)
```



```python
import os
import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_helper import get_webdriver
from selenium.webdriver.support import expected_conditions as EC

driver = get_webdriver()
driver.implicitly_wait(5)
driver.get("https://admtest.wesais.cn/")
driver.find_element(By.XPATH, "/html/body/div/div/form/div[2]/div/div/input").send_keys('admin')
driver.find_element(By.XPATH, "/html/body/div/div/form/div[3]/div/div/input").send_keys('123456')
driver.execute_script("arguments[0].click();",driver.find_element(By.CSS_SELECTOR,"#app > div > form > button"))

# 错误提示  捕获  element message
# DEMOI= WebDriverWait(driver,10).until(EC.visibility_of(driver.find_element(By.CSS_SELECTOR,".el-message--error")))
# print('123',DEMOI)



demo = driver.find_elements(By.CSS_SELECTOR, ".el-scrollbar a")

for item in demo:
    driver.execute_script("arguments[0].click();", item)
    file_name = time.strftime('%Y_%m_%d_%H_%M_%S', time.localtime()) + '.png'
    path = 'E:/demo/images/'
    path = os.path.join(path, file_name)
    driver.get_screenshot_as_file(path)
    # href = item.get_attribute('href')
    # driver.save_screenshot(href+'.png')
    print(path)
    time.sleep(2)

print("执行完毕")
time.sleep(12)
```

