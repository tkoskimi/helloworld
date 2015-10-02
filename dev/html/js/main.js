/**
 * The boot strap. Initializes RequireJS. Loads the application modules.
 *
 * @name [main:anonymous]
 * @function
 */
( function() {
	"use strict";

	/**
	 * @property {object} config The RequireJS configuration
	 * @see {@link http://requirejs.org/docs/api.html#config} for further
	 * information
	 * @public
	 */
	var config = {

		baseUrl: "js/app",

		paths: {

			// Core libraries
			"underscore": "../../libs/lodash.min",
			"jquery": "../../libs/jquery-2.1.4.min",
			"backbone": "../../libs/backbone-min",
			"marionette": "../../libs/backbone.marionette.min",
			"radio": "../../libs/backbone.radio.min",
			"log4js": "../../libs/log4javascript",

			// Plugins
			"domReady": "../../libs/domReady",
			"i18n": "../../libs/i18n",
			"text": "../../libs/text",

			// Templates
			"templates": "../../templates",

			// Application configuration
			"configJSON": "../../config.json",
			"config": "../Config"
		},

		shim: {
		}
	};

	require.config( config );

	// Start the application after the DOM is ready to manipulation.
	require( [ "App", "AppRouter", "AppController", "domReady!" ],
		function( App, AppRouter, AppController ) {
		App.appRouter = new AppRouter( {
			controller: new AppController()
		} );
		App.start();
	} );

} )();
