let salario = document.getElementById('salario');
let mostrarSalario = document.getElementById('mostrarSalario');
let mostrarDesconto = document.getElementById('mostrarDesconto');
let adicionar = document.getElementById('adicionar');
let diaTrabalhado = document.getElementById('diaTrabalhado')
let calcular= document.getElementById('calcular')
let total = document.getElementById('total');
let descontar = document.getElementById('descontar')

var salarioDia;
var salarioTrabalhado;
var salarioTotal;
var somaSalario;

mostrarSalario.addEventListener('click', function(){
    
    salarioDia =salario.value / 30;
    display1.childNodes[1].innerHTML = salarioDia.toFixed(2);
})

mostrarDesconto.addEventListener('click', function(){
    salarioDia = salario.value / 30;
    salarioTrabalhado = salarioDia * diaTrabalhado.value;
    display2.childNodes[1].innerHTML = salarioTrabalhado.toFixed(2);
})

calcular.addEventListener('click', function(){
    salarioDia = salario.value / 30;
    salarioTrabalhado = salarioDia * diaTrabalhado.value;
    somaSalario = parseFloat(salarioTrabalhado) + parseFloat(adicionar.value);

    salarioTotal = somaSalario - descontar.value;
    display3.childNodes[1].innerHTML = salarioTotal;
})