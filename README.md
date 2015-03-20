# Demo: AJAX Post to Hacker News Rails API

This demo uses Ilja's Hacker News Rails API. If that repo changes, the demo may not work anymore. 
* http://ig-hacker-news.herokuapp.com/
* https://github.com/IljaGoushcha/wdi_7_rails_lab_hn_api

Currently the API only accepts the following requests: 
* GET requests to http://ig-hacker-news.herokuapp.com/users
* POST requests to http://ig-hacker-news.herokuapp.com/users in the format  
`data: {user: {name: "Alyssa P. Hacker", email: "alyssa@hacker.com", about: "1337 h4xx0r sk1llz"} }` 
* GET requests to http://ig-hacker-news.herokuapp.com/submissions
* GET requests to http://ig-hacker-news.herokuapp.com/comments

To view the demo:  
* clone this repo to your own computer
* in your browser, open up `index.html` from this repo
* in your text editor, look at `main.js` to see the AJAX request being made
* in your browser, open Chrome console to see the results of the demo
