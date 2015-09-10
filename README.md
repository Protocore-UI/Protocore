# Protocore [![GitHub version](http://img.shields.io/badge/version-0.0.7-brightgreen.svg)](https://github.com/hegdeashwin/Protocore/releases)

[![Build Status](https://travis-ci.org/hegdeashwin/Protocore.svg?branch=master)](https://travis-ci.org/hegdeashwin/Protocore)   [![Dependency Status](https://gemnasium.com/hegdeashwin/Protocore.svg)](https://gemnasium.com/hegdeashwin/Protocore)  [![Node.js version](http://img.shields.io/badge/io.js-%3E%200.10-brightgreen.svg)](https://github.com/hegdeashwin/Protocore/) [![io.js version](http://img.shields.io/badge/io.js-%3E%202.3-brightgreen.svg)](https://github.com/hegdeashwin/Protocore/) [![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![License version](http://img.shields.io/badge/License-MIT-red.svg)](https://github.com/hegdeashwin/Protocore#license)


Protocore is an open source walking application skeleton for a typical unstructured JavaScript/jQuery web apps. You can use it to quickly bootstrap your unstructured JavaScript/jQuery web application projects.

## Supports
* Node.js v0.10.x or above
* Node.js v4.0 new release
* iojs 2.3.x or above

## Prerequisites

As Protocore is based on JavaScript. It is assumed user already knows JavaScript and jQuery.

For understanding Protocore, knowledge of following JavaScript libraries/frameworks are must.
* Require.js - a JavaScript file and module loader. For more information visit <a href="//requirejs.org/" target="_blank">requirejs.org</a></p></li>

## Installation

Assuming that Git is already installed & running:
```
git clone https://github.com/hegdeashwin/Protocore
```

Assuming that Node.js or io.js & Bower is already installed & running,

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
grunt compileLessDev
```

To start the development server:
```
node server.js

OR

iojs server.js

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

## Protocore Experiments

[protocore-es6-edition](https://github.com/hegdeashwin/protocore-es6-edition) is a special ECMAScript 6 implementation edition of Protocore project.

[generator-protocore](https://github.com/hegdeashwin/generator-protocore) is a Yeoman generator for Protocore. The tool will help to generate walking application skeleton for a typical unstructured JavaScript/jQuery web apps.

[Protocore-cli](https://github.com/hegdeashwin/protocore-cli) is a command line generator for Protocore. This tool will help to generate a walking application skeleton for a typical unstructured JavaScript/jQuery web apps.

## Server layer

The server side codebase resides in the ```server.js``` and ```config.js``` files. By default, the server layer is written in JavaScript (Node.js with Express 4.x) which can be configured and flexible to work with any server side scripting language like Java, PHP, ASP.NET or others. As client and server layer are seperate entity.

## Client layer

The client side codebase resides in the ```src``` folder. This folder contains following subfolders.

```
/src
	+-- /stylesheets
		+--/css
		+--/less
			+--/common
			+--/base
			+--/layout
			+--/modules
			+--/state
			+--/theme
	+-- /assets
		+--/fonts
		+--/images
	+-- /apps
		+--/controller
		+--/models
		+--/views
		+--/router
		+--/templates
	+-- /bower_components [Created by ```bower install``` command]
```

## Test layer

The test side codebase resides in the ```tests``` folder. This folder contains following subfolders.

```
/tests
	+-- /configs
	+-- /apps
		+--/controller
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

**Automations tasks & commands**

| Linting commands |
|:---|
|Markdown : ```grunt mdlint``` |
|HTML/Templates : ```grunt htmlhint```|
|JavaScript : ```grunt jshint``` AND ```grunt jscs```|
|JSON : ```grunt jsonlint```|
|CSS : ```grunt csslint```|

| Build commands |
|:---|
|Production : ```grunt build```|

| Compilation commands |
|:---|
|LESS for development : ```grunt compileLessDev```|
|LESS for production : ```grunt compileLessProd```|

| Watch commands |
|:---|
|LESS Compilation for development : ```grunt watchless```|

| Unit test commands |
|:---|
|Browser: ```http://localhost:8080/tests/``` install http-server npm|

|Report generator commands|
|:---|
|Plato : ```grunt analysis``` OR ```grunt plato```|


## Continuous Integration

### Travis CI

[Travis CI](https://travis-ci.org/hegdeashwin/Protocore/) is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The Protocore 
contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your tests 
when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

## Author & Contributors

Developed &amp; maintained by author: Ashwin Hegde and contributions.

We really appreciate all kind of contributions. Special thanks to <a href="//github.com/hegdeashwin/Protocore/graphs/contributors" target="_blank">contributors</a> for using and supporting Protocore.

To request a feature or you find any typo errors, enhancements or questions; please feel free to post it on following link, or vote for the ones that are already registered.
<br>Tracking: <a href="https://github.com/hegdeashwin/Protocore/issues" target="_blank">https://github.com/hegdeashwin/Protocore/issues</a>

## License

The MIT License (MIT)

Copyright (c) 2015 Ashwin Hegde