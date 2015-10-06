/**
 * @module widgets/hello/HelloController
 * @version 0.1
 * @requires underscore
 * @requires backbone
 * @requires marionette
 * @requires log4js
 * @requires widgets/hello/HelloView
 * @requires radio
  */
define( [ "underscore", "backbone", "marionette", "log4js", "widgets/hello/HelloView", "radio" ],
	function( _, Backbone, Marionette, log4js, HelloView ) {
	"use strict";

	/**
	 * @constructor
	 * @alias module:widgets/hello/HelloController
	 * @see http://marionettejs.com/docs/v2.4.1/marionette.object.html
	 */
	var HelloController = {
		/**
		 * Initializes this controller.
		 *
		 * To initialize this controller, the logger and the global and internal channels are
		 * created as well as the view that is then rendered.
		 *
		 * @public
		 * @override
		 * @param {Object} options The options for the controller.
		 * @param {Marionette.Region} options.region (Required) The region where this widget is
		 * rendered to.
		 * @param {Backbone.Radio.channel} options.bus (Optional) The global channel. If missing,
		 * the widget uses the "dev:null" channel.
		 */
		initialize: function( options ) {
			_.bindAll( this );

			this.log = log4js.getLogger( "app.widgets.hello.hellocontroller" );

			if ( _.has( options, "bus" ) ) {
				this.bus = options.bus;
			} else {
				this.bus = Backbone.Radio.channel( "dev:null" );
			}

			this.channel = Backbone.Radio.channel( "widget:hello" );

			// Create the view. In this case, the view doesn't have a model.
			this.view = new HelloView( _.extend( options, { channel: this.channel } ) );

			// Render the view.
			options.region.show( this.view );
		}
	};

	return Marionette.Object.extend( HelloController );

} );
