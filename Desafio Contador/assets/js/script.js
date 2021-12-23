let currentNumber = document.getElementById("currentNumber");
let contador = 0;

currentNumber.innerHTML = contador;


incrementar.addEventListener('click', function(){
    currentNumber.innerHTML = ++contador; 
 
});

decrementar.addEventListener('click', function(){
    currentNumber.innerHTML = --contador; 
});

