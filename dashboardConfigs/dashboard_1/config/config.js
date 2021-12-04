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
	locale: "en-US",
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
			module: "alert",
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "MMC",
						url: "https://www.rtvslo.si/feeds/00.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		// https://github.com/paphko/mmm-weatherchart
		{
			module: 'mmm-weatherchart',
			position: 'top_right', // this can be any of the regions
			config: {
				locationPath: "/en/content/2-3196359/meteogram.svg",
				updateInterval: 60 * 60 * 1000, // update every hour
				hideBorder: true, // whether or not a border with city name should be shown
				negativeImage: false, // whether or not the default white image should be inverted
				hoursToShow: -1, // Cut the image down to show less than the full 48 hour forecast. -1 to show everything.
				// mmDirectory: "/home/pi/MagicMirror/" // required for caching; adjust if it differs
			},
		},
		// https://github.com/XBCreepinJesus/MMM-ServerStatus
		{
			module: "MMM-ServerStatus",
		    header: "MagicMirror status",   // Can be anything you want, or blank
		    position: "top_left",       // Choose a position
			config:
			{
				pingInterval: 60,
				templateName: "default",
				upSymbol: "check-circle",
				upColor: "green",
				downSymbol: "times-circle",
				downColor: "red",
				upText: "",
				downText: "",
				tableClass: "medium",
					hosts: [    // For example
						{ name: "localhost", ip: "127.0.0.1" },
						{ name: "Router - One", ip: "192.168.1.1" },
						{ name: "Router - Two", ip: "192.168.2.1"},
						{ name: "TV - libreelec", ip: "192.168.2.2" },
						{ name: "Pi - stenski", ip: "192.168.2.10" }
					],
			},
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
