import puppeteer from 'puppeteer';

describe('H1 Text', () => {
  test(
    'h1 loads correctly',
    async () => {
      let browser = await puppeteer.launch({
        headless: false
      });
      let page = await browser.newPage();

      page.emulate({
        viewport: {
          width: 1200,
          height: 900
        },
        userAgent: ''
      });

      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.Product__name');

      const html = await page.$eval('.Product__name', e => e.innerHTML);
      expect(html).toBe('Apple iPhone 8');

      browser.close();
    },
    16000
  );
});

describe('Options', () => {
  test(
    'Options displays correctly',
    async () => {
      let browser = await puppeteer.launch({
        headless: false
      });
      let page = await browser.newPage();

      page.emulate({
        viewport: {
          width: 1200,
          height: 900
        },
        userAgent: ''
      });

      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.Options__state');

      const text = await page.$eval('.Options__state', e => e.innerText);
      expect(text).toBe('Colour: Gold');

      browser.close();
    },
    16000
  );

  test(
    'Clicking options updates text and image correctly',
    async () => {
      let browser = await puppeteer.launch({
        headless: false
      });
      let page = await browser.newPage();

      page.emulate({
        viewport: {
          width: 1200,
          height: 900
        },
        userAgent: ''
      });

      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.Options__state');

      await page.click('.Option:nth-child(1) .Option__action');
      let text = await page.$eval('.Options__state', e => e.innerText);
      let imageSrc = await page.$eval('.Product__image', e => e.src);
      expect(text).toBe('Colour: Gold');
      expect(imageSrc).toBe(
        'http://localhost:3000/images/desktop/Apple_iPhone_8_Gold-full-product-front.png'
      );

      await page.click('.Option:nth-child(2) .Option__action');
      text = await page.$eval('.Options__state', e => e.innerText);
      imageSrc = await page.$eval('.Product__image', e => e.src);
      expect(text).toBe('Colour: Silver');
      expect(imageSrc).toBe(
        'http://localhost:3000/images/desktop/Apple_iPhone_8_Silver_WS2-full-product-front.png'
      );

      await page.click('.Option:nth-child(3) .Option__action');
      text = await page.$eval('.Options__state', e => e.innerText);
      imageSrc = await page.$eval('.Product__image', e => e.src);
      expect(text).toBe('Colour: Space Grey');
      expect(imageSrc).toBe(
        'http://localhost:3000/images/desktop/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png'
      );

      browser.close();
    },
    16000
  );

  test(
    'Clicking options updates price correctly',
    async () => {
      let browser = await puppeteer.launch({
        headless: false
      });
      let page = await browser.newPage();

      page.emulate({
        viewport: {
          width: 1200,
          height: 900
        },
        userAgent: ''
      });

      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.Options__state');

      await page.click(
        '.Product__optionsCapacity .Option:nth-child(1) .Option__action'
      );
      let textUpfront = await page.$eval('.Price__upfront', e => e.innerText);
      let textMonth = await page.$eval('.Price__month', e => e.innerText);
      let textState = await page.$eval(
        '.Product__optionsCapacity .Options__state',
        e => e.innerText
      );
      expect(textUpfront).toBe('from £149 upfront');
      expect(textMonth).toBe('when you pay £43.20 a month');
      expect(textState).toBe('Capacity: 64GB');

      await page.click(
        '.Product__optionsCapacity .Option:nth-child(2) .Option__action'
      );
      textUpfront = await page.$eval('.Price__upfront', e => e.innerText);
      textMonth = await page.$eval('.Price__month', e => e.innerText);
      textState = await page.$eval(
        '.Product__optionsCapacity .Options__state',
        e => e.innerText
      );
      expect(textUpfront).toBe('from £275 upfront');
      expect(textMonth).toBe('when you pay £46.80 a month');
      expect(textState).toBe('Capacity: 256GB');

      browser.close();
    },
    16000
  );
});
