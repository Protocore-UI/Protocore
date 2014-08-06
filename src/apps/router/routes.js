define(["routie"], function() {

	'use strict';
	
	routie({
		'': function() {
			require(['views/homeView'], function(HomeView) {
				var homeView = new HomeView();
				homeView.initialize();
			});
		},
		'about': function() {
			require(['views/aboutView'], function(AboutView) {
				var aboutView = new AboutView();
				aboutView.initialize();
			});
		}
	});
	
});