# Grunt 開發專案
<br />
專案建置的流程，注意有分使用  Windows 和 Mac ，
<br /><br /><br />


# 一 基本環境建置
<br />
## 1.Install node.js
<br />

 Install  [ Node.js ](https://nodejs.org/en/)  

<br />
<br />
<br />
## 2.Install ruby ( Windows User )
<br />
 **1. Windows user**  
  RubyInstaller  http://rubyinstaller.org/downloads/    
  (除了一直按 Next 之外，記得安裝途中把 *Add Ruby executables to your PATH * 勾選起來。)    

 ![ruby](http://i1.wp.com/naturaljenius.com/wp-content/uploads/2011/10/Ruby-Install-1.png "rubyinstaller")   

 <br /><br />
 **2. Mac user is not install**

<br /><br />
## 3.Install Sass
<br />
 **1. Windows user**

 Open your  "Ruby  Terminal" or "Command Prompt"

 輸入  `gem install sass`

 Double-check - you can on "Ruby  Terminal"  type   輸入  `sass -v` 看是否有灌成功
  如果有成功 會return  `Sass 3.4.22`  版本
<br /><br />
 **2. Mac user**

 Open the Mac's  Terminal.app / 終端機

 輸入  `sudo gem install sass`

 Double-check - you can on "Terminal.app / 終端機"  type   輸入  `sass -v` 看是否有灌成功
  如果有成功 會return  `Sass 3.4.22`  版本
<br /><br /><br />

# 二 Grunt 環境安裝
<br />
![grunt](http://www.gruntjs.net/img/grunt-logo.png)

Grunt和 Grunt 套件是通過 npm 安裝管理的，npm是 Node.js 的套件管理器。

**Open**    Terminal.app / 終端機  or Command

**type**   `npm install -g grunt-cli`

**mac user type**  `sudo npm install -g grunt-cli`

**-g**   全域  在c:底下執行

~~附註~~ ： grunt 執行要有 package.json / Gruntfile.js
<br />
<br />
<br />


# 三 npm install
<br />
`c: user/project/npm install`  在執行的專案下灌套件，套件會放在node_modules 資料夾裡
<br />
<br />
<br />




# 四 bower  install
<br />
1. build bower  
`c: user/project/npm install -g bower`
<br />
2. build  bower.json
` bower init ` 建立bower.json檔
<br />
3. build `.bowerrc` file local base path

.bowerrc內容
<pre><code>
{
  //套件會建在這資料夾裡
  "directory" : "libs"
}
</code></pre>
<br />
<br />
<br />
# 五 sass Structure
<br />
```
sass/
|
|– base/
|  |– mixins             # mixins module
|   |– _font.scss        # Typography rules
|   |– _mixin.scss       # mixin  input
|   |– _reset.scss       # Reset/normalize
|   |– _variables.scss   # variables rules
|   ...                  # Etc…
|
|– modules/
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– layout/
|   |– _rwd.scss         # RWD system
|   |– _grid.scss        # Grid system
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|– views/
|   |– main.scss         # index scss
|   ...                  # Etc…
|
```
