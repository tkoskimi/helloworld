/**
 * @module AppLayout
 */
define( [ "underscore", "marionette" ],
	function( _, Marionette ) {
	"use strict";

	/**
	 * The layout of the application.
	 *
	 * @constructor
	 * @alias AppLayout
	 * @param {Object} [options] Marionette.LayoutView options
	 * @see http://marionettejs.com/docs/v2.4.1/marionette.layoutview.html
	 */
	var AppLayout = {
		el: "body",
		regions: {
			mainRegion: "#main-page",
			notificationRegion: "#notification-region"
		}
	};

	return Marionette.LayoutView.extend( AppLayout );
} );
