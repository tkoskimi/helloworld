/**
 * This module represents the application. The module handles all the
 * initializations needed before the application starts.
 *
 * @module App
 */
define( [ "config", "backbone", "marionette", "AppLayout", "log4js", "radio" ],
	function( Config, Backbone, Marionette, AppLayout, log4javascript ) {
	"use strict";

	var app = new Marionette.Application();

	app.rootView = new AppLayout();

	// Create the global message bus.
	app.bus = Backbone.Radio.channel( Config.general.bus );

	// Start the history when the application is ready.
	app.on( "start", function() {
		var logger   = log4javascript.getLogger( "app" );
		var appender = new log4javascript.BrowserConsoleAppender();
		var layout = new log4javascript.PatternLayout( "[%-5p] %c %m" );

		appender.setLayout( layout );
		logger.addAppender( appender );

		Backbone.history.start();
	} );

	return app;
} );
