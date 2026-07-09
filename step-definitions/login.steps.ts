import { Given, When, Then } from "@cucumber/cucumber";
import { BrowserManager } from "../utils/BrowserManager";
import { LoginPage } from "../pages/LoginPage";
import { Page } from "playwright";

let page: Page;
let loginPage: LoginPage;


Given('user launches the application', async function () {
    page = await BrowserManager.launchBrowser();
    loginPage = new LoginPage(page);
    await loginPage.launchApplication();

});
When('user enters valid username and password', async function () {
    await loginPage.enterLoginDetails();
});
When('user clicks on login button', async function () {
    await loginPage.clickLogin();
});
Then('user should navigate to search hotel page', async function () {
    await BrowserManager.closeBrowser();
});

When('Enter the username {string}', function (user) {
    console.log(user);
});

When('Enter the password {string}', function (pass) {
    console.log(pass)
});

When('Enter the user {string}', function (user) {
    console.log(user)
});

When('Enter the pass {string}', function (pass) {
    console.log(pass)
});

// raw()
When('user enter the raw details', function (dataTable) {
   const data =  dataTable.raw();
   console.log(data);
});

// rows()
When('user enter the rows details', function (dataTable) {
  const data = dataTable.rows()
  data.forEach(row => {
    console.log(row[0]);
   // console.log(row[1]);

  });
  //console.log(data)
});

// hashes()
When('user enter the hashes details', function (dataTable) {
   const data =  dataTable.hashes();
   console.log(data);
   data.forEach(user=>{
    console.log(user.Test);
    console.log(user.Admin);
   })
});

// rowshash()
When('user enter the rowsHash details', function (dataTable) {
   const data =  dataTable.rowsHash();
    console.log(data);
    console.log(data.Test);
    console.log(data.Admin);
    
});