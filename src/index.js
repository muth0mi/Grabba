const browserObject = require('./browser');
const screenshot = require('./screenshot');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
const url = "https://sbsltd.co.ke";
screenshot(browserInstance, url);