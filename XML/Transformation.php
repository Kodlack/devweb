<?php
	$xslDoc = new DOMDocument();
	$xslDoc->load("Voiliers-v2.xsl");
	
	$xmlDoc = new DOMDocument();
	$xmlDoc->load("Voiliers.xml");
	
	$xmlDoc->xinclude();
	$proc = new XSLTProcessor();
	
	$proc->importStylesheet($xslDoc);
	$fichierHTML = fopen("Voiliers.html", "w");
	
	fwrite($fichierHTML, $proc->transformToXML($xmlDoc));
	fclose($fichierHTML);
?>