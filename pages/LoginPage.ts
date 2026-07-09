import { Page, expect } from "playwright/test";

export class LoginPage {
    constructor(private page: Page) { }

    async launchApplication() {
        await this.page.goto(process.env.URL!);
    }

    async enterLoginDetails() {
       await this.page.locator("#username").fill(process.env.USER_NAME!);
       //  await this.page.locator("#username").fill(username);
        await this.page.locator("#password").fill(process.env.PASS_WORD!);
    }

    async clickLogin() {
        await this.page.locator("#login").click();
    }

    // async verifySearchHotelPage() {
    //     await expect(this.page.locator("text=Search Hotel")).toBeVisible();
    // }
}