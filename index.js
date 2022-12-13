const puppeteer = require('puppeteer');

let food_list =[];
const food_object = {};

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.woolworths.com.au/shop/productdetails/162019/cadbury-chocolate-coated-almonds');
  

  // Use Puppeteer to extract the data you want from the page
  const data = await page.evaluate(() => {
    let food_name = document.querySelector('.shelfProductTile-title').innerText;
    let nutrition_data =  document.querySelector('.nutrition-table').innerText; 

    let data_array = [food_name, nutrition_data,links]

    return data_array;
  });

  food_object[data[0]] = data[1];

console.log(food_object);
//take screenshot
// await page.screenshot({path: 'example.png'});
//food_list.push(data)
//console.log(food_list)

  // Close the browser
  await browser.close();
})();

