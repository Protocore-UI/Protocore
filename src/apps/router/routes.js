define(["signals", "hasher", "crossroads"], function(signals, hasher, crossroads) {

	'use strict';
	
	var router = crossroads.create();
	
	var parseHash = function(newHash){
		router.parse(newHash);
	};

	router.addRoute('', function(){
		console.log("Home View");
		require(['apps/views/homeView'], function(HomeView) {
			var homeView = new HomeView();
			homeView.initialize();
		});
	});

	router.addRoute('/about', function(){
		console.log("About Us View");
		require(['apps/views/aboutView'], function(AboutView) {
			var aboutView = new AboutView();
			aboutView.initialize();
		});
	});

	hasher.initialized.add(parseHash);
	hasher.changed.add(parseHash);
	hasher.init();

});