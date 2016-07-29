# Grunt 開發專案
<br />
專案建置的流程，注意有分使用  Windows 和 Mac   
Command line 指令操作 [Command Line指令](https://www.renfei.org/blog/mac-os-x-terminal-101.html)

<br /><br /><br />


# 一 基本環境建置
這部分只需要做一次，以後每次專案在開發時，只需要跑 npm install部分。
<br />
## 1.Install node.js
<br />

 Install  [ Node.js ](https://nodejs.org/en/)  

<br />
<br />
<br />
## 2.Install ruby ( Windows User )
<br />
 **Windows user**  
  RubyInstaller  http://rubyinstaller.org/downloads/    
  (除了一直按 Next 之外，記得安裝途中把 *Add Ruby executables to your PATH * 勾選起來。)    

 ![ruby](http://i1.wp.com/naturaljenius.com/wp-content/uploads/2011/10/Ruby-Install-1.png "rubyinstaller")   

 <br /><br />
 ~~Mac user is not install~~

<br /><br />
## 3.Install Sass
<br />
 **1. Windows user**

 Open your  "Ruby  Terminal" or "Command Prompt"

 輸入  `gem install sass`

 Double-check - you can on "Ruby  Terminal"  type   輸入  `sass -v` 看是否有灌成功
  如果有成功 會return  `Sass 3.4.22`  版本   

<br />
<br />
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
 <br /><br />
**type**   `npm install -g grunt-cli`
 <br /><br />
**mac user type**  `sudo npm install -g grunt-cli`
 <br /><br />
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




# 四 bower 初始化設定 install
<br />
1. build bower  
`c: user/npm install -g bower`   
<br /><br />
2. build  bower.json
` bower init ` 建立bower.json檔   
<br /><br />
3. build `.bowerrc` file local base path  
<br /><br />
.bowerrc內容
<pre><code>
{
  //套件會建在這資料夾裡
  "directory" : "libs"
}
</code></pre>
<br />

### 備註
`c:/project/bower help` 查詢bower指令  
<br />
[bower 詳細介紹](http://edentsai231.logdown.com/posts/198741-bower-front-end-kit-management-tool)

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
<br />
<br />
# 六 現有專案執行

執行    
`c: user/project-name/npm i   執行 package.json 裡套件`   
`c: user/project-name/bower i  執行bower.json裡套件`

# 資源介紹

[sass doc](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

# 問題解決

### 如果在bower i 出現權限的問題

```js
at Error (native)
at Object.fs.openSync (fs.js:584:18)
at Object.fs.readFileSync (fs.js:431:33)
at Object.create.all.get (/usr/local/lib/node_modules/bower/lib/node_modules/configstore/index.js:35:26)
at Object.Configstore (/usr/local/lib/node_modules/bower/lib/node_modules/configstore/index.js:28:44)
at readCachedConfig (/usr/local/lib/node_modules/bower/lib/config.js:19:23)
at defaultConfig (/usr/local/lib/node_modules/bower/lib/config.js:11:12)
at Object.<anonymous> (/usr/local/lib/node_modules/bower/lib/index.js:16:32)
at Module._compile (module.js:425:26)
at Object.Module._extensions..js (module.js:432:10)
```
<br />
I am still getting the same error, even after    
`c: user/sudo bower install --allow-root`     <br />
`c: user/sudo bower install <package>`    <br />
<br />
after still any question fixed it       
`c: user/sudo chown -R $USER:$GROUP ~/.npm`   
`c: user/sudo chown -R $USER:$GROUP ~/.config`   
