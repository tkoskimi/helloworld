/**
 * @module AppRouter
 */
define( [ "marionette" ], function( Marionette ) {
	"use strict";

	/**
	 * Defines the routes for application pages.
	 *
	 * @constructor
	 * @alias AppRouter
	 * @see http://marionettejs.com/docs/v2.4.1/marionette.approuter.html
	 */
	var AppRouter = {
		appRoutes: {
			"log": "doPrintLog",
			"hello": "openHelloPage"
		}
	};

	return Marionette.AppRouter.extend( AppRouter );
} );
