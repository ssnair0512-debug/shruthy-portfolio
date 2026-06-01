const puppeteer = require('puppeteer');
const path = require('path');

const files = [
  { file: 'modern-a-dark-editorial.html', name: 'Direction-A-Dark-Editorial', sections: [
    { y: 0, suffix: 'landing' },
    { y: 1800, suffix: 'why-page' },
  ]},
  { file: 'modern-b-warm-layered.html', name: 'Direction-B-Warm-Layered', sections: [
    { y: 0, suffix: 'landing' },
    { y: 1900, suffix: 'why-page' },
  ]},
  { file: 'modern-c-bold-type.html', name: 'Direction-C-Bold-Type', sections: [
    { y: 0, suffix: 'landing' },
    { y: 2400, suffix: 'why-page' },
  ]},
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  for (const f of files) {
    const filePath = `file://${path.resolve(__dirname, f.file)}`;
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));

    for (const section of f.sections) {
      await page.evaluate((y) => window.scrollTo(0, y), section.y);
      await new Promise(r => setTimeout(r, 400));
      const outFile = path.resolve(__dirname, `screenshot-${f.name}-${section.suffix}.png`);
      await page.screenshot({ path: outFile, fullPage: false });
      console.log(`Saved: ${outFile}`);
    }
  }

  await browser.close();
})();
