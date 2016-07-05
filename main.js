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
var obj;
var result;
firebase.database().ref('users').on('value', function(snapshot) { 
    obj = (snapshot.val());
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key].username);
        }
    };
    result = arr;
     for(var i in result){
           $("#list").append('<li>'+result[i]+'</li>');
       
      }
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

