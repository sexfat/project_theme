# Grunt 開發專案

專案建置的流程，注意有分使用  Windows 和 Mac ，



# 一 基本環境建置

## 1.Install node.js

 Install  [ Node.js ](https://nodejs.org/en/)  

## 2.Install ruby ( Windows User )

 **1. Windows user**  
  RubyInstaller  http://rubyinstaller.org/downloads/    
  (除了一直按 Next 之外，記得安裝途中把 *Add Ruby executables to your PATH * 勾選起來。)    

 ![ruby](http://i1.wp.com/naturaljenius.com/wp-content/uploads/2011/10/Ruby-Install-1.png "rubyinstaller")   

 **2. Mac user is not install**

 ## Install Sass

 **1. Windows user**

 Open your  "Ruby  Terminal" or "Command Prompt"

 輸入  `gem install sass`

 Double-check - you can on "Ruby  Terminal"  type   輸入  `sass -v` 看是否有灌成功
  如果有成功 會return  `Sass 3.4.22`  版本

 **2. Mac user**

 Open the Mac's  Terminal.app / 終端機

 輸入  `sudo gem install sass`

 Double-check - you can on "Terminal.app / 終端機"  type   輸入  `sass -v` 看是否有灌成功
  如果有成功 會return  `Sass 3.4.22`  版本


# 二 Grunt 環境安裝

![grunt](http://www.gruntjs.net/img/grunt-logo.png)

Grunt和 Grunt 套件是通過 npm 安裝管理的，npm是 Node.js 的套件管理器。

**Open**    Terminal.app / 終端機  or Command

**type**   `npm install -g grunt-cli`

**mac user type**  `sudo npm install -g grunt-cli`

**-g**   全域  在c:底下執行


## ---------------

## npm install

## bower  install

1. build bower  
<code>npm install -g bower</code>

2. build  bower.json
<code>bower init<code>

3. build <code> .bowerrc </code> file local base path

<pre><code>
{
  //套件會建在這資料夾裡
  "directory" : "views/libs"
}
</code></pre>



##sass Structure

```
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– sass-utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– style.scss            # Primary Sass file
```
