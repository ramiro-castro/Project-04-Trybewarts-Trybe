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
	let text = document.getElementById('coment').value;
	document.getElementById('characters').innerText = 500 - text.length;
	
}