define(["routie"], function() {

	routie({
		'': function() {
			require(['views/homeView'], function(HomeView) {
				var homeView = new HomeView();
				homeView.render();
			});
		},
		'about': function() {
			require(['views/aboutView'], function(AboutView) {
				var aboutView = new AboutView();
				aboutView.render();
			});
		}
	});
	
});