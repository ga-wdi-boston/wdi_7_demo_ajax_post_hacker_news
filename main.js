$(document).ready(function() {
  $.ajax({
    url: 'http://ig-hacker-news.herokuapp.com/users',
    type: 'POST',
    data: {user: {name: 'bobface', about: 'human', email: 'bob@bob.com'}},
    dataType: 'JSON'
  })
  .done(function(results) {
    console.log("here is the user I just created, click on the triangle to expand")
    console.table(results);
  });

  $.ajax({
    url: 'http://ig-hacker-news.herokuapp.com/users',
    type: 'GET',
  })
  .done(function(results) {
    console.log("here are all the users in my database")
    console.table(results);
  });
});
