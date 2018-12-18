<?php

$fname = "Voiliers.xml";

$classe = $_POST["classe"];
$annee = $_POST["construction"];
$nom = $_POST["nom"];
$architecte = $_POST["architecte"];
$longueur = $_POST["longueur"];
$adresse = $_POST["photo"];
$nom_skipper = $_POST["nom_skipper"];
$desc = $_POST["description"];
 
if (!file_exists("voiliers.xml")) {
// construction de la racine quand le fichier n’existe pas
// le fichier XML construit possède alors la ligne de prologue et la racine
	$racine = new SimpleXMLElement ("<voiliers></voiliers>");
}
else {
// lecture de la racine comme un element xml
	$racine = simplexml_load_file ($fname);
}

$voilier = $racine->addChild("voilier");
$voilier->addAttribute("classe", $classe);
$voilier->addAttribute("annee", $annee);
$voilier->addChild ("nom", $nom);
$voilier->addChild("architecte", $architecte);
$voilier->addChild("longueur", $longueur);

$photo = $voilier->addChild("photo");
$photo->addAttribute("adresse", $adresse);

$skipper = $voilier->addChild("skipper");
$skipper->addChild("nom_skipper", $nom_skipper);
$skipper->addChild("description", $desc);

// suite des données sur le voilier...
$nfile = fopen($fname, "w");
fwrite ($nfile , $racine->asXML());
fclose ($nfile);

?>