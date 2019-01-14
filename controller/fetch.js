//Require cheerio 
const cheerio = require('cheerio');
//Get html
const axios = require("axios");
//Use Article model
const db = require('../models');


exports.scrapeWeb = function (req, res) {
  //Generate random number so every scrape is 10 articles
  let pageNum = Math.floor(Math.random()*90);
  //Define the site we want to scrape 
  
  router.get('/scraper', (req,res) =>  {
    axios.get('https://www.wired.com/most-recent/page/${pageNum}/').then(function(response) {
    const $ = cheerio.load(html);
    

    $("li.archive-item-component").each((i,element) =>  {
      let result = {};

      result.link = 'https://www.wired.com'+$(element).find("a").attr("href");
      result.title = $(element).find("a").find("h2").text().trim();
      result.image = $(element).find("img").attr("src");
      result.summary = $(element).find("p.archive-item-component__desc").text().trim();
      //console.log(result);

      db.Article.create(result)
      .then(function(dbArticle){
        //console.log(dbArticle);
      })
      .catch(function(error) {
        console.log("Error Scraping News");
      });
    });
    res.redirect('/');
  });
}// End of scrapeWeb