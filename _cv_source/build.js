// Renders cv.html to assets/pdf/CV_HaiwenHuang.pdf. Run: node _cv_source/build.js
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.join(__dirname, "cv.html"));
  await page.pdf({ path: path.join(__dirname, "..", "assets", "pdf", "CV_HaiwenHuang.pdf"), format: "A4", preferCSSPageSize: true });
  await browser.close();
})();
