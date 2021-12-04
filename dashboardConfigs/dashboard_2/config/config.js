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
		// https://docs.magicmirror.builders/modules/newsfeed.html
		{
			module: "newsfeed",
			position: "top_right",
			config: {
				feeds: [
					{
						title: "MMC, Slovenija",
						url: "https://www.rtvslo.si/feeds/01.xml"
					},
					{
						title: "MMC, Svet",
						url: "https://www.rtvslo.si/feeds/02.xml"
					},
					{
						title: "MMC, EU",
						url: "https://www.rtvslo.si/feeds/16.xml"
					},
					{
						title: "MMC, Gospodarstvo",
						url: "https://www.rtvslo.si/feeds/04.xml"
					},
					{
						title: "MMC, Crna kronika",
						url: "https://www.rtvslo.si/feeds/08.xml",
					},
					{
						title: "MMC, Okolje",
						url: "https://www.rtvslo.si/feeds/12.xml"
					},
					{
						title: "MMC, Znanost in tehnologija",
						url: "https://www.rtvslo.si/feeds/09.xml"
					},
					{
						title: "24ur",
						url: "http://www.24ur.com//rss"
					},
					{
						title: "Slo-tech",
						url: "http://feeds.st.si/ST-novice"
					}

				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				ignoreOldItems: true,
				ignoreOlderThan: 172800000,
				reloadInterval: 600000, // 10min
				updateInterval: 15000, // 15sec
				animationSpeed: 1500 // 1.5sec
			}
		},
		// https://github.com/LukeSkywalker92/MMM-Globe
		{
			module: 'MMM-Globe',
			position: 'bottom_left',
			config: {
				style: 'fullband',
				imageSize: 550,
				ownImagePath:'http://meteo.arso.gov.si/uploads/probase/www/observ/radar/si0-rm-anim.gif',
				updateInterval: 10*60*1000 // 10 minutes
			}
		},
		// https://github.com/paphko/mmm-weatherchart
		{
            module: 'mmm-weatherchart',
            position: 'bottom_right', // this can be any of the regions
			config: {
				locationPath: "/en/content/2-3196359/meteogram.svg",
				updateInterval: 60 * 60 * 1000, // update every hour
				hideBorder: true, // whether or not a border with city name should be shown
				negativeImage: false, // whether or not the default white image should be inverted
				hoursToShow: -1, // Cut the image down to show less than the full 48 hour forecast. -1 to show everything.
				// mmDirectory: "/home/pi/MagicMirror/" // required for caching; adjust if it differs
			},
		},
		// https://github.com/Jopyth/MMM-Remote-Control
		{
			module: 'MMM-Remote-Control',
		    // uncomment the following line to show the URL of the remote control on the mirror
		    // position: 'bottom_left',
		    // you can hide this module afterwards from the remote control itself
		    config: 
			{
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
				// TURN THE MONITOR/SCREEN ON AT 08:30 ON WEEKENDS, else at 16:00
				{notification: 'REMOTE_ACTION', schedule: '30 8 * * 0,6', payload: {action: "MONITORON"}},
				{notification: 'REMOTE_ACTION', schedule: '0 16 * * 1-5', payload: {action: "MONITORON"}},
				// TURN THE MONITOR/SCREEN OFF AT 22:30 EVERY DAY
				{notification: 'REMOTE_ACTION', schedule: '30 22 * * *', payload: {action: "MONITOROFF"}},
				// RESTART THE MAGICMIRROR PROCESS AT 2am EVERY SUNDAY
				{notification: 'REMOTE_ACTION', schedule: '0 2 * * SUN', payload: {action: "RESTART"}}
            ]
        }
    },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
