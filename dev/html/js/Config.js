/**
 * @module Config
 */
define( [ "text!configJSON" ], function( configJSON ) {
	"use strict";

	var Config = JSON.parse( configJSON );

	return Config;
} );
