# ScrapeItLikeIzHot
Scrape Reconstructed
# ScrapeItLikeItsHot aka All the News That's Fit to Scrape

### Overview

This is a web app where Mongoose and Cheerio is utilized to scrape news from another site. Users can view and leave comments on the latest news result. 

### Packages Installed

   1. express

   2. express-handlebars

   3. mongoose

   4. cheerio

   5. axios

   6. morgan - Added as extra tool to log all requests made through the app

**EXTRAS**: 

*mLab add-in was installed in order to deploy this MongoDB project to Heroku

## Instructions

BEFORE YOU START! Access the site through https://scrapeitlikeizhot.herokuapp.com/

  1. Whenever a user visits this site, the app should scrape stories from my chosen source and display them for the user. Each scraped article is saved to the application database. The app will scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Photo if available

  2. Click on an article and leave comments on the articles displayed. Users will be able to revisit them later. The comments are saved to the database as well and associated with their articles. Users can delete comments left on articles. All stored comments should be visible to every user.
