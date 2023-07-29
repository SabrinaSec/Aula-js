const buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function() {


const verificarItem = document.getElementById('numeroInput');

console.log(verificarItem);
   

    if (verificarItem.value < 8 ) {

        verificarItem.classList.add('button-red');

        verificarItem.classList.remove('button-green');
       

    } else {
       

        verificarItem.classList.add('button-green');

        verificarItem.classList.remove('button-red');
       

    }

});
