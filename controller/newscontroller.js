
var Axios = require("axios");
var cheerio = require("cheerio");
var express = require("express");
var Router  = express.Router();


Router.get("/", (request, response) => {
    var news_archive = [{title:"The Guardian", link: "https://www.theguardian.com/theguardian/series/from-the-archive"}]

    console.log("testing");
    response.render("index", {article: news_archive})
    
});

Router.get("/article", (request, response) => {

});

Router.get("/articles", (request, response) => {

    return Axios.get("https://www.theguardian.com/theguardian/series/from-the-archive").then(function(res){ 
   var $= cheerio.load(res.data) 
   var articles = []
   $(".fc-item__container").each(function(element){
   var header = $(this) 
         .children("a")
         .text()

       var url =$(this)
       .children("a")
       .attr ("href")

    //    var summary=$(this)
    //    .children(".fc-item__content")
    //    .children(".fc-item__standfirst-wrapper")
    //     .children("fc-item__standfirst")
    //     .innerHTML()

    var data = {

    key1 : header,
    key2 : url, 
    // key3 : summary
    
    }

 articles.push(data)


   })
console.log(articles);

});
});

//

//fake dummy data, TITLE LINK, THEN SEE IF IT DISPLAYS ON MY HANDLESBARS. 
//
//Luis




module.exports = Router