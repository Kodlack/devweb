<?php
	$xslDoc = new DOMDocument();
	$xslDoc->load($_GET["xsl"]);
	$xmlDoc = new DOMDocument();
	$xmlDoc->load($_GET["xml"]);
	$xmlDoc->xinclude();
	$proc = new XSLTProcessor();
	$proc->importStylesheet($xslDoc);
	$fichierHTML = fopen($_GET["html"], "w");
	fwrite($fichierHTML, $proc->transformToXML($xmlDoc));
	fclose($fichierHTML);
?>