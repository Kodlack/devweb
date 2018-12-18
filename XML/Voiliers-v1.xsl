<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="utf-8" method="html" version="5.0"  indent="yes"/>
<xsl:template match="voiliers">
<html lang="fr">
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="css/route_du_rhum.css" />
<title>Route du Rhum - 2018</title>
</head>
<body>
<h1 align="left">Route du Rhum</h1>
<xsl:apply-templates select="voilier"/>
</body>
</html>
</xsl:template>

<xsl:template match="voilier">
<h2>
<xsl:number count="voilier" format="(1) "/>
<xsl:value-of select="nom"/> - <xsl:value-of select="@classe"/>
</h2>
<p> <img src="{photo/@adresse}" alt="Photo de {nom}" height="150"/></p>
<h3>
<p> Année de mise à l'eau :  <xsl:value-of select="@annee"/> </p>
<p> Architecte : <xsl:value-of select="architecte"/> </p>
<p> Longueur : <xsl:value-of select="longueur"/> </p>
<p> Skipper : <xsl:value-of select="skipper/nom_skipper"/> </p>
<p>  <xsl:apply-templates select="skipper/texte"/> </p>
</h3>
</xsl:template>

<xsl:template match="texte/nomgeo">
<a href="http://fr.wikipedia.org/wiki/{.}">
<xsl:value-of select="."/>
</a>
</xsl:template>
</xsl:stylesheet>