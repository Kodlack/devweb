window.onload = initPage;

//première requete
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
		afficheSelection ()
	}
}

//deuxieme requete
function afficheSelection (){
/*
	clearContent(document.getElementById("selection"));
	indice = document.getElementById("choix").selectedIndex ;
	nomVoilier = document.getElementById("choix").value ;
	document.getElementById("selection").appendChild ( document.createTextNode (indice + 1 + " - " + nomVoilier));
*/
	//clearContent(document.getElementById("selection"));
	xhrAffiche = new XMLHttpRequest();
	xhrAffiche.onreadystatechange = callback_Affiche;
	xhrAffiche.open("GET", "Voiliers.xml",true);
	xhrAffiche.send(null);
	
}

function clearContent(element){
	while(element.childNodes.length != 0)
		element.removeChild(element.childNodes[0]);
}

function callback_Affiche(){
	if(xhrAffiche.readyState == 4 && xhrAffiche.status == 200){
		clearContent(document.getElementById("selection"));
		indice = document.getElementById("choix").selectedIndex;
		elementVoilier = xhrAffiche.responseXML.getElementsByTagName("voilier")[indice];
		adresse = elementVoilier.getElementsByTagName("photo")[0].getAttribute("adresse");
		elementImage = document.createElement("img");
		elementImage.setAttribute("src", adresse );
		elementImage.setAttribute("alt", adresse );
		document.getElementById("selection").appendChild(elementImage);
		
		nomSkipper = elementVoilier.getElementsByTagName("nom_skipper")[0];
		elementTexte = document.createElement("h1");
		elementTexte.appendChild(nomSkipper);
		document.getElementById("selection").appendChild(elementTexte);
		
		texte = new String();
		fils = elementVoilier.getElementsByTagName("texte")[0].firstChild;
		while(fils!=null){
			if(fils.nodeType==3){
				texte += fils.nodeValue;
			}
			else{
				texte += fils.firstChild.nodeValue;
			}
			fils = fils.nextSibling;
		}
		elementTexte = document.createElement("h2");
		elementTexte.appendChild(document.createTextNode(texte));
		document.getElementById("selection").appendChild(elementTexte);
	}
}