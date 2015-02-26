// modify this file so that on index.html,
// a visitor can see a list of all the users,
// fill out a form, hit submit,
// and see the new user added to the list of users

var UserApp = UserApp || {};

UserApp.init = function() {
  $.ajax({
    url: 'http://ig-hacker-news.herokuapp.com/users',
    type: 'GET',
  })
  .done(function(results) {
    console.log("here are all the users in my database")
    console.table(results);
    UserApp.add_all_users(results);
  });
};

UserApp.add_all_users = function(users) {
  for (var i = 0; i < users.length; i++) {
    UserApp.add_one_user(users[i]);
  };
};

UserApp.add_one_user = function(user) {
  var mystring =  '<li>' +
              ' Name: ' + user.name +
              ' About: ' + user.about +
              ' Email: ' + user.email +
              '</li>';
  $('#users').append(mystring);
};

UserApp.submit_user = function(event) {
  event.preventDefault(); // do this for all forms
  var $name = $('#name').val();
  $.ajax({
    url: 'http://ig-hacker-news.herokuapp.com/users',
    type: 'POST',
    dataType: 'JSON',
    data: {
      user: {
        name: $name,
        about: $('#about').val(),
        email: $('#email').val()
      }
    },
  })
  .done(function(new_user) {
    console.log("I posted a user! Woohoo!");
    UserApp.add_one_user(new_user);
  });

};

$(document).ready(function() {
  UserApp.init(); // initial GET request for existing users
  $('#submit').on('click', UserApp.submit_user); // when i submit a new user
});


