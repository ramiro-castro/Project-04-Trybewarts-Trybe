//  var email = document.getElementById('email').value;

function login(){
	// alert(document.getElementById('email').value);
	// alert(email);
	if(document.getElementById('email').value=='tryber@teste.com' && document.getElementById('senha').value=="123456") { // tentei armazenar em uma variavel mas nao consegui
		alert("Olá, Tryber!");
	}else{
		alert("Email ou senha inválidos.");
	}	
}

// https://medium.com/walternascimentobarroso-pt/contador-de-caracteres-com-html-e-js-648ee612d7be
function countText() {
	let text = document.getElementById('textarea').value;
	document.getElementById('counter').innerText = 500 - text.length;
	
}

//https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
//desabilita o botão no início
document.getElementById("submit-btn").disabled = true;

//https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado
var checa = document.getElementsByName("toggle");
var numElementos = checa.length;
var bt = document.getElementById("submit-btn");

for(var x=0; x<numElementos; x++){
	checa[x].onclick = function(){
	   // "input[name='toggle']:checked" conta os checkbox checados
	   var cont = document.querySelectorAll("input[name='toggle']:checked").length;
	   // ternário que verifica se há algum checado.
	   // se não há, retorna 0 (false), logo desabilita o botão
	   bt.disabled = cont ? false : true;
	}
 }

