async function capture(browserInstance, url) {
    let browser;
    try {
        browser = await browserInstance;

        let page = await browser.newPage();
        await page.goto(url, {waitUntil: "networkidle0", timeout: 60000});
        await page.setViewport({width: 1600, height: 900});
        await page.screenshot({
            path: "./output/screenshot.jpg",
            type: "jpeg",
            fullPage: true
        });
        await page.close();
        await browser.close();
    } catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance, url) => capture(browserInstance, url)
