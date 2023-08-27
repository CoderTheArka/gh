if(localStorage.getItem('succes') != 'ok'){
    window.location = 'index.html';
    }

function go(){
    if (document.getElementById('class').value != 'SELECT THE CLASS'){
        localStorage.setItem('succes', 'ok');
     localStorage.setItem('group' , document.getElementById('class').value);
     localStorage.setItem('where' , 'group');
     window.location = 'loading.html'
    }else{
        alert('Select A Class');
    }
}
function removedd(){
    localStorage.removeItem('succes')
   }
   window.onbeforeunload = removedd();