define(["crossroads"], function(crossroads) {

	'use strict';
	
	crossroads.addRoute('/', function(){
		console.log("Home View");
		require(['views/homeView'], function(HomeView) {
			var homeView = new HomeView();
			homeView.initialize();
		});
	});

	crossroads.addRoute('/about', function(){
		console.log("About Us View");
		require(['views/aboutView'], function(AboutView) {
			var aboutView = new AboutView();
			aboutView.initialize();
		});
	});
});