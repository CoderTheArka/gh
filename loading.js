if(localStorage.getItem('succes') != 'ok'){
    window.location = 'index.html';
    }


    setTimeout(function(){
        localStorage.setItem('succes' , 'ok');
        var name = localStorage.getItem('where');
        localStorage.removeItem('where');
        window.location = name+".html"
    },3000)

    function removedd(){
        localStorage.removeItem('succes');
       }
       window.onbeforeunload = removedd();