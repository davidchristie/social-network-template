import faker from "faker";
import puppeteer, { Browser, Page } from "puppeteer";

import { ORIGIN } from "../constants";

describe("on success", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(`${ORIGIN}/signup`);
    await page.type("#signup-name", faker.name.firstName());
    await page.type("#signup-email", faker.internet.email());
    await page.type("#signup-password", faker.internet.password());
    await page.click(`.SignupForm button[type="submit"]`);
    await page.waitForNavigation();
  });

  it(`redirects to "/"`, async () => {
    expect(await page.url()).toEqual(`${ORIGIN}/`);
  });

  it("renders HomePage component", async () => {
    expect(await page.$(".HomePage")).not.toBeNull();
  });
});