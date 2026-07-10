import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, Page } from "playwright";

Before(async function () {
    // static browser: Browser;
    // static page: Page;

    //  const browserName = process.env.BROWSER || "chromium";

    //     if (browserName === "firefox") {
    //         this.browser = await firefox.launch({ headless: false });
    //     } else if (browserName === "webkit") {
    //         this.browser = await webkit.launch({ headless: false });
    //     } else {
    //         this.browser = await chromium.launch({ headless: false });
    //     }

    //     this.page = await this.browser.newPage();
    //     return this.page;
    console.log("before")
    //Before browser launch 

    console.log("git")
    console.log("git1")
    console.log("git3")
    console.log("git4")
    console.log("git5")
    console.log("git6")
    console.log("Yuvaraj")
    console.log("Sekar")

})

After(async function (scenario) {
    // if(scenario.result?.status=== Status.FAILED){
    //     const screenshot = await page.screenshot({
    //         path:`screenshot/${scenario.pickle.name}.png`,
    //         fullPage= true;
    //     });
    //     this.attach(screenshot, 'image/png')
    // }
    console.log("after")
    
})
