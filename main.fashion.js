document.addEventListener('DOMContentLoaded', () =>{

    document.querySelector('#open').onclick = function() {
        document.querySelector('ul').style.right = '0';
    };

    document.querySelector('#close').onclick = function() {
        document.querySelector('ul').style.right = '-180px';
    };

});