<?php
	$dom = new DOMDocument;
	$dom->load("Class40.xml");
	if ($dom->validate()) {
		echo "Ce document est valide !";
	}
?>