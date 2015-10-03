/**
 * @module AppController
 */
define( [
		"underscore",
		"jquery",
		"marionette"
	], function( _, $, Marionette ) {
	"use strict";

	/**
	 * Controls the routes of this application.
	 *
	 * @constructor
	 * @alias AppController
	 * @param {Object} Marionette.Controller options
	 */
	var AppController = {
		/**
		 * @override
		 * @param {Object} [options] Marionette.Controller options
		 * @see http://marionettejs.com/docs/v2.4.1/marionette.controller.html
		 */
		initialize: function() {
			_.bindAll( this );
		},

		/**
		 * For testing.
		 */
		doPrintLog: function() {
			console.log( "doPrintLog" );
		}
	};

	return Marionette.Controller.extend( AppController );
} );
