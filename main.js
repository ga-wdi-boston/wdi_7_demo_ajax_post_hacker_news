$(document).ready(function() {
  $.ajax({
    url: 'http://ig-hacker-news.herokuapp.com/users',
    // this url comes from rake routes, make sure rake routes says this url accepts a POST request
    // also make sure that the controller action for this url exists and saves to the database correctly
    type: 'POST',
    // for a GET request you don't have to specify the type of request, because AJAX defaults to GET
    // for a POST request you have to specify the type of request manually
    data: {user: {name: 'bobface', about: 'human', email: 'bob@bob.com'}}, 
    // the data object contains all the info you are sending to the Rails API
    // the attributes have to match your database schema
    // by default, you need to specify the model manually - in this case, user
    // so {user: {name, about, email} } instead of just {name, about, email}
    // but if you are using a serializer, this behavior may be different depending on how you set up the serializer
    // make sure that in your controller, you have params set to allow this info (aka 'strong params')
    // usually this is a private method with params.require(:user).permit(:name, :about, :email)
    dataType: 'JSON' 
    // dataType here refers to what is being RETURNED from the POST request, not what's being sent
  })
  .done(function(results) {
    console.log("here is the user I just created, click on the triangle to expand");
    console.table(results);
    // do other stuff with the user you just created here
    // to do that, generally you would call functions that are defined elsewhere in your Javascript file
    // and either pass in 'results' as the argument to those functions
    // or assign 'results' to a property of an existing Javascript object
  });
  
  // the same POST request as above, but without all the comments
  $.ajax({
    url: 'http://ig-hacker-news.herokuapp.com/users',
    type: 'POST',
    data: {user: {name: 'steve jobs', about: 'god or anti-god?', email: 'steve@apple.com'}}, 
    dataType: 'JSON' 
  })
  .done(function(results) {
    console.log("here is another user I just created, click on the triangle to expand");
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
