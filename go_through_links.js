let items_scraped = [];

//now iterate through this list to grab href attribute.

const puppeteer = require('puppeteer');

let food_list =[];
const food_object = {};

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.woolworths.com.au/shop/browse/snacks-confectionery/biscuits-crackers');
  

  // Use Puppeteer to links from the page
  const links = await page.evaluate(() => {
    return document.querySelectorAll("a.shelfProductTile-descriptionLink"); 
  });


// food_object[food_data[0]] = food_data[1];
// console.log(food_object);
//take screenshot
// await page.screenshot({path: 'example.png'});
//food_list.push(data)
//console.log(food_list)

  // Close the browser
  let link = links
  console.log("hi")
  console.log(link);
  await browser.close();



})();

