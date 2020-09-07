const browserObject = require('./browser');
const scraperController = require('./screenshot');
// const screenshot = require('./screenshot');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
const url = "https://github.com/dishantagnihotri/Snappy-Fullpage-Screenshot-Capture";
scraperController(browserInstance, url)