/**
 * @module widgets/hello/HelloView
 * @version 0.1
 * @requires config
 * @requires underscore
 * @requires marionette
 * @requires log4js
 * @requires templates/widgets/hello/view.html
 */
define( [
		"config",
		"underscore",
		"marionette",
		"log4js",
		"text!templates/widgets/hello/view.html"
	], function( Config, _, Marionette, log4js, template ) {
	"use strict";

	/**
	 * @constructor
	 * @alias module:widgets/hello/HelloView
	 * @see http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
	 */
	var HelloView = {
		/**
		 * @override
		 */
		template: _.template( template ),

		/**
		 * @override
		 */
		ui: {
			validateBtn: "#validate-btn",
			inputBox: "#input",
			outputBox: "#output"
		},

		/**
		 * @override
		 */
		events: {
			"click @ui.validateBtn": "onClickValidate"
		},

		/**
		 * Initializes this view.
		 *
		 * @public
		 * @override
		 * @method initialize
		 * @memberof module:widgets/hello/HelloView
		 * @param {Object} options The options for the view.
		 * @param {Backbone.Radio} options.channel (required) The internal channel.
		 */
		initialize: function( options ) {
			_.bindAll( this );

			this.log = log4js.getLogger( "app.widgets.hello.helloview" );
			this.channel = options.channel;
		},

		onClickValidate: function() {
			this.ui.outputBox.text( this.ui.inputBox.val() );
		}
	};

	return Marionette.ItemView.extend( HelloView );

} );
