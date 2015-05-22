# Protocore [![GitHub version](http://img.shields.io/badge/version-0.0.7-brightgreen.svg)](https://github.com/hegdeashwin/Protocore/releases)

[![Build Status](https://travis-ci.org/hegdeashwin/Protocore.svg?branch=master)](https://travis-ci.org/hegdeashwin/Protocore)   [![Dependency Status](https://gemnasium.com/hegdeashwin/Protocore.svg)](https://gemnasium.com/hegdeashwin/Protocore)  [![Node.js version](http://img.shields.io/badge/Node.js-%3E%200.10-brightgreen.svg)](https://github.com/hegdeashwin/Protocore/)  [![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![License version](http://img.shields.io/badge/License-MIT-red.svg)](https://github.com/hegdeashwin/Protocore#license)


Protocore is an open source walking application skeleton for a typical unstructured JavaScript/jQuery web apps. You can use it to quickly bootstrap your unstructured JavaScript/jQuery web application projects.

## Prerequisites

As Protocore is based on JavaScript. It is assumed user already knows JavaScript and jQuery.

For understanding Protocore, knowledge of following JavaScript libraries/frameworks are must.
* Require.js - a JavaScript file and module loader. For more information visit <a href="//requirejs.org/" target="_blank">requirejs.org</a></p></li>


## Installation

Assuming that Git is already installed & running:
```
git clone https://github.com/hegdeashwin/Protocore
```

Assuming that Node.js & Bower is already installed & running, 

Install dependencies:
```
npm install
```

Assuming that Bower is already installed & running, 

Install client-side dependencies:
```
bower install
```

Generate CSS files from LESS: (First command after installing dependencies)
```
grunt compileless
```

To start the development server:
```
node server.js
```
or
```
NODE_ENV=development node server.js
```
or
```
npm start
```

To start the production server:
```
NODE_ENV=production node server.js
```

## Protocore Generator

[generator-protocore](https://github.com/hegdeashwin/generator-protocore) is a Yeoman generator for Protocore. The tool will help to generate walking application skeleton for a typical unstructured JavaScript/jQuery web apps.

[Protocore-cli](https://github.com/hegdeashwin/protocore-cli) is a command line generator for Protocore. This tool will help to generate a walking application skeleton for a typical unstructured JavaScript/jQuery web apps.

## Server layer

The server side codebase resides in the ```server.js``` and ```config.js``` files. By default, the server layer is written in JavaScript (Node.js with Express 4.x) which can be configured and flexible to work with any server side scripting language like Java, PHP, ASP.NET or others. As client and server layer are seperate entity.

## Client layer

The client side codebase resides in the ```src``` folder. This folder contains following subfolders.

```
+-- /stylesheets
	+--/css
	+--/less
		+--/common
		+--/base
		+--/layout
		+--/modules
		+--/state
		+--/theme
+-- /systems
	+--/frameworks
	+--/libs
	+--/utilities
+-- /templates
+-- /assets
	+--/fonts
	+--/images
+-- /apps
	+--/models
	+--/views
	+--/router
```

## Stylesheet layer

The codebase comes with LESS setup with a ```Scalable and Modular Architecture for CSS (SMACSS)``` approach.  SMACSS is a way to examine your design process and as a way to fit those rigid frameworks into a flexible thought process. It is an attempt to document a consistent approach to site development when using CSS.

## Task automation

Protocore comes with Grunt ecosystem - a JavaScript task runner to perform repetitive tasks like minification, compilation, unit testing, linting etc. Many of the tasks you need are already available as published Grunt plugins.

Few task automations has been configured to detect errors and potential problems in codebase and to enforce your team's coding conventions. 

Following are the default Grunt plugins that has been integrated with Protocore codebase.

**Individual tasks**

| Grunt Plugin 			 | Command                  | Task Performed              |
|:-----------------------|:------------------------|:---------------------------|
| grunt-htmlhint		 | grunt htmllint           | Detect errors and issues for HTML documents for index.html and templates. |
| grunt-contrib-csslint	 | grunt csslint            | Detect errors and issues for CSS stylesheets. |
| grunt-contrib-jshint	 | grunt jshint             | Detect errors and issues for JavaScript. |
| grunt-jscs-checker	 | grunt jscs               | Detect unwanted spacing etc. for JavaScript. |
| grunt-contrib-less	 | grunt less:readyMade     | Compile all the less files. The files which comes with third party libraries or frameworks like Bootstrap 3.0 |
| grunt-contrib-less     | grunt less:customMade    | Compile all the less files. The files which created by users as their custom stylesheets.
| grunt-contrib-watch	 | grunt watch 				| Keep watch on less folders & files. Any changes in less file will automatically compile all the less files. |
| grunt-contrib-qunit	 | grunt qunit 				| Perform unit testing. |

**Combine tasks**

| Command                     | Task performed              |
|:--------------------------- |:---------------------------|
| grunt default               | Executing this command will perform the task to detect errors and issues for HTML, CSS, JavaScript and less compilation to CSS. It includes jshint, jscs, htmlhint, csslint, less:readyMade, less:customMade. |
| grunt build              	  | Executing this command will perform the ```default``` task including clear and building production build. |
| grunt compileless           | Executing this command will perform only less compilation to CSS which includes two sub-task ```less:readyMade```, ```less:customMade```. |
| grunt tests		          | Executing this command will perform unit testing. |


## Continuous Integration

### Travis CI

[Travis CI](https://travis-ci.org/hegdeashwin/Protocore/) is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The Protocore 
contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your tests 
when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

## Author & Contributors

Developed &amp; maintained by author: Ashwin Hegde

Follow me at: <a href="https://github.com/hegdeashwin" target="_blank">github</a> | <a href="http://in.linkedin.com/in/hegdeashwin" target="_blank">Linkedin</a> | <a href="https://twitter.com/hegdeashwin3" target="_blank">Twitter</a>

We really appreciate all kind of contributions. Special thanks to <a href="//github.com/hegdeashwin/Protocore/graphs/contributors" target="_blank">contributors</a> for using and supporting Protocore.

To request a feature or you find any typo errors, enhancements or questions; please feel free to post it on following link, or vote for the ones that are already registered.
<br>Tracking: <a href="https://github.com/hegdeashwin/Protocore/issues" target="_blank">https://github.com/hegdeashwin/Protocore/issues</a>

## License

The MIT License (MIT)

Copyright (c) 2015 Ashwin Hegde