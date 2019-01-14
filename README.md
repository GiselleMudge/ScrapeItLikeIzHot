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

   5. request - WAS Axios but buggy, so switched back to request

   6. morgan - Added as extra tool to log all requests made through the app

**EXTRAS**: 

*mLab add-in was installed in order to deploy this MongoDB project to Heroku

## Instructions

BEFORE YOU START! Access the site through https://scrapeitlikeizhot.herokuapp.com/

  1. Whenever a user visits this site, the app should scrape stories from Wired.com and display them for the user. Each scraped article is saved to the application database. The app will scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Photo if available

  2. Click on an article and leave comments on the articles displayed. Users will be able to revisit them later. The comments are saved to the database as well and associated with their articles. Users can delete comments left on articles. All stored comments should be visible to every user.
  
  ## Screenshots
  
  SUCCESS!
  
Main Page after scrape:
  ![image](https://user-images.githubusercontent.com/41309640/51103323-41f88600-17b0-11e9-96a3-7530b031104d.png)

Save/Unsave Articles and Comment creating/deleting are functional:
![image](https://user-images.githubusercontent.com/41309640/51103377-7a985f80-17b0-11e9-9445-fc03b4a631ba.png)

View Details button will lead you to the source from WIRED.COM:

![image](https://user-images.githubusercontent.com/41309640/51103441-b59a9300-17b0-11e9-9bea-67da1c467198.png)
