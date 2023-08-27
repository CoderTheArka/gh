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

function generate(){
    var name1 = document.getElementById('Username').value ;
    var Class = document.getElementById('class').value ;
   var homework =  document.getElementById('Message').value ;

   if (name1 != '' && Class != '' && homework != ''){
    firebase.database().ref(Class + "/" + "HOMEWORK" + '/').update({});
    firebase.database().ref(Class + "/" + "HOMEWORK" + '/').push({
    NAME : name1,
    Homework:homework
    });
    alert('HOMEWORK ASSIGNED');
   }else{
    alert('SOME STRINGS ARE MISSING');
   }
 
}



      function removedd(){
        localStorage.removeItem('succes');
       }
       window.onbeforeunload = removedd();