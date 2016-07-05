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
/*    var users = [];
    firebase.database().ref('users').on('value', function(snapshot) {
    users(snapshot.val());
    console.log(users);
    });
*/
var data = [];
firebase.database().ref('users').on('value', function(snapshot) { 
    data = (snapshot.val());

    data.username.forEach(function(element) {
         $("#list").append('<li></li>');
        
    });
})





$(document).ready(function(){
    $('#fire').on('submit', function(e){
        e.preventDefault();
        var name = $('#name').val();
        var pass = $('#pwd').val();
        pushUserData( name, pass);
        console.log("Pushed");
        document.getElementById("fire").reset();
       

    });
});

