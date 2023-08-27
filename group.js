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

 

      function send(){
        let currentDate = new Date();
        let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        var message = document.getElementById('message').value ;
        if (message != ''){
        firebase.database().ref(localStorage.getItem('group')).update({

        });
        firebase.database().ref(localStorage.getItem('group')).push({
            name : 'Koustav Sir',
            message : document.getElementById('message').value,
            time:time
        });
        message = '';
        }else{
            alert('String Is Not There.');
        }
      }
      function getData() { firebase.database().ref(localStorage.getItem('group')).on('value', function(snapshot) { document.getElementById("body").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        var firebase_message_id = childKey;
        var message_data1 = childData;
      
 
      //Start code
      console.log(firebase_message_id);
      console.log(message_data1);
  
      document.getElementById('chatspp').innerHTML = localStorage.getItem('group') + ' GROUP CHAT';
      name10 = message_data1['name'];
      message10 = message_data1['message'];
      time10 = message_data1['time'];
      console.log(time10);
      if (name10 == 'Koustav Sir'){
        create_message_sender = "<div class='outgoing'><div class='bubble'><p>"+ name10 +" : "+message10+"</p></div></div>";
        document.getElementById("body").innerHTML += create_message_sender;
      }else{
        create_message_reciver = "<div class='incoming'><div class='bubble'><p>"+ name10 +" : "+message10+"</p></div></div>";
        document.getElementById("body").innerHTML += create_message_reciver;
      }
      
      
      //End code
      } });  }); }
      
      
      getData();





      function removedd(){
        localStorage.removeItem('succes');
       }
       window.onbeforeunload = removedd();