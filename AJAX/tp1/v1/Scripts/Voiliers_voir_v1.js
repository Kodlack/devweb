window.onload = initPage;

function initPage() {

	document.getElementById("choix").onchange = afficheSelection;
	
	xhrPeupleChoix = new XMLHttpRequest();
	xhrPeupleChoix.onreadystatechange = callback_peuplerChoix;
	xhrPeupleChoix.open("GET", "Voiliers.xml",true);
	xhrPeupleChoix.send(null);
//	alert();
}

function callback_peuplerChoix(){
	if(xhrPeupleChoix.readyState == 4 && xhrPeupleChoix.status == 200){
		tabNoms = xhrPeupleChoix.responseXML.getElementsByTagName("nom");
		elementSelect = document.getElementById("choix");
		for (i=0;i<tabNoms.length;i++){
			nom = tabNoms[i].firstChild.nodeValue;
			elementOption = document.createElement("option");
			elementOption.appendChild (document.createTextNode(nom));
			elementSelect.appendChild(elementOption);
		}
	}
}


function afficheSelection ()	{
	clearContent(document.getElementById("selection"));
	indice = document.getElementById("choix").selectedIndex ;
	nomVoilier = document.getElementById("choix").value ;
	document.getElementById("selection").appendChild ( document.createTextNode (indice + 1 + " - " + nomVoilier));
}

function clearContent(element){
	while(element.childNodes.length != 0)
		element.removeChild(element.childNodes[0]);
}
