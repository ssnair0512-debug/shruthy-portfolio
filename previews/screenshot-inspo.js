const puppeteer = require('puppeteer');
const path = require('path');

const files = [
  { file: 'inspo-a-joanna.html', name: 'Inspo-A-Joanna', sections: [
    { y: 0, suffix: 'landing' },
    { y: 1700, suffix: 'why-page' },
  ]},
  { file: 'inspo-b-pradeep.html', name: 'Inspo-B-Pradeep', sections: [
    { y: 0, suffix: 'landing' },
    { y: 1900, suffix: 'why-page' },
  ]},
  { file: 'inspo-c-justin.html', name: 'Inspo-C-Justin', sections: [
    { y: 0, suffix: 'landing' },
    { y: 2000, suffix: 'why-page' },
  ]},
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  for (const f of files) {
    const filePath = `file://${path.resolve(__dirname, f.file)}`;
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 2000));

    for (const section of f.sections) {
      await page.evaluate((y) => window.scrollTo(0, y), section.y);
      await new Promise(r => setTimeout(r, 600));
      const outFile = path.resolve(__dirname, `screenshot-${f.name}-${section.suffix}.png`);
      await page.screenshot({ path: outFile, fullPage: false });
      console.log(`Saved: ${outFile}`);
    }
  }

  await browser.close();
})();
