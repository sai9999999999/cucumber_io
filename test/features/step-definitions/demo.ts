import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(2000);
});

When(/^search with (.*)$/, async function (searchItem) {
  await browser.pause(3000);
  console.log(`>>searchItem :${searchItem}`);
  await $(".gLFyf").setValue(searchItem);
  await browser.keys("Enter");
  await browser.pause(2000);
});

Then(/^click on first search result$/, async function () {
  await browser.pause(3000);
  $(".LC20lb ").click();

  console.log("success");
});

Then(/^URL should match (.*)$/, async function (expectedUrl) {
  console.log(`>> expectedurl: ${expectedUrl}`);
  await browser.pause(3000);
  let url = await browser.getUrl();
  console.log("hii");
  console.log(url);

  expect(url).to.equal(expectedUrl);
});
