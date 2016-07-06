var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
  // click on `index.html` above to see $remove() and $save() in action
});




/*

function pushUserData( name, text) {
  firebase.database().ref('messages').push({
    name: name,
    text: text
  });
}

 var setMessage = function(data) {
    var val = data.val();
   // displayMessage(data.key, val.name, val.text, val.photoUrl, val.imageUrl);
   $("#list").append('<li>'+val.name+ ': '+val.text+'</li>');
   console.log(val.text);
 }

firebase.database().ref('messages').on('child_added', setMessage);


$(document).ready(function(){
    $('#fire').on('submit', function(e){
        e.preventDefault();
        //this.name 
        var name = $('#name').val();
        var pass = $('#pwd').val();
        pushUserData(name, pass);
        //console.log("Pushed");
        document.getElementById("fire").reset();

    });
});
*/
