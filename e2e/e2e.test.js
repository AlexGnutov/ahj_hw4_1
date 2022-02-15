import puppeteer from 'puppeteer';

jest.setTimeout(10000);
describe('Page start', () => {
  let browser;
  let page;
  const baseUrl = 'http:/localhost:9000';

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  test('Page start', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('body');
  });

  test('Validator exist', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.card-validator');
  });

  test('Wrong entry popup', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    const button = await page.$('.validator-button');
    await input.type('77151122341');
    button.click();
    await page.waitForSelector('.popup-message.wrong');
  });

  test('Correct entry popup', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    const button = await page.$('.validator-button');
    await input.type('4024007102333688');
    button.click();
    await page.waitForSelector('.popup-message.right');
  });

  afterAll(async () => {
    await browser.close();
  });
});
