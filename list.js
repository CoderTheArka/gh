if(localStorage.getItem('succes') != 'ok'){
    window.location = 'index.html';
    }



    const firebaseConfig = {
        apiKey: "AIzaSyBCan0Z9YxG9IDmdNdoHghkCOmiD-XYma0",
        authDomain: "ideal-english-medium.firebaseapp.com",
        databaseURL: "https://ideal-english-medium-default-rtdb.firebaseio.com",
        projectId: "ideal-english-medium",
        storageBucket: "ideal-english-medium.appspot.com",
        messagingSenderId: "555143234517",
        appId: "1:555143234517:web:81104420d75e352a4c335c"
      };

      firebase.initializeApp(firebaseConfig);
      
      function getData() { firebase.database().ref(localStorage.getItem('HOMEWORK') + "/" + "HOMEWORK" + '/').on('value', function(snapshot) { document.getElementById("ss").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        var firebase_message_id = childKey;
        var message_data1 = childData;
      
 
      //Start code
      console.log(firebase_message_id);
      console.log(message_data1);
  
      name10 = message_data1['NAME'];
      message10 = message_data1['Homework'];

      Create_Info = "<div class='align_homework'><div class='name'>"+name10+"</div><br><div class='homework'>"+message10+"</div><br><button class='complete' id='"+firebase_message_id+"' onclick='mark(this.id)'>MARK AS COMPLETE</button></div><hr>";
    document.getElementById('ss').innerHTML += Create_Info;
      
      
      //End code
      } });  }); }
      getData();
function mark(fff){
  firebase.database().ref(localStorage.getItem('HOMEWORK') + '/' + 'HOMEWORK' + '/').child(fff).remove();
  alert('ASSIGNED HOMEWORK REMOVED');
}


    function removedd(){
        localStorage.removeItem('succes')
       }
       window.onbeforeunload = removedd();