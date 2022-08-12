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
