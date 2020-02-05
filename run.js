#!/usr/bin/env node
const puppeteer = require('puppeteer');

async function main() {
	const browser = await puppeteer.launch({args: ['--no-sandbox'], headless: false});
	const page = (await browser.pages())[0];

	await page.setContent('<input type=file accepts="aac mp3">');
}

(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e.stack);
        process.exit(2);
    }
})();
