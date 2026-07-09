import { chromium, firefox, webkit, Browser, Page } from "playwright";
import * as dotenv from "dotenv";
dotenv.config();

export class BrowserManager {
    static browser: Browser;
    static page: Page;

    static async launchBrowser() {
        const browserName = process.env.BROWSER || "chromium";

        if (browserName === "firefox") {
            this.browser = await firefox.launch({ headless: false });
        } else if (browserName === "webkit") {
            this.browser = await webkit.launch({ headless: false });
        } else {
            this.browser = await chromium.launch({ headless: false });
        }

        this.page = await this.browser.newPage();
        return this.page;
    }

    static async closeBrowser() {
        await this.browser.close();
    }
}