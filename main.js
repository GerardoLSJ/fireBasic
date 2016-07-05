


$('#fire').submit(function() {
   var $inputs = $('#fire :input');
console.log("exito:"+name);
   var name = $('#email').val();
   var pass = $('psw').val();
   console.log("exito:"+name);

});

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}
function pushUserData( name, email) {
  firebase.database().ref('users/').push({
    username: name,
    email: email
  });
}
