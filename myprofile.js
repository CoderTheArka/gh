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
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      function get(){
        var get_all = firebase.database().ref('USERS/' + 'IDEAL ENGLISH MEDIUM/');
        get_all.once('value' , function(snapshot){
        var data = snapshot.val();
        var FIRSTNAME = data.FIRSTNAME;
        var SECONDNAME = data.SECONDNAME;
        var EMAIL = data.EMAIL;
        var PASSWORD = data.PASSWORD;
        var ADDRESS = data.ADDRESS;
        var PHONE = data.PHONE;

          document.getElementById('first').value = FIRSTNAME;
          document.getElementById('second').value = SECONDNAME;
          document.getElementById('email').value = EMAIL;
          document.getElementById('password').value = PASSWORD;
          document.getElementById('address').value = ADDRESS;
          document.getElementById('phone').value = PHONE;
        });
      }
      get();
      function update(){
        var email = document.getElementById('email').value ;
       var password =  document.getElementById('password').value;
        var address =document.getElementById('address').value;
      var phone =  document.getElementById('phone').value ;


      if (email != '' && password != '' && address != '' && phone != '' && phone > 10){
        firebase.database().ref('USERS/' + 'IDEAL ENGLISH MEDIUM/').update({
            EMAIL:email,
            PASSWORD:password,
            ADDRESS:address,
            PHONE:phone
            });
            document.getElementById('succes').style.display = 'block';
            document.getElementById('error').style.display = 'none';
            
      }else{
        document.getElementById('error').style.display = 'block';
        document.getElementById('succes').style.display = 'none';
      }

      }
    function removedd(){
        localStorage.removeItem('succes')
       }
       window.onbeforeunload = removedd();

