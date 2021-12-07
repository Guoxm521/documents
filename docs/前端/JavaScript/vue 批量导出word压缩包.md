## 一、使用场景

后台根据用户信息需要生成word表格，但是浏览器有同时下载的数量限制，所以处理方法就是将表单批量生成压缩包，进行一次性下载。

## 二、代码

 		项目当中使用了比较多的第三方依赖，其中为了生成多的随机数据使用了Mockjs这个插件，在以后的项目中为了生成随机数据  可以竟可能的使用改插件

1. 主要代码

   ![](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notescode.png)

2. 生成随机数据

   ![](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notescode2.png)

3. 依赖包

   ![](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notescode3.png)

4. word模板

   ![](https://gxming.oss-cn-shenzhen.aliyuncs.com/my_study_notes%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE3123.png)

## 三、依赖包分析

1. docxtemplater    

   Docxtemplater是一个从docx/pptx模板生成docx/pptx文档的库。

   官网：https://docxtemplater.com/docs/api/   

2. PizZip

   PizZip是JSZip版本2的一个分支。一个用Javascript创建、读取和编辑.zip文件的库，带有一个可爱而简单的API。

3. JSZipUtils

   与JSZip一起使用的跨浏览器实用程序集合

   官网：http://stuk.github.io/jszip-utils/

4. JSZip

   一个用JavaScript创建、读取和编辑.zip文件的库，

   官网：https://stuk.github.io/jszip/

5. Mock

   生成随机数据

   官网：http://mockjs.com/

6. file-saver

   大文件保存插件

## 四、参考文档

- [vue实现前台生成word并下载，并且可实现批量打包下载](https://blog.csdn.net/baidu_36668721/article/details/115211615?spm=1001.2014.3001.5501)
- [vue + word 导出word](https://gitee.com/xhxdd/vue-export-word)

