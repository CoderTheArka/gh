
if(localStorage.getItem('succes') != 'ok'){
    window.location = 'index.html';
    }


function generate(){
    if(document.getElementById('class').value != 'SELECT THE CLASS'){
        localStorage.setItem('HOMEWORK', document.getElementById('class').value);
        localStorage.setItem('succes' , 'ok');
        localStorage.setItem('where' , 'list');
        window.location = 'loading.html';

    }
}
function removedd(){
    localStorage.removeItem('succes')
   }
   window.onbeforeunload = removedd();