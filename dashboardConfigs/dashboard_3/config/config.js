/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "sl",
	locale: "sl-SI",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "clock",
			position: "top_left"
		},
		// https://github.com/Jopyth/MMM-Remote-Control
		{
  			  module: 'MMM-Remote-Control',
			    // uncomment the following line to show the URL of the remote control on the mirror
			    // position: 'bottom_left',
			    // you can hide this module afterwards from the remote control itself
			    config: {
			        customCommand: {},  // Optional, See "Using Custom Commands" below
			        showModuleApiMenu: true, // Optional, Enable the Module Controls menu
			        secureEndpoints: true, // Optional, See API/README.md
			        // uncomment any of the lines below if you're gonna use it
			        // customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
			        // apiKey: "", // Optional, See API/README.md for details
			        // classes: {} // Optional, See "Custom Classes" below
			    }
		},
		// https://github.com/ianperrin/MMM-ModuleScheduler		
		{
			module: 'MMM-ModuleScheduler',
			config: {
				notification_schedule: [
					// TURN THE MONITOR/SCREEN ON AT 08:00 EVERY DAY
					{notification: 'REMOTE_ACTION', schedule: '0 8 * * *', payload: {action: "MONITORON"}},
					// TURN THE MONITOR/SCREEN OFF AT 22:00 EVERY DAY
					{notification: 'REMOTE_ACTION', schedule: '0 22 * * *', payload: {action: "MONITOROFF"}},
					// RESTART THE MAGICMIRROR PROCESS AT 2am EVERY SUNDAY
					{notification: 'REMOTE_ACTION', schedule: '0 2 * * SUN', payload: {action: "RESTART"}}
				]
			}
		},
		// https://github.com/skuethe/MMM-RandomPhoto
		{
		    module: 'MMM-RandomPhoto',
		    position: 'fullscreen_below',
		    config: {
		        imageRepository: "picsum",
		        repositoryConfig: {
		        },
		        width: 1600,
		        height: 900,
		        grayscale: false,
		        startHidden: false,
		        showStatusIcon: true,
		        statusIconMode: "show",
		        statusIconPosition: "top_right",
		    }
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
