const axios = require('axios');
const cheerio = require('cheerio');

// Send a GET request to the website
axios.get('https://www.woolworths.com.au/')
  .then(response => {
    // Use Cheerio to parse the HTML
    const $ = cheerio.load(response.data);

    // Extract the data you want from the HTML
    const data = $('#nutritional-data').text();
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });