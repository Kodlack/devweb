window.onload = event_Handler;

function event_Handler(){
	document.getElementById("enregistrer").onclick = requeteEnregistrement;
}

function requeteEnregistrement(){
	xhrEnregistre = new XMLHttpRequest();
	xhrEnregistre.onreadystatechange = callback_requeteEnregistrement;
	xhrEnregistre.open("POST", "Voiliers_enregistrer.php",true);
	xhrEnregistre.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
	elementForm = document.getElementById("enregistrement").elements;
	chaine = new String();
	for(i = 0 ; i < elementForm.length; i++){
		if(elementForm[i].value !=null){
			chaine += elementForm[i].name + "=" + elementForm[i].value + "&";
		}
	}
	alert(elementForm);
	console.log("ah");
	xhrEnregistre.send(chaine);
}

function callback_requeteEnregistrement(){
	if(xhrEnregistre.readyState == 4 && xhrEnregistre.status == 200){
		//console.log(xhrEnregistre.responseText);
	}
}